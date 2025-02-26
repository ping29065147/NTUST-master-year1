import type { IResourceOperator, ICommander, ParseResult } from '@/core/types';
export declare class Commander implements ICommander {
    private operator_;
    initialDefaultCmd(): void;
    load(label: string, runner: IResourceOperator): void;
    parse(cmd: string): ParseResult;
    parse2(cmd: string): ParseResult & {
        message: string;
    };
}
