import { join } from "path";
import fs from "fs-extra";
import { IResourceOperator} from "../core/types";
import { ProcessState } from "../utils";
import { JSONStorage } from "../core/JSONStorage";
import { isValidateISBN } from "../utils/isValidateISBN"

// const savePath = join(__dirname, "test");
const savePath = join(process.cwd(), "spec/test");
const storageFile = join(savePath, "storage.json");

function isNumber(value: any) {
    for (let i = 0; i < value.length; ++i)
        if(value[i] < '0' || value[i] > '9')
            return false;
    return true;
  }

/* Homework */
export class CollectOperator<T = any> implements IResourceOperator<T>
{
    public resources;

    constructor(storage: any)
    {
        this.resources = storage;
    }

    isValidateCmd(...args: any[]): ProcessState
    {
        if (args[0] === "drop") this.drop(args[1]);
        else if (args[0] === "make") this.make(args[1]);
        else if (args[0] === "insert") this.insert(args[1]);
        else if (args[0] === "update") this.update(args[1]);
        else if (args[0] === "delete") this.delete(args[1]);
        else if (args[0] === "import") this.import(args[1]);

        return ProcessState.SUCCESS;
    }

    drop(...args: any[]): number
    {
        const obj = args[0].collect;;

        if (Object.keys(args[0]).length === 0) this.resources.clear();
        else if (obj === undefined) throw ProcessState.ERR_ARGS_COLLE;
        else this.resources.removeItem(obj);

        return 0;
    }

    make(...args: any[]): boolean
    {       
        const obj = args[0].collect;;       

        if (obj === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_COLLE]);
            throw ProcessState.ERR_ARGS_COLLE;
        }
        
        let jsonData;
        let ret: Record<string, any> = {};
        
        try {
            jsonData = fs.readJsonSync(storageFile);               
        } catch (e) {
            ret[obj] = {"name": obj, "books": []};
            fs.writeFileSync(storageFile, JSON.stringify(ret));

            // console.log(CodeMessage[ProcessState.SUCCESS]);
            throw ProcessState.SUCCESS;
        }

        const k = Object.keys(jsonData);
        for (let x = 0; x < k.length; ++x)
        {
            if (k[x] === obj)
            {
                // console.log(CodeMessage[ProcessState.ERR_COLLE_DUPL]);
                throw ProcessState.ERR_COLLE_DUPL;
            }
        }

        ret = jsonData;
        ret[obj] = {"name": obj, "books": []};
        fs.writeFileSync(storageFile, JSON.stringify(ret));

        // console.log(CodeMessage[ProcessState.SUCCESS]);
        throw ProcessState.SUCCESS;                  
    }

    insert(...args: any[]): number
    {
        const obj = args[0].collect;
        const book = args[0].books;

        if (obj === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_COLLE]);
            throw ProcessState.ERR_ARGS_COLLE;
        }
        else if (book === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_BOOK]);
            throw ProcessState.ERR_ARGS_BOOK;
        }
        else
        {
            let jsonData;

            try {
                jsonData = fs.readJsonSync(storageFile);               
            } catch (e) {
                // console.log(CodeMessage[ProcessState.ERR_COLLE]);
                throw ProcessState.ERR_COLLE;
            }

            const k = Object.keys(jsonData);
            for (let x = 0; x < k.length; ++x)
            {
                if (k[x] === obj)
                {
                    const n = Object.keys(jsonData[k[x]].books).length;
                    let skip = false;

                    if (n === 0) skip = true; // 沒有任何書
                    
                    for (let b = 0; b < book.length; ++b)
                    {
                        if (!skip)
                        {
                            for (let i = 0; i < n; ++i)
                            {
                                if (jsonData[k[x]].books[i].bookId === book[b].bookId) // id 已經存在
                                {
                                    // console.log(CodeMessage[ProcessState.ERR_ID_DUPL]);
                                    throw ProcessState.ERR_ID_DUPL;
                                }
                                else if (jsonData[k[x]].books[i].isbn === book[b].isbn) // isbn 已經存在
                                {
                                    // console.log(CodeMessage[ProcessState.ERR_ISBN_DUPL]);
                                    throw ProcessState.ERR_ISBN_DUPL;
                                }
                            }
                        }
    
                        if (!isNumber(book[b].bookId)) // id 必須為 0-9 組成的任意字串
                        {
                            // console.log(CodeMessage[ProcessState.ERR_ID]);
                            throw ProcessState.ERR_ID;
                        }
                        else if (!isValidateISBN(book[b].isbn)) // isbn 不符合格式
                        {
                            // console.log(CodeMessage[ProcessState.ERR_ISBN]);
                            throw ProcessState.ERR_ISBN;
                        }
    
                        jsonData[k[x]].books.push(book[b]);
                        fs.writeFileSync(storageFile, JSON.stringify(jsonData));
                    }

                    // console.log(CodeMessage[ProcessState.SUCCESS]);
                    throw ProcessState.SUCCESS;
                }
            } 
        }
       
        // console.log(CodeMessage[ProcessState.ERR_COLLE]); 
        throw ProcessState.ERR_COLLE; // [collect] 不存在
    }

    update(...args: any[]): boolean
    {
        const obj = args[0].collect;    
        const bookid = args[0].bookId;
        const bookname = args[0].bookName;

        if (obj === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_COLLE]);
            throw ProcessState.ERR_ARGS_COLLE;
        }
        else if (bookid === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_ID]);
            throw ProcessState.ERR_ARGS_ID;
        }
        else if (bookname === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_BOOK]);
            throw ProcessState.ERR_ARGS_BOOK;
        }
        else
        {
            let jsonData;

            try {
                jsonData = fs.readJsonSync(storageFile);               
            } catch (e) {
                // console.log(CodeMessage[ProcessState.ERR_COLLE]);
                throw ProcessState.ERR_COLLE;
            }

            const k = Object.keys(jsonData);
            for (let x = 0; x < k.length; ++x)
            {
                if (k[x] === obj)
                {
                    const n = Object.keys(jsonData[k[x]].books).length;
                    for (let i = 0; i < n; ++i)
                    {
                        if (bookid === jsonData[k[x]].books[i].bookId)
                        {
                            jsonData[k[x]].books[i].bookName = bookname;
                            fs.writeFileSync(storageFile, JSON.stringify(jsonData));

                            // console.log(CodeMessage[ProcessState.SUCCESS]);
                            throw ProcessState.SUCCESS;
                        }
                    }
                    
                    // console.log(CodeMessage[ProcessState.ERR_ID]); 
                    throw ProcessState.ERR_ID; // [bookId] 不存在
                }
            }
        }

        // console.log(CodeMessage[ProcessState.ERR_COLLE]); 
        throw ProcessState.ERR_COLLE; // [collect] 不存在
    }

    delete(...args: any[]): number
    {
        const obj = args[0].collect; 

        if (obj === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_COLLE]);
            throw ProcessState.ERR_ARGS_COLLE;
        }
        else
        {
            let jsonData;

            try {
                jsonData = fs.readJsonSync(storageFile);               
            } catch (e) {
                // console.log(CodeMessage[ProcessState.ERR_COLLE]);
                throw ProcessState.ERR_COLLE;
            }

            const k = Object.keys(jsonData);
            for (let x = 0; x < k.length; ++x)
            {
                if (k[x] === obj)
                {
                    if (args[0].bookIds !== undefined)
                    {
                        const bid = args[0].bookIds;
                        for (let y = 0; y < bid.length; ++y)
                        {
                            const n = Object.keys(jsonData[k[x]].books).length;
                            for (let j = 0; j < n; ++j)
                            {
                                if (bid[y] === jsonData[k[x]].books[j].bookId)
                                {
                                    jsonData[k[x]].books.splice(j, 1);
                                    break;
                                }
                            }
                        }
                    }
                    
                    if (args[0].bookNames !== undefined)
                    {
                        const bname = args[0].bookNames;
                        for (let z = 0; z < bname.length; ++z)
                        {
                            const n = Object.keys(jsonData[k[x]].books).length;
                            for (let j = 0; j < n; ++j)
                            {
                                if (bname[z] === jsonData[k[x]].books[j].bookName)
                                {
                                    jsonData[k[x]].books.splice(j, 1);
                                    break;
                                }
                            }
                        }
                    }

                    fs.writeFileSync(storageFile, JSON.stringify(jsonData));

                    // console.log(CodeMessage[ProcessState.SUCCESS]); 
                    throw ProcessState.SUCCESS; // [collect] 不存在
                }
            }
        }

        // console.log(CodeMessage[ProcessState.ERR_COLLE]); 
        throw ProcessState.ERR_COLLE; // [collect] 不存在
    }

    import(...args: any[]): void
    {
        const obj = args[0].fileName; 

        if (obj === undefined)
        {
            // console.log(CodeMessage[ProcessState.ERR_ARGS_FNAME]);
            throw ProcessState.ERR_ARGS_FNAME;
        }
        else
        {
            let jsonData;
            let jsonData2;

            try {
                jsonData = fs.readJsonSync(storageFile);             
            } catch (e) {
                // console.log(CodeMessage[ProcessState.ERR_COLLE]);
                throw ProcessState.ERR_COLLE;
            }

            try {
                jsonData2 = fs.readJsonSync(obj);               
            } catch (e) {
                // console.log(CodeMessage[ProcessState.ERR_FNAME]); 
                throw ProcessState.ERR_FNAME; // filename 不存在
            }
            
            const k = Object.keys(jsonData);
            const k2 = Object.keys(jsonData2);

            // 判斷 Collection 是否重複
            for (let x = 0; x < k.length; ++x)   
                for (let y = 0; y < k2.length; ++y)
                    if (k[x] === k2[y])
                        throw ProcessState.ERR_COLLE_DUPL;

            // 判斷 [ERR_ID_DUPL] ID是否重複        
            for (let x = 0; x < k.length; ++x)
            {
                const n = Object.keys(jsonData[k[x]].books).length;
                for (let i = 0; i < n; ++i)
                {
                    for (let y = 0; y < k2.length; ++y)
                    {
                        const m = Object.keys(jsonData2[k2[y]].books).length;   
                        for (let j = 0; j < m; ++j)
                            if (jsonData[k[x]].books[i].bookId === jsonData2[k2[y]].books[j].bookId)
                                throw ProcessState.ERR_COLLE_DUPL;
                    }
                }
            }

            // 判斷 [ERR_ISBN] ISBN是否符合格式
            for (let y = 0; y < k2.length; ++y)
            {
                const m = Object.keys(jsonData2[k2[y]].books).length;   
                for (let j = 0; j < m; ++j)
                    if (!isValidateISBN(jsonData2[k2[y]].books[j].isbn)) // isbn 不符合格式
                        throw ProcessState.ERR_ISBN;
            }

            for (let y = 0; y < k2.length; ++y)
                jsonData[k2[y]] = jsonData2[k2[y]];             
            fs.writeFileSync(storageFile, JSON.stringify(jsonData));

            // console.log(CodeMessage[ProcessState.SUCCESS]);
            throw ProcessState.SUCCESS;
        }
    }

    sync()
    {

    }
}

const storage = new JSONStorage(savePath);
export const Collect = new CollectOperator(storage);