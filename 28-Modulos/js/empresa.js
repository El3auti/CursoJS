import { Cliente } from './cliente.js'

export class Empresa extends Cliente {
        constructor(nombre,ahorro,categoria){
            super(nombre,ahorro)
            this.categoria = categoria
        }
        mostrarInformacion(){
            return `El cliente: ${this.nombre} || Ahorro una cantidad de  ${this.ahorro} pesos 
                    || Se dedican a ${this.categoria}`
        }
    }