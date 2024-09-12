import { CodeMessage, ProcessState } from '@/utils';
import type { IResourceOperator, ICommander, ParseResult } from '@/core/types';
import { argsParser } from '@/utils/args-parser';
import { JSONStorage } from './JSONStorage';
import { Collect, CollectOperator } from '@/command/collect';

export class Commander implements ICommander {
    private operator_ = new Map<string, IResourceOperator>();

    initialDefaultCmd(): void {
        const collect = new CollectOperator(new JSONStorage<Collect>());
        this.load('collect', collect);
    }

    load(label: string, runner: IResourceOperator) {
        this.operator_.set(label, runner);
    }

    parse(cmd: string): ParseResult {
        const [_, command, subcommand, ...tokens] = cmd.trim().split(' ');
        let state = ProcessState.SUCCESS;
        const params: Record<string, any> = argsParser(tokens);

        try {
            const runner = this.operator_.get(subcommand);
            if (!runner) throw ProcessState.ERR_UNKNOWN_CMD;
            runner.isValidateCmd(command, params);
        } catch (errCode) {
            state = errCode as ProcessState;
        }

        return {
            command,
            state,
            params,
        };
    }

    parse2(cmd: string): ParseResult & { message: string } {
        const [_, command, subcommand, ...tokens] = cmd.trim().split(' ');
        let state = ProcessState.SUCCESS;
        const params: Record<string, any> = argsParser(tokens);

        try {
            const runner = this.operator_.get(subcommand);
            if (!runner) throw ProcessState.ERR_UNKNOWN_CMD;
            runner.isValidateCmd(command, params);
        } catch (errCode) {
            state = errCode as ProcessState;
        }

        return {
            command: cmd,
            message: CodeMessage[state],
            state,
            params,
        };
    }
}
