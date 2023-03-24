"use strict"  //Exige que cumplas ciertas reglas para que funcione tu codigo

const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m x 1.5m'
}

console.log(Object.assign(producto, medidas))

//  Spread operator o Rest operator

console.log({...producto,...medidas}) //    Por lo general se utiliza esta 