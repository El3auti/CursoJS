
function crearIterador(carrito) {
    let i = 0

    return {
        siguiente: () =>{

            const fin = ( i >= carrito.length)
            const valor = !fin ? carrito[i++] : undefined

            return {
                fin,
                valor
            }

        } 
    }

}


const carrito = ['p1','p2','p3']

const recorrer = crearIterador(carrito)

console.log(recorrer.siguiente())