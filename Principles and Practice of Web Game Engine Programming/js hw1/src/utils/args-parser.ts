export function argsParser(tokens: string[])
{
    const result: Record<string, any> = {};

    /* Homework */
    let key: string;
    let value: any;
    const bookValue = [];

    for (let i = 0; i < tokens.length; i += 2)
    {
        // mapping the argument key(s)
        if (tokens[i][0] !== '-') continue;
        else if (tokens[i] === "-c") key = "collect";
        else if (tokens[i] === "-name") key = "bookName";
        else if (tokens[i] === "-id") key = "bookId";
        else if (tokens[i] === "-f") key = "fileName";
        else if (tokens[i] === "-ids") key = "bookIds";
        else if (tokens[i] === "-names") key = "bookNames";
        else if (tokens[i] === "-d") key = "books";
        else key = tokens[i].slice(1);

        // processing argument value(s)
        if(i + 1 === tokens.length || tokens[i + 1][0] === '-')
        {
            value = undefined;
            --i;
        }
        else if (key !== "bookIds" && key !== "bookNames" && key !== "books") value = tokens[i + 1];
        else
        {
            value = tokens[i + 1].split(",");
            if (key === "books")
            {
                bookValue.push({ "bookId": value[0], "bookName": value[1], "isbn": value[2] });
                value = bookValue;
            }
        }

        result[key] = value;
    }

    return result;
}