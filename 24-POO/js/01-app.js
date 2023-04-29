
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre,
        this.saldo = saldo
    }

}


const juan = new Cliente('juan',1000)
console.log(juan)



const ClienteDos = class {
    constructor(nombre,saldo){
        this.nombre = nombre,
        this.saldo = saldo
    }

}

const juan2 = new ClienteDos('juan',1000)
