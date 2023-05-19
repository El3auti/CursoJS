export function descargandoClientes() {
    return new Promise((resolve, reject) => {
        const error = false

        setTimeout(() => {
            if (!error) {
                resolve('el listado de clientes se descargo correctamente')
            }else{
                reject('Error en la conexion')
            }
        }, 3000);
    })
}


//Async Await en function declaration

async function ejecutar() {
    try {
       const respuesta = await descargandoClientes()
       console.log(respuesta)
    } catch (error) {
        console.log(error)
    }    
}

ejecutar()