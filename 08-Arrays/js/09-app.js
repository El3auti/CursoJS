const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Cable usb c', precio: 100},
    {nombre: 'Tablet Amazon', precio: 400 },
    {nombre: 'iPhone 14 pro max', precio:1400},
]

//  Recorrer un arreglo de la forma tradicional y mostrar el contenido
for (let i = 0; i < carrito.length; i++) {
    console.log(`Articulo ${carrito[i].nombre} Precio: $${carrito[i].precio}`)  
}

//  ForEach
carrito.forEach(element => {
    console.log(`Articulo ${element.nombre} Precio: $${element.precio}`)  
});
