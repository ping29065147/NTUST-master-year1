/* Homework */
import fs from "fs-extra";
import { join } from "path";
import { IStorage } from "./types";
import { ProcessState } from "../utils";

export class JSONStorage<T = any> implements IStorage<T>
{
    private path;

    constructor(path: any)
    {
        this.path = join(path, "storage.json");
        if (!fs.existsSync("spec/test"))
            fs.mkdirSync("spec/test");
    }

    size(): number
    {
        let jsonData;

        try {
            jsonData = fs.readJsonSync(this.path);               
        } catch (e) {
            throw ProcessState.ERR_UNKNOWN_CMD;
        }

        return Object.keys(jsonData).length;
    }

    getItem(key: string): T | undefined
    {
        let jsonData;

        try {
            jsonData = fs.readJsonSync(this.path);               
        } catch (e) {
            throw ProcessState.ERR_UNKNOWN_CMD;
        }

        if (jsonData[key] === undefined) return undefined;
        return jsonData[key];
    }

    setItem(key: string, value: T): T
    {
        let jsonData;

        try {
            jsonData = fs.readJsonSync(this.path);               
        } catch (e) {
            throw ProcessState.ERR_UNKNOWN_CMD;
        }

        jsonData[key] = value;
        fs.writeFileSync(this.path, JSON.stringify(jsonData));
        return jsonData[key];
    }

    removeItem(key: string): boolean
    {
        let jsonData;

        try {
            jsonData = fs.readJsonSync(this.path);               
        } catch (e) {
            throw ProcessState.ERR_COLLE;
        }

        const k = Object.keys(jsonData);
        for (let i = 0; i < k.length; ++i)
        {
            if (k[i] === key)
            {
                delete jsonData[k[i]];
                fs.writeFileSync(this.path, JSON.stringify(jsonData));

                throw ProcessState.SUCCESS;
            }
        }
      
        throw ProcessState.ERR_COLLE; // not exist
    }

    clear(): boolean
    {
        fs.writeFileSync(this.path, "{}");       
        throw ProcessState.SUCCESS;
    }
}