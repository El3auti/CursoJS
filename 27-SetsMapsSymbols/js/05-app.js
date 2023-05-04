/**
 * Symbols un dato curiosos es que nunca un symbol va a ser igual, las propiedades de un symbol
 * no son iterables, se mantienen de manera "privada"
 */

const sym = Symbol()
const sym2 = Symbol('Aqui puedes describir el symbol')

if(sym === sym2) {
    return 'Son Iguales'
}

const Persona = {}

Persona[sym] = 'SYM'
Persona[sym2] = 'SYM2'
Persona.tipodeCliente = 'Premium'
Persona.saldo = 500
