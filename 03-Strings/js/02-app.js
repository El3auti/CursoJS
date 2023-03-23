//  Algunos metodos para los strings:

const producto = "PARA PROBAR METODOS"

/*  
    .length
    Conocer el largo de una cadena 
    (no es un metodo como tal por ello no usar "()" mas bien es una propiedad )
*/

console.log(producto.length)

/*  
    IndexOf()
    nos permite saber que posicion tiene el texto en caso de encontrarlo
    (-1 significa que no lo encontro) 
*/

console.log(producto.indexOf("PARA"))

/*
    Includes()
    nos permite saber si el texto existe
 */

console.log(producto.includes("PROBAR"))