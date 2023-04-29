// Constructores
function Seguro(marca,year,tipo) {
    this.marca = marca
    this.year = year
    this.tipo = tipo
}

Seguro.prototype.Cotizar = function () {
    
    /*
    1 = Americano (1.15)
    2 = Asiatico (1.05)
    3 = Europeo (1.35)

    Seguro basico %30 extra
    Seguro completo %50 extra
    */


    const base = 2000
    let cantidad = 0
    const diferencia = new Date().getFullYear() - this.year 

    switch (this.marca) {
        case '1':
                cantidad = base * 1.35
                break;
        
        case '2':
                cantidad = base * 1.05
            break;

        case '3':
            cantidad = base * 1.35
            break;
        default:
            break;
    }


    //Descuento por los anios del auto
    cantidad -= ((diferencia * 3) * cantidad) / 100

    if (this.tipo === 'basico') {
        cantidad *= 1.30
    }else if(this.tipo === 'completo'){
        cantidad *= 1.50
    }

    return cantidad
}

function UI() {}

// Llenar opciones anio
UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
          min = max - 20
    

    const selectYear = document.querySelector('#year')

    for (let i = max; i > min; i--) {
        let opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        selectYear.appendChild(opcion)
    }
}

// Mostrar Mensajes en pantalla
UI.prototype.Mensaje = (mensaje,tipo) =>{
    const div = document.createElement('div')
    const form = document.querySelector('#cotizar-seguro')

    if (tipo === 'error') {
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    }

    div.classList.add('mensaje','mt-10')
    div.textContent = mensaje

    //Insertar en html
    form.insertBefore(div, document.querySelector('#resultado'))

    setTimeout(()=>{
        div.remove()
    },1000)
}

UI.prototype.mostrarResultado = (total,seguro) =>{
    
    const {marca, tipo, year} = seguro
    const div = document.createElement('div')
    div.classList.add('mt-10')
    let txtMarca = ''

    switch (marca) {
        case '1':
            txtMarca = 'Americano'
            break;

        case '2':
            txtMarca = 'Asiatico'
        break;

        case '3':
            txtMarca = 'Europeo'
        break;

        default:
            break;
    }


    div.innerHTML = `
                <p class = "header">  Tu Resumen </p>  
                <p class = "font-bold"> Total: <spa class="font-normal">$ ${total}</span> </p>
                <p class = "font-bold"> Marca del Vehiculo: <span class="font-normal"> ${txtMarca}</span> </p>            
                <p class = "font-bold"> Tipo de Seguro: <span class="font-normal capitalize">${tipo}</span> </p>            
                <p class = "font-bold"> Anios de antiguedad: <span class="font-normal">${year}</span> </p>            

    `
    const ResultadoDiv = document.querySelector('#resultado')

    // Mostrar spinner

    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block'

    setTimeout( ()=>{
        spinner.style.display = 'none'
        //Se borra el spinner pero aparece el resultado
        ResultadoDiv.appendChild(div)
    },1000)

}   
// Instaciar UI
const uI = new UI()

document.addEventListener('DOMContentLoaded', ()=>{
   
    //Llenar select con los years
    uI.llenarOpciones()
})

EventListener()

function EventListener() {
    const form = document.querySelector('#cotizar-seguro')
    form.addEventListener('submit',cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault()
    validar = true

    //Leer Marca
    const marca = document.querySelector('#marca').value

    //Leer year
    const year = document.querySelector('#year').value

    //Leer tipo de cobertura
    const tipoCobertura = document.querySelector('input[name="tipo"]:checked').value


    if(validarForm(marca,year,tipoCobertura)){
        return;
    }


    // Instanciar Seguro
    const seguro = new Seguro(marca,year,tipoCobertura)
    const total = seguro.Cotizar()

    //Utilizar el prototype que va a cotizar
    uI.mostrarResultado(total,seguro)


}

function validarForm(m,y,tC) {
    if (m === '' || y === ''  || tC === '') {
        uI.Mensaje('Todos los campos son obligatorios','error')
        return true;
    }
    else{
        uI.Mensaje('Cotizando...','correcto')
        //Ocultamos el resultado de la validacion anterior
        ocultar()
        return false
    }


}

function ocultar() {
    const resultados = document.querySelector('#resultado div')
    if (resultados != null) {
        resultados.remove()
    }
}