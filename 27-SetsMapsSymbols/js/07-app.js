/**
 * 
 */
function *CrearGenerador() {
    yield 1
    yield 3*3
    yield true
    yield 'juan'
}

const iterador = CrearGenerador()

console.log(iterador.next())


// Generador paracarrito de compras
function *generadorCarrito ( carrito ) {
    for(let i = 0; i < carrito. length; i++)
        yield carrito [i];
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

const iteradorCarrito = generadorCarrito()
console.log(iteradorCarrito.next())