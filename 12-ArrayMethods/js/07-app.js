const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto','Septiembre','Octubre','Noviembre','Diciembre']

//unir 2 arreglos con concat:
console.log(meses.concat(meses2))

// Rest Operator o Spread operator

console.log([...meses,...meses2])