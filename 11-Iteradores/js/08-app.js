
let automovil = {
    modelo: 'camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}

for(let auto in automovil){
    console.log(`${auto}:${automovil[auto]}`)
}

/**
 *  El for in va a iterar sobre las propiedades de un objeto
 * ----------------------------------------------------------
 *  Ejemplo con el for of
 */

const carrito = [
    {id: 1, name: 'Libro'},
    {id: 2, name: 'Camisa'},
    {id: 3, name: 'Disco'},
]

for(let prod of carrito){
    console.log(`Compraste el producto: ${prod.name}`)
}
