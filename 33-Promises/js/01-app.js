// callbacks

const paises = ['esp','arg','br','fr','ing']
const pais = 'mrc'

function nuevoPais(pais,callbacks) {
    setTimeout(() => {
        paises.push(pais)
        callbacks
    }, 3000);
}
function mostrarPaises(paises) {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        });
    }, 3000);
}

mostrarPaises()