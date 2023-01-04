"use strict";
const rot13 = (message) => {
    const originalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    return message.replace(/[A-Z]/gi, letter => cipher[originalAlpha.indexOf(letter)]);
};
console.log(rot13(' ABC '));
//# sourceMappingURL=ejercicio_3.js.map