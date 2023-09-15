//vidas

//frame de vidas

//default
const vidas_default = new Image();
vidas_default.src = 'media/vida_default.png';

class vidas {
    constructor(outfit, vx, vy, height, width) {
        this.outfit = outfit;
        this.vx = vx;
        this.vy = vy;
        this.height = height;
        this.width = width;
    }
}

const vidas_default = new vidas(vidas_default, 50, 50, 50, 50);

function contadorVidas(vidas) {

    ctx.drawImage(vidas.outfit, vidas.jx, vidas.jy, vidas.height, vidas.width);
}