
const encabezado = document.querySelector('h1')
encabezado.style.backgroundColor = 'red'
encabezado.style.fontFamily = 'Arial'
encabezado.style.textTransform = 'upperCase' 


const card = document.querySelector('.card')
//Agregar clase
card.classList.add('nueva-Clase')
console.log(card.classList)
//Remover clase
card.classList.remove('nueva-Clase')
console.log(card.classList)