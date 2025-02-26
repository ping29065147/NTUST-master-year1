"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitInput = void 0;
const node_readline_1 = __importDefault(require("node:readline"));
const process_1 = require("process");
function waitInput() {
    /* Homework */
    const rl = node_readline_1.default.createInterface({ input: process_1.stdin, output: process_1.stdout });
    return new Promise(resolve => {
        //let input;
        //input = rl.question('>', input => resolve(input));
        //input = readline.createInterface({stdin, stdout});
        rl.on('line', input => {
            console.log(">", input);
            if (input == ".exit" || input == ".quit")
                process_1.exit;
            resolve(input);
        });
    });
}
exports.waitInput = waitInput;
//# sourceMappingURL=io.js.map