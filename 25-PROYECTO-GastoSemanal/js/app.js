// Variables y selectores
const form = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')





// Eventos
EventListener()
function EventListener() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
    form.addEventListener('submit', agregarGastos)
}

// Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }
    

    nuevoGasto(gasto){ 
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    calcularRestante(){
        const totalGastado = this.gastos.reduce((total,gasto)=> total + gasto.cantidad, 0)
        this.restante = this.presupuesto - totalGastado
        console.log(this.restante)
    }

    eliminarGasto(id){
    this.gastos = this.gastos.filter(gasto => gasto.id !== id ); 
    this.calcularRestante()
    }
}

class UI {


    comprobarPresupuesto(p){
        const {presupuesto, restante} = p
        const restanteDiv = document.querySelector('.restante')


        
        if (0 >= restante) {
            const miBoton = document.querySelector("button[type='submit']");
            miBoton.disabled = true
        } 

        if ((presupuesto / 4) >= restante) {
            restanteDiv.classList.remove('alert-success','alert-warning')
            restanteDiv.classList.add('alert-danger')
        }else if((presupuesto / 2) >= restante){
            restanteDiv.classList.remove('alert-success')
            restanteDiv.classList.add('alert-warning')
        }else{
            restanteDiv.classList.remove('alert-danger','alert-warning')
            restanteDiv.classList.add('alert-success')
        }

  
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante

    }
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad

        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

  
    mostrarGastos(gastos) {

        //Elimina el HTML previo
        this.limpiarHTML(); 

        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            const { cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            
            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;
            

           // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);


            
             // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
          
        });
    }

    limpiarHTML() {
        while( gastoListado.firstChild ){
        gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    imprimirAlerta(mensaje,tipo){
        const div = document.createElement('div')
        div.classList.add('text-center','alert')

    if (tipo === 'error') {
        div.classList.add('alert-danger')
    }else{
        div.classList.add('alert-success')
        
    }

    div.textContent = mensaje

    //Insertar en html
    document.querySelector('.primario').insertBefore(div,form)
    setTimeout(()=>{
        div.remove()
    },1000)
    }
}

//Instanciar

const ui = new UI()
let presupuesto

// Funciones

function preguntarPresupuesto() {
    const presupuestoUser = Number(prompt('cual es tu presupuesto?'))
    
    errores = {
        vacio: presupuestoUser === '',
        nulo:  presupuestoUser === null,
        esNan: isNaN(presupuestoUser),
        SinDinero: presupuestoUser <= 0
    }

    const {vacio, nulo, esNan, SinDinero} = errores

    if (vacio || nulo || esNan || SinDinero) {
        window.location.reload()
    }

    presupuesto =  new Presupuesto(presupuestoUser)

    ui.insertarPresupuesto(presupuesto)
}

function agregarGastos(e) {
    e.preventDefault()

    //Leer gastos del form

    const nombre = document. querySelector('#gasto').value
    const cantidad = Number(document. querySelector('#cantidad').value)


    if (nombre === '' || cantidad === '') {
         ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
         return;
    }else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return;
    }
    
    const gasto = {
        nombre,
        cantidad,
        id:Date.now()
    }

    presupuesto.nuevoGasto(gasto)
    ui.imprimirAlerta('Gasto agregado correctamente','exito')
    form.reset()
    const {gastos,restante} = presupuesto;
    ui.mostrarGastos(gastos)
    ui.actualizarRestante(restante)
    ui.comprobarPresupuesto(presupuesto)
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id)
    const {gastos,restante} = presupuesto
    
    ui.mostrarGastos(gastos)
    
    ui.actualizarRestante(restante)
    
    ui.comprobarPresupuesto(presupuesto)
}