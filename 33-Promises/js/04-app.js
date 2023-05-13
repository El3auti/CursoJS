/**
 * En este ejemplo vemos como cambiamos un callbackHell por una promise
 * queda diez veces mejor, es mucho mas legible
 */

const paises = []
const nuevoPais = pais => new Promise((resolve) =>{
    setTimeout(() => {
        paises.push(pais)
        resolve(`Pais agregado correctamente ${pais}`)
    }, 3000);
})

nuevoPais('Argentina').then(resultado =>{
    console.log(resultado)
    console.log(paises)
    return nuevoPais('Francia')
}).then(
    resultado =>{
        console.log(resultado)
        console.log(paises)             
        return nuevoPais('Croacia')
    }).then(
    resultado =>{
        console.log(resultado)
        console.log(paises)
    }
)
                      