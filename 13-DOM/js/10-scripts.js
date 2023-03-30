const enlace = document.createElement('a')

// Agregando el texto
enlace.textContent = 'NuevoEnlace'

// Aniadiendo el href
enlace.href = '/nuevo-enlace'

// Aniadiendo target
enlace.target = '_blank'


// Aniadiendo funcion
enlace.onclick = () => alert('Diste click')

console.log(enlace)

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion')
//navegacion.appendChild(enlace)
navegacion.insertBefore(enlace, navegacion.children[1])

// Crear un CARD

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')



const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

// Crear div con la clase info
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)


// Crear Imagen
const img = document.createElement('img')
img.src = '13-DOM/img/hacer2.jpg'

// Crear el card
const card = document.createElement('div')
card.classList.add('card')

// Asignar la img
card.appendChild(img)

// Asignar la info
card.appendChild(info)

// Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)