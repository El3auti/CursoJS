/*
    var era la forma de crear variables en versiones anteriores, hoy en dia las opciones se reducen 
    las reglas son basicamente las mismas con let
*/

let producto = "pc nueva" // Inicializamos una variable con un valor

//  Las variables tambien se pueden reasignar

producto = "pc viejo"

//  Incluso a pesar de que la variable se le asigno un valor de tipo str  o cadena podemos cambiarlo

producto = 20
producto = true
producto = null

console.log(producto)

/*
    JavaScript es un lenguaje de tipo dinamico,
    no se especifican tipos de datos cuando se crea la variable
*/

let precio = 200
console.log(precio)

//  Tambien se puede inicializar una variable sin valor y asignarlo despues

let disponible
disponible = true


//  Inicializar multiples variables

let categoria = 'Computadoras',
    marca = "BautiDev",
    calificacion = 10

console.log(categoria)
console.log(marca)
console.log(calificacion)

/*
    Reglas de las variables:
    ===================================
    = Pueden tener: Letras, numeros,_ =
    = No pueden iniciar con numero    =
    ===================================
*/

let 99dias = 99
let dias99 = 99

/*
    Estiloa para nombrar variables con mas de una palabra
        nombreProducto -> CamelCase
        nombre_producto -> underscore
        NombreProducto -> pascal case
*/