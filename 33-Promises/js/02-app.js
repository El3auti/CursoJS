/**
 * Este es un claro ejemplo de lo que no se tiene que hacer con las callbacks
 * para cosas sencillas y pequenias usamos callbacks sino usamos promises
 */
const paises = []

function nuevoPais(pais,callback) {
    paises.push(pais)
    callback()
}

function MostrarPaises() {
    console.log(paises)
}

function IniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('alemania', MostrarPaises)
        setTimeout(() => {
            nuevoPais('francia', MostrarPaises)
        }, 3000);
        setTimeout(() => {
            nuevoPais('inglaterra', MostrarPaises)
        }, 3000);
    }, 3000);
}

IniciarCallbackHell()