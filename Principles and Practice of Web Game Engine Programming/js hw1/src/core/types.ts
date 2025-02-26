import { ProcessState } from "../utils/error";

export interface ParseResult {
  command: string;
  state: ProcessState;
  params: { [key: string]: string };
}

export interface IStorage<T = any> {
  size(): number;
  getItem(key: string): T | undefined;
  setItem(key: string, value: T): T;
  removeItem(key: string): boolean;
  clear(): boolean;
}

export interface IResourceOperator<T = any> {
  resources: IStorage<T>;
  isValidateCmd(...args: any[]): ProcessState;
  drop(...args: any[]): number;
  make(...args: any[]): boolean;
  insert(...args: any[]): number;
  update(...args: any[]): boolean;
  delete(...args: any[]): number;
  import(filename: string): void;
  sync(): any;
}

export interface ICommander {
  port: number; // localhost:8080 -> 本地IP
  initialDefaultCmd(...args: any[]): void;
  parse(cmd: string): ParseResult;
  load(label: string, runner: IResourceOperator): any;
}
