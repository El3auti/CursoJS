/*
 * Notificaciones nativas, como funcionan API
 */

const notificarBtn = document.querySelector('#notificar')
notificarBtn.addEventListener('click',()=>{
    
    Notification.requestPermission()
                                    .then(result => console.log(`El resultado es ${result}`))
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click',()=>{
    if(Notification.permission == 'granted'){
        const notificacion = new Notification('Esta es una notificacion',{
            icon:'img/ccj.png',
            body:'Aprendiendo con notificaciones'
        })
        notificacion.onclick() = () =>{
            window.open('https://github.com/El3auti')
        }
    }
})