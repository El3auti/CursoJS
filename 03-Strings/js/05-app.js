
/**
 *  Replace()
 *  devuelve una nueva cadena con algunas o todas las coincidencias de un patrón ,
 *  siendo cada una de estas coincidencias reemplazadas por remplazo
 */
const prod = 'monitor ultra wade'
console.log(prod.replace('wade','delgado'))

/**
 *  Slice()
 *  te permite extraer una parte de una cadena
 * (Existe uno igual al slice que se llama substring)
 */

console.log(prod.slice(0,11))
console.log(prod.slice(9)) // Corta desde el 9 hasta el final

/**
 *  Repeat()
 *  te va a permitir repertir una cadena de texto "x" cantidad de veces
 */

console.log(prod.repeat(3))
console.log(prod.repeat(2.2)) // esto no sirve ya que repeat redondea para arriba

/**
 *  Split()
 *  divide un objeto de tipo String en un array de cadenas 
 *  mediante la separación de la cadena en subcadenas
 */