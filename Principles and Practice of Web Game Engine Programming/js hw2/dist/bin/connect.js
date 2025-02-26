"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const client_1 = require("@/web/client");
const utils_1 = require("@/utils");
const debug_1 = __importDefault(require("debug"));
const process_1 = require("process");
const crypto_1 = require("crypto");
const dMsg = (0, debug_1.default)('client');
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
    for (let i = 0; i < 12; ++i)
        sum += digit12[i] * weights[i];
    const checksum = sum % 10 === 0 ? 0 : 10 - (sum % 10);
    const isbn = `${prefix}${checksum}`;
    dMsg('isbn %o', isbn);
    return isbn;
}
function connect(port, algo) {
    dMsg(`Try to connect ws://localhost:${port}`);
    const client = new client_1.WebSocketClient(`ws://localhost:${port}`, algo);
    return client;
}
exports.connect = connect;
(async () => {
    const client = connect(process_1.env.PORT, process_1.env.ALGO);
    while (true) {
        console.log('---------------------------------------------------------');
        const input = await (0, utils_1.waitInput)();
        switch (input) {
            case 'make':
                {
                    const collect = await (0, utils_1.waitInput)('Enter collect name: ');
                    await client.request('make', { collect });
                }
                break;
            case 'insert':
                {
                    const collect = await (0, utils_1.waitInput)('Enter collect name: ');
                    const books = [];
                    const n = Number(await (0, utils_1.waitInput)('insert size:'));
                    if (Number.isNaN(n) || n <= 0) {
                        dMsg('Not a number, or n lte 0');
                        break;
                    }
                    for (let i = 0; i < Math.min(Number(n), 10); ++i) {
                        const bookId = (await (0, utils_1.waitInput)(`Book${i + 1} Id: `)) || Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER).toString();
                        const bookName = (await (0, utils_1.waitInput)(`Book${i + 1} Name: `)) || (0, crypto_1.randomUUID)();
                        books.push({ bookId, bookName, isbn: generateISBN() });
                    }
                    await client.request('insert', { collect, books });
                }
                break;
            case 'update':
                {
                    const collect = await (0, utils_1.waitInput)('Enter collect name: ');
                    const bookId = await (0, utils_1.waitInput)('Enter bookId: ');
                    const bookName = await (0, utils_1.waitInput)('Enter bookName: ');
                    await client.request('update', { collect, bookId, bookName });
                }
                break;
            case 'delete':
                {
                    const collect = await (0, utils_1.waitInput)('Enter collect name: ');
                    const ids = await (0, utils_1.waitInput)('Enter Filter ids: ');
                    const names = await (0, utils_1.waitInput)('Enter Filter names: ');
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
                    const data = await (0, utils_1.waitInput)('To server: ');
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
//# sourceMappingURL=connect.js.map