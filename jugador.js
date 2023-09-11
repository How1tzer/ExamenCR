
//jugador.js

//Frames de rana Default
const up_default = new Image();
up_default.src = 'media/ranaUp_Default.gif';

class Jugador {
    constructor(outfit, jx, jy, height, width) {
        this.outfit = outfit;
        this.jx = jx;
        this.jy = jy;
        this.height = height;
        this.width = width;
    }
}

const jugador1 = new Jugador(up_default, 330, 630, 35, 30);

function update(jugador1) {
    ctx.fillStyle = jugador1.color;
    ctx.fillRect(jugador1.jx, jugador1.jy, jugador1.height, jugador1.width);
    ctx.drawImage(jugador1.outfit, jugador1.jx-31, jugador1.jy-33,100,100);
    console.log("hola");
    
   

}
