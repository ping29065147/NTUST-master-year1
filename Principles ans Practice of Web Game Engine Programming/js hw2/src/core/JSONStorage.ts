import { IStorage } from '@/core/types';
import fs, { readJSONSync } from 'fs-extra';

export class JSONStorage<T = any> implements IStorage {
    public savePath;
    public draft: Record<string, T> = {};

    constructor(savePath = __dirname) {
        this.savePath = `${savePath}/storage.json`;
        if (!fs.existsSync(this.savePath)) {
            fs.outputJSONSync(this.savePath, {}, { spaces: 4 });
            this.draft = {};
        } else {
            this.draft = readJSONSync(this.savePath);
        }
    }

    public has(key: string) {
        return this.draft[key] !== undefined;
    }

    public size() {
        return Object.keys(this.draft).length;
    }

    public getItem(key: string) {
        return this.draft[key];
    }

    public setItem(key: string, value: T) {
        this.draft[key] = value;
        fs.outputJSONSync(this.savePath, this.draft, { spaces: 4 });
        return value;
    }

    public removeItem(key: string) {
        const exist = this.has(key);
        delete this.draft[key];
        fs.outputJSONSync(this.savePath, this.draft, { spaces: 4 });
        return exist;
    }

    public clear() {
        const existData = this.size() > 0;
        this.draft = {};
        fs.outputJSONSync(this.savePath, {}, { spaces: 4 });
        return existData;
    }
}
