//vidas

//frame de vidas

//default
const corazon = new Image();
corazon.src = 'media/vida_default.png';

class vidas {
    constructor(outfit, vx, vy, height, width) {
        this.outfit = outfit;
        this.vx = vx;
        this.vy = vy;
        this.height = height;
        this.width = width;
    }
}

const vidas_default = new vidas(corazon, 5, 5, 100, 100);

function contadorVidas(vidas) {

    ctx.drawImage(vidas.outfit, vidas.vx, vidas.vy, vidas.height, vidas.width);
    ctx.drawImage(vidas.outfit, vidas.vx+30, vidas.vy, vidas.height, vidas.width);
    ctx.drawImage(vidas.outfit, vidas.vx+60, vidas.vy, vidas.height, vidas.width);
}