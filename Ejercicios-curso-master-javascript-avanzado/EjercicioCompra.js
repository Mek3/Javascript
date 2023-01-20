
var hola = false
var op=0
var productos = []
var precioTotal= 0

var articulo={}

function menu()
{
    console.log("1- Artículo 80 EUR")
    console.log("2- Artículo 5 EUR")
    console.log("3- Artículo 82 EUR")
    console.log("4- Artículo 18 EUR")
    console.log("5- Precio total ")
    console.log("Opción:");
}

function obtenerPrecio(op)
{
    if(op== 1)
    {
        return 80;
    }else if(op== 2)
    {
        return 5;
    }else if(op== 3)
    {
        return 82;
    }else if(op== 4)
    {
        return 18;
    }else {
        return 0;
    }
    
}

    menu()
    
    const stdin = process.openStdin();

    stdin.addListener("data", (data) => {
    menu()
        op = data.toString();
        if(op>0 && op<5){
            precioTotal= precioTotal+ obtenerPrecio(op);
            console.log("aqui entra" + precioTotal + " " + obtenerPrecio(op) + " " + op)
            //productos.addListener(op)
        }
        else if (op == 5)
        {
            /*productos.forEach(element => {
                precioTotal +=elem
            });*/
           console.log(precioTotal)

           process.exit();
        }
   
    
})
