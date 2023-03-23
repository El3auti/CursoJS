/*
    Veamos el 3er tipo de formas de crear variables, const
    Existen pocas diff entre let y const asique vamos a verlas:
*/  

//  Primero una variable con const su valor no puede ser reasignado

const prod = "pc nueva"
console.log(prod)
prod = "pc vieja"

// Por otro lado, las variables con const, deben iniciarse con un valor:

const precio;
precio = 20
console.log(precio)

/*
    Existen otras diff entre const y let especialmente cuando se trabajan con arreglos y
    objetos
*/