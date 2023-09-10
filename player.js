
var keyState = {};

class Jugador {
    constructor(color, jx, jy, height, width,direct) {
        this.color = color;
        this.jx = jx;
        this.jy = jy;
        this.height = height;
        this.width = width;
        this.direct = direct;
    }
}

function direccion(jugador) {
    document.addEventListener("keydown", (e) => {
        keyState[e.keyCode] = true;
    });
    document.addEventListener("keyup", (e) => {
        keyState[e.keyCode] = false;
    });
    if (keyState[87]) { // w
        jugador.direct = "arriba";
    }
    if (keyState[83]) { // s
        jugador.direct = "abajo";
    }
    if (keyState[65]) { // a
        jugador.direct = "izquierda";
    }
    if (keyState[68]) { // d
        jugador.direct = "derecha";
    }
    if (keyState[32]) { // espacio
        velocidad = velocidad + 0.1;
    }
    

    if (keyState[80]) { // P
        pause = ! pause; 
        
    }
    if(pause==true){
            jugador.direct="";
            ctx.fillStyle = "rgba(0,0,0,.7)";
            ctx.fillRect (0, 0, 700, 700);
            ctx.beginPath();
            ctx.fillStyle = "White";
            ctx.font = "50px Arial";
            ctx.fillText("Pause", 300, 350);
        }

    if (jugador.direct== "arriba") { 
        jugador.jy -= velocidad;
    }
    if (jugador.direct == "abajo") { 
        jugador.jy += velocidad;
    }
    if (jugador.direct == "izquierda") { 
        jugador.jx -= velocidad;
    }
    if (jugador.direct == "derecha") { 
        jugador.jx += velocidad;
    }

    
}

function limites(jugador) {
    if (jugador.jy < -100) {
        jugador.jy = 720;
    }
    if (jugador.jy > 720) {
        jugador.jy = -100;
    }

    if (jugador.jx < -110) {
        jugador.jx = 720;
    }
    if (jugador.jx > 720) {
        jugador.jx = -110;
    }
}

function update(jugador) {

    ctx.drawImage(imagen, jugador.jx, jugador.jy,100,100);

    
}