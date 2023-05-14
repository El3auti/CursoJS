/**
 * Intersection Observer API
 */


document.addEventListener('DOMContentLoaded', ()=> {
    
    const Observer = new IntersectionObserver(entries =>{
        if(entries[0]){
            console.log('Ya esta visible')
        }
    })

    Observer.observe(document.querySelector('.premium'))
})