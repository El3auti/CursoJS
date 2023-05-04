/**
 * WeakMaps al igual que los weaks no tenemos los metodos size ni son iterables, ademas tampoco 
 * aceptan string o datos "simples", solo soporta objetos
 */

const prod = {
    idProd: 10
}

const weakmap = new WeakMap()
weakmap.set(prod,'monitor')
weakmap.get(prod)