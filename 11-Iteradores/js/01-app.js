
for (let i = 0; i <= 10; i+=2) {
    console.log(`Numero ${i}`)
}


// Como saber si un numero es par o impar
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`Numero ${i} es PAR`)
    }
    console.log(`Numero ${i} es IMPAR`)
}

const carrito = [
    { nombre: "monitor hp", precio: 100},
    { nombre: "monitor samsung", precio: 200},
    { nombre: "monitor LG", precio: 300},
    { nombre: "imonitor ", precio: 400},
    { nombre: "monitor Asus", precio: 500},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre)
    
}