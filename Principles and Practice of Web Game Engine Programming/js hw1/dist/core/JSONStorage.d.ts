import { IStorage } from "../core/types";
export declare class JSONStorage<T = any> implements IStorage<T> {
    private path;
    constructor(path: any);
    size(): number;
    getItem(key: string): T | undefined;
    setItem(key: string, value: T): T;
    removeItem(key: string): boolean;
    clear(): boolean;
}
