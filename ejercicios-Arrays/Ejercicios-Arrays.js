//-------------------- Ejercicio 1 -------------------- 
//  Dado un arreglo de enteros en orden ascendente y un numero suma,
//  devolver las combinaciones (de dos números) que den como resultado valor suma dado. 
// Ejemplo: [0,1,2,3,4,5,6,7] y suma: 24 ==> No devuelve ninguno.
// Ejemplo: [0,1,2,3,4,5,6,7] y suma: 4 ==> 0 + 4 = 4
                                        //  1 + 3 = 4
                                        //  2 + 2 = 4
                                        //  3 + 1 = 4
                                        //  4 + 0 = 4

const numerosCoincidentesConSuma = (array, suma) => {
    let aux= "";
    for(let i = 0; i < array.length - 1; i++)
    {
        for (let j = 0; j <array.length; j++) {
            if((array[i] + array[j]) === suma) {
                aux += array[i] + ' + ' + array[j] + ' = ' + suma + '\n';
            }
        }
    }

    return aux;
}

//console.log(numerosCoincidentesConSuma([0,1,2,3,4,5,6,7], 4));


//-------------------- Ejercicio 2 -------------------- 
// Dado un array de enteros mover todos sus ceros a la derecha sin mover sus otros valores.
// [0, 1, 3, 0, 4, 0, 23, 2, 0] ==> [2, 1, 3, 23, 4, 0, 0, 0, 0]

const pasarCerosDerecha = (array) => {
    
    for (let i = 0; i < array.length; i++) {
        
        let encontrado = false;

        if(array[i] === 0){
        
            for (let j = (array.length - 1); j > 0 && !encontrado; j--) {
                
                if ((array[j] !== 0) && (j > i ))
                {
                    let aux = array[j];
                    array[j] = array[i];
                    array[i] = aux;
                    
                    encontrado = true;
                }
            }
        }
    }

    return array;
}


//console.log(pasarCerosDerecha([0,1,3,0,4,0,23,2,0])); // ==> [2, 1, 3, 23, 4, 0, 0, 0, 0]
//console.log(pasarCerosDerecha([1,0,0,0,0,0,0,0,1])); // ==> [1, 1, 0, 0, 0, 0, 0, 0, 0]


//-------------------- Ejercicio 3 -------------------- 
// Dado un array de enteros mover todos sus ceros a la derecha sin mover sus otros valores.
// [0, 1, 3, 0, 4, 0, 23, 2, 0] ==> [1, 3, 4, 23, 2, 0, 0, 0, 0]

const pasarCerosDerechaSinMoverSusOtrosValores = (array) => {
    let array1 = [], array2 = [];
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] === 0)
            array1.push(array[i]); // Ceros
         else 
            array2.push(array[i]); // No ceros
    }



    return array2.concat(array1);
}

// console.log(pasarCerosDerechaSinMoverSusOtrosValores([0,1,3,0,4,0,23,2,0])); // ==> [1, 3, 4, 23, 2, 0, 0, 0,  0]