for (let i = 0; i <= 100; i++) {
    switch (i) {
        
        case i % 5 == 0 && i % 3 == 0:
            console.log(`Numero ${i} es FIZBUZZ!!!`)
            break;
        case i % 3 == 0:
            console.log(` Numero ${i} es FIZ!!`)
            break;
        case i % 5 == 0:
            console.log(`Numero ${i} es BUZZ!!`)
            break;

        default:
            console.log(`Numero: ${i}`)
            break;
    }
}