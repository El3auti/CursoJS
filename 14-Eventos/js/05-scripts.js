window.addEventListener('scroll',() =>{
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect() // En donde se encuentra un elemento
    console.log(ubicacion)
})