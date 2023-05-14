window.addEventListener('online',actualizarEstado)
window.addEventListener('offline',actualizarEstado)

function actualizarEstado() {
    if (navigator.onLine) {
        return 'Si estas conectado'
    }
    return 'No estas conectado'
}