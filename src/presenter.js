import { cambioPosicion } from "./auto.js";

const form = document.querySelector("#auto-form");
const entradaComando = document.querySelector("#entrada-comando");
const divPosInicial = document.querySelector("#pos-inicial");
const divComandos = document.querySelector("#comandos");
const divResultado = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const entrada = entradaComando.value.trim();
    const { superficie, posicionInicial, direccionInicial, comandos } = dividirEntrada(entrada);
    const [xMax, yMax] = superficie.split(',').map(Number);

    const resultado = cambioPosicion(posicionInicial, direccionInicial, comandos, xMax, yMax);

    divPosInicial.innerHTML = `<p>Posición Inicial: ${posicionInicial} Dirección Inicial: ${direccionInicial}</p>`;
    divComandos.innerHTML = `<p>Comandos: ${comandos}</p>`;
    
    if (resultado.error) {
        divResultado.innerHTML = `<p>${resultado.error}</p>`;
    } else {
        divResultado.innerHTML = `<p>Posición Final: x: ${resultado.x}, y: ${resultado.y} Dirección: ${resultado.direccion}</p>`;
    }
});

function dividirEntrada(entrada) {
    const [superficie, posicionInicialComando, comandos] = entrada.split('/');
    const pos = posicionInicialComando.slice(0, -1);
    const dir = posicionInicialComando.slice(-1);
    
    return {
        superficie,
        posicionInicial: pos,
        direccionInicial: dir,
        comandos
    };
}

