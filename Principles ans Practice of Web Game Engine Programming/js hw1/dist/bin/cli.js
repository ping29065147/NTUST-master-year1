"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const commander_1 = require("@/core/commander");
const node_readline_1 = __importDefault(require("node:readline"));
const node_process_1 = require("node:process");
const io_1 = require("@/utils/io");
async function main() {
    const commander = new commander_1.Commander();
    const rl = node_readline_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    console.log("Terminal Start");
    /*rl.on('line', input => {
      console.log(">", input);
      commander.parse(input);
    })*/
    while (true) {
        const cmd = await (0, io_1.waitInput)();
        commander.parse(cmd);
    }
}
main();
//# sourceMappingURL=cli.js.map