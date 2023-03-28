const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Cable usb c', precio: 100},
    {nombre: 'Tablet Amazon', precio: 400 },
    {nombre: 'iPhone 14 pro max', precio:1400},
]


const nuevoArray = carrito.map(Element => `Articulo: ${Element.nombre} Precio: ${Element.precio}`)
carrito.forEach(element => console.log( `Articulo ${element.nombre} Precio: $${element.precio}`));


console.log(`el array con el .map es este ${nuevoArray}`)
