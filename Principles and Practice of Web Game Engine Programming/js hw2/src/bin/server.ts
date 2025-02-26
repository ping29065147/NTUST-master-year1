import { server as WebSocketServer, connection } from 'websocket';
import { createServer } from 'http';
import { accept } from '@/web/accept';
import { pack } from '@/utils/transfer';
import pkg from '@/../package.json';
import debug from 'debug';
import { env } from 'process';

const dMsg = debug('server');

export const secret = '5bfb92ca23b745feaf7b29b2859bf2ed';

export const UserMap = new WeakMap<connection, [string, string]>();

export async function runServer(port: number) {
    const httpServer = createServer((req, res) => {
        dMsg(`Received: ${req.url}`);
        res.end();
    }).listen(port, () => {
        dMsg(`Listening on http://localhost:${port}`);
    });

    const webSocketSrv = new WebSocketServer({
        httpServer,
        autoAcceptConnections: false,
    });

    webSocketSrv.on('request', (req) => {
        const clientSock = req.accept();
        dMsg('SERVER CONNECTED!');

        clientSock.on('message', (data) => {
            try {
                if (data.type === 'binary') return;

                dMsg('Receive Raw: %o', data.utf8Data);

                const algo = data.utf8Data;
                if (!algo || (algo !== 'hmac' && algo !== 'aes')) throw new Error('Unknown crypto protocol');

                UserMap.set(clientSock, [algo, secret]);
                clientSock.sendUTF(secret);
                clientSock.removeAllListeners('message');
                accept(clientSock);
            } catch (error) {
                clientSock.sendUTF(pack({ event: 'error', message: (error as Error).message }));
            }
        });

        clientSock.on('close', (reason, desc) => {
            UserMap.delete(clientSock);
            const { remoteAddress } = clientSock;

            dMsg({
                reason,
                desc,
                message: `${new Date().toJSON()} Peer ${remoteAddress} disconnected`,
            });
        });
    });
}

runServer(env.PORT ?? pkg.port ?? '8080');
