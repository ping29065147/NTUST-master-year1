import { pack, unpack } from '@/utils/transfer';
import { connection } from 'websocket';
import debug from 'debug';
import { Commander } from '@/core/commander';
import { Book, Collect, CollectOperator } from '@/command/collect';
import { JSONStorage } from '@/core/JSONStorage';
import { join } from 'path';

const dMsg = debug('server');

const cmder = new Commander();
const storage = new JSONStorage<Collect>(join(__dirname, '..', '..'));
cmder.load('collect', new CollectOperator(storage));

export function accept(sock: connection) {
    sock.on('message', async (msg) => {
        if (msg.type === 'binary') return;

        dMsg('---------------------------------------------------------');
        dMsg('Receive Raw%o', msg.utf8Data);

        try {
            const { requestToken, signature, payload } = unpack(msg.utf8Data);
            dMsg('Unpack: %O', { requestToken, signature, payload });

            switch (payload.eventType) {
                case 'make':
                    {
                        const { collect } = payload.params as { collect: string };
                        const result = await cmder.parse2(`lb make collect -c ${collect}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF(
                            pack({
                                requestToken,
                                eventType: payload.eventType,
                                result,
                            })
                        );
                    }
                    break;

                case 'insert':
                    {
                        const { collect, books } = payload.params as { collect: string; books: Book[] };
                        const extractBook = ({ bookId, bookName, isbn }: Book) => `-d ${bookId},${bookName},${isbn}`;
                        const result = await cmder.parse2(`lb insert collect -c ${collect} ${books.map(extractBook).join(' ')}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF(
                            pack({
                                requestToken,
                                eventType: payload.eventType,
                                result,
                            })
                        );
                    }
                    break;

                case 'update':
                    {
                        const { collect, bookId, bookName } = payload.params;
                        const result = await cmder.parse2(`lb update collect -c ${collect} -id ${bookId} -name ${bookName}`);
                        dMsg('Command Run: %O', result);

                        sock.sendUTF(
                            pack({
                                requestToken,
                                eventType: payload.eventType,
                                result,
                            })
                        );
                    }
                    break;

                case 'delete':
                    {
                        const { ids, names } = payload.params as { ids: string; names: string };
                        const ids_ = ids ? `-ids ${payload.params.ids.join()}` : '';
                        const names_ = names ? `-names ${payload.params.names.join()}` : '';
                        const result = await cmder.parse2(`lb delete collect -c ${payload.params.collect} ${ids_} ${names_}`);
                        dMsg('Command Run: %O', result);
                        sock.sendUTF(
                            pack({
                                requestToken,
                                eventType: payload.eventType,
                                result,
                            })
                        );
                    }
                    break;

                case 'ping':
                    sock.sendUTF(pack({ requestToken, eventType: payload.eventType, result: 'PONG' }));
                    break;

                default:
                    sock.sendUTF(pack({ eventType: '$DEFAULT', result: payload.eventType }));
            }
        } catch (error) {
            console.error(error);
            dMsg(`Client encapsulation function has not been implemented yet`);
            sock.sendUTF(`NOT_ENC_DATA`);
        }
    });
}
