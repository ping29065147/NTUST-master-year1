"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONStorage = void 0;
const utils_1 = require("../utils");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
class JSONStorage {
    //public storage = new CollectOperator();
    path;
    constructor(path) {
        this.path = (0, path_1.join)(path, "storage.json");
        if (!fs_extra_1.default.existsSync("spec/test"))
            fs_extra_1.default.mkdirSync("spec/test");
    }
    size() {
        let jsonData;
        try {
            jsonData = fs_extra_1.default.readJsonSync(this.path);
        }
        catch (e) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]);
            throw utils_1.ProcessState.ERR_COLLE;
        }
        return Object.keys(jsonData).length;
    }
    getItem(key) {
        let a;
        return a;
    }
    setItem(key, value) {
        console.log(this.path);
        return value;
    }
    removeItem(key) {
        let jsonData;
        try {
            jsonData = fs_extra_1.default.readJsonSync(this.path);
        }
        catch (e) {
            console.log(utils_1.CodeMessage[utils_1.ProcessState.ERR_COLLE]);
            throw utils_1.ProcessState.ERR_COLLE;
        }
        for (const k of Object.keys(jsonData)) {
            if (k == key) {
                delete jsonData[k];
                var json = JSON.stringify(jsonData);
                fs_extra_1.default.writeFileSync(this.path, json);
                console.log("1 DELETED");
                throw utils_1.ProcessState.SUCCESS;
            }
        }
        // not exist
        throw utils_1.ProcessState.ERR_COLLE;
    }
    clear() {
        console.log(this.size() + " DELETED");
        fs_extra_1.default.writeFileSync(this.path, "{}");
        throw utils_1.ProcessState.SUCCESS;
    }
}
exports.JSONStorage = JSONStorage;
//# sourceMappingURL=JSONStorage.js.map