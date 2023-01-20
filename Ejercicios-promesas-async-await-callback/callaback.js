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


const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => e.id === id )?.nombre

    if ( empleado ) {
        callback( null, empleado );
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(elem => elem.id===id)?.salario;
    if (salario) {
        callback(null, salario);
    }else {
        callback(` El empleado ${empleados.find(elem => elem.id===id)?.nombre} no cuenta con salario`)
    }
}

const id = 2;


getEmpleado(id, ( err, empleado ) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }


    getSalario(id, (err, salario) => {
        if (err) 
        {
            return console.info(err);    
        }

        return console.log(`El/la empleado/a ${empleado} tiene un salario: ${salario}`);
    })
})



