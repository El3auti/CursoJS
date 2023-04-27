const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const contenedor = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
let artCarrito = []

arrancarApp()

function arrancarApp(){
    //Agregar al carrito
    listaCursos.addEventListener('click', agregarCurso)

    //Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso)

    //Cargar LocalStorage
    document.addEventListener('DOMContentLoaded', () =>{
        artCarrito = localStorage.getItem(JSON.stringify('carrito')) || []
        HTML()

    })

    //Vaciar Carro
    vaciarCarrito.addEventListener('click', limpiarHTML)

}

function agregarCurso(e) {
    e.preventDefault()

    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement
        leerCursos(curso)
    }
}

function leerCursos(curso) {
    const informacion = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    
    if(artCarrito.some(curso => curso.id === informacion.id)) {
        const cursos = artCarrito.map( curso => {
            if(curso.id === informacion.id){
                curso.cantidad ++
                return curso
            }else{
                return curso
            }

        })
        artCarrito = [...cursos]
    }else{
        artCarrito = [...artCarrito, informacion]
    }
    HTML()
}

function eliminarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')
        artCarrito = artCarrito.filter(curso => curso.id !== cursoId)
    
        HTML()
    }
}

function HTML() {
    
    limpiarHTML()

    artCarrito.forEach( curso =>{
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        `
         contenedor.appendChild(row)
         sincronizarLS()
    })
}
// Sincronizar localStorage
function sincronizarLS() {
    localStorage.setItem('carrito',JSON.stringify(artCarrito))
    
}

function limpiarHTML() {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
}