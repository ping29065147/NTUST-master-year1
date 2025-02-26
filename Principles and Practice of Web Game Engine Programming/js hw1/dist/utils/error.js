"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeMessage = exports.ProcessState = void 0;
var ProcessState;
(function (ProcessState) {
    ProcessState[ProcessState["SUCCESS"] = 0] = "SUCCESS";
    ProcessState[ProcessState["ERR_FNAME"] = 1] = "ERR_FNAME";
    ProcessState[ProcessState["ERR_ALGO"] = 2] = "ERR_ALGO";
    ProcessState[ProcessState["ERR_PASSWD"] = 3] = "ERR_PASSWD";
    ProcessState[ProcessState["ERR_UNAME"] = 4] = "ERR_UNAME";
    ProcessState[ProcessState["ERR_ISBN"] = 5] = "ERR_ISBN";
    ProcessState[ProcessState["ERR_ID"] = 6] = "ERR_ID";
    ProcessState[ProcessState["ERR_COLLE"] = 7] = "ERR_COLLE";
    ProcessState[ProcessState["ERR_UNAME_DUPL"] = 8] = "ERR_UNAME_DUPL";
    ProcessState[ProcessState["ERR_ISBN_DUPL"] = 9] = "ERR_ISBN_DUPL";
    ProcessState[ProcessState["ERR_ID_DUPL"] = 10] = "ERR_ID_DUPL";
    ProcessState[ProcessState["ERR_COLLE_DUPL"] = 11] = "ERR_COLLE_DUPL";
    ProcessState[ProcessState["ERR_ARGS_ALGO"] = 12] = "ERR_ARGS_ALGO";
    ProcessState[ProcessState["ERR_ARGS_PASSWD"] = 13] = "ERR_ARGS_PASSWD";
    ProcessState[ProcessState["ERR_ARGS_UNAME"] = 14] = "ERR_ARGS_UNAME";
    ProcessState[ProcessState["ERR_ARGS_FNAME"] = 15] = "ERR_ARGS_FNAME";
    ProcessState[ProcessState["ERR_ARGS_BOOK"] = 16] = "ERR_ARGS_BOOK";
    ProcessState[ProcessState["ERR_ARGS_ID"] = 17] = "ERR_ARGS_ID";
    ProcessState[ProcessState["ERR_ARGS_COLLE"] = 18] = "ERR_ARGS_COLLE";
    ProcessState[ProcessState["ERR_UNKNOWN_CMD"] = 19] = "ERR_UNKNOWN_CMD";
})(ProcessState || (exports.ProcessState = ProcessState = {}));
exports.CodeMessage = {
    [ProcessState.SUCCESS]: 'SUCCESS',
    [ProcessState.ERR_FNAME]: 'ERR_FNAME',
    [ProcessState.ERR_ALGO]: 'ERR_ALGO',
    [ProcessState.ERR_PASSWD]: 'ERR_PASSWD',
    [ProcessState.ERR_UNAME]: 'ERR_UNAME',
    [ProcessState.ERR_ISBN]: 'ERR_ISBN',
    [ProcessState.ERR_ID]: 'ERR_ID',
    [ProcessState.ERR_COLLE]: 'ERR_COLLE',
    [ProcessState.ERR_UNAME_DUPL]: 'ERR_UNAME_DUPL',
    [ProcessState.ERR_ISBN_DUPL]: 'ERR_ISBN_DUPL',
    [ProcessState.ERR_ID_DUPL]: 'ERR_ID_DUPL',
    [ProcessState.ERR_COLLE_DUPL]: 'ERR_COLLE_DUPL',
    [ProcessState.ERR_ARGS_ALGO]: 'ERR_ARGS_ALGO',
    [ProcessState.ERR_ARGS_PASSWD]: 'ERR_ARGS_PASSWD',
    [ProcessState.ERR_ARGS_UNAME]: 'ERR_ARGS_UNAME',
    [ProcessState.ERR_ARGS_FNAME]: 'ERR_ARGS_FNAME',
    [ProcessState.ERR_ARGS_BOOK]: 'ERR_ARGS_BOOK',
    [ProcessState.ERR_ARGS_ID]: 'ERR_ARGS_ID',
    [ProcessState.ERR_ARGS_COLLE]: 'ERR_ARGS_COLLE',
    [ProcessState.ERR_UNKNOWN_CMD]: 'ERR_UNKNOWN_CMD',
};
//# sourceMappingURL=error.js.map