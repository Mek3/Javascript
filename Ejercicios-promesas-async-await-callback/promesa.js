const { resolve } = require("path");

const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre
        
        empleado ? resolve(empleado): reject(`No existe el empleado ${id}`)
        
            

    })

    return promesa;
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario =  salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`El salario con id: ${id} no exite.`)
    })
}


const id = 2;

// getEmpleado(id)
//         .then(empleado => console.log(empleado))
//         .catch(err => console.log('err: ' + err))

// getSalario(id)
//         .then(salario => console.log(salario))
//         .catch(err => console.log(err));

// getEmpleado(id)
//         .then(empleado => {
//             getSalario(id)
//                 .then(salario => console.log(salario, ' ', empleado))
//                 .catch(err => console.log(err));
//         })
//         .catch(err => console.log('err: ' + err))

let nombre;
getEmpleado(id)
        .then(empleado => {
            nombre = empleado
           return getSalario(id);
        })
        .then(salario => console.log(salario, ' ', nombre))
        .catch(err => console.log('err: ' + err))