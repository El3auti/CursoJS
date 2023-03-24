
const boolean1 = true
const boolean2 = false
const boolean3 = "true"

console.log(typeof boolean1)
console.log(boolean3 == boolean1) // Va a dar falso porque los trata diff a los boolean

const boolean4 = new Boolean(true)
console.log(typeof boolean4)