function ClienteConstructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
}

ClienteConstructor.prototype.tipoCliente = function (){
    let tipo;

    if (this.edad >= 60) {
        tipo = 'Jubilad@'
    }else if (this.edad >= 18){
        tipo = 'Mayor de edad'
    }else{
        tipo = 'Menor de edad'
    }
    return tipo
}

ClienteConstructor.prototype.DatosCliente = function (){
    return `El cliente se llama ${this.nombre}, tiene ${this.edad} y es ${this.tipoCliente()}`
}

const Juan = new ClienteConstructor('Juan',60)

console.log(Juan.tipoCliente())
console.log(Juan.DatosCliente())