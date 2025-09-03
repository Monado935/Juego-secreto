let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento (`p`, `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario < numeroSecreto) {
        AsignarTextoElemento (`p`, `El número secreto es mayor. Intenta de nuevo.`);
        } else {
                    AsignarTextoElemento (`p`, `El número secreto es menor. Intenta de nuevo.`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario"). value = "";
}

function generarNumeroSecreto (){
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento(`p`, `Ya se han usado todos los números posibles.`);
        return null;
    }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
     console.log(numeroGenerado);
    return numeroGenerado;
}
function condicionesIniciales(){
    AsignarTextoElemento(`h1`, `juego del número secreto`);
    AsignarTextoElemento(`p`, `Adivina un nimero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();