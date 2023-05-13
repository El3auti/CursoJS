const aplicarDescuento = new Promise ((resolve,reject)=>{
    const descuento = true

    if(descuento){
        resolve('descuento aplicado')
    }else{
        reject('no se pudo aplicar el descuento')
    }
})

aplicarDescuento.then(resultado => console.log(resultado))
                .catch(error => console.log(error))



/**
 * Hay 3 estados posibles
 * FullFilled - El promise se cumplio
 * Rejected - El promise no se cumplio
 * Pending - No se cumplio pero tampoco fue rechazado
 */
