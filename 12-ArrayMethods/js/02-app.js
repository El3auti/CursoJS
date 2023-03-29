const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Como buscar el index con foreach

meses.forEach((mes, index) => {
    if(mes =='Abril'){
        console.log(`Encontrado en el indice ${index}`)
    }
})

//  FindIndex te dira el indice, es decir la ubi del elemento dentro del arreglo

console.log(meses.findIndex(mes => mes === 'Abril'))