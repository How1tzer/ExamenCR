//jugador.js

//Variables y Constantes:
var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;
const velocidadJugador = .5; // Ajusta la velocidad de movimiento como desees

//Frames de rana Default:
const up_default = new Image();
up_default.src = 'media/ranaUp_default.png';

class Jugador {
    constructor(outfit, jx, jy, height, width) {
        this.outfit = outfit;
        this.jx = jx;
        this.jy = jy;
        this.height = height;
        this.width = width;
    }
}

//Jugador x Nivel:
const jugador1 = new Jugador(up_default, 330, 680, 15, 15);
const jugador2 = new Jugador(up_default, 330, 300, 15, 15);

//Movimiento Default
function direccion (jugador){
    document.addEventListener("keydown", (e) => {
        if (e.key === "w") { // w
            moveUp = true;
        }
        if (e.key === "s") { // s
            moveDown = true;
        }
        if (e.key === "a") { // a
            moveLeft = true;
        }
        if (e.key === "d") { // d
            moveRight = true;
        }
    });
    
    document.addEventListener("keyup", (e) => {
        if (e.key === "w") { // w
            if(moveUp==true){
                jugador.jy -= 20;
            }
            moveUp = false;
        }
        if (e.key === "s") { // s
            if(moveDown==true){
                jugador.jy += 20;
            }
            moveDown = false;
        }
        if (e.key === "a") { // a
            if(moveLeft==true){
                jugador.jx -= 20;
            }
            moveLeft = false;
        }
        if (e.key === "d") { // d
            if(moveRight==true){
                jugador.jx += 20;
            }
            moveRight = false;
        }
    });
}

function update(jugador) {

    ctx.fillStyle = jugador.color;
    ctx.fillRect(jugador.jx, jugador.jy, jugador.height, jugador.width);
    ctx.drawImage(jugador.outfit, jugador.jx - 17, jugador.jy - 17, 50, 50);
}

//Movimiento en el espacio:
function direccionEspacial(jugador) {
    document.addEventListener("keydown", (e) => {
        if (e.key === "w") { // w
            moveUp = true;
        }
        if (e.key === "s") { // s
            moveDown = true;
        }
        if (e.key === "a") { // a
            moveLeft = true;
        }
        if (e.key === "d") { // d
            moveRight = true;
        }
    });
    
    document.addEventListener("keyup", (e) => {
        if (e.key === "w") { // w
            moveUp = false;
        }
        if (e.key === "s") { // s
            moveDown = false;
        }
        if (e.key === "a") { // a
            moveLeft = false;
        }
        if (e.key === "d") { // d
            moveRight = false;
        }
    });
}

function updateEspacial(jugador) {
    ctx.fillStyle = jugador.color;
    ctx.fillRect(jugador.jx, jugador.jy, jugador.height, jugador.width);
    ctx.drawImage(jugador.outfit, jugador.jx - 31, jugador.jy - 33, 100, 100);

    if (moveUp) {
        jugador.jy -= velocidadJugador;
    }
    if (moveDown) {
        jugador.jy += velocidadJugador;
    }
    if (moveLeft) {
        jugador.jx -= velocidadJugador;
    }
    if (moveRight) {
        jugador.jx += velocidadJugador;
    }
}
