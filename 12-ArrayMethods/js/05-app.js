const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un foreach el .find seria algo asi:

let resultado = ''
carrito.forEach((prod,index) => {
    if (prod.nombre === 'Teclado') {
        resultado = carrito[index]
    }
})
console.log(resultado)

console.log(carrito.find(prod => prod.nombre === 'Teclado'))