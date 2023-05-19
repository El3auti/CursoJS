const url = 'http://localhost:4000/clientes'


export const nuevoCliente = async (cliente) => {
    try {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    window.location.href = 'index.html';
    } catch (error) {
      console.error(error);
    }
  };
  // Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
      const resultado = await fetch(url); // Si no se le especifica metodo toma por default GET
      const clientes = await resultado.json();
      return clientes;
    } catch (error) {
      console.log(error);
    }
  };

export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`,{
                method:'DELETE'
                })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerClienteId = async id =>{
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        return cliente
    } catch (error) {
        console.log('el error es ' + error)
    }
}

export const actualizarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`,{
            method:'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type':'application/json'
            }})
        window.location.href = 'index.html';
    } catch (error) {
        console.log('el error es ' + error)
    }
}