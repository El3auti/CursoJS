const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Cable usb c', precio: 100},
    {nombre: 'Tablet Amazon', precio: 400 },
    {nombre: 'iPhone 14 pro max', precio:1400},
]

/**
 *  Muy similar al forEach existe un array metod llamado map,
 *  la diferencia es que map te crea un array nuevo
 */

const nuevoArray = carrito.map(Element =>{
    return `Articulo: ${Element.nombre} Precio: ${Element.precio}`
})

const nuevoArray2 = carrito.forEach(function(element){
    return `Articulo ${element.nombre} Precio: $${element.precio}`
});


console.log(`el array con el .map es este ${nuevoArray}`)
console.log(`el array con el forEach es este ${nuevoArray2}`)