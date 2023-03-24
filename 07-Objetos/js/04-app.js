const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true
}


const nombre = producto.nombre
console.log(nombre)

const { disponible, precio} = producto
console.log(`Disponible: ${disponible} | El precio que tiene es de ${precio} `)

