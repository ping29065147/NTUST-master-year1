"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commander = void 0;
const utils_1 = require("@/utils");
const args_parser_1 = require("@/utils/args-parser");
const collect_1 = require("@/command/collect");
class Commander {
    operator_ = new Map();
    port = 1000;
    initialDefaultCmd() {
        this.load("collect", collect_1.Collect); /////
    }
    load(label, runner) {
        /* Homework */
        //this.load('collect', /* instance? */);
        this.operator_.set(label, runner);
    }
    parse(cmd) {
        const [_, command, subcommand, ...tokens] = cmd.trim().split(" ");
        let state = utils_1.ProcessState.SUCCESS;
        const params = (0, args_parser_1.argsParser)(tokens);
        try {
            this.initialDefaultCmd(); /////初始化
            const runner = this.operator_.get(subcommand);
            if (!runner)
                throw utils_1.ProcessState.ERR_UNKNOWN_CMD;
            runner.isValidateCmd(command, params);
        }
        catch (errCode) {
            state = errCode;
        }
        return {
            command,
            state,
            params,
        };
    }
}
exports.Commander = Commander;
//# sourceMappingURL=commander.js.map