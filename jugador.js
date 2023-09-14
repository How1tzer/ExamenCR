//jugador.js

//Variables y Constantes movimiento:
var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;
const velocidadJugador = .5; // Ajusta la velocidad de movimiento como desees
var maxY = 0; //max 13
var maxX =0; //max 6

//Frames de rana Default:

//arriba
const up_default = new Image();
up_default.src = 'media/ranaUp_default.png';

//abajo
const down_default = new Image();
down_default.src = 'media/ranaDown_default.png';

//derecha
const right_default = new Image();
right_default.src = 'media/ranaRight_default.png';

//izquierda
const left_default = new Image();
left_default.src = 'media/ranaLeft_default.png';

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
const jugador1 = new Jugador(up_default, 330, 665, 50, 50);
const jugador2 = new Jugador(up_default, 330, 300, 50, 50);

//Movimiento Default

function direccion (jugador){
    document.addEventListener("keydown", (e) => {
        if (e.key === "w") { // w
            moveUp = true;
            jugador.outfit=up_default;
            
        }
        if (e.key === "s") { // s
            moveDown = true;
            jugador.outfit=down_default;
        }
        if (e.key === "a") { // a
            moveLeft = true;
            jugador.outfit=left_default;
        }
        if (e.key === "d") { // d
            moveRight = true;
            jugador.outfit=right_default;
        }
    });
    
    document.addEventListener("keyup", (e) => {
        if (e.key === "w") { // w
            if(moveUp==true){
                if(maxY<=12){
                    maxY++;
                    jugador.jy -= 48;
                }
                
            }
            moveUp = false;
        }
        if (e.key === "s") { // s
            if(moveDown==true){
                if(maxY>=1){
                    maxY--;
                    jugador.jy += 48;
                }
            }
            moveDown = false;
        }
        if (e.key === "a") { // a
            if(moveLeft==true){
                if(maxX<=5){
                    maxX++;
                    jugador.jx -= 48;
                }
            }
            moveLeft = false;
        }
        if (e.key === "d") { // d
            if(moveRight==true){
                if(maxX>=-5){
                    maxX--;
                    jugador.jx += 48;
                }
            }
            moveRight = false;
        }
    });
    console.log(maxY);
}

function update(jugador) {

    ctx.drawImage(jugador.outfit, jugador.jx - 17, jugador.jy - 17, jugador.height, jugador.width);
}

/////////////////////////////////////////////
//Movimiento en el espacio:
/////////////////////////////////////////////
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
