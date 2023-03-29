const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log(carrito.filter(prod => prod.precio > 400))
console.log(carrito.filter(prod => prod.nombre === 'Tablet'))


/**
 * Filter va a crearte un arreglo basado en un parametro que es evaludao
 * es uno de los mas utilizados
 */