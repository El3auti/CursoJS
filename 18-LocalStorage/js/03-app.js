localStorage.removeItem('nombre')


// Actualizar 
const prodArrayJsonPUT   = JSON.parse(localStorage.getItem('prodReplaceNameArray'))
console.log(prodArrayJsonPUT)
prodArrayJsonPUT.push('hola')
console.log(prodArrayJsonPUT)


//Eliminar todos los datos del LS
localStorage.clear()