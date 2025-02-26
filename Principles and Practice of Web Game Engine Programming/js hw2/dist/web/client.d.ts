/// <reference types="node" />
/// <reference types="node" />
import { w3cwebsocket } from 'websocket';
import { EventEmitter } from 'stream';
import { IWebSocketClient } from './types';
type Fn = (...args: any[]) => any;
export declare class WebSocketClient extends w3cwebsocket implements IWebSocketClient {
    evCount: Map<string, number>;
    evPool: EventEmitter;
    algo: 'aes' | 'hmac';
    secret: string;
    timeoutMilli: number;
    hstSize: number;
    private hstData;
    constructor(url: string, algo: 'aes' | 'hmac');
    dispatch(eventType: string, payload?: any): void;
    on(eventType: string, listener: Fn): number;
    once(eventType: string, listener: Fn): number;
    off(eventType: string): boolean;
    ready(): Promise<string>;
    initial(): Promise<void>;
    sendout(payload: any, requestToken?: string): Promise<void>;
    request(eventType: string, params?: any): Promise<any>;
    history(): string[];
}
export {};
