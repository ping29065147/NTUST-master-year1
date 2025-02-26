import { w3cwebsocket } from 'websocket';
import { exit } from 'process';
import * as CryptoJS from 'crypto-js';
import { pack } from '@/utils/transfer';
import { randomUUID } from 'crypto';
import { EventEmitter } from 'stream';
import debug from 'debug';
import { IWebSocketClient } from './types';

const dMsg = debug('client');

interface EventData<T = any> {
    requestToken?: string;
    eventType: string;
    result: T;
}

type Fn = (...args: any[]) => any;

export class WebSocketClient extends w3cwebsocket implements IWebSocketClient {
    public evCount = new Map<string, number>();
    public evPool: EventEmitter;
    public algo: 'aes' | 'hmac';
    public secret: string = '';
    public timeoutMilli: number = 3000;
    public hstSize: number = 30;
    private hstData: string[] = []; // history

    constructor(url: string, algo: 'aes' | 'hmac') {
        super(url);
        this.evPool = new EventEmitter();
        this.algo = algo;

        this.onopen = () => {
            dMsg('CLIENT CONNECTED!');
            // 發送希望使用的加密函式
            this.send(this.algo);
        };

        this.onclose = () => {
            dMsg('BYE BYE');
            exit(0);
        };

        this.initial();
    }

    dispatch(eventType: string, payload?: any): void {
        this.evPool.emit(eventType, payload);
    }

    on(eventType: string, listener: Fn): number {
        // on 會在事件池中監聽 eventType 事件，並紀錄事件池中有多少個 eventType 事件
        const cnt = this.evCount.get(eventType)! + 1;

        this.evCount.set(eventType, cnt);
        this.evPool.on(eventType, listener);
    
        return cnt;
    }

    once(eventType: string, listener: Fn): number {
        // once 註冊的事件，在調用一次後需自動從事件池移除
        this.evCount.set(eventType, 1);
        this.evPool.once(eventType, (...args: any[]) => {
            this.evPool.off(eventType, listener);
            this.evCount.delete(eventType);
            listener(...args);
        });

        return 1;
    }

    off(eventType: string): boolean {
        // off 把所有的 eventType事件移除
        const cnt = this.evCount.get(eventType)!;

        this.evCount.delete(eventType);
        this.evPool.removeAllListeners(eventType);       

        return cnt > 0;
    }

    async ready() {
        // 等待伺服器首次的回傳值
        // 封裝為 Promise ，使得 async/await 可以順利解析
        return new Promise<string>((resolve) => {
            if (this.secret !== '') resolve(this.secret);               
            else
            {
                this.onmessage = ({ data }) => {
                    this.secret = data.toString();
                    dMsg("secret: ", this.secret);
                    resolve(this.secret);
                };
            }
        });
    }

    async initial() {
        this.secret = await this.ready();

        this.onmessage = ({ data }) => {
            dMsg("Receive Raw%o", data);
            // 解析伺服器傳送的資訊 
            try {
                let eventData: EventData;

                // 判斷 data 的型態，分別進行處理
                if (typeof data === 'string') eventData = JSON.parse(data);
                else if (Buffer.isBuffer(data)) eventData = JSON.parse(data.toString());
                else if (data instanceof ArrayBuffer)
                {
                    const decoder = new TextDecoder();
                    eventData = JSON.parse(decoder.decode(data));
                }
                else throw new Error('Not a legal data type');

                // 若 requestToken 為字串，且不是空字串 ""，嘗試尋找requestToken對應的事件，並把 result 作為 payload 送入
                // 若 requestToken 不存在，或是為空字串，則調用 eventType 對應的事件，並把 result 作為 payload 送入
                if (eventData.requestToken !== undefined && eventData.requestToken !== '')
                    this.dispatch(eventData.requestToken, eventData.result)
                else 
                    this.dispatch(eventData.eventType, eventData.result)               
            }
            catch {
                dMsg("Error: Not a legal json format");
            }
        };
    }

    async sendout(payload: any, requestToken: string = '$NONE') {
        // 把資料送至伺服器
        const Data = { 
            'requestToken': requestToken,
            'signature': '',
            'payload': payload,
        };

        // 根據 algo 生成 signature
        if (this.algo === 'hmac')
            Data.signature = CryptoJS.HmacSHA1(requestToken, this.secret).toString();
        else if (this.algo === 'aes')
            Data.signature = CryptoJS.AES.encrypt(requestToken, this.secret).toString();

        this.send(JSON.stringify(Data));
    }

    async request(eventType: string, params?: any): Promise<any> {
        const requestToken = `request::${randomUUID()}`;
        // 通過生成一個 requestToken，通過把 requestToken 送入事件表

        return new Promise((resolve) => {
            dMsg("RESOLVE");
            
            const timer = setTimeout(() => {
                this.off(requestToken);
                resolve('TIMEOUT');
            }, this.timeoutMilli);

            this.once(requestToken, (ret) => {
                clearTimeout(timer);
                this.off(requestToken);

                const { command, message } = ret;
                this.hstData.push(`[${message}] ${command}`);

                resolve(ret);
            });

            this.sendout({eventType, params}, requestToken);
        });
    }

    history() {
        // TODO
        return this.hstData.slice(-this.hstSize);
    }
}
