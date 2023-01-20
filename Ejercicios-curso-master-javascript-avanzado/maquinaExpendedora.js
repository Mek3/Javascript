/*
Práctica 1 - Diseña un script para gestionar por consola una máquina expendedora

Características:

- Solo los usuarios registrados pueden usar la máquina
- El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
- Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna.
- La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
- Para agilizar la reposición de lo consumido... la maquina debe controlar en stock
 */

const { openStdin } = require("process");

const maquina = {
    usuarios: [{
        user: 'mek3',
        pass: '1234',
        puntos: 150
    },
    {
        user: 'me3',
        pass: 'aaa',
        puntos: 8
    }, 
    {
        user: 'mks',
        pass: '333',
        puntos: 20
    }, 
    {
        user: 'mar',
        pass: '66',
        puntos: 0
    }],
    
    productos:[
        {
            nombre: 'Chocolate', 
            unidades: 5,
            precio: 6
        },
        {
            nombre: 'Zumo', 
            unidades: 2,
            precio: 4
        },
        {
            nombre: 'Coca cola', 
            unidades: 0,
            precio: 5
        },
        {
            nombre: 'Sandwich', 
            unidades: 15,
            precio: 15
    }],
    iniciarSesion(user, clave)
    {
        return this.usuarios.find(u => (user === u.user && clave === u.pass));
    }
    ,
    comprarProducto(id, usuario)
    {
        
        if (this.usuarios.find(u => (usuario.user === u.user && usuario.pass === u.pass))){
            const usuax = this.usuarios.filter(u => (usuario.user === u.user && usuario.pass === u.pass))
        for(let i=0; i<this.productos.length; i++)
        {
            if(id == i)
            {
                if (usuax[0].puntos > this.productos[i].precio)
                {
                    if(this.productos[i].unidades >= 1) {
                        this.productos[i].unidades--;
                    } else 
                    {
                        throw new Error("No hay stock suficiente.")
                    }
                } else
                {
                    throw new Error("Usuario no tiene suficientes puntos");
                }
            }
        }
    }else
        {
            throw new Error("Error al iniciar Sesión" + usuario)
        }
    },
    reponerProducto(id, cantidad)
    {
        const {productos}= this;
        for(let i=0; i<productos.length; i++)
        {
            if(id == i)
            {
                productos[i].unidades + cantidad;
            }
        }
    },
    getPrecioproducto(id)
    {
        const {productos}= this;

        return productos[i].precio;
    }
}

function menu()
{
    console.log('Seleccionar producto: ');
    console.log('1- Chocolate');
    console.log('2- Zumo');
    console.log('3- Coca cola');
    console.log('4- Sandwich');
    console.log('5- Pagar y salir');
}


try {
    maquina.productos.forEach(p => console.log(p))
    maquina.comprarProducto(1,{
        user: 'mek3',
        pass: '1234',
        puntos: 10
    })
    maquina.comprarProducto(1,{
        user: 'mek3',
        pass: '1234',
        puntos: 10
    })
    maquina.productos.forEach(p => console.log(p))

} catch (error) {
    
    console.log(error.toString())
}

/*
const login = () => {
    const stdin = process.openStdin();
    stdin.addListener("data", (data) => {

        maquina.iniciarSesion()
        process.exit();
    }
}
//stdin.addListener("data", (data) => {
    //
function comprarProducto(){
    menu()
    const stdin = process.openStdin();
    stdin.addListener("data", (data) => {
        menu()
        op=data.tostring();

        if(op > 0 && op < 5)
        {
            if (maquina.mostrarPrecio > maquina.
        }

        
})
}*/