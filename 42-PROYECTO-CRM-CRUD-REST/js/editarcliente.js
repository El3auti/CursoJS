import { obtenerClienteId, actualizarCliente} from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";
(function () {

    //Campos form
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

   document.addEventListener('DOMContentLoaded', async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search)
        const idCliente = parseInt(parametrosURL.get('id'))

        const cliente = await obtenerClienteId(idCliente)
        mostrarCliente(cliente)

        const form = document.querySelector('#formulario')
        form.addEventListener('submit',validarform)
   }) 



   function mostrarCliente(cliente) {
        const {nombre,empresa,email,telefono,id} = cliente

        nombreInput.value = nombre
        emailInput.value = email
        empresaInput.value = empresa
        telefonoInput.value = telefono
        idInput.value = id
   }

   function validarform(e) {
    e.preventDefault()

    const cliente = {
        nombre: nombreInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        empresa: empresaInput.value,
        id: idInput.value
    }

    if(validar(cliente)){
        mostrarAlerta('Todos los campos son obligatorios','error')
        return
    }
    mostrarAlerta('Cliente Actualizado Correctamente')
    actualizarCliente(cliente)
   }
})()