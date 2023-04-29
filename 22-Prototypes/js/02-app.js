function ClienteConstructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
}
const Juan = new ClienteConstructor('Juan',20)

function formatearCliente(cliente) {
    const {nombre, edad} = cliente
    return `El Nombre del cliente es ${nombre} y tiene la edad de ${edad}`
}

console.log(formatearCliente(Juan))


function EmpresaConstructor(nombre, saldo, categoria) {
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}


const JuanSA = new ClienteConstructor('JuanSA',200,'Panel')

function formatearEmpresa(Empresa) {
    const {nombre, saldo, categoria} = Empresa
    return `El Nombre del Empresa es ${nombre}, tiene un saldo de ${saldo} y se dedican a ${categoria}`
}

console.log(formatearEmpresa(JuanSA))