//Object Literal, no son dinamicos ni reutilizables
const clienteLiteral = {
    nombre:'pedro',
    edad:10 
}

console.log(clienteLiteral)


//Object constructor, es dinamico y reutilizable
function ClienteConstructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
}

const Juan = new ClienteConstructor('Juan',20)
console.log(Juan)