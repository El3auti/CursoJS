/**
 * Como consumir informacion dentro de un archivo txt
 */

const btnTxt = document.querySelector('#cargarTxt')
btnTxt.addEventListener('click',obtenerDatos)

function obtenerDatos() {
    const url = 'data/datos.txt'
    
    fetch(url)
              .then(r =>{
                console.log(r)
                console.log(r.status)
                console.log(r.statusText)
                console.log(r.type)
                console.log(r.url)

                return r.text()
              })
              .then(data => console.log(data))
              .catch(error => console.log(error))
}