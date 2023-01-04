"use strict";
//     // const tipoMoneda = [
//     //     ['PENNY',     0.01], 
//     //     ['NICKEL',    0.05],
//     //     ['DIME',       0.1],
//     //     ['QUARTER',   0.25],
//     //     ['ONE',          1], 
//     //     ['FIVE',         5],
//     //     ['TEN',         10],
//     //     ['TWENTY',      20],
//     //     ['ONE HUNDRED',100]
//     // ];
// const tipoMoneda = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
// // console.log(valoresDeMonedas);
//     // console.log( tipoMoneda[0][1]);
//     // console.log( tipoMoneda[1][1]);
//     // console.log( tipoMoneda[2][1]);
//     // console.log( tipoMoneda[3][1]);
// const checkCashRegister1 = (price: number, cash: number, cid: [string, number][] ): string => {
//     let montoADevolver = ( cash - price);
//     let montoADevolverGuardado = montoADevolver;
//     let cambio:any =  [];
//     let status = '';
//     let sumarCid: number = 0;
//     let comprobarCid = cid.filter ( (element, index) => element[1] !== 0 ).reverse();
//     comprobarCid.forEach((element, index) => {
//         let denominacionMoneda = element[0];
//         // console.log(denominacionMoneda); 
//         let  totalDineroEnCaja = element[1];
//         // console.log(totalDineroEnCaja);
//         sumarCid = sumarCid + totalDineroEnCaja;
//         let monto = 0;
//         // console.log(tipoMoneda[index]);
//         while (montoADevolver >= tipoMoneda[index] &&  totalDineroEnCaja > 0){
//             monto += tipoMoneda[index];
//             montoADevolver = montoADevolver - tipoMoneda[index];
//             totalDineroEnCaja -= tipoMoneda[index];
//         }
//         if ( monto !== 0){
//             cambio.push([denominacionMoneda, monto])
//         }
//         // console.log(monto);
//     });
//     console.log(`vuelto: ${ montoADevolverGuardado}`);
//     console.log(`precio: ${price}`);
//     console.log(`cash: ${cash}`);
//     console.log(`montoADevolver: ${montoADevolver}`);
//     console.log(`cid: ${cid}`);
//     if ( montoADevolver > 0){
//         status = 'INSUFFICIENT_FUNDS';
//         cambio = [];
//     } else if ( montoADevolver == 0 && montoADevolverGuardado == sumarCid) {
//         status = 'CLOSED';
//         cambio = cid;
//     }else{
//         status = 'OPEN';
//     }
//     // console.log(sumarCid);//primera condicion total del cid  
//     // console.log( sumarCid);
//     // console.log( {cid});
//     return `status: ${status}  CAMBIO: ${cambio}`;
// };
// console.log(checkCashRegister1(97, 100, [[ "PENNY",1.01 ],[ "NICKEL", 0 ], [ "DIME",0 ], [ "QUARTER", 0 ], [ "ONE", 2000 ], [ "FIVE", 0 ],[ "TEN", 0 ], [ "TWENTY", 0 ], [ "ONE HUNDRED", 0 ]]));
//# sourceMappingURL=ejercicio5.js.map