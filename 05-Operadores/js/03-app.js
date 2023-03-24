/**
 *  Null y undefined
 *  Existen  diferentes tipos de datos primitivos a los que hemos visto,
 *  ademas de str y int se tienen booleans que son true o false, y existen 
 *  un par mas llamados undefined y null
 */

//  undefined
let num

console.log(num) // La variable esta definida pero su valor no, por lo tanto es undefined
console.log(typeof num)

//  null
let num2 = null
console.log(num2)

console.log(typeof num2)
/**
 *  Ahora esto nos dira que es un objeto, la especificacion de ecma que 
 *  es quien define el standard del lenguaje dice que null debe ser un objeto
 */

/**
 *  Comparar null y undefined puede ser una de las cosas mas complicadas
 *  
 *  console.log(num == num2)
 *  Puedes ver que el resultado es true, a pesar de que num no tiene valor, eso nos lleva
 *  a ejecucion de codigo no deseado o con comportamientos extranos ya que comparamos
 *  un valor no existente y nos retorna true,
 *  
 * 
 *  para compararlos bien debemos de usar el comparador estricto, de esta forma no 
 *  comparamos un falso positivo y evitamos errores
 */