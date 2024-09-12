import readline from "node:readline";
import { exit, stdin, stdout } from "process";

export function waitInput() {
  /* Homework */
    const rl = readline.createInterface({ input: stdin, output: stdout });

    return new Promise<string>(resolve => {
        rl.on('line', input => {
            console.log(">", input);
            if (input === ".exit" || input === ".quit") exit;
            resolve(input);
        })         
    });
}
