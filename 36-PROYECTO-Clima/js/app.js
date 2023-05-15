import { Key } from './keyAPI.js';

const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
	formulario.addEventListener("submit", validForm);
});

function validForm(e) {
	e.preventDefault();
    const ciudad = document.querySelector("#ciudad").value;
    if ( ciudad === '') {
		mostrarError("Ambos campos son obligatorios");
        return
    }
    consultarApi(ciudad)
}

function consultarApi(ciudad) {
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${Key}`

    setTimeout(() => {
        fetch(URL)
             .then(ciudad => ciudad.json())
             .then((ciudadJson) =>{
                limpiarHTML()

                if (ciudadJson.cod === "404") {
					mostrarError(
						`La ciudad: "${ciudad}", parece no existir, por favor verifique`
					);
				}
                mostarClima(ciudadJson);
			});
            
    }, 1000);
    
}

function mostrarError(mensaje) {
	const alerta = document.querySelector(".newAlerta");

	if (!alerta) {
		const newAlerta = document.createElement("div");
		newAlerta.classList.add(
			"bg-red-100",
			"border-red-400",
			"text-red-700",
			"px-4",
			"py-3",
			"rounded",
			"max-w-md",
			"mx-auto",
			"mt-6",
			"text-center",
			"newAlerta"
		);
		newAlerta.innerHTML = `
        <strong class="font-bold">Error</strong>
        <span class="block">${mensaje}</span>
        `;
		container.appendChild(newAlerta);

		setTimeout(() => {
			newAlerta.remove();
		}, 4000);
	}
}

function mostarClima(datos) {
	const {
		name,
		main: { temp, temp_max, temp_min },
	} = datos;

	const actual = document.createElement("p");
	actual.innerHTML = `Actualmente en ${name} la temperatura es ${centigrados(temp)}, con una maxima de ${centigrados(temp_max)} y con una minima de ${centigrados(temp_min)};`;
	actual.classList.add("font-bold", "text-4xl");

	const resultadoDiv = document.createElement("div");
	resultadoDiv.classList.add("text-center", "text-white");
	resultadoDiv.appendChild(actual);

	resultado.appendChild(resultadoDiv);
}



function limpiarHTML() {
	while (resultado.firstChild) {
		resultado.removeChild(resultado.firstChild);
	}
}

function spinner() {
	limpiarHTML();

	const divSpinner = document.createElement("div");
	divSpinner.classList.add("sk-chase");
	divSpinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    `;
	resultado.appendChild(divSpinner);
}

function centigrados(temp) {
    const resultadotemp = (temp - 273.15).toFixed(1);
    return `${resultadotemp}°C`
}