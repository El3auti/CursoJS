/*
    Las variables son una caracteristica de cualquier lenguaje de programacion
    Existen 3 formas de crear variables en javascript, en nuevas versiones solo se utilizan 2:
*/

//  Las variables tambien se pueden reasignar

producto = "Teclado razer nuevo"
console.log(producto)

/*
    Javascript es un lenguaje de tipo dinamico
    No se especifican los tipos de datos cuando se crea la variable
*/

var precio = 1000
console.log(precio)

//  Tambien se puede inicializar una variable sin valor y asignarlo despues

var disponible
disponible = false

//  Inicializar multiples variables

var categoria = 'Computadoras',
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

var 99dias = 99
var dias99 = 99

/*
    Estiloa para nombrar variables con mas de una palabra
        nombreProducto -> CamelCase
        nombre_producto -> underscore
        NombreProducto -> pascal case
*/