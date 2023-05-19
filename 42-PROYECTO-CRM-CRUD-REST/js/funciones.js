export function mostrarAlerta(msj,tipo){
    const alerta = document.querySelector('.bg-red-100' || '.bg-green-100')

    if(!alerta){
        const alerta = document.createElement('P')

    if (tipo === 'error') {
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center')
        alerta.innerHTML  = `
        <strong class="font-bold"> Error!</strong>
        <span class="block sm:inline">${msj}</span>`
        
        return agregar(alerta)
    }else{
        alerta.classList.add('bg-green-100','border-green-400','text-green-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center')
        alerta.innerHTML  = `
        <strong class="font-bold"> Completado!</strong>
        <span class="block sm:inline">${msj}</span>`
        
        return agregar(alerta)
    }
    }
}


function agregar(div) {
    const form = document.querySelector('#formulario')
    form.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 3000);
}

export function validar(obj) {
        return !Object.values(obj).every(input => input !== '')
}