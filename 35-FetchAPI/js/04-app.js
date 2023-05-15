/**
 * Consumimos api de internet
 */
document.querySelector('#cargarAPI').addEventListener('click',cargarDatos)

function cargarDatos() {
    url = 'https://picsum.photos/list'

    fetch(url)
              .then(resp => resp.json())
              .then(respJson => respJson.forEach(element => {
                    if (element.id <= 10) {
                        console.log(element)
                    }
              }))
}