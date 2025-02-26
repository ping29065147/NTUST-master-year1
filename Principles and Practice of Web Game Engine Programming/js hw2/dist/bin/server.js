"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = exports.UserMap = exports.secret = void 0;
const websocket_1 = require("websocket");
const http_1 = require("http");
const accept_1 = require("@/web/accept");
const transfer_1 = require("@/utils/transfer");
const package_json_1 = __importDefault(require("@/../package.json"));
const debug_1 = __importDefault(require("debug"));
const process_1 = require("process");
const dMsg = (0, debug_1.default)('server');
exports.secret = '5bfb92ca23b745feaf7b29b2859bf2ed';
exports.UserMap = new WeakMap();
async function runServer(port) {
    const httpServer = (0, http_1.createServer)((req, res) => {
        dMsg(`Received: ${req.url}`);
        res.end();
    }).listen(port, () => {
        dMsg(`Listening on http://localhost:${port}`);
    });
    const webSocketSrv = new websocket_1.server({
        httpServer,
        autoAcceptConnections: false,
    });
    webSocketSrv.on('request', (req) => {
        const clientSock = req.accept();
        dMsg('SERVER CONNECTED!');
        clientSock.on('message', (data) => {
            try {
                if (data.type === 'binary')
                    return;
                dMsg('Receive Raw: %o', data.utf8Data);
                const algo = data.utf8Data;
                if (!algo || (algo !== 'hmac' && algo !== 'aes'))
                    throw new Error('Unknown crypto protocol');
                exports.UserMap.set(clientSock, [algo, exports.secret]);
                clientSock.sendUTF(exports.secret);
                clientSock.removeAllListeners('message');
                (0, accept_1.accept)(clientSock);
            }
            catch (error) {
                clientSock.sendUTF((0, transfer_1.pack)({ event: 'error', message: error.message }));
            }
        });
        clientSock.on('close', (reason, desc) => {
            exports.UserMap.delete(clientSock);
            const { remoteAddress } = clientSock;
            dMsg({
                reason,
                desc,
                message: `${new Date().toJSON()} Peer ${remoteAddress} disconnected`,
            });
        });
    });
}
exports.runServer = runServer;
runServer(process_1.env.PORT ?? package_json_1.default.port ?? '8080');
//# sourceMappingURL=server.js.map