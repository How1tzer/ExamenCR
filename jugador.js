//jugador.js

//Variables y Constantes movimiento:
var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;
const velocidadJugador = 3; 

//capacidad de movimiento default
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

//Frames de rana espacial:

//arriba
const up_espacial = new Image();
up_espacial.src = 'media/ranaUp_espacial.png';

//abajo
const down_espacial = new Image();
down_espacial.src = 'media/ranaDown_espacial.png';

//derecha
const right_espacial = new Image();
right_espacial.src = 'media/ranaRight_espacial.png';

//izquierda
const left_espacial = new Image();
left_espacial.src = 'media/ranaLeft_espacial.png';

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
const jugador2 = new Jugador(up_espacial, 330, 665, 50, 50);

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

    if(maxY==13){
        nivel = nivel+1;
        maxY = 0;
        jugador.jy = 665;
    }
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
            jugador.outfit=up_espacial;
        }
        if (e.key === "s") { // s
            moveDown = true;
            jugador.outfit=down_espacial;
        }
        if (e.key === "a") { // a
            moveLeft = true;
            jugador.outfit=left_espacial;
        }
        if (e.key === "d") { // d
            moveRight = true;
            jugador.outfit=right_espacial;
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
    // Límite superior e inferior del canvas
    const canvasTop = 0;
    const canvasBottom = 700;

    // Límite izquierdo del canvas
    const canvasLeft = 0;

    // Ancho del canvas
    const canvasWidth = 700;

    ctx.drawImage(jugador.outfit, jugador.jx - 31, jugador.jy - 33, 100, 100);

    if (moveUp && jugador.jy > canvasTop) {
        jugador.jy -= velocidadJugador;
    }
    if (moveDown && jugador.jy < canvasBottom - 100) {
        jugador.jy += velocidadJugador;
    }
    if (moveLeft && jugador.jx > canvasLeft) {
        jugador.jx -= velocidadJugador;
    }
    if (moveRight && jugador.jx < canvasWidth - 100) {
        jugador.jx += velocidadJugador;
    }
    if(jugador.jy<50){
        nivel = nivel+1;
    }
}

