"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitInput = void 0;
const node_process_1 = require("node:process");
const node_readline_1 = __importDefault(require("node:readline"));
const process_1 = require("process");
function waitInput(hint = '') {
    const rl = node_readline_1.default.createInterface({ input: process_1.stdin, output: process_1.stdout });
    return new Promise((r) => {
        rl.question(hint, (input) => {
            rl.close();
            r(input);
            if (input === '.quit' || input === '.exit')
                (0, node_process_1.exit)(0);
        });
    });
}
exports.waitInput = waitInput;
//# sourceMappingURL=io.js.map