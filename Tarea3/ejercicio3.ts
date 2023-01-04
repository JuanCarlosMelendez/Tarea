
const ROT13 = ( cadena:string ):string => {

    const alfabeto: string[] = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');
    const arrayCifrador: string[] = ("NOPQRSTUVWXYZABCDEFGHIJKLM").split('');
    
    let stringCodificado: string = cadena;

    let arrayEntrada: string[] = stringCodificado.split('');
    // console.log(`arrayEntrada: ${arrayEntrada}\n`);

    let arrayDecodificada: string[] = []; 
    let stringDecodificado:string = '';

        for (let j in arrayEntrada){
            // console.log(`arrayCifrador: ${arrayCifrador}`)
            const esUnaLetra = alfabeto.some( function(valor){
                console.log(`valor: ${valor}`)

            return valor == arrayEntrada[j]
            })
            console.log(`esUnaLetra: ${esUnaLetra}`);
            if(esUnaLetra === true){

                let idx:number = arrayCifrador.indexOf(arrayEntrada[j]);
                arrayDecodificada.push(alfabeto[idx]);

            }else {
                arrayDecodificada.push(arrayEntrada[j]).toString();
            }

             stringDecodificado = arrayDecodificada.join('');
        }
    return `\n    arregloCifrador: ${ arrayCifrador }\n\n    alfabeto: ${ alfabeto }\n
    stringCodificado: ${stringCodificado}\n\n    stringDecodificado: ${stringDecodificado}\n`;
}

console.log(ROT13('12ABC,*QLL'));
