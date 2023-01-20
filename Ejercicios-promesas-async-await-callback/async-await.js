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
        
        const empleado = empleados.find( e => e.id === id )?.nombre;
        
        (empleado) 
                ? resolve(empleado)
                : reject(`No existe el empleado ${id}`);

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

const id = 3;

const getInfoEmpleado = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        console.log(empleado , " ---- ", salario)
    } catch (error) {
        console.log(error);
    }
}


getInfoEmpleado(id);