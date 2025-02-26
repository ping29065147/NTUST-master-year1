"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONStorage = void 0;
const fs_extra_1 = __importStar(require("fs-extra"));
class JSONStorage {
    savePath;
    draft = {};
    constructor(savePath = __dirname) {
        this.savePath = `${savePath}/storage.json`;
        if (!fs_extra_1.default.existsSync(this.savePath)) {
            fs_extra_1.default.outputJSONSync(this.savePath, {}, { spaces: 4 });
            this.draft = {};
        }
        else {
            this.draft = (0, fs_extra_1.readJSONSync)(this.savePath);
        }
    }
    has(key) {
        return this.draft[key] !== undefined;
    }
    size() {
        return Object.keys(this.draft).length;
    }
    getItem(key) {
        return this.draft[key];
    }
    setItem(key, value) {
        this.draft[key] = value;
        fs_extra_1.default.outputJSONSync(this.savePath, this.draft, { spaces: 4 });
        return value;
    }
    removeItem(key) {
        const exist = this.has(key);
        delete this.draft[key];
        fs_extra_1.default.outputJSONSync(this.savePath, this.draft, { spaces: 4 });
        return exist;
    }
    clear() {
        const existData = this.size() > 0;
        this.draft = {};
        fs_extra_1.default.outputJSONSync(this.savePath, {}, { spaces: 4 });
        return existData;
    }
}
exports.JSONStorage = JSONStorage;
//# sourceMappingURL=JSONStorage.js.map