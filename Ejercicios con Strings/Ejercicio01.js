
// Dado un string repetir el primer carácter que se repite.

const primerCaracterrepetido = (cadena) => {
    for(c of cadena)
    {
        let aux = 0;
        for(a of cadena) {
            
            (a === c) && aux++;

            if((a === c) && (aux > 1)){
                return c;
            }
            
        }
    }
}  

//console.log(primerCaracterrepetido('Hola munndo'));


// Dado un string mostrar un array con las las repeticiones de las letras.
// Ejemplo: dado 'HolaMundo' debe devolver: 
// H: 0 || o: 1 || l: 0 || a: 0 || M: 0 || u: 0 || n: 1 || d: 0
           

const CaracteresRepetidos = (cadena) => {
    
    let cadenaAux= "";
    
    for(let i = 0; i < cadena.length; i++)
    {
        let cont = 0;
        
        for(let j = 0; j < cadena.length; j++ ) {
            
            (cadena[i] === cadena[j]) && cont++;

            if(cadena.length - 1 === j){
                if (!cadenaAux.includes(cadena[i]) && cadena[i] !== ' ') {
                    cadenaAux += cadena[i] + ': ' + (cont - 1);

                    if ((cadena.length - 2) !== i)  
                         cadenaAux += ' || ';
                } 
            }
        }
    }

    return cadenaAux;
}  

// console.log(CaracteresRepetidos('HolaMunndo'));