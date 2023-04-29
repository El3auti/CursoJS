class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre,
        this.saldo = saldo
    }


    mostrarInformacion(){
        return`Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }

    static Bienvenido(){
        return 'Bienvenido al cajero!'
    }
}


const juan = new Cliente('juan',1000)
console.log(juan.mostrarInformacion())
console.log(juan)



const ClienteDos = class {
    constructor(nombre,saldo){
        this.nombre = nombre,
        this.saldo = saldo
    }
    mostrarInformacion(){
        return`Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }
}

const juan2 = new ClienteDos('juan',1000)
console.log(juan2.mostrarInformacion())