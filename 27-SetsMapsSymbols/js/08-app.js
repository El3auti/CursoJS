const ciudades = ['londres','paris','new york']
const ordenes = new Set ([123, 231, 131, 1021]);
const datos = new Map () ;

datos.set ('nombre', 'Juan');
datos.set('profesion', 'desarrollador web ');


/**
 * Entry Iterator, nos agrega una llave si esta no existe
 */

for(let Entry  of ciudades.entries()){
    console.log(Entry)
}

for(let Entry  of ordenes.entries()){
    console.log(Entry)
}

/**
 * Values Iterator, nos devuelve el valor 
 */

for(let Values  of ciudades.values()){
    console.log(Values)
}


/**
 * Keys Iterator, nos devuelve la llave del dato
 */

for(let Keys  of ciudades.keys()){
    console.log(Keys)
}