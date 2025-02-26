import { ParseResult } from '@/core/types';
import EventEmitter from 'node:events';

export interface IWebSocketClient {
    evCount: Map<string, number>;
    evPool: EventEmitter;
    algo: 'aes' | 'hmac';
    secret: string;
    timeoutMilli: number;
    hstSize: number;

    dispatch(eventType: string, payload?: any): void;
    on(eventType: string, listener: (...args: any[]) => any): number;
    once(eventType: string, listener: (...args: any[]) => any): number;
    off(eventType: string): boolean;
    history(): string[];
    ready(): Promise<string>;
    initial(): Promise<void>;
    sendout(payload: any, requestToken?: string): any;
    request<T = any>(eventType: string, params?: any): Promise<T>;
}
