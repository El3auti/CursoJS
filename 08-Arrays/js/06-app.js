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

let resultado = [...carrito, prod]
resultado = [...resultado, prod2]
resultado = [prod3, ...carrito]


console.table(resultado)