let encabezado = document.querySelector('.contenido-hero h1').textContent


// console.log(encabezado.innerHTML)   Se trae el html
// console.log(encabezado.innerText)  Si el css tiene -visibility:hidden; no lo ve
// console.log(encabezado.textContent) Si lo va a encontrar

document.querySelector('.contenido-hero h1').textContent = 'Hola'