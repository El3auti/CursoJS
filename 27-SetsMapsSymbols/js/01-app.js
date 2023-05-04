const carrito = new Set()

carrito.add('Camisa')
carrito.add( 'Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')

// Tamanio del set
console.log(carrito.size)

// Ver si esta en el set
console.log(carrito.has('Camisa'))

// Elimina elemento del set
console.log(carrito.delete('Disco #1'))

console.log(carrito)

carrito.forEach( (prod,index) => {
    console.log(`${prod} || ${index}`)
} )

// Vacia el carrito
carrito.clear()

const numeros = [10,20,30,40,10]

const numerosNoDuplicados = new Set(numeros)