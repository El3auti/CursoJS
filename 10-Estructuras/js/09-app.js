
const auth = false
const pagar = false

console.log(auth ? 'Si esta auth': 'No esta auth')

// El OR y el && tambien se puede utilizar en el ternario

console.log(auth && pagar ? 'Si esta auth': 'No esta auth')

// Ternario anidado...

console.log( auth ? pagar? 'Si puede pagar' : 'Esta auth pero no puede pagar' : 'No esta auth')

