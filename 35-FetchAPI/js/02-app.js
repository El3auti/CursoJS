/**
 * Como consumir datos de un json
 */

const btnJson = document.querySelector('#cargarJSON')
btnJson.addEventListener('click',obtenerDatos)

function obtenerDatos() {
    const url = 'data/empleado.json'
    fetch(url)
              .then(respuesta => {return respuesta.json()})
              .then(respuestaJson => mostrarHtml(respuestaJson))
              .catch(error => console.log(error))
}

function mostrarHtml({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido')

    contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>,
    <p>ID: ${id}</p>,
    <p>Empresa: ${empresa}</p>,
    <p>Trabajo: ${trabajo}</p>
    `
}