
//  Object Literal SE UTILIZA MAS ESTE
const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true,
}

//  Object Constructor
function Producto(nombre,precio) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const prod2 = new Producto("Tablet 20", 200)
