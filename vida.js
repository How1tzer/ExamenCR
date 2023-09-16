//vidas

//variables
var hp = 3;

//frame de vidas

//default
const corazon = new Image();
corazon.src = 'media/vida_default.png';

//aire

const aire = new Image();
aire.src = 'media/vida_space.png';

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
const vidas_espacial = new vidas(aire, 5, 5, 100, 100);

function contadorVidas(vidas) {

    if(hp==3){
        ctx.drawImage(vidas.outfit, vidas.vx, vidas.vy, vidas.height, vidas.width);
        ctx.drawImage(vidas.outfit, vidas.vx+30, vidas.vy, vidas.height, vidas.width);
        ctx.drawImage(vidas.outfit, vidas.vx+60, vidas.vy, vidas.height, vidas.width);
    }

    if(hp==2){
        ctx.drawImage(vidas.outfit, vidas.vx, vidas.vy, vidas.height, vidas.width);
        ctx.drawImage(vidas.outfit, vidas.vx+30, vidas.vy, vidas.height, vidas.width);
        
    }

    if(hp==1){
        ctx.drawImage(vidas.outfit, vidas.vx, vidas.vy, vidas.height, vidas.width);
        location.reload(true);
        
    }

    

}