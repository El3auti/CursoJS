
function sumar(n1,n2){
    return n1 + n2
}

let resultado = sumar(20+10)

console.log(resultado)

//  Ejemplo mas avanzado

let total = 0

function agregarCarrito(precio){
    return total+= precio
}

function calcularImpuesto(total){
    return total *1.75

}

agregarCarrito(200)
agregarCarrito(1020)

const totalPagar = calcularImpuesto(total)
console.log(`El total a pagar es de ${totalPagar}`)

console.log(total)

