
document.addEventListener('DOMContentLoaded', () => {

    const email = {
        email:'',
        asunto:'',
        mensaje:''
    }
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const inputCc = document.querySelector('#CC')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const cargador = document.querySelector('#cargador')
    // Asignar eventos

    inputEmail.addEventListener('input', validate)
    inputAsunto.addEventListener('input', validate)
    inputMensaje.addEventListener('input', validate)
    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click',()=>{
        e.preventDefault()
        resetform()

    })

    inputCc.addEventListener('input',(e)=>{
        if (e.target.value.trim() != '') {
            validate(e)
        }
    })

    function validate(e){
        if (e.target.value.trim() === '') {
            ViewAlert(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
            email[e.target.name] =''
            comprobarEmail()
            return        
        }
        if(e.target.id === '#CC'){
            email[e.target.name] =''
            comprobarEmail()
            return
        }
        if(validateEmail(e.target.value)){
            ViewAlert(`El ${e.target.id} no es valido`,e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return
        }
        clearAlert(e.target.parentElement)

        //Asignar valores al obj
        email[e.target.name] = e.target.value.trim().toLowerCase()
        console.log(email)

        //Comprobar Email
        comprobarEmail()
    }

    function ViewAlert(mensage,reference) {
        
        clearAlert(reference)

        //  Generar alerta
        const error = document.createElement('P')
        error.textContent = mensage
        error.classList.add('bg-red-600','text-while','p-2','text-center')



        // Agregar error al formulario
        reference.appendChild(error)

    }
    
    function clearAlert(reference){
        const alerta = reference.querySelector('.bg-red-600')
        if (alerta) {
            alerta.remove()
        }
    }


    function validateEmail(email) {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        const resultado = regex.test(email)
        console.log(resultado)
    }

    function comprobarEmail(){
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
            btnSubmit.classList.remove('opacity-50')
            btnSubmit.disabled = false
        }

    function enviarEmail(e){
        e.preventDefault()

        cargador.classList.add('flex')
        cargador.classList.remove('hidden')
        let nombre = email.email

        
        
        setTimeout(()=>{
            cargador.classList.remove('flex')
            cargador.classList.add('hidden')
            resetform()
            
            const alertaEnviado = document.createElement('p')
            alertaEnviado.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10','font-bold','text-sm','uppercase')
            alertaEnviado.textContent = `Mensaje enviado correctamente a ${nombre} `
            
            formulario.appendChild(alertaEnviado)
        
            setTimeout(()=>{
            alertaEnviado.remove()
            },3000)
        },3000)

        
        
        
    }

    function resetform(){
        email.asunto =''
        email.email =''
        email.mensaje =''
        
        formulario.reset()
        comprobarEmail()
    }
    })