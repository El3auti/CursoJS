const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('keydown',() => console.log('escribiendo'))
busqueda.addEventListener('keyup',() => console.log('escribiendo pero soltaste la tecla'))
busqueda.addEventListener('blur',() => console.log('escribiendo para validar datos'))
busqueda.addEventListener('copy',() => console.log('copy'))
busqueda.addEventListener('cut',() => console.log('cut'))
busqueda.addEventListener('input',() => console.log('todo en uno menos el blur'))

busqueda.addEventListener('input',(e)=>{
    console.log(e.target.value)
})