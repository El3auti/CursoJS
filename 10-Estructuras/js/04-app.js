
let rol = 'Admin'

if (rol === 'Admin') {
    console.log('El usuario puede editar, eliminar y ver toda la informacion')
}else if(rol === 'Editor'){
    console.log('El usuario puede editar sus registros')
}else{
    console.log('El usuario es visitante, solo puede ver la informacion')
}

//Lo que no debe de hacerse 

if (rol === 'Admin') {
    console.log('El usuario puede editar, eliminar y ver toda la informacion')
}else if(rol === 'Editor'){
    console.log('El usuario puede editar sus registros')
}else if (rol === 'Autor'){
    console.log('El usuario solo puede registrar usuarios')
}else{
    console.log('El usuario es visitante, solo puede ver la informacion')
}
