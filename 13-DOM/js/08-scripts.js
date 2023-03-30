const navegacion = document.querySelector('.navegacion')
console.log(navegacion)
console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)
/*
console.log(navegacion.childNodes)  Los espacio en blanco son considerados elementos
console.log(navegacion.children) 




console.log(navegacion.children[0]) 
console.log(navegacion.children[1].nodeName) 
console.log(navegacion.children[2].nodeType) 
console.log(navegacion.children[3]) 
 */

const card = document.querySelector('.card')
/* console.log(card.children[1].children)
card.children[1].children[1].textContent = 'Nuevo txt desde el dom' */

// Traversing desde el hijo al padre
console.log(card.parentElement.parentElement.parentElement)

// Traversing desde el .card hasta el siguiente .card
console.log(card.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling)