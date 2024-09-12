import 'module-alias/register';
import readline from 'node:readline';
import { stdin, stdout } from 'node:process';
import { Commander } from '../core/commander';
// import { waitInput } from '../utils/io';

async function main() {
    const commander = new Commander();
    const rl = readline.createInterface({ input: stdin, output: stdout });

    console.log('Terminal Start');

    rl.on('line', (input) => {
        console.log('>', input);
        commander.parse(input);
    });

    /* while (true) {
      const cmd = await waitInput();
      commander.parse(cmd);
    } */
}

main();
