//mapas

class mapa {
    constructor(source, mx, my, height, width) {
        this.source = source;
        this.mx = mx;
        this.my = my;
        this.height = height;
        this.width = width;
    }
}

//Src de los mapas

//mapa 1
const map1 = new Image();
map1.src = 'media/mapa1.png';

//mapa 2
const map2 = new Image();
map2.src = 'media/mapa2.png';

//mapa3
const map3 = new Image();
map3.src = 'media/mapa3.png';

//mapas settings

//mapa 1
const mapa1 = new mapa(map1, 0, 0, 700, 700);
//mapa 2
const mapa2 = new mapa(map2, 0, 0, 700, 700);
//mapa 3
const mapa3 = new mapa(map2, 0, 0, 700, 700);




function mapas(mapa){
    ctx.drawImage(mapa.source, mapa.mx, mapa.my, mapa.height, mapa.width);
}
