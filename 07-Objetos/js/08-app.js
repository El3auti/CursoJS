"use strict"  //Exige que cumplas ciertas reglas para que funcione tu codigo

const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true
}


Object.seal(producto) /**
                      * Sella el objeto, permite modificar las variables que tiene dentro
                      * pero no permite agregar nuevas ni eliminar las que ya tiene dentro
                      */

producto.disponible = false

producto.imagen = "img.jpg"
delete producto.precio

console.log(Object.isSealed(producto))
