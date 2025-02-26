import { WebSocketClient } from '@/web/client';
import { waitInput } from '@/utils';
import debug from 'debug';
import { Book } from '@/command/collect';
import { env } from 'process';
import { randomUUID } from 'crypto';

const dMsg = debug('client');

function generateISBN() {
    const type = 978;
    const group = [957, 986, 626][Math.round(Math.random() * 2)];
    const publisher = Math.floor(Math.random() * 99)
        .toString()
        .padStart(3, '0');
    const title = Math.floor(Math.random() * 99)
        .toString()
        .padStart(3, '0');

    const prefix = `${type}${group}${publisher}${title}`;
    const digit12 = [...prefix].map(Number);
    const weights = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];

    let sum = 0;
    for (let i = 0; i < 12; ++i) sum += digit12[i] * weights[i];

    const checksum = sum % 10 === 0 ? 0 : 10 - (sum % 10);
    const isbn = `${prefix}${checksum}`;
    dMsg('isbn %o', isbn);

    return isbn;
}

export function connect(port: number, algo: 'aes' | 'hmac') {
    dMsg(`Try to connect ws://localhost:${port}`);
    const client = new WebSocketClient(`ws://localhost:${port}`, algo);
    return client;
}

(async () => {
    const client = connect(env.PORT, env.ALGO);

    while (true) {
        console.log('---------------------------------------------------------');
        const input = await waitInput();
        switch (input) {
            case 'make':
                {
                    const collect = await waitInput('Enter collect name: ');
                    await client.request('make', { collect });
                }
                break;
            case 'insert':
                {
                    const collect = await waitInput('Enter collect name: ');
                    const books: Book[] = [];
                    const n = Number(await waitInput('insert size:'));
                    if (Number.isNaN(n) || n <= 0) {
                        dMsg('Not a number, or n lte 0');
                        break;
                    }
                    for (let i = 0; i < Math.min(Number(n), 10); ++i) {
                        const bookId = (await waitInput(`Book${i + 1} Id: `)) || Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER).toString();
                        const bookName = (await waitInput(`Book${i + 1} Name: `)) || randomUUID();
                        books.push({ bookId, bookName, isbn: generateISBN() });
                    }
                    await client.request('insert', { collect, books });
                }
                break;
            case 'update':
                {
                    const collect = await waitInput('Enter collect name: ');
                    const bookId = await waitInput('Enter bookId: ');
                    const bookName = await waitInput('Enter bookName: ');
                    await client.request('update', { collect, bookId, bookName });
                }
                break;
            case 'delete':
                {
                    const collect = await waitInput('Enter collect name: ');
                    const ids = await waitInput('Enter Filter ids: ');
                    const names = await waitInput('Enter Filter names: ');
                    await client.request('delete', { collect, ids: ids.split(','), names: names.split(',') });
                }
                break;
            case 'ping':
                {
                    const res = await client.request('ping');
                    dMsg(res);
                }
                break;

            case 'send':
                {
                    const data = await waitInput('To server: ');
                    dMsg('Try to send %o', data);
                    client.send(data);
                }
                break;

            default:
                dMsg('%o not a command', input);
                break;
        }
    }
})();
