/**
 * El weakset es un set exclusivo para objetos, comparten varios metodos excepto el size y
 * ademas el weakset no es iterable
 */
const weakset = new WeakSet()

const Cliente = {
    nombre: 'juan',
    saldo: 1000
}


weakset.add(Cliente)