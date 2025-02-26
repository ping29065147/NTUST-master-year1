"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidateISBN = void 0;
function isValidateISBN(isbn) {
    if (isbn.length !== 13 || !/^97(8|9)/.test(isbn)) {
        return false;
    }
    const weight = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];
    const checksum = weight.map((w, i) => w * parseInt(isbn.at(i), 10)).reduce((a, b) => a + b, 0);
    const checkCode = checksum % 10 === 10 ? 0 : 10 - (checksum % 10);
    return checkCode.toString() === isbn.at(-1);
}
exports.isValidateISBN = isValidateISBN;
//# sourceMappingURL=isValidateISBN.js.map