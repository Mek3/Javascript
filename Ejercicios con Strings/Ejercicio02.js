

// Usando funciones de javascript
const isPalindromoConAyuda =  (cadena) => {

    const invertido = cadena.split('').reverse().join('');

    return (cadena === invertido);
}


console.log(isPalindromoConAyuda("bob"))
console.log(isPalindromoConAyuda("allivessevilla"))
console.log(isPalindromoConAyuda("inicio"))


//Sin usar nada, hecho a la antigua.

const isPalindromoSinAyuda = (cadena) => {
    let ok = false;
    let j = cadena.length - 1;
    
    for(let i = 0; i < cadena.length && j > 0; i++)
    {
        if (cadena[i] !== cadena[j]) {
            return false;
        } else {
            ok = true;
        }

        j--;
    }

    return ok;
}


// console.log(isPalindromoSinAyuda("bob"))
// console.log(isPalindromoSinAyuda("allivessevilla"))
// console.log(isPalindromoSinAyuda("bobo"))


