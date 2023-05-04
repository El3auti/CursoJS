import FuncionDefault, { nombreCliente, Ahorro, RetornoDatos, tieneSaldo, Cliente} from "./cliente.js";
import { Empresa } from './empresa.js'

/* console.log(`El cliente: ${nombreCliente} tiene unos ahorros de ${Ahorro} pesos`) */

FuncionDefault()
console.log(RetornoDatos(nombreCliente,Ahorro))
tieneSaldo(Ahorro)

const Juan = new Cliente('Juan',1000)
console.log(Juan.mostrarInformacion())

const empresa = new Empresa('JuanSA',1000,'Venta de peliculas Piratas')

console.log(empresa)
console.log(empresa.mostrarInformacion())