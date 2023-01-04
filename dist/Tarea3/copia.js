"use strict";
// let arrayDesifrador: string[] = [
//     'A', 'B', 'C', 'D', 'E', 'F',
//     'G', 'H', 'I', 'J', 'K', 'L',
//     'M', 'N', 'O', 'P', 'Q', 'R',
//     'S', 'T', 'U', 'V', 'W', 'X',
//     'Y', 'Z'
//   ];
// let arrayCifrador: string[] = [
//     'N', 'O', 'P', 'Q', 'R', 'S',
//     'T', 'U', 'V', 'W', 'X', 'Y',
//     'Z', 'A', 'B', 'C', 'D', 'E',
//     'F', 'G', 'H', 'I', 'J', 'K',
//     'L', 'M'
// ];
// let stringCodificado: string = '*aABCQLL**';
// let arrayEntrada: string[] = stringCodificado.split('');
// //console.log( 'array entrada',arrayEntrada );
// let arrayDecodificada: string[] = []; 
// for (let j in arrayEntrada){
//     if(arrayEntrada[j] === 'A'|| arrayEntrada[j]==='B'|| arrayEntrada[j]==='C'||arrayEntrada[j]==='D'||arrayEntrada[j]==='F'||arrayEntrada[j]==='G'||arrayEntrada[j]==='H'||arrayEntrada[j]==='I'||arrayEntrada[j]==='J'||arrayEntrada[j]=== 'K'|| arrayEntrada[j]==='L'||
//     arrayEntrada[j]==='M'||arrayEntrada[j]=== 'N'||arrayEntrada[j]==='O'||arrayEntrada[j]==='P'||arrayEntrada[j]=== 'Q'|| arrayEntrada[j]==='R'||
//     arrayEntrada[j]==='S'||arrayEntrada[j]=== 'T'||arrayEntrada[j]==='U'|| arrayEntrada[j]==='V'|| arrayEntrada[j]==='W'|| arrayEntrada[j]==='X'||
//     arrayEntrada[j]==='Y'|| arrayEntrada[j]==='Z' ){
//         console.log('arrayEntrada en posicion j',arrayEntrada[j])
//         for (let i in arrayCifrador){
//             if (arrayEntrada[j] == arrayCifrador[i]){
//                 arrayDecodificada.push( arrayDesifrador[i]);
//                 } 
//         }
//     }else{
//         console.log('entre al else')
//         arrayDecodificada.push(arrayEntrada[j])
//     }
// }
// console.log( arrayDecodificada);
/*
=================================================================
                            DESARROLLO 2
=================================================================

    let arrayEntrada: string[] = stringCodificado.split('');
    // console.log(`arrayEntrada: ${arrayEntrada}\n`);

    let arrayDecodificada: string[] = [];
    let stringDecodificado:string = '';

        for (let j in arrayEntrada){
            console.log(`arrayCifrador: ${arrayCifrador}`)
            const esUnaLetra = arrayDesifrador.some( function(valor){
            return valor == arrayEntrada[j]
            })
            console.log(`arrayDesifrador en some: ${arrayDesifrador}`)

            console.log(esUnaLetra);
            console.log(j)


            if(esUnaLetra === true){


                console.log('valor falso');
                let idx:number = arrayCifrador.indexOf(arrayEntrada[j]);
                console.log(`idx: ${idx}`);
                arrayDecodificada.push(arrayDesifrador[idx]);

            }else {

                // console.log('valor verdadero')
                arrayDecodificada.push(arrayEntrada[j]).toString();

            }

            // console.log(`arrayDecodificada: ${arrayDecodificada}\n`)

             stringDecodificado = arrayDecodificada.join(',');
        }


*/
// let alfabeto1: string[] = [];
//     for(let i=9,alphabet='';++i<36;){
//         alphabet += i.toString(36);
//         // console.log(alphabet);
//         alfabeto1 = alphabet.split('');
//     }
// console.log(alfabeto1);
let alfabeto2 = [];
for (let i = (9 + 13), alphabet = ''; ++i < 36;) {
    alphabet += i.toString(36);
    // console.log(alphabet);
    alfabeto2 = alphabet.toUpperCase().split('');
}
console.log(alfabeto2);
let alfabeto3 = [];
for (let i = 9, alphabet = ''; ++i < 23;) {
    alphabet += i.toString(36);
    // console.log(alphabet);
    alfabeto3 = alphabet.toUpperCase().split('');
}
console.log(alfabeto3);
// abcdefghijklmnopqrstuvwxyz
//# sourceMappingURL=copia.js.map