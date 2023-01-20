// const array1 = [1,2,3,4,5]
// const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]

const array1 = [1,2,3,1,4,5,9];
const array2 = [1,3,5,5,9,10];

const unir = (array, ...arrays) => new Set(array.concat(...arrays));

const unirUno = (arr1, arr2) => new Set(arr1.concat(arr2));


console.info(unirUno(array1, array2));
console.info(unir(array1, array2, array3, array4));


const interseccion = (arr1, arr2) => new Set(arr1.filter(elem => arr2.includes(elem)))

console.info(interseccion(array1, array2));