"use strict";
let entrada = 'A man, a plan, a canal. Panama';
const palindromeChecker = (entrada) => {
    let entradaFiltrada = entrada.replace(/[0-9]+/g, "").replace(/[^\w]/gi, '').toLowerCase();
    let entradaInvertida = entradaFiltrada.split('').reverse().join('');
    if (entradaFiltrada == entradaInvertida) {
        return true;
    }
    else {
        return false;
    }
};
console.log(palindromeChecker(entrada));
console.log(entrada);
// console.log ( entradaFiltrada );
// console.log ( entradaInvertida );
/**
 almacenar la variable dada que es un string OK -> entrada
-> nueva variable donde se eliminan signos, uppercase y numeros (esta variable quedara como string)
    -> nueva variable donde haremos un reverse y devolveremos un string invertido sin signos
        -> finalmente con un if compararemos si la variable 1 es igual a 2, de ser asi sera un palindromo
 */ 
//# sourceMappingURL=ejercicio1.js.map