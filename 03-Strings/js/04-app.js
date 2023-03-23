// Eliminar el inicio

const prod = "    wijfjwfjiw       "
console.log(prod.trimStart()) // Elimina todos los espacios en blancos al inicio
console.log(prod.trimEnd())  // Elimina todos los espacios  en blancos al final

/*
 * Los metodos en javascript se pueden encadenar, es decir, colocarse uno junto al otro
 */

console.log(prod.trimStart().trimEnd())

//  Un metodo antiguo que funciona para eso es trim que hace lo mismo

console.log(prod.trim().length)