
/*
    La mejor manera para estas cosas es usar un IIFE 
 
    (function () {
        console.log('Desde in IIFE')
        const nombreCliente = 'Juan'

    })() 
*/


export const nombreCliente = 'Juan'
export const Ahorro = 20000


export function RetornoDatos(cliente,ahorros) {
    return `El cliente: ${cliente} || Ahorro una cantidad de  ${ahorros} pesos`
}

export function tieneSaldo(ahorros) {
    if (ahorros > 0) {
        console.log('tiene saldo')
    }else{
        console.log('no tienes saldo :(')
    }
}

export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre,
        this.ahorro = ahorro
    }

    mostrarInformacion(){
        return `El cliente: ${this.nombre} || Ahorro una cantidad de  ${this.ahorro} pesos`
    }
}

export default function FuncionDefault() {
                    console.log('Esto es un export default')
                }