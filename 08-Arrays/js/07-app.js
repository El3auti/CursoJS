const carrito = []


//  Definir un prod
const prod = {
    nombre: "Monitor 32 Pulgadas",
    precio: 4000
}
const prod2= {
    nombre: "Monitor 19 Pulgadas",
    precio: 2000
}
const prod3 = {
    nombre: "Monitor 60 Pulgadas",
    precio: 8000
}

carrito.push(prod)
carrito.push(prod2)
carrito.unshift(prod3)

//  Eliminar el primer elemento
//carrito.shift()

//  Eliminar el ultimo elemento
//carrito.pop()

//Eliminar un elemento del centro
carrito.splice(1,1) /*
                     * El segundo parametro es que tantos elementos vamos a borrar
                     * 0 significa nada, entonces seria igual a no tener nada, si no le
                     * pasas un valor a borrar todos a partir de ahi
                     */
console.table(carrito)