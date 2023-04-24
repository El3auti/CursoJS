
// Variables
const marca  = document.querySelector('#marca')
const years  = document.querySelector('#year')
const minimo  = document.querySelector('#minimo')
const maximo  = document.querySelector('#maximo')
const puertas  = document.querySelector('#puertas')
const color  = document.querySelector('#color')
const transmision  = document.querySelector('#transmision')

// Contenedor de resultados
const resultado = document.querySelector('#resultado')

const Max = new Date().getFullYear()
const Min = Max - 10

// Objeto con la busqueda

const datosABuscar = {
    marca:'', 
    year:'',
    maximo:'',
    minimo:'',
    puertas:'', 
    color:'', 
    transmision:''
}

//  Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos)  //Carga los autos
    //Llena las opciones de anio
    LlenaSelect()

    //llenaDatos()
})

/* function llenaDatos() {
    for (let key in datosABuscar) {
        
        let datos = document.querySelector(`#${key}`)
        console.log(datos)
        datos.addEventListener('change',e =>{
            datosABuscar.datos = e.target.value
            filtarAuto()
        })
    }
} */

marca.addEventListener('change',e =>{
    datosABuscar.marca = e.target.value
    filtarAuto()
})
years.addEventListener('change',e =>{
    datosABuscar.year = e.target.value
    filtarAuto()
})
maximo.addEventListener('change',e =>{
    datosABuscar.maximo = e.target.value
    filtarAuto()
})
minimo.addEventListener('change',e =>{
    datosABuscar.minimo = e.target.value
    filtarAuto()
})
puertas.addEventListener('change',e =>{
    datosABuscar.puertas = e.target.value
    filtarAuto()
})
color.addEventListener('change',e =>{
    datosABuscar.color = e.target.value
    filtarAuto()
})
transmision.addEventListener('change',e =>{
    datosABuscar.transmision = e.target.value
    filtarAuto()
})


//Funciones

function mostrarAutos(autos) {
    
    //Elimina el html previo
    limpiarHTML()
    
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const A = document.createElement('p')

        A.textContent = `
        Marca: ${marca} Modelo: ${modelo} - Anio: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmision: ${transmision}`

    // Insertar en el html
    resultado.appendChild(A)
    })
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function LlenaSelect() {
    for (let i = Max; i > Min; i--) {
        console.log(i)
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        years.appendChild(opcion) // Agrega los anios al select
    }
}


// Funcion que filtra en base a la busqueda

function filtarAuto() {

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtarPuerta).filter(filtarColor).filter(filtarTransimision)

    if (resultado.length) {
        return mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

function noResultado() {
    
    limpiarHTML()

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta','error')
    noResultado.textContent = 'No Hay Resultados intenta filtrando de otra manera'
    resultado.appendChild(noResultado)
}


function filtrarMarca(auto) {
    const {marca} = datosABuscar
    if (marca) {
        return auto.marca === marca
    }
    return auto
}

function filtrarYear(auto) {
    const {year} = datosABuscar
    if (year) {
        return auto.year === parseInt(year)
    }
    return auto
}

function filtrarMinimo(auto) {
    const {minimo} = datosABuscar
    if (minimo) {
        return auto.precio >= parseInt(minimo)
    }
    return auto
}
function filtrarMaximo(auto) {
    const {maximo} = datosABuscar
    if (maximo) {
        return auto.precio <= parseInt(maximo)
    }
    return auto
}

function filtarPuerta(auto) {
    const {puertas} = datosABuscar
    if (puertas) {
        return auto.puertas == puertas
    }
    return auto
}

function filtarColor(auto) {
    const {color} = datosABuscar
    if (color) {
        return auto.color == color
    }
    return auto
}

function filtarTransimision(auto) {
    const {transmision} = datosABuscar
    if (transmision) {
        return auto.transmision == transmision
    }
    return auto
}