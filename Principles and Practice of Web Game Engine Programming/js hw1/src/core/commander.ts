import { ProcessState } from "../utils";
import type { IResourceOperator, ICommander, ParseResult } from "@/core/types";
import { argsParser } from "../utils/args-parser";

/* Homework */
// import { JSONStorage } from "../core/JSONStorage";
// import { Collect, CollectOperator } from "../command/collect";
import { Collect } from "../command/collect";

export class Commander implements ICommander
{
    private operator_ = new Map<string, IResourceOperator>();
    public port = 1000;

    public initialDefaultCmd() {
        this.load("collect", Collect); // load collect
    }

    load(label: string, runner: IResourceOperator) {
        /* Homework */    
        this.operator_.set(label, runner);
    }

    parse(cmd: string): ParseResult {
        const [_, command, subcommand, ...tokens] = cmd.trim().split(" ");
        let state = ProcessState.SUCCESS;
        const params: Record<string, any> = argsParser(tokens);

        try {
            this.initialDefaultCmd(); // 初始化
            const runner = this.operator_.get(subcommand);
            if (!runner) throw ProcessState.ERR_UNKNOWN_CMD;
            runner.isValidateCmd(command, params);
        } catch (errCode) {
            state = errCode as ProcessState;
        }

        return{
            command,
            state,
            params,
        };
    }
}
