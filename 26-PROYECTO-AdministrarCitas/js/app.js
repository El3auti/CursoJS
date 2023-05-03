//  Variables 
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

const form = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')

let edicion;

class Citas {
    constructor(){
        this.citas = []
    }

    agregarCita(cita){
        this.citas = [...this.citas,cita]
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id ); 
    }

    editarCita(citActualizada){
        this.citas.map(cita =>  cita.id ===  citActualizada.id ? citActualizada : cita)
    }
}

class UI {


    ImprimirAlerta(mensaje,tipo){
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center','alert','d-block','col-12')

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'))
    
        setTimeout(()=>{
            divMensaje.remove()
        },1000)
    }

    imprimirCitas({citas}){

        this.limpiarHTML()

        citas.forEach(cita => {
            const {mascota, propietario,telefono,fecha,hora,sintomas,id} = cita
            const divCita = document.createElement('div')
            divCita.classList.add('cita','p-3')
            divCita.dataset.id = id

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement( 'p');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`

            const telefonoParrafo = document.createElement( 'p');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">telefono: </span> ${telefono}`

            const fechaParrafo = document.createElement( 'p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder"> fecha: </span> ${fecha}`

            const horaParrafo = document.createElement( 'p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">hora: </span> ${hora}`


            const sintomasParrafo = document.createElement( 'p');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">sintomas: </span> ${sintomas}`

            const btnDelete = document.createElement('button')
            btnDelete.classList.add('btn','btn-danger','mr-2')
            btnDelete.innerHTML = 'Eliminar'
            btnDelete.onclick =  () =>  eliminarCita(id)

            const btnEdit = document.createElement('button')
            btnEdit.classList.add('btn','btn-info')
            btnEdit.innerHTML = 'Editar'
            btnEdit.onclick =  () =>  cargarEdit(cita)

            
            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnDelete)
            divCita.appendChild(btnEdit)


            // agregar las citas al HTML
            contenedorCitas.appendChild(divCita);

        });
    }
    limpiarHTML() {
            while( contenedorCitas.firstChild ){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
            }
        }
    

}


const ui = new UI()
const adminCitas = new Citas()

//  Eventos
EventListener()
function EventListener() {
    mascotaInput.addEventListener('input',datosCita)
    propietarioInput.addEventListener('input',datosCita)
    telefonoInput.addEventListener('input',datosCita)
    fechaInput.addEventListener('input',datosCita)
    horaInput.addEventListener('input',datosCita)
    sintomasInput.addEventListener('input',datosCita)
    form.addEventListener('submit', nuevaCita)

}
// objetos

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha:'',
    hora:'',
    sintomas:''
}
//  Funciones

function datosCita(e) {
    citaObj[e.target.name] = e.target.value
}

//Valida y agrega nueva cita

function nuevaCita(e) {
    e.preventDefault()

    const {mascota, propietario,telefono,fecha,hora,sintomas} = citaObj

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.ImprimirAlerta('todos los campos son obligatorios','error')
        return
    }

    if (edicion) {
        ui.ImprimirAlerta('Cita editada correctamente','correcto')

        adminCitas.editarCita({...citaObj})

        formulario = document.querySelector('button[type="submit"]').textContent = 'Crear Cambios'
        edicion = false
    }else{
        citaObj.id = Date.now()
        adminCitas.agregarCita({...citaObj})
        ui.ImprimirAlerta('Cita agregada correctamente','correcto')

    }


    resetCitaObj()
    form.reset()

    ui.imprimirCitas(adminCitas)
}


function resetCitaObj() {
    citaObj.mascota = '',
    citaObj.propietario = '',
    citaObj.telefono = '',
    citaObj.fecha = '',
    citaObj.hora = '',
    citaObj.sintomas = ''
}

function eliminarCita(id) {
    adminCitas.eliminarCita(id)
    ui.ImprimirAlerta('La cita se elimino correctamente','correcto')
    ui.imprimirCitas(adminCitas)

}

function cargarEdit(cita) {
    const {mascota, propietario,telefono,fecha,hora,sintomas, id} = cita


    mascotaInput.value = mascota
    propietarioInput.value =propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    citaObj.mascota = mascota
    citaObj.propietario =propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora = hora
    citaObj.sintomas = sintomas
    citaObj.id = id


    formulario = document.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'

    edicion = true
}