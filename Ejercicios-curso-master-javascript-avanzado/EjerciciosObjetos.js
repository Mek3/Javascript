

const estanteria = 
{
    libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
      },
      {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false,
      },
      {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: true,
      },
      {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false
      },
      {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
      },
      {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
      }],
    log(){
        const {libros} = this;
        let leidos = 'Ya has leído ';
        let noLeidos = 'Aun no has leído ';
        
    
        for ( const libro of libros)
        {
            const okLeido= libro.leido; 
            if (okLeido)
            {
                leidos+=  libro.nombre + ' de ' + libro.autor + ' ';
            } else {
                noLeidos+= libro.nombre + ' de ' + libro.autor + ' ';
            } 
    
        }
        return [leidos, noLeidos];
    }, 
    sugerencia()
    {
        const {libros} = this;
        var noleidos=[1, 2];
        
        for(let i= 0; i < libros.length; i++)
        {
            if(!libros[i].leido)
            {
                noleidos.push(i);
            }
        }
        return libros[noleidos[Math.floor(Math.random() * noleidos.length)]];
    }
}

/*function LibrosLeidos(){
    let leidos = 'Ya has leído ';
    let noLeidos = 'Aun no has leído ';

    for ( let libro of estanteria.libros)
    {
        if (libro.leido)
        {
            leidos+=  libro.nombre + ' de ' + libro.autor + ' ';
        } else {
            noLeidos+= libro.nombre + ' de ' + libro.autor + ' ';
        } 

    }
    return [leidos, noLeidos];
}*/

console.log(estanteria.log())
console.log(estanteria.sugerencia())
/*
const estanteria = {
    libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    }],
    log(){
        const {libros} = this;
        let leidos = 'Ya has leído ';
        let noLeidos = 'Aun no has leído ';
        
    
        for ( const libro of libros)
        {
            if (libro.leido == true)
            {
                leidos+=  libro.nombre + ' de ' + libro.autor + ' ';
            } else {
                noLeidos+= libro.nombre + ' de ' + libro.autor + ' ';
            } 
    
        }
        return [leidos, noLeidos];
    }
    /*log() {
      const { libros } = this;
      let resultado = ''
      for (const libro of libros) {
        const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
        resultado = `${resultado}
  ${prefijo} leído ${libro.nombre} de ${libro.autor}`
      }
      console.log(resultado)
    }*///,
  /*  sugerencia() {
      const librosNoLeidos = this.libros.filter(libro => !libro.leido)
      const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
      const elementoRandom = librosNoLeidos[indiceRandom]
      console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
    }
  }

console.log(estanteria.log());*/