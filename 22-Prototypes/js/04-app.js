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




function PersonaConstructor(nombre,edad,telefono) {
    ClienteConstructor.call(this,nombre,edad)
    this.telefono = telefono
}

PersonaConstructor.prototype = Object.create(ClienteConstructor.prototype)
PersonaConstructor.prototype.constructor = ClienteConstructor
const Juan = new PersonaConstructor('Juan',10,101010)

console.log(Juan.DatosCliente())