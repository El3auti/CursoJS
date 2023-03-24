"use strict"  //Exige que cumplas ciertas reglas para que funcione tu codigo

const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true
}

Object.freeze( producto ) // Hace que el obj sea tratado como una const, no se puede modificar

producto.disponible = false; // No te permite modificar ninguna variable del obj

console.log(Object.isFrozen(producto)) //Te permite saber si un obj esta congelado o no


