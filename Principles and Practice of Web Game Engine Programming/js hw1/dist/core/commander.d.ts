import type { IResourceOperator, ICommander, ParseResult } from "@/core/types";
export declare class Commander implements ICommander {
    private operator_;
    port: number;
    initialDefaultCmd(): void;
    load(label: string, runner: IResourceOperator): void;
    parse(cmd: string): ParseResult;
}
