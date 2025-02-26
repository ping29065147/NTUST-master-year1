export function unpack(packet: string) {
    const { requestToken = '', signature, payload } = JSON.parse(packet);

    try {
        const obj = JSON.parse(payload);
        return { requestToken, signature, payload: obj };
    } catch {
        return { requestToken, signature, payload };
    }
}

export function pack(data: any) {
    const isObj = typeof data === 'object' && !Array.isArray(data);

    if (!isObj) return JSON.stringify({ eventType: '$DEFAULT', data });

    return JSON.stringify(data);
}
