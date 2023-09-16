//enemigos

//frame de carros

//Blue + left
const blueLeft = new Image();
blueLeft.src = 'media/carroAzul_left.png';

//Red + left
const redLeft = new Image();
redLeft.src = 'media/carroRojo_left.png';

//Black + right

const blackRight = new Image();
blackRight.src = 'media/carroNegro_right.png';

//red + right

const redRight = new Image();
redRight.src = 'media/carroRojo_right.png';

//hamster alienigena + left
const hamsterLeft = new Image();
hamsterLeft.src = 'media/alienHamster_left.png';

//hamster alienigena + right
const hamsterRight = new Image();
hamsterRight.src = 'media/alienHamster_right.png';

//asteroide

//hamster alienigena + right
const asteroide = new Image();
asteroide.src = 'media/asteroide.png';

class mobs {
    constructor(outfit, cx, cy, height, width) {
        this.outfit = outfit;
        this.cx = cx;
        this.cy = cy;
        this.height = height;
        this.width = width;
    }
}

//Objetos de enemigos carro
const carroAzul_left1 = new mobs(blueLeft, 200, 565, 100, 100);
const carroRed_left2 = new mobs(redLeft, 700, 370, 100, 100);
const carroRed_left3 = new mobs(redLeft, 700, 80, 100, 100);
const carroAzul_left4 = new mobs(blueLeft, 500, 230, 100, 100);
const blackRight5 = new mobs(blackRight, 0, 511, 100, 100);
const blackRight6 = new mobs(blackRight, 100, 320, 100, 100);
const blackRight7 = new mobs(blackRight, 600, 420, 100, 100);
const redRight8 = new mobs(redRight, 300, 40, 100, 100);
const redRight9 = new mobs(redRight, 0, 130, 100, 100);

//Objetos Hamster alienigenas
const hamster_left1 = new mobs(hamsterLeft, 200, 565, 100, 100);
const hamster_left2 = new mobs(hamsterLeft, 700, 370, 100, 100);
const hamster_left3 = new mobs(hamsterLeft, 700, 80, 100, 100);
const hamster_left4 = new mobs(hamsterLeft, 500, 230, 100, 100);
const hamster_Right5 = new mobs(hamsterRight, 0, 511, 100, 100);
const hamster_Right6 = new mobs(hamsterRight, 100, 320, 100, 100);
const hamster_Right7 = new mobs(hamsterRight, 600, 420, 100, 100);
const hamster_Right8 = new mobs(hamsterRight, 300, 40, 100, 100);
const hamster_Right9 = new mobs(hamsterRight, 0, 130, 100, 100);

//asteroides

const asteroide_1 = new mobs(asteroide, 200, 565, 100, 100);
const asteroide_2 = new mobs(asteroide, 700, 370, 100, 100);
const asteroide_3 = new mobs(asteroide, 700, 80, 100, 100);
const asteroide_4 = new mobs(asteroide, 500, 230, 100, 100);
const asteroide_5 = new mobs(asteroide, 0, 511, 100, 100);
const asteroide_6 = new mobs(asteroide, 100, 320, 100, 100);
const asteroide_7 = new mobs(asteroide, 600, 420, 100, 100);
const asteroide_8 = new mobs(asteroide, 300, 40, 100, 100);
const asteroide_9 = new mobs(asteroide, 0, 130, 100, 100);



//funcion que los muestra en pantalla

function enemigos(enemigo1,enemigo2,jugador,enemigo3,enemigo4,enemigo5,enemigo6,enemigo7,enemigo8,enemigo9) {

        ctx.drawImage(enemigo9.outfit, enemigo9.cx +=6, enemigo9.cy, enemigo9.height, enemigo9.width);
        ctx.drawImage(enemigo8.outfit, enemigo8.cx +=6, enemigo8.cy, enemigo8.height, enemigo8.width);
        ctx.drawImage(enemigo1.outfit, enemigo1.cx--, enemigo1.cy, enemigo1.height, enemigo1.width);
        ctx.drawImage(enemigo2.outfit, enemigo2.cx -=3, enemigo2.cy, enemigo2.height, enemigo2.width);
        ctx.drawImage(enemigo3.outfit, enemigo3.cx -=6, enemigo3.cy, enemigo3.height, enemigo3.width);
        ctx.drawImage(enemigo4.outfit, enemigo4.cx--, enemigo4.cy, enemigo4.height, enemigo4.width);
        ctx.drawImage(enemigo5.outfit, enemigo5.cx++, enemigo5.cy, enemigo5.height, enemigo5.width);
        ctx.drawImage(enemigo6.outfit, enemigo6.cx +=3, enemigo6.cy, enemigo6.height, enemigo6.width);
        ctx.drawImage(enemigo7.outfit, enemigo7.cx +=3, enemigo7.cy, enemigo7.height, enemigo7.width);
        
    
        if(enemigo1.cx<-200){
            enemigo1.cx=700;
        }

        if(enemigo2.cx<-200){
            enemigo2.cx=700;
        }

        if(enemigo3.cx<-200){
            enemigo3.cx=700;
        }

        if(enemigo4.cx<-200){
            enemigo4.cx=700;
        }

        if(enemigo5.cx>900){
            enemigo5.cx=-50;
        }

        if(enemigo6.cx>900){
            enemigo6.cx=-50;
        }

        if(enemigo7.cx>900){
            enemigo7.cx=-50;
        }

        if(enemigo8.cx>900){
            enemigo8.cx=-50;
        }

        if(enemigo9.cx>900){
            enemigo9.cx=-50;
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
            hp-=1;
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
            hp-=1;
        }

        
        if(enemigo3.cx + enemigo3.width >= jugador.jx   && 
            enemigo3.cx <= jugador.jx  + jugador.width -70  && 
            enemigo3.cy + enemigo3.height >= jugador.jy  && 
            enemigo3.cy <= jugador.jy -80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }

        if(enemigo4.cx + enemigo4.width >= jugador.jx   && 
            enemigo4.cx <= jugador.jx  + jugador.width -70  && 
            enemigo4.cy + enemigo4.height -40 >= jugador.jy  && 
            enemigo4.cy <= jugador.jy -80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }

        if(enemigo5.cx + enemigo5.width -80 >= jugador.jx-70  && 
            enemigo5.cx <= jugador.jx  + jugador.width -50&& 
            enemigo5.cy + enemigo5.height-40 >= jugador.jy  && 
            enemigo5.cy <= jugador.jy-80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }

        if(enemigo6.cx + enemigo6.width -80 >= jugador.jx-70  && 
            enemigo6.cx <= jugador.jx  + jugador.width -50&& 
            enemigo6.cy + enemigo6.height-40 >= jugador.jy  && 
            enemigo6.cy <= jugador.jy-80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }

        if(enemigo7.cx + enemigo7.width -80 >= jugador.jx-70  && 
            enemigo7.cx <= jugador.jx  + jugador.width -50&& 
            enemigo7.cy + enemigo7.height-40 >= jugador.jy  && 
            enemigo7.cy <= jugador.jy-80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }

        if(enemigo8.cx + enemigo8.width -80 >= jugador.jx-70  && 
            enemigo8.cx <= jugador.jx  + jugador.width -50&& 
            enemigo8.cy + enemigo8.height-40 >= jugador.jy  && 
            enemigo8.cy <= jugador.jy-80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }

        if(enemigo9.cx + enemigo9.width -80 >= jugador.jx-70  && 
            enemigo9.cx <= jugador.jx  + jugador.width -50&& 
            enemigo9.cy + enemigo9.height-40 >= jugador.jy  && 
            enemigo9.cy <= jugador.jy-80  + jugador.height)
            {
            jugador.jx=330;
            jugador.jy=665;
            maxY = 0;
            maxX =0;
            hp-=1;

        }


        
    
    
}
