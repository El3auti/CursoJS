
const metodoPago = 'Efectivo'

switch (meto) {
    case 'Efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'Cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tengas fondos primeros`)
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`)
        break

    default:
        console.log('Aun no has pagado')
        break;
}