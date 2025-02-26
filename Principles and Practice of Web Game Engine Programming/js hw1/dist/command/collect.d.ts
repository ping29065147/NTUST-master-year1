import { IResourceOperator } from "../core/types";
import { ProcessState } from "../utils";
export declare class CollectOperator<T = any> implements IResourceOperator<T> {
    resources: any;
    constructor(storage: any);
    isValidateCmd(...args: any[]): ProcessState;
    drop(...args: any[]): number;
    make(...args: any[]): boolean;
    insert(...args: any[]): number;
    update(...args: any[]): boolean;
    delete(...args: any[]): number;
    import(...args: any[]): void;
    sync(): void;
}
export declare const Collect: CollectOperator<any>;
