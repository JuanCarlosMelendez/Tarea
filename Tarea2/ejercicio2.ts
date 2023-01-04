let convertir = (numero:  number , resultado = ''): string => {
   const romanos: { [i: string ]: number } = {
       M:  1000, 
       CM:  900, 
       D:   500, 
       CD:  400, 
       C:   100,
       XC:   90,  
       L:    50,  
       XL:   40,  
       X:    10,
       IX:    9,   
       V:     5,   
       IV:    4,   
       I:     1,
     };
     for (let i in romanos) {
      //Uso del for in visto en el curso de typescript
       if (numero >= romanos [ i ]) {
         if (numero !== 0) {
          console.log(`numero en if !==0: ${i}`);
           return convertir(numero - romanos[i], resultado + i);
           //aqui se setean los parametos de la funcion para luego mandar a llamar la suma de parametros correspondientes los numeros romanos
           //si fuera 12 el numero convertir quedaria como convertir( 12, XII), y mando a return solo el XII 

         }
       }
       console.log(`i: ${i}`);
       console.log(`romanos[i]: ${romanos[i]}`);
       console.log(`numero: ${numero}`);
     }
     return resultado;
   };
console.log(convertir ( 12 ));

