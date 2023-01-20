


var array = [5,6,1,8,7,0]

for(let i =0; i<array.length; i++)
{
    for(let j=0; j < array.length-i-1;j++)
    {
        if(array[j] < array[j+1])
        {
            let temporal = array[j];
            array[j] = array[j+1];
            array[j+1]=temporal;
           // console.log(array)
        }
    }
    console.log(array)
}

console.log(array)
    
//}while(!hola)

//4. Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
function repetir(cadena, n)
{   
    return cadena.repeat(n);
}


console.log(repetir('Hola mundo ', 4))
console.assert(repetir('Hola mundo ', 4) == 'Hola mundo Hola mundo Hola mundo Hola mundo ')
console.assert(repetir('Batman ', 3) === 'Batman Batman Batman ')

// 5. Crea una función que reciba una frase como string y devuelva la palabra más larga:
function palabraLarga(str)
{
    let arrayStr = str.split(' ')
    let aux = '';
    for(let pal of arrayStr)
    {
        if(aux == '')
        {
            aux = pal;
        }else if (aux.length < pal.length)
        {
            aux = pal;
        }
    }

    return aux;
}


console.log(palabraLarga('Hola mundo kokokoko gf'))
console.assert(palabraLarga('Hola mundo kokokoko gf') == 'kokokoko')
console.assert(palabraLarga("Erase una vez que se era") === "Erase")

// 6. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.
function primaLetraMayuscula(str)
{
    let aux  = '';
    let strSeprado = str.split(' '); 

    for(let pal of strSeprado)
    {
        if (aux == '')
         aux+= pal[0].toUpperCase() + pal.slice(1);
        else 
         aux+= ' '+ pal[0].toUpperCase() + pal.slice(1);
    }

    return aux;
}

console.log(primaLetraMayuscula('Hola mundo kokokoko gf'))
console.assert(primaLetraMayuscula('Hola mundo kokokoko gf') == 'Hola Mundo Kokokoko Gf')
console.assert(primaLetraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")

// 7. Crea una función que reciba un string y lo devuelva en camelCase (sin terminar)

function camelize(str)
{

    let auxFrase='';

    let separadoStr = primaLetraMayuscula(str).split(' '); 
    let auxstr = separadoStr[0].toLowerCase();

    separadoStr[0] = auxstr;

    for(let pal of separadoStr)
    {
        auxFrase+=pal;   
    }

    return auxFrase;
}

console.log(camelize('Hola mundo kokokoko gf'))
console.log(camelize("Hola a todos que tal"));

console.assert(camelize('Hola mundo kokokoko gf') == 'holaMundoKokokokoGf')
console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

/*
const text = "quiero capitalizar este texto.";

const toCapitalize = (text) => text[0].toUpperCase() + text.substring(1);
const toCapitalizeEveryWord = (text) => {
  return text.split(" ")                      // Separamos en un array cada palabra
    .map(word => toCapitalize(word))          // Aplicamos el capitalizar a cada elemento
    .join(" ");                               // Lo volvemos a unir en un string
}

toCapitalize(text);            // "Los gatos dominarán el mundo."
toCapitalizeEveryWord(text);   // "Los Gatos Dominarán El Mundo."
*/


// Diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

const dado = () =>
            {
                let i=0;
                let contador10=0;
                let contador8=0;
                let contador6=0;
                let contador7=0;
                //while(k < 1000){
                while(i<100)
                {
                    let dado1 = Math.floor(Math.random()*6 + 1);
                    let dado2 = Math.floor(Math.random()*6 + 1);
                   // console.log('dado1: ' + dado1 + ' dado2: ' + dado2);    
                    
                    
                    if ((dado1 + dado2) == 10)
                    {
                       contador10++; 
                    }else if ((dado1 + dado2) == 8)
                    {
                        contador8++; 

                    }else if ((dado1 + dado2) == 6)
                    {
                        contador6++; 

                    }else if ((dado1 + dado2) == 7)
                    {
                        contador7++; 

                    }

                    i++;
                 }

                 return {contador10,contador8, contador6, contador7} ;

            }

console.log(dado());

/*
Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

- Se aplica un 25% cuando:
- Estamos en los meses de invierno 
- Y no es viernes o fin de semana.
**/

function aplicarDescuento(mes, dia, precio)
{
    const mesesInvierno = [1, 2, 3, 12]

    if (dia != 'Viernes' || dia != 'Sábado' || dia != 'Domingo') 
    {
        for(let i=0; i < mesesInvierno.length ; i++)
        {
            if(mesesInvierno[i] == mes)
            {
                return precio * 0.75;
            }
        }


        return precio;
    }
}

console.log(aplicarDescuento(6, 'Jueves', 100))
console.log(aplicarDescuento(5, 'Viernes', 100))
console.log(aplicarDescuento(2, 'Lunes', 100))

