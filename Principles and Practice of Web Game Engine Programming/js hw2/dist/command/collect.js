"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectOperator = void 0;
const utils_1 = require("@/utils");
const fs_extra_1 = __importDefault(require("fs-extra"));
class CollectOperator {
    resources;
    constructor(resources) {
        this.resources = resources;
    }
    isValidateCmd(command, params) {
        if (command === 'drop' && Object.hasOwn(params, 'collect') && params.collect === undefined)
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        if (command !== 'drop' && command !== 'import' && !params.collect)
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        switch (command) {
            case 'drop':
                this.drop(params.collect);
                break;
            case 'make':
                this.make(params.collect);
                break;
            case 'insert':
                if (!params.books || params.books.length === 0) {
                    throw utils_1.ProcessState.ERR_ARGS_BOOK;
                }
                this.insert(params.collect, params.books);
                break;
            case 'update':
                if (!params.bookId) {
                    throw utils_1.ProcessState.ERR_ARGS_ID;
                }
                else if (!params.bookName) {
                    throw utils_1.ProcessState.ERR_ARGS_BOOK;
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
                if (!params.fileName)
                    throw utils_1.ProcessState.ERR_ARGS_FNAME;
                this.import(params.fileName);
                break;
            default:
                throw utils_1.ProcessState.ERR_UNKNOWN_CMD;
        }
        return utils_1.ProcessState.SUCCESS;
    }
    drop(collect) {
        /* cmd without `-c` argument */
        if (!collect) {
            const deleted = this.resources.size();
            this.resources.clear();
            return deleted;
        }
        const removed = this.resources.removeItem(collect);
        if (!removed)
            throw utils_1.ProcessState.ERR_COLLE;
        return 1;
    }
    make(collect) {
        const isDup = this.resources.has(collect);
        if (isDup)
            throw utils_1.ProcessState.ERR_COLLE_DUPL;
        this.resources.setItem(collect, { name: collect, books: [] });
        return true;
    }
    insert(name, willInsert) {
        const collect = this.resources.getItem(name);
        if (!collect)
            throw utils_1.ProcessState.ERR_COLLE;
        const errorBag = [];
        const currentBooks = collect.books;
        const existIds = currentBooks.map((book) => book.bookId);
        const existIsbn = currentBooks.map((book) => book.isbn);
        willInsert.forEach(({ bookId, isbn }) => {
            if (existIds.includes(bookId))
                errorBag.push(utils_1.ProcessState.ERR_ID_DUPL);
            if (existIsbn.includes(isbn))
                errorBag.push(utils_1.ProcessState.ERR_ISBN_DUPL);
            if (!/^[0-9]+$/.test(bookId))
                errorBag.push(utils_1.ProcessState.ERR_ID);
            if (!(0, utils_1.isValidateISBN)(isbn))
                errorBag.push(utils_1.ProcessState.ERR_ISBN);
        });
        if (errorBag.length)
            throw Math.max(...errorBag);
        const books = [...currentBooks, ...willInsert];
        this.resources.setItem(name, { name, books });
        return willInsert.length;
    }
    update(name, id, bookName) {
        const collect = this.resources.getItem(name);
        if (!collect)
            throw utils_1.ProcessState.ERR_COLLE;
        const { books } = collect;
        const bookId = books.findIndex((book) => book.bookId === id);
        if (bookId === -1)
            throw utils_1.ProcessState.ERR_ID;
        books[bookId].bookName = bookName;
        this.resources.setItem(name, { name, books });
        return true;
    }
    delete(name, filter) {
        const collect = this.resources.getItem(name);
        if (!collect)
            throw utils_1.ProcessState.ERR_COLLE;
        const { books } = collect;
        const { ids, names } = filter;
        const retained = books
            .filter((e) => {
            if (!ids)
                return true;
            return !ids.includes(e.bookId);
        })
            .filter((e) => {
            if (!names)
                return true;
            return !names.includes(e.bookName);
        });
        this.resources.setItem(name, { name, books: retained });
        return books.length - retained.length;
    }
    import(fileName, merge = false) {
        if (!fs_extra_1.default.existsSync(fileName)) {
            throw utils_1.ProcessState.ERR_FNAME;
        }
        const json = fs_extra_1.default.readJsonSync(fileName);
        for (const [name, { books }] of Object.entries(json)) {
            const isDup = this.resources.has(name);
            if (!merge) {
                if (isDup)
                    throw utils_1.ProcessState.ERR_COLLE_DUPL;
                this.make(name);
            }
            else if (merge && !isDup) {
                throw utils_1.ProcessState.ERR_COLLE;
            }
            this.insert(name, books);
        }
    }
}
exports.CollectOperator = CollectOperator;
//# sourceMappingURL=collect.js.map