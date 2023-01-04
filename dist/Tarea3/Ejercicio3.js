"use strict";
const ROT13 = (cadena) => {
    const alfabeto = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');
    const arrayCifrador = ("NOPQRSTUVWXYZABCDEFGHIJKLM").split('');
    let stringCodificado = cadena;
    let arrayEntrada = stringCodificado.split('');
    // console.log(`arrayEntrada: ${arrayEntrada}\n`);
    let arrayDecodificada = [];
    let stringDecodificado = '';
    for (let j in arrayEntrada) {
        // console.log(`arrayCifrador: ${arrayCifrador}`)
        const esUnaLetra = alfabeto.some(function (valor) {
            console.log(`valor: ${valor}`);
            return valor == arrayEntrada[j];
        });
        console.log(`esUnaLetra: ${esUnaLetra}`);
        if (esUnaLetra === true) {
            let idx = arrayCifrador.indexOf(arrayEntrada[j]);
            arrayDecodificada.push(alfabeto[idx]);
        }
        else {
            arrayDecodificada.push(arrayEntrada[j]).toString();
        }
        stringDecodificado = arrayDecodificada.join('');
    }
    return `\n    arregloCifrador: ${arrayCifrador}\n\n    alfabeto: ${alfabeto}\n
    stringCodificado: ${stringCodificado}\n\n    stringDecodificado: ${stringDecodificado}\n`;
};
console.log(ROT13('12ABC,*QLL'));
//# sourceMappingURL=ejercicio3.js.map