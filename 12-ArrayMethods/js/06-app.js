const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un foreach every seria algo asi:

let cumple = true

carrito.forEach(prod =>{
    if (prod.precio > 700) {
        cumple = false;
    }
})
console.log(cumple)

// con every()

console.log(carrito.every(prod => prod.precio < 1000)) //Mil se cumple, 700 no