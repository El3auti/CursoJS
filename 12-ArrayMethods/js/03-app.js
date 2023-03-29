const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un foreach podemos hacer un reduce asi:

let total = 0
carrito.forEach(prod => total+= prod.precio)
console.log(total)
                          //total,actual
console.log(carrito.reduce((total,prod) => total + prod.precio, 0)) //0 es el inicio

/**
 * El reduce lo que hace basicamente es tomar una gran cantidad 
 * de datos y entregar un unico resultado
 */