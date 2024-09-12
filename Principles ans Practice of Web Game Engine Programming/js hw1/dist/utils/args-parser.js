"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argsParser = void 0;
function argsParser(tokens) {
    const result = {};
    /* Homework */
    let key;
    let value;
    let bookValue = [];
    for (let i = 0; i < tokens.length; i += 2) {
        // mapping the argument key(s)
        if (tokens[i][0] != '-')
            continue;
        else if (tokens[i] == "-c")
            key = "collect";
        else if (tokens[i] == "-name")
            key = "bookName";
        else if (tokens[i] == "-id")
            key = "bookId";
        else if (tokens[i] == "-f")
            key = "fileName";
        else if (tokens[i] == "-ids")
            key = "bookIds";
        else if (tokens[i] == "-names")
            key = "bookNames";
        else if (tokens[i] == "-d")
            key = "books";
        else
            key = tokens[i].slice(1);
        // processing argument value(s)
        if (i + 1 == tokens.length || tokens[i + 1][0] == '-')
            value = undefined, --i;
        else if (key != "bookIds" && key != "bookNames" && key != "books")
            value = tokens[i + 1];
        else {
            value = tokens[i + 1].split(",");
            if (key == "books") {
                bookValue.push({ "bookId": value[0], "bookName": value[1], "isbn": value[2] });
                value = bookValue;
            }
        }
        result[key] = value;
    }
    /* Homework */
    return result;
}
exports.argsParser = argsParser;
//# sourceMappingURL=args-parser.js.map