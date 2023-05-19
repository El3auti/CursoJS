import { mostrarAlerta, validar} from "./funciones.js";
import { nuevoCliente } from "./API.js";
(function () {
    const form = document.querySelector('#formulario')
    form.addEventListener('submit',validarCliente)
    
    function validarCliente(e) {
     e.preventDefault()
 
     const nombre = document.querySelector('#nombre').value
     const email = document.querySelector('#email').value
     const telefono = document.querySelector('#telefono').value
     const empresa = document.querySelector('#empresa').value
 
     const cliente = {
         nombre,
         email,
         telefono,
         empresa
     }
     if (validar(cliente)) {
         mostrarAlerta('Todos los campos son obligatorios','error')
         return
     }
     mostrarAlerta('Usuario Creado Correctamente!')
     nuevoCliente(cliente)
 }
 
 })()