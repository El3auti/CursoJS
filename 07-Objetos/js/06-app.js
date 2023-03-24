const producto = {
    nombre: "Monitor 20'",
    precio: 400,
    disponible: true,
    otroObjeto:{
        medidas:{
        peso: '10kg',
        otrodato: 'dato random'},
        fabricado:{
            pais:'Arg',
            colonia:'villa 31'
        }
    }
}

const {nombre, 
       fabricado:{medidas:{peso}}} = producto