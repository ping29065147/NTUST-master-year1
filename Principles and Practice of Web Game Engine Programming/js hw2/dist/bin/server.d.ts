import { connection } from 'websocket';
export declare const secret = "5bfb92ca23b745feaf7b29b2859bf2ed";
export declare const UserMap: WeakMap<connection, [string, string]>;
export declare function runServer(port: number): Promise<void>;
