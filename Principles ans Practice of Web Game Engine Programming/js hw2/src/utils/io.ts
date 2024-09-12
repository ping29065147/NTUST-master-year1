import { exit } from 'node:process';
import readline from 'node:readline';
import { stdin, stdout } from 'process';

export function waitInput(hint = '') {
    const rl = readline.createInterface({ input: stdin, output: stdout });
    return new Promise<string>((r) => {
        rl.question(hint, (input) => {
            rl.close();
            r(input);

            if (input === '.quit' || input === '.exit') exit(0);
        });
    });
}
