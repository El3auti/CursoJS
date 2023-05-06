let DB

document.addEventListener('DOMContentLoaded', ()=>{
    crmBD()

    setTimeout(()=>{
        crearCliente()
    },6000)
})

function crmBD() {
    
    //Crear BD

    let crmBD = window.indexedDB.open('crm',1)

    // Si hay un error
    crmBD.onerror = function (){
        console.log('hubo un error a la hora de crear la bd')
    }

    //Si se creo bien 
    crmBD.onsuccess = function (){
        console.log('bd creada correctamente')
    }

    //Config de base de datos
    crmBD.onupgradeneeded = function (e){
        const DB = e.target.result

        const objectStore = DB.createObjectStore('crm',{
            keyPath:'crm',
            autoIncrement: true
        })

        //Definir las columnas
        objectStore.createIndex('nombre','nombre',{unique:false})
        objectStore.createIndex('email','email',{unique:true})
        objectStore.createIndex('telefono','telefono',{unique:false})


    }
}
function crearCliente() {
    let transaccion = DB.transaction(['crm'],'readwrite')
    transaccion.oncomplete = function () {
        console.log('transaccion completada')
    }
    transaccion.onerror = function (){
        console.log('Hubo un error en la transaccion')
    }

    const objectStore = transaccion.objectStore('crm')

    const nuevoCliente = {
        telefono:30130103,
        nombre:'juan',
        email:'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente)
}