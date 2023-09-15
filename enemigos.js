//enemigos

//frame de carros

//Azul + left
const azulLeft = new Image();
azulLeft.src = 'media/carroAzul_left.png';

//Red + left
const redLeft = new Image();
redLeft.src = 'media/carroRojo_left.png';

class carros {
    constructor(outfit, cx, cy, height, width) {
        this.outfit = outfit;
        this.cx = cx;
        this.cy = cy;
        this.height = height;
        this.width = width;
    }
}

//Objetos de enemigos carro
const carroAzul_left1 = new carros(azulLeft, 700, 565, 100, 100);
const carroRed_left2 = new carros(redLeft, 700, 370, 100, 100);
const carroRed_left3 = new carros(redLeft, 700, 80, 100, 100);

function enemigos(enemigo1,enemigo2,jugador,enemigo3) {
        
        ctx.drawImage(enemigo1.outfit, enemigo1.cx--, enemigo1.cy, enemigo1.height, enemigo1.width);
        ctx.drawImage(enemigo2.outfit, enemigo2.cx -=3, enemigo2.cy, enemigo2.height, enemigo2.width);
        ctx.drawImage(enemigo3.outfit, enemigo3.cx--, enemigo3.cy, enemigo3.height, enemigo3.width);
    
        if(enemigo2.cx<-200){
            enemigo2.cx=700;
        }

        if(enemigo3.cx<-200){
            enemigo3.cx=700;
        }

        if(enemigo1.cx<-200){
            enemigo1.cx=700;
        }

        
        //colisiones
        
        if(enemigo1.cx + enemigo1.width -80 >= jugador.jx-70  && 
            enemigo1.cx <= jugador.jx  + jugador.width -50&& 
            enemigo1.cy + enemigo1.height-40 >= jugador.jy  && 
            enemigo1.cy <= jugador.jy-80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;

        }

        if(enemigo2.cx + enemigo2.width >= jugador.jx   && 
            enemigo2.cx <= jugador.jx  + jugador.width -70  && 
            enemigo2.cy + enemigo2.height >= jugador.jy  && 
            enemigo2.cy <= jugador.jy -80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;

        }

        //terminar de perfeccionar esta colision
        if(enemigo3.cx + enemigo3.width >= jugador.jx   && 
            enemigo3.cx <= jugador.jx  + jugador.width -70  && 
            enemigo3.cy + enemigo3.height >= jugador.jy  && 
            enemigo3.cy <= jugador.jy -80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;

        }
    
    
}