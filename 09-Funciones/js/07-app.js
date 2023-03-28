
iniciarApp()

function iniciarApp(){
    console.log('Iniciando app...')


    segundaFuncion()
}

function segundaFuncion(){
    console.log('Desde la  segunda funcion')
    userAuth('Pedro')
}


function userAuth(nick){
    console.log('Autenticando user...')
    console.log(`Autenticacion Confirmada!Puedes usar la app ${nick}` )
}