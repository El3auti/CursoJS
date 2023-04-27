// variables
const form = document.querySelector('#formulario')
const lista = document.querySelector('#lista-tweets')
let tweets = []

// Eventos
eventos()
function eventos() {
    //Para agregar tweets
    form.addEventListener('submit',agregarTweet)

    //Cuando la pagina ya esta cargada
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        clearHTML()
    })
}

//Funciones

function agregarTweet(e) {
    e.preventDefault()

    // TextArea (donde escribe el usuario)
    const tweet = document.querySelector('#tweet').value

    // Validacion
    if (tweet.trim() == ''){
        mostrarError('Un mensaje no puede ir vacio')
        return; // evita ejecutar mas codigo 
    }
    
    // Aniadiendo al Arreglos de tweets
    const tweetObj = {
        id: Date.now(),
        tweet
    }
    tweets = [...tweets, tweetObj]

    HTML(tweets)

    // Reiniciar el form
    form.reset()
}


function mostrarError(error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    //Agregamos el mensaje de error al contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    //Quita el mensaje de error pasado 3000 milisegundos === 3 segundos
    setTimeout(()=> {
        mensajeError.remove()
    },3000)
}

function HTML(tweets) {
    
    clearHTML()

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //Crear el html
            const li = document.createElement('li')
            const btnClear = document.createElement('a')
           
            btnClear.classList = 'borrar-tweet'
            btnClear.textContent = 'X'
            
            btnClear.onclick  = () => {
                borrarTW(tweet.id)
            }

            // Aniadir el texto
            li.textContent = tweet.tweet

            //Agregar al html
            li.appendChild(btnClear)
            lista.appendChild(li)
           

        });
    }
    sincronizarStorage()
}

//Limpiar el html
function clearHTML() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
}

function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets))

}


function borrarTW(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)
    HTML(tweets)
}