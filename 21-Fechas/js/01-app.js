const diaHoy = new Date()
const diaRadomSTR = new Date('Junary 4 2003')
const diaRadomINT = new Date(year= 2003, mounth = 06, day = 1)


let valor;

valor = diaRadomINT.getFullYear()
valor = diaRadomINT.getMonth() //Enero = mes 0
valor = diaRadomINT.getMinutes()
valor = diaRadomINT.getHours()
valor = diaRadomINT.getTime()
console.log(valor)