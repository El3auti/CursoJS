/**
 * Como consumir datos de un Json con Arrays
 */

const btnJSONArray = document.querySelector('#cargarJSONArray').addEventListener('click',cargarDatos)

function cargarDatos() {
    
    url = 'data/empleados.json'

    fetch(url)
             .then(empleados => empleados.json())
             .then(empleadosjson => {
                empleadosjson.forEach(empleado => {
                    console.log(empleado)
                });
             })
             .catch(error => console.log(error))
            }  