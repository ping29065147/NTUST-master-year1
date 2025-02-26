import { isValidateISBN, ProcessState } from '@/utils';
import type { IResourceOperator, IStorage } from '@/core/types';
import fs from 'fs-extra';

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

export type VaildateParams = { collect: string } & {
    collect: string;
    books: Book[];
} & { collect: string; bookId: string; bookName: string } & {
    collect: string;
    bookIds: string[];
    bookNames: string[];
} & { collect: string; fileName: string };

export class CollectOperator implements IResourceOperator<Collect> {
    constructor(public resources: IStorage<Collect>) {}

    isValidateCmd(command: string, params: VaildateParams): ProcessState {
        if (command === 'drop' && Object.hasOwn(params, 'collect') && params.collect === undefined) throw ProcessState.ERR_ARGS_COLLE;

        if (command !== 'drop' && command !== 'import' && !params.collect) throw ProcessState.ERR_ARGS_COLLE;

        switch (command) {
            case 'drop':
                this.drop(params.collect);
                break;
            case 'make':
                this.make(params.collect);
                break;
            case 'insert':
                if (!params.books || params.books.length === 0) {
                    throw ProcessState.ERR_ARGS_BOOK;
                }
                this.insert(params.collect, params.books);
                break;
            case 'update':
                if (!params.bookId) {
                    throw ProcessState.ERR_ARGS_ID;
                } else if (!params.bookName) {
                    throw ProcessState.ERR_ARGS_BOOK;
                }
                this.update(params.collect, params.bookId, params.bookName);
                break;
            case 'delete':
                this.delete(params.collect, {
                    ids: params.bookIds ?? [],
                    names: params.bookNames ?? [],
                });
                break;
            case 'import':
                if (!params.fileName) throw ProcessState.ERR_ARGS_FNAME;
                this.import(params.fileName);
                break;
            default:
                throw ProcessState.ERR_UNKNOWN_CMD;
        }
        return ProcessState.SUCCESS;
    }

    drop(collect?: string) {
        /* cmd without `-c` argument */
        if (!collect) {
            const deleted = this.resources.size();
            this.resources.clear();
            return deleted;
        }

        const removed = this.resources.removeItem(collect);
        if (!removed) throw ProcessState.ERR_COLLE;

        return 1;
    }

    make(collect: string) {
        const isDup = this.resources.has(collect);
        if (isDup) throw ProcessState.ERR_COLLE_DUPL;

        this.resources.setItem(collect, { name: collect, books: [] });
        return true;
    }

    insert(name: string, willInsert: Book[]) {
        const collect = this.resources.getItem(name);
        if (!collect) throw ProcessState.ERR_COLLE;

        const errorBag: ProcessState[] = [];
        const currentBooks = collect.books;
        const existIds = currentBooks.map((book) => book.bookId);
        const existIsbn = currentBooks.map((book) => book.isbn);

        willInsert.forEach(({ bookId, isbn }) => {
            if (existIds.includes(bookId)) errorBag.push(ProcessState.ERR_ID_DUPL);
            if (existIsbn.includes(isbn)) errorBag.push(ProcessState.ERR_ISBN_DUPL);
            if (!/^[0-9]+$/.test(bookId)) errorBag.push(ProcessState.ERR_ID);
            if (!isValidateISBN(isbn)) errorBag.push(ProcessState.ERR_ISBN);
        });
        if (errorBag.length) throw Math.max(...errorBag);

        const books = [...currentBooks, ...willInsert];
        this.resources.setItem(name, { name, books });
        return willInsert.length;
    }

    update(name: string, id: string, bookName: string) {
        const collect = this.resources.getItem(name);
        if (!collect) throw ProcessState.ERR_COLLE;

        const { books } = collect;
        const bookId = books.findIndex((book) => book.bookId === id);
        if (bookId === -1) throw ProcessState.ERR_ID;

        books[bookId].bookName = bookName;
        this.resources.setItem(name, { name, books });
        return true;
    }

    delete(name: string, filter: BookFilter) {
        const collect = this.resources.getItem(name);
        if (!collect) throw ProcessState.ERR_COLLE;

        const { books } = collect;
        const { ids, names } = filter;
        const retained = books
            .filter((e) => {
                if (!ids) return true;
                return !ids.includes(e.bookId);
            })
            .filter((e) => {
                if (!names) return true;
                return !names.includes(e.bookName);
            });

        this.resources.setItem(name, { name, books: retained });
        return books.length - retained.length;
    }

    import(fileName: string, merge = false): void {
        if (!fs.existsSync(fileName)) {
            throw ProcessState.ERR_FNAME;
        }

        const json = fs.readJsonSync(fileName);
        for (const [name, { books }] of Object.entries<Collect>(json)) {
            const isDup = this.resources.has(name);
            if (!merge) {
                if (isDup) throw ProcessState.ERR_COLLE_DUPL;
                this.make(name);
            } else if (merge && !isDup) {
                throw ProcessState.ERR_COLLE;
            }
            this.insert(name, books);
        }
    }
}
