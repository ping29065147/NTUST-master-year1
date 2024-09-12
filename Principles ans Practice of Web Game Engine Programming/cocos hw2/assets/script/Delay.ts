import { Component } from 'cc';

export namespace Delay {
    const component = new Component();
    /**
     * 過了特定時間後，會 fullfill 的 promise
     * @param millisecond 指定時間
     */
    export function resolve(millisecond: number): Promise<void> {
        return new Promise<void>((resolveFunc) => {
            component.scheduleOnce(resolveFunc, millisecond / 1000);
        });
    }
}
