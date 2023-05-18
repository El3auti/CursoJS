const criptomonedasSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const form = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

const objBusqueda = {
    criptomoneda:'',
    moneda:''

}
const obtenerCripto = criptomonedas => new Promise(resolve =>{
    resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', ()=>{
    consultarCriptos()
    form.addEventListener('submit',submitForm)
    criptomonedasSelect.addEventListener('change',leerValor)
    monedaSelect.addEventListener('change', leerValor)
})

function consultarCriptos() {
    const criptos = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD' 
    fetch(criptos).then(monedas => monedas.json())
                  .then(monedas => obtenerCripto(monedas.Data))
                  .then(criptomonedas => selectCripto(criptomonedas))
                }


function selectCripto(criptomonedas) {
    criptomonedas.forEach(criptomoneda => {
        const {FullName, Name} = criptomoneda.CoinInfo

        const option = document.createElement('OPTION')
        option.value = Name
        option.textContent = FullName
        criptomonedasSelect.appendChild(option)
    });

}
function leerValor(e) {
    objBusqueda[e.target.name]= e.target.value    

}
function submitForm(e) {
    e.preventDefault()

    const {moneda, criptomoneda} = objBusqueda

    if (moneda == '' || criptomoneda === '') {
        mostrarAlerta('ambos campos son obligatorios')
        return
    }

    //Consultar Api con los resultados
    consultarApi()

}

function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error')
    if (!existeError) {
    const divmensaje = document.createElement('div')
    divmensaje.classList.add('error')

    divmensaje.textContent = msg

    form.appendChild(divmensaje)

    setTimeout(() => {
        divmensaje.remove()
    }, 3000);
    }
}

function consultarApi() {
    const {moneda, criptomoneda} = objBusqueda

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    mostrarSpinner()
    fetch(url).then(cotizacionActual => cotizacionActual.json())
              .then(cotizacionActual => mostrarCotizacion(cotizacionActual.DISPLAY[criptomoneda][moneda]))
}   

function mostrarCotizacion(cotizacion) {
    limpiar()

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion

    const precio = document.createElement('P')
    precio.classList.add('precio')
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`
    
    const precioAlto = document.createElement('P')
    precioAlto.innerHTML = `El Precio mas alto del dia: <span>${HIGHDAY}</span>`

    const precioBajo = document.createElement('P')
    precioBajo.innerHTML = `El Precio mas bajo del dia : <span>${LOWDAY}</span>`

    const ultimaSubida = document.createElement('P')
    ultimaSubida.innerHTML = `La ultima actualiacion fue : <span>${LASTUPDATE}%</span>`

    const ultimasHoras = document.createElement('P')
    ultimasHoras.innerHTML = `Variacion de las ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`
    
    
    resultado.appendChild(precio)
    resultado.appendChild(precioAlto)
    resultado.appendChild(precioBajo)
    resultado.appendChild(ultimasHoras)
    resultado.appendChild(ultimaSubida)
}

function limpiar() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function mostrarSpinner() {
    limpiar()
    const spinner = document.createElement('DIV')
    spinner.classList.add('sk-cube-grid')
    
    spinner.innerHTML = `
 <div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
    `

    resultado.appendChild(spinner)
}