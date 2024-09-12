function nameMapper(argName: string) {
    switch (argName) {
        case '-c':
            return 'collect';
        case '-d':
            return 'books';
        case '-name':
            return 'bookName';
        case '-id':
            return 'bookId';
        case '-f':
            return 'fileName';
        case '-ids':
            return 'bookIds';
        case '-names':
            return 'bookNames';
        default:
            return argName.slice(argName.indexOf('-') + 1);
    }
}

export function argsParser(tokens: string[]) {
    const temp: Record<string, any> = {};
    tokens.forEach((_, index, arr) => {
        const arg = arr[index];
        const value = arr[index + 1];
        const isArg = arr[index].startsWith('-');

        const displayName = nameMapper(arg);
        if (isArg) {
            temp[displayName] ??= undefined;
            if (value && !value.startsWith('-')) {
                switch (displayName) {
                    case 'collect':
                        temp.collect = value;
                        break;
                    case 'books':
                        if (!temp.books) temp.books = [];
                        const [bookId, bookName, isbn] = value.split(',');
                        temp.books.push({ bookId, bookName, isbn });
                        break;
                    case 'bookName':
                        temp.bookName = value;
                        break;
                    case 'bookId':
                        temp.bookId = value;
                        break;
                    case 'fileName':
                        temp.fileName = value;
                        break;
                    case 'bookIds':
                        if (!temp.bookIds) temp.bookIds = [];
                        temp.bookIds = value.split(',');
                        break;
                    case 'bookNames':
                        if (!temp.bookNames) temp.bookNames = [];
                        temp.bookNames = value.split(',');
                        break;
                    default:
                        temp[displayName] = value;
                }
            }
        }
    });
    return temp;
}
