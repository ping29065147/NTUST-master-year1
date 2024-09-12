declare module NodeJS {
    interface ProcessEnv {
        PORT: number;
        ALGO: 'aes' | 'hmac';
    }
}
