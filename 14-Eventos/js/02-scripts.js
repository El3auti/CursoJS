const nav = document.querySelector('.navegacion')

// Registrar un evento

nav.addEventListener('click', () => console.log('click en nav'))
nav.addEventListener('mouseenter', () => console.log('enter en nav'))
nav.addEventListener('mouseout', () => console.log('out en nav'))

//mousedown - similar al click
//click
// dblclick = doble click
// mouseup = cuando sueltas el mouse