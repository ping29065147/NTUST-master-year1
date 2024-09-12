"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collect = exports.CollectOperator = void 0;
const utils_1 = require("../utils");
const JSONStorage_1 = require("../core/JSONStorage");
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
const isValidateISBN_1 = require("../utils/isValidateISBN");
//const savePath = join(__dirname, "test");
const savePath = (0, path_1.join)(process.cwd(), "spec/test");
const storageFile = (0, path_1.join)(savePath, "storage.json");
function isNumber(value) {
    for (let c of value)
        if (c < '0' || c > '9')
            return false;
    return true;
}
/* Homework */
class CollectOperator {
    resources;
    constructor(storage) {
        this.resources = storage;
    }
    isValidateCmd(...args) {
        //console.log("command: " + args[0]);
        if (args[0] == "drop")
            this.drop(args[1]);
        else if (args[0] == "make")
            this.make(args[1]);
        else if (args[0] == "insert")
            this.insert(args[1]);
        else if (args[0] == "update")
            this.update(args[1]);
        else if (args[0] == "delete")
            this.delete(args[1]);
        else if (args[0] == "import")
            this.import(args[1]);
        return utils_1.ProcessState.SUCCESS;
    }
    drop(...args) {
        let obj = args[0]['collect'];
        //console.log(Object.keys(args[0]).length + args[0]);
        if (Object.keys(args[0]).length == 0)
            this.resources.clear();
        else if (obj == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_COLLE]);
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        }
        else
            this.resources.removeItem(obj);
        return 0;
    }
    make(...args) {
        let obj = args[0]['collect'];
        if (obj == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_COLLE]);
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        }
        let jsonData;
        let ret = {};
        try {
            jsonData = fs_extra_1.default.readJsonSync(storageFile);
        }
        catch (e) {
            ret[obj] = { "name": obj, "books": [] };
            var json = JSON.stringify(ret);
            fs_extra_1.default.writeFileSync(storageFile, json);
            console.log(utils_1.CodeMessage[utils_1.ProcessState.SUCCESS]);
            throw utils_1.ProcessState.SUCCESS;
        }
        for (const key of Object.keys(jsonData)) {
            if (key == obj) {
                console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE_DUPL]);
                throw utils_1.ProcessState.ERR_COLLE_DUPL;
            }
        }
        ret = jsonData;
        ret[obj] = { "name": obj, "books": [] };
        var json = JSON.stringify(ret);
        fs_extra_1.default.writeFileSync(storageFile, json);
        console.log(utils_1.CodeMessage[utils_1.ProcessState.SUCCESS]);
        throw utils_1.ProcessState.SUCCESS;
    }
    // lb insert collect -c t1 -d 010,book1,9789866052675 -d 020,book2,9789864762859 -d 030,book3,9789865024864
    insert(...args) {
        let obj = args[0]['collect'];
        let book = args[0]['books'];
        //console.log(obj);
        //console.log(book.length);
        if (obj == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_COLLE]);
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        }
        else if (book == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_BOOK]);
            throw utils_1.ProcessState.ERR_ARGS_BOOK;
        }
        else {
            let jsonData;
            try {
                jsonData = fs_extra_1.default.readJsonSync(storageFile);
            }
            catch (e) {
                console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]);
                throw utils_1.ProcessState.ERR_COLLE;
            }
            for (const key of Object.keys(jsonData)) {
                if (key == obj) {
                    let n = Object.keys(jsonData[key]["books"]).length;
                    let skip = false;
                    let cnt = 0;
                    if (n == 0)
                        skip = true; // 沒有任何書
                    /*{
                        jsonData[key]["books"] = book;
                        var json = JSON.stringify(jsonData);
                        fs.writeFileSync(storageFile, json);

                        console.log(CodeMessage[ProcessState.SUCCESS]);
                        throw ProcessState.SUCCESS;
                    }*/
                    for (let b = 0; b < book.length; ++b) {
                        if (!skip) {
                            for (let i = 0; i < n; ++i) {
                                if (jsonData[key]["books"][i]["bookId"] == book[b]["bookId"]) // id 已經存在
                                 {
                                    console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ID_DUPL]);
                                    throw utils_1.ProcessState.ERR_ID_DUPL;
                                }
                                else if (jsonData[key]["books"][i]["isbn"] == book[b]["isbn"]) // isbn 已經存在
                                 {
                                    console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ISBN_DUPL]);
                                    throw utils_1.ProcessState.ERR_ISBN_DUPL;
                                }
                            }
                        }
                        if (!isNumber(book[b]["bookId"])) // id 必須為 0-9 組成的任意字串
                         {
                            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ID]);
                            throw utils_1.ProcessState.ERR_ID;
                        }
                        else if (!(0, isValidateISBN_1.isValidateISBN)(book[b]["isbn"])) // isbn 不符合格式
                         {
                            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ISBN]);
                            throw utils_1.ProcessState.ERR_ISBN;
                        }
                        jsonData[key]["books"].push(book[b]);
                        var json = JSON.stringify(jsonData);
                        fs_extra_1.default.writeFileSync(storageFile, json);
                        ++cnt;
                    }
                    console.log(cnt + " INSERTD");
                    console.log(utils_1.CodeMessage[utils_1.ProcessState.SUCCESS]);
                    throw utils_1.ProcessState.SUCCESS;
                }
            }
        }
        console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]); // [collect] 不存在
        throw utils_1.ProcessState.ERR_COLLE;
    }
    update(...args) {
        let obj = args[0]['collect'];
        let bookid = args[0]['bookId'];
        let bookname = args[0]['bookName'];
        if (obj == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_COLLE]);
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        }
        else if (bookid == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_ID]);
            throw utils_1.ProcessState.ERR_ARGS_ID;
        }
        else if (bookname == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_BOOK]);
            throw utils_1.ProcessState.ERR_ARGS_BOOK;
        }
        else {
            let jsonData;
            try {
                jsonData = fs_extra_1.default.readJsonSync(storageFile);
            }
            catch (e) {
                console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]);
                throw utils_1.ProcessState.ERR_COLLE;
            }
            for (const key of Object.keys(jsonData)) {
                if (key == obj) {
                    let n = Object.keys(jsonData[key]["books"]).length;
                    for (let i = 0; i < n; ++i) {
                        if (bookid == jsonData[key]["books"][i]["bookId"]) {
                            jsonData[key]["books"][i]["bookName"] = bookname;
                            var json = JSON.stringify(jsonData);
                            fs_extra_1.default.writeFileSync(storageFile, json);
                            console.log(utils_1.CodeMessage[utils_1.ProcessState.SUCCESS]);
                            throw utils_1.ProcessState.SUCCESS;
                        }
                    }
                    console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ID]); // [bookId] 不存在
                    throw utils_1.ProcessState.ERR_ID;
                }
            }
        }
        console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]); // [collect] 不存在
        throw utils_1.ProcessState.ERR_COLLE;
    }
    delete(...args) {
        let obj = args[0]['collect'];
        if (obj == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_COLLE]);
            throw utils_1.ProcessState.ERR_ARGS_COLLE;
        }
        else {
            let jsonData;
            try {
                jsonData = fs_extra_1.default.readJsonSync(storageFile);
            }
            catch (e) {
                console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]);
                throw utils_1.ProcessState.ERR_COLLE;
            }
            for (const key of Object.keys(jsonData)) {
                if (key == obj) {
                    let cnt = 0;
                    if (args[0]["bookIds"] != undefined) {
                        for (const id of args[0]["bookIds"]) {
                            let n = Object.keys(jsonData[key]["books"]).length;
                            for (let j = 0; j < n; ++j) {
                                if (id == jsonData[key]["books"][j]["bookId"]) {
                                    jsonData[key]["books"].splice(j, 1);
                                    ++cnt;
                                    break;
                                }
                            }
                        }
                    }
                    if (args[0]["bookNames"] != undefined) {
                        for (const name of args[0]["bookNames"]) {
                            let n = Object.keys(jsonData[key]["books"]).length;
                            for (let j = 0; j < n; ++j) {
                                if (name == jsonData[key]["books"][j]["bookName"]) {
                                    jsonData[key]["books"].splice(j, 1);
                                    ++cnt;
                                    break;
                                }
                            }
                        }
                    }
                    var json = JSON.stringify(jsonData);
                    fs_extra_1.default.writeFileSync(storageFile, json);
                    console.log(cnt + " DELETED");
                    console.log(utils_1.CodeMessage[utils_1.ProcessState.SUCCESS]); // [collect] 不存在
                    throw utils_1.ProcessState.SUCCESS;
                }
            }
        }
        console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]); // [collect] 不存在
        throw utils_1.ProcessState.ERR_COLLE;
    }
    import(...args) {
        let obj = args[0]['fileName'];
        if (obj == undefined) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ARGS_FNAME]);
            throw utils_1.ProcessState.ERR_ARGS_FNAME;
        }
        else {
            let jsonData, jsonData2;
            try {
                jsonData = fs_extra_1.default.readJsonSync(storageFile);
            }
            catch (e) {
                console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]);
                throw utils_1.ProcessState.ERR_COLLE;
            }
            try {
                jsonData2 = fs_extra_1.default.readJsonSync(obj);
            }
            catch (e) {
                console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_FNAME]); // filename 不存在
                throw utils_1.ProcessState.ERR_FNAME;
            }
            // 判斷 Collection 是否重複
            for (const key of Object.keys(jsonData))
                for (const key2 of Object.keys(jsonData2))
                    if (key == key2)
                        throw utils_1.ProcessState.ERR_COLLE_DUPL;
            // 判斷 ERR_ID_DUPL ID是否重複            
            for (const key of Object.keys(jsonData)) {
                let n = Object.keys(jsonData[key]["books"]).length;
                for (let i = 0; i < n; ++i) {
                    for (const key2 of Object.keys(jsonData2)) {
                        let m = Object.keys(jsonData2[key2]["books"]).length;
                        for (let j = 0; j < m; ++j) {
                            if (jsonData[key]["books"][i]["bookId"] == jsonData2[key2]["books"][j]["bookId"])
                                throw utils_1.ProcessState.ERR_COLLE_DUPL;
                        }
                    }
                }
            }
            // 判斷 ERR_ISBN ISBN是否符合格式
            for (const key2 of Object.keys(jsonData2)) {
                let m = Object.keys(jsonData2[key2]["books"]).length;
                for (let j = 0; j < m; ++j) {
                    if (!(0, isValidateISBN_1.isValidateISBN)(jsonData2[key2]["books"][j]["isbn"])) // isbn 不符合格式
                     {
                        console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_ISBN]);
                        throw utils_1.ProcessState.ERR_ISBN;
                    }
                }
            }
            for (const key2 of Object.keys(jsonData2))
                jsonData[key2] = jsonData2[key2];
            var json = JSON.stringify(jsonData);
            fs_extra_1.default.writeFileSync(storageFile, json);
            console.log(utils_1.CodeMessage[utils_1.ProcessState.SUCCESS]);
            throw utils_1.ProcessState.SUCCESS;
        }
    }
    sync() {
    }
}
exports.CollectOperator = CollectOperator;
const storage = new JSONStorage_1.JSONStorage(savePath);
exports.Collect = new CollectOperator(storage);
//# sourceMappingURL=collect.js.map