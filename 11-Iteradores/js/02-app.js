
for (let i = 0; i <= 20; i++) {
    if (i === 5) {
        console.log('Estamos en el 5.....BREAK')
        break
    }
    console.log(`Numero: ${i}`)
}

for (let i = 0; i <= 20; i++) {
    if (i === 5) {
        console.log('Estamos en el 5.....CONTINUE')
        continue
    }
    console.log(`Numero: ${i}`)
}

const carrito = [
    { nombre: "monitor hp", precio: 100, descuento:true},
    { nombre: "monitor samsung", precio: 200, descuento:false},
    { nombre: "monitor LG", precio: 300, descuento: false},
    { nombre: "imonitor ", precio: 400, descuento:false},
    { nombre: "monitor Asus", precio: 500, descuento:true},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento, APROVECHA!`)
        continue
    }
    console.log(carrito[i].nombre)
}