   const denominacionMoneda = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].reverse();
   console.log(`denominacionMoneda: ${denominacionMoneda}`);


    const checkCashRegister = ( precio:number, pagoEnEfectivo: number, cid: [string, number][]):string => {

        let vuelto: number = pagoEnEfectivo - precio;
        let resto: number = vuelto;
        let sumatoriaCid: number = 0;
        let status: string = '';
        let change: [string,number][] = [];
        console.log(`\nvuelto: ${vuelto}\n`);
        console.log(`cid: ${cid}\n`);
        
        //Reducir e invertir el cid
        // Va a invertir la matriz y luego comprobar si existe o no mas monto en el elemento de dicha matriz para restar o no y debera pasar al siguiente elemento

        let cidInvertido = cid.filter ( element => element[1] !== 0 ).reverse();
        console.log(`cidInvertido: ${cidInvertido}`)

        //Obtener el valor de sumatoriaCid
        cidInvertido.forEach ((element, index) => {
            let denominacion = element [0];
            let sumatoriaCadaDenominacion = element[1];
            sumatoriaCid = sumatoriaCid + element[1];
            // console.log(`index: ${index}, denominacion: ${denominacion}, sumaDenominacion: ${sumatoriaCadaDenominacion}, denominacionMoneda: ${denominacionMoneda[index]}`);

            let cambioSacadoDeCaja: number = 0;
            //Logica de la operacion de resto de caja

            while ( resto >= denominacionMoneda[index] && sumatoriaCadaDenominacion > 0){

                //Cantidad de cambio sacado de caja al dar el vuelto de cada denominacion
                cambioSacadoDeCaja = cambioSacadoDeCaja + denominacionMoneda[index];

                //Calculo en cada pasada del ciclo cuanto del vuelto se ha entregado
                resto = Math.floor(resto - denominacionMoneda[index]); //Sino pongo el Math.floor nunca va a dar el 0 debido a la cantidad de decimales que maneja el programa
                console.log((resto - denominacionMoneda[index]));

                //Calcular cuanto de cada denominacion se ha extraido para dar el vuelto en cada pasada del ciclo
                //En el caso que se acaben los billetes de una denominacion saltara a la siguiente intentando dar el vuelto
                sumatoriaCadaDenominacion = sumatoriaCadaDenominacion -  denominacionMoneda[index];
                console.log(`resto: ${resto}`);
                // console.log(`monto en while: ${cambioSacadoDeCaja}`);
                // console.log(`sumCadaDenominacion: ${sumatoriaCadaDenominacion}`)
                // console.log(`sumatoriaCadaDenominacion: ${sumatoriaCadaDenominacion}`)
            }

            //Para imprimir lo que quedo del cambio en caja luego de la compra (cid)
            change.push([denominacion,cambioSacadoDeCaja]);
        });

        // Determinacion del status

        if (resto > 0 ){
            // resto > 0, significa que no se tiene en el cid la cantidad exacta para restarle 
            // al vuelto los elemento del cid y que de cero, osea no se puede dar vuelto
            status = "INSUFFICIENT_FUNDS";
            change = [];
        } else if ( resto == 0 && vuelto == sumatoriaCid){
            status = "CLOSED";
        }else {
            status = "OPEN";
        }

        

        return `STATUS: ${status}, change:  ${change}`;
    } 

    console.log(checkCashRegister(120, 500, [[ "PENNY", 1 ],[ "NICKEL", 4 ], [ "DIME", 1 ], [ "QUARTER", 1 ], [ "ONE", 1 ], [ "FIVE", 5 ],[ "TEN", 10 ], [ "TWENTY", 60 ], [ "ONE HUNDRED", 300 ]]));