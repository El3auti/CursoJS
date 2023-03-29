
let tareas = ['Comer', 'Estudiar','Hacer Deporte', 'Ir a la escuela']

tareas.forEach((tareas,index) => console.log(`${index}: ${tareas}`))

const carrito = [
    {id: 1, name: 'Libro'},
    {id: 2, name: 'Camisa'},
    {id: 3, name: 'Disco'},
]

carrito.forEach(prod => console.log(`Agregaste el prod ${prod.name}`))

/**
 * Lo mismo aplica para los maps, la sintaxis, solo que el map te crea un nuevo array
 * si solo queremos recorrer usamos el foreach, si queremos crear un nuevo arreglo el
 * map sera mil veces mejor 
 */