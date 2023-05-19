// Async Await en function expresion

import { descargandoClientes } from ".02-app/";

const ejecutar = async () =>{
    try {
        const respuesta = await descargandoClientes
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}