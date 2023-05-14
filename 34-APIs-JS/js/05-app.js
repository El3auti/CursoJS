/**
 * Visibility State es una API la cual nos sirve para saber si estamos viendo la pestana
 * de la pagina web (explicacion muuuuuuy basica, para mas buscar en net)
 */

document.addEventListener('visibilitychange', ()=>{
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion para ver el video')
    }else{
        console.log('Ejecutar la funcion para pausar el video')
    }
})