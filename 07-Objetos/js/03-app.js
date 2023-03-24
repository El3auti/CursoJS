const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true
}

//  Agregar nuevas propiedad al obj

producto.imagen = "ImagenFake.jpg"
console.log(producto)

//  Eliminar propiedad del obj

delete producto.disponible
console.log(producto)
