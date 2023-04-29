class Cliente{
    constructor(nombre,saldo,privada){
        this.nombre = nombre,
        this.saldo = saldo,
        this.#privada = privada
    }

    getPropiedadesPrivadas(privada){
        return this.#privada
    }
    mostrarInformacion(){
        return`Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }

    static Bienvenido(){
        return 'Bienvenido al cajero!'
    }
}

const juan = new Cliente('Juan',1000)