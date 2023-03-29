const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Si quieres agregar un elemento al final de tu arreglo que es un string hacemos asi:
console.log([...meses,'Agosto'])
// esto no modifica el arreglo como lo haria push y es muy util (programacion funcional)
meses.push('Agosto')
console.log(meses)

//Al inicio seria asi:
console.log(['Diciembre',...meses])
meses.unshift('Diciembre')
console.log(meses)

