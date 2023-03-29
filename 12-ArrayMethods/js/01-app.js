const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Si queremos ver si tenemos un mes dentro del arreglo podriamos usar .includes()
console.log(meses.includes('Enero'))

//  En caso de un arreglo de objetos la mejor opcion es .some
console.log(carrito.some(prod => prod.nombre === 'Celular'))

//  Some en un arreglo tradicional
console.log(meses.some(mes => mes=== 'Marzo'))
