

const usuario = false
const pagar = true

//  El operador && revisa que se cumpla ambas condiciones

if (usuario && pagar) {
    console.log('Tu pedido se hizo con exito...')
} else {
    console.log('hubo un error con tu pago.')
}

if (usuario && pagar) {
    console.log('Tu pedido se hizo con exito...')
}else if (!usuario){
    console.log('Inicia sesion para realizar el pedido')
}else if (!pagar){
    console.log('Fondos Insuficientes')
}else{
    console.log('hubo un error con tu pago')
}