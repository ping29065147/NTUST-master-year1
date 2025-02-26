import { ProcessState } from '@/utils';
import type { IResourceOperator, IStorage } from '@/core/types';
export interface Book {
    bookId: string;
    bookName: string;
    isbn: string;
}
export interface BookFilter {
    ids?: string[];
    names?: string[];
}
export interface Collect {
    name: string;
    books: Book[];
}
export type VaildateParams = {
    collect: string;
} & {
    collect: string;
    books: Book[];
} & {
    collect: string;
    bookId: string;
    bookName: string;
} & {
    collect: string;
    bookIds: string[];
    bookNames: string[];
} & {
    collect: string;
    fileName: string;
};
export declare class CollectOperator implements IResourceOperator<Collect> {
    resources: IStorage<Collect>;
    constructor(resources: IStorage<Collect>);
    isValidateCmd(command: string, params: VaildateParams): ProcessState;
    drop(collect?: string): number;
    make(collect: string): boolean;
    insert(name: string, willInsert: Book[]): number;
    update(name: string, id: string, bookName: string): boolean;
    delete(name: string, filter: BookFilter): number;
    import(fileName: string, merge?: boolean): void;
}
