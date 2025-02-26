import { IStorage } from '@/core/types';
export declare class JSONStorage<T = any> implements IStorage {
    savePath: string;
    draft: Record<string, T>;
    constructor(savePath?: string);
    has(key: string): boolean;
    size(): number;
    getItem(key: string): T;
    setItem(key: string, value: T): T;
    removeItem(key: string): boolean;
    clear(): boolean;
}
