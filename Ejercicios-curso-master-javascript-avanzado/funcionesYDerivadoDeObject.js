/*1- Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería.
 Para ello, vamos a crear un método crear un método interno ordenarPorNombre que ordene los títulos de la librería por su título.*/

  const estanteria1 = {
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
      },
    ],
    log() {
      const mensaje = this.libros.sort((a, b) => { 
        if (a.nombre.length > b.nombre.length)
            return 1;
        else if (a.nombre.length < b.nombre.length)
            return -1;

        return 0;
        })

        console.log(mensaje)
    }
  }


  //estanteria.log()

  /* 2- Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que le dejen libros para pasar el rato
    y hemos decidido dejarle los libros de nuestra estantería que ya hemos leído.
    Crear una propiedad interna prestamo que sea booleana que al cambiar a true almacene en otra propiedad interna librosPrestados 
    los libros que hemos leído y los quite del total de libros. Ambas propiedades pertenecen al objeto estanteria.
   */

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
  prestamo: false,
  librosPrestados: [],
  set prestamo(nuevoValor) {
    if (nuevoValor) {
      this.librosPrestados = this.libros.filter(libro => libro.leido);
      this.libros = this.libros.filter(libro => !libro.leido)
    } else {
      this.libros = [...this.libros, ...this.librosPrestados]
      this.librosPrestados = []
    }
  },
  log() {
    const { libros } = this;
    let resultado = ''
    for (const libro of libros) {
      const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
      resultado = `${resultado}
${prefijo} leído ${libro.nombre} de ${libro.autor}`
    }
    console.log(resultado)
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
    const elementoRandom = librosNoLeidos[indiceRandom]
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  },
  ordenarPorNombre() {
    this.libros = this.libros.sort((a, b) => {
      if(a.nombre < b.nombre) { return -1; }
      if(a.nombre > b.nombre) { return 1; }
      return 0;
    })
  }
}

