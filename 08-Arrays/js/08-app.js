/**
 *  Array Destructuring 
 *  Al igual que los objetos algunas veces quieres crear la variable y el valor del
 *  arreglo veamos algunos ejemplos:
 */

const numeros = [10, 20, 30, 40, 50]


// Si queres saltar un valor, pone una coma.
const [primero, ,segundo, tercero] = numeros



console.log(`Primer valor: ${primero}`)
console.log(`Tercer valor: ${segundo}`)
console.log(`Cuarto valor: ${tercero}`)


/**
 *  Crear la primer variable, mantener el arreglo original...
 */

const [primer, , segun, ...tercer] = numeros

console.log(`Primer valor: ${primer}`)
console.log(`Tercer valor: ${segun}`)
console.log(`Resto del array: ${tercer}`)