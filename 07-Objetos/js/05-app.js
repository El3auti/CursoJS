const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true,
    otroObjeto:{
        peso: '10kg',
        otrodato: 'dato random',
        fabricado:{
            pais:'Arg',
            colonia:'villa 31'
        }
    }
}

console.log(producto.otroObjeto)
console.log(producto.otroObjeto.otrodato)
console.log(producto.otroObjeto.fabricado.colonia)

