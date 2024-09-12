"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = void 0;
const websocket_1 = require("websocket");
const process_1 = require("process");
const CryptoJS = __importStar(require("crypto-js"));
const crypto_1 = require("crypto");
const stream_1 = require("stream");
const debug_1 = __importDefault(require("debug"));
const dMsg = (0, debug_1.default)('client');
class WebSocketClient extends websocket_1.w3cwebsocket {
    evCount = new Map();
    evPool;
    algo;
    secret = '';
    timeoutMilli = 3000;
    hstSize = 30;
    hstData = []; // history
    constructor(url, algo) {
        super(url);
        this.evPool = new stream_1.EventEmitter();
        this.algo = algo;
        this.onopen = () => {
            dMsg('CLIENT CONNECTED!');
            // 發送希望使用的加密函式
            this.send(this.algo);
        };
        this.onclose = () => {
            dMsg('BYE BYE');
            (0, process_1.exit)(0);
        };
        this.initial();
    }
    dispatch(eventType, payload) {
        this.evPool.emit(eventType, payload);
    }
    on(eventType, listener) {
        // on 會在事件池中監聽 eventType 事件，並紀錄事件池中有多少個 eventType 事件
        const cnt = this.evCount.get(eventType) + 1;
        this.evCount.set(eventType, cnt);
        this.evPool.on(eventType, listener);
        return cnt;
    }
    once(eventType, listener) {
        // once 註冊的事件，在調用一次後需自動從事件池移除
        this.evCount.set(eventType, 1);
        this.evPool.once(eventType, (...args) => {
            this.evPool.off(eventType, listener);
            this.evCount.delete(eventType);
            listener(...args);
        });
        return 1;
    }
    off(eventType) {
        // off 把所有的 eventType事件移除
        const cnt = this.evCount.get(eventType);
        this.evCount.delete(eventType);
        this.evPool.removeAllListeners(eventType);
        return cnt > 0;
    }
    async ready() {
        // 等待伺服器首次的回傳值
        // 封裝為 Promise ，使得 async/await 可以順利解析
        return new Promise((resolve) => {
            if (this.secret !== '')
                resolve(this.secret);
            else {
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
                let eventData;
                // 判斷 data 的型態，分別進行處理
                if (typeof data === 'string')
                    eventData = JSON.parse(data);
                else if (Buffer.isBuffer(data))
                    eventData = JSON.parse(data.toString());
                else if (data instanceof ArrayBuffer) {
                    const decoder = new TextDecoder();
                    eventData = JSON.parse(decoder.decode(data));
                }
                else
                    throw new Error('Not a legal data type');
                // 若 requestToken 為字串，且不是空字串 ""，嘗試尋找requestToken對應的事件，並把 result 作為 payload 送入
                // 若 requestToken 不存在，或是為空字串，則調用 eventType 對應的事件，並把 result 作為 payload 送入
                if (eventData.requestToken !== undefined && eventData.requestToken !== '')
                    this.dispatch(eventData.requestToken, eventData.result);
                else
                    this.dispatch(eventData.eventType, eventData.result);
            }
            catch {
                dMsg("Error: Not a legal json format");
            }
        };
    }
    async sendout(payload, requestToken = '$NONE') {
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
    async request(eventType, params) {
        const requestToken = `request::${(0, crypto_1.randomUUID)()}`;
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
            this.sendout({ eventType, params }, requestToken);
        });
    }
    history() {
        // TODO
        return this.hstData.slice(-this.hstSize);
    }
}
exports.WebSocketClient = WebSocketClient;
//# sourceMappingURL=client.js.map