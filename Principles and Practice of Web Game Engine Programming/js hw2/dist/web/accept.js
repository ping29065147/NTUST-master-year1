"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accept = void 0;
const transfer_1 = require("@/utils/transfer");
const debug_1 = __importDefault(require("debug"));
const commander_1 = require("@/core/commander");
const collect_1 = require("@/command/collect");
const JSONStorage_1 = require("@/core/JSONStorage");
const path_1 = require("path");
const dMsg = (0, debug_1.default)('server');
const cmder = new commander_1.Commander();
const storage = new JSONStorage_1.JSONStorage((0, path_1.join)(__dirname, '..', '..'));
cmder.load('collect', new collect_1.CollectOperator(storage));
function accept(sock) {
    sock.on('message', async (msg) => {
        if (msg.type === 'binary')
            return;
        dMsg('---------------------------------------------------------');
        dMsg('Receive Raw%o', msg.utf8Data);
        try {
            const { requestToken, signature, payload } = (0, transfer_1.unpack)(msg.utf8Data);
            dMsg('Unpack: %O', { requestToken, signature, payload });
            switch (payload.eventType) {
                case 'make':
                    {
                        const { collect } = payload.params;
                        const result = await cmder.parse2(`lb make collect -c ${collect}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF((0, transfer_1.pack)({
                            requestToken,
                            eventType: payload.eventType,
                            result,
                        }));
                    }
                    break;
                case 'insert':
                    {
                        const { collect, books } = payload.params;
                        const extractBook = ({ bookId, bookName, isbn }) => `-d ${bookId},${bookName},${isbn}`;
                        const result = await cmder.parse2(`lb insert collect -c ${collect} ${books.map(extractBook).join(' ')}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF((0, transfer_1.pack)({
                            requestToken,
                            eventType: payload.eventType,
                            result,
                        }));
                    }
                    break;
                case 'update':
                    {
                        const { collect, bookId, bookName } = payload.params;
                        const result = await cmder.parse2(`lb update collect -c ${collect} -id ${bookId} -name ${bookName}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF((0, transfer_1.pack)({
                            requestToken,
                            eventType: payload.eventType,
                            result,
                        }));
                    }
                    break;
                case 'delete':
                    {
                        const { ids, names } = payload.params;
                        const ids_ = ids ? `-ids ${payload.params.ids.join()}` : '';
                        const names_ = names ? `-names ${payload.params.names.join()}` : '';
                        const result = await cmder.parse2(`lb delete collect -c ${payload.params.collect} ${ids_} ${names_}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF((0, transfer_1.pack)({
                            requestToken,
                            eventType: payload.eventType,
                            result,
                        }));
                    }
                    break;
                case 'ping':
                    sock.sendUTF((0, transfer_1.pack)({ requestToken, eventType: payload.eventType, result: 'PONG' }));
                    break;
                default:
                    sock.sendUTF((0, transfer_1.pack)({ eventType: '$DEFAULT', result: payload.eventType }));
            }
        }
        catch (error) {
            console.error(error);
            dMsg(`Client encapsulation function has not been implemented yet`);
            sock.sendUTF(`NOT_ENC_DATA`);
        }
    });
}
exports.accept = accept;
//# sourceMappingURL=accept.js.map