const api = 'https://picsum.photos/list'

document.addEventListener('DOMContentLoaded',cargaApi)

function cargaApi(apiurl = api) {
    fetch(apiurl).then(resp => resp.json())
                 .then(resultado => console.log(resultado))
                 .catch(error =>console.error(error))
}

async function cargarApiAsyncAwait(apiurl = api) {
        try {
            const respuesta = await fetch(apiurl)
            const resultado = await respuesta.json()
            console.log(resultado)
        } catch (error) {
            console.error(error)
        }
}