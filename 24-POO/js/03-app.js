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


//Herencia
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo)
        this.telefono = telefono,
        this.categoria = categoria
    }
    static Bienvenido(){    //Reescribir metodos
        return 'Bienvenido al cajero de empresas!'
    }
}


const juan = new Cliente('juan',1000)
const empresaJuan = new Empresa('juansl',20000,193913913,'cafe')
