
const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e =>{
    if(e.targe.classList.contains('titulo')){
        console.log('Diste Click en titulo')
    }
    if(e.targe.classList.contains('precio')){
        console.log('Diste Click en precio')
    }
    if(e.targe.classList.contains('card')){
        console.log('Diste Click en card')
    }
})