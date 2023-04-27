localStorage.setItem('nombre','Bauti')

const prod = {
    'nombre': 'bauti',
    'edad':11
}

const prodString = JSON.stringify(prod)
localStorage.setItem('prodReplaceName',prodString)

const prod2 = ['bauti',11,true]
localStorage.setItem('prodReplaceNameArray',JSON.stringify(prod2))