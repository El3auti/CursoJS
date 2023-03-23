/*
    .concat()
    nos permite unir 2 textos o varibles
*/

const prod = "Monitor"
const prod2 = "20 Pulgadas"

console.log(prod.concat('En Descuentos'))
console.log(prod.concat(prod2))

//  Otras formas de concater:

console.log("El producto" + prod)

/*
    ES6 trajo consigo una mejor forma de concatenar varibles que es con 
    algo llamado Template String o template literal
*/

console.log(`El Producto ${prod} es de ${prod2}`)