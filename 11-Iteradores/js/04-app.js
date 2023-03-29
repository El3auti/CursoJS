
let i = 0

//  El WHILE se ejecuta mientras sea verdadera la condicion
while(i < 10){

    //Bloque de codigo
    console.log(`Numero: ${i}`)


    i++
}

//  Hacer el fizz buzz y el impar o par con while 



while (i <= 100) {
    
    if(i % 15 === 0){
            console.log(`Numero ${i} es FIZBUZZ!!!`)
    }else if(i %  3 === 0){
            console.log(` Numero ${i} es FIZ!!`)
    }else if(i % 5  === 0 ){
            console.log(`Numero ${i} es BUZZ!!`)
    }
    i++
}


while (i <= 10) {
    if (i % 2 == 0) {
        console.log(`Numero ${i} es PAR`)   
    }else {
        console.log(`Numero ${i} es IMPAR`)
    }
    i++
}