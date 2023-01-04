"use strict";
// Construccion del alfabeto1
let alfabeto1 = String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase().split('');
// Construccion del ArregloCifrador correspondiente al R13
const funcionCifradora = (shiftNumber) => {
    let arreglo1 = (String.fromCharCode(...Array(123).keys()).slice((97 + shiftNumber)).toUpperCase().split(''));
    let arreglo2 = String.fromCharCode(...Array(123 - shiftNumber).keys()).slice(97).toUpperCase().split('');
    return arreglo1.concat(arreglo2);
};
let arrayCifrador1 = funcionCifradora(13);
// Funcion decifradora de codigo ROT13 cipher 13 
// const ROT13 = ( cadena:string ):string => {
//     let stringCodificado: string = cadena;
//     let arrayEntrada: string[] = stringCodificado.split('');
//     // console.log(`arrayEntrada: ${arrayEntrada}\n`);
//     let arrayDecodificada: string[] = []; 
//     let stringDecodificado:string = '';
//         for (let j in arrayEntrada){
//             // console.log(`arrayCifrador1: ${arrayCifrador1}`)
//             const esUnaLetra = alfabeto1.some( function(valor){
//             return valor == arrayEntrada[j]
//             })
//             if(esUnaLetra === true){
//                 let idx:number = arrayCifrador1.indexOf(arrayEntrada[j]);
//                 arrayDecodificada.push(alfabeto1[idx]);
//             }else {
//                 arrayDecodificada.push(arrayEntrada[j]).toString();
//             }
//              stringDecodificado = arrayDecodificada.join('');
//         }
//     return `\n    arregloCifrador: ${ arrayCifrador1 }\n\n    alfabeto1: ${ alfabeto1 }\n
//     stringCodificado: ${stringCodificado}\n\n    stringDecodificado: ${stringDecodificado}\n`;
// }
// // console.log();
// // console.log(`ArrayDesifrador: ${alfabeto1}\n`);
// // console.log(`arrayCifrador1: ${arrayCifrador1}\n`);
// // console.log(`stringDecodificado: ${R13('12ABC,*QLL')}\n`)
// console.log(ROT13('12ABC,*QLL'));
//# sourceMappingURL=Ejercicio3_001.js.map