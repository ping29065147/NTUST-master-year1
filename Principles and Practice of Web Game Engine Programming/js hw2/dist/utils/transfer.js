"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pack = exports.unpack = void 0;
function unpack(packet) {
    const { requestToken = '', signature, payload } = JSON.parse(packet);
    try {
        const obj = JSON.parse(payload);
        return { requestToken, signature, payload: obj };
    }
    catch {
        return { requestToken, signature, payload };
    }
}
exports.unpack = unpack;
function pack(data) {
    const isObj = typeof data === 'object' && !Array.isArray(data);
    if (!isObj)
        return JSON.stringify({ eventType: '$DEFAULT', data });
    return JSON.stringify(data);
}
exports.pack = pack;
//# sourceMappingURL=transfer.js.map