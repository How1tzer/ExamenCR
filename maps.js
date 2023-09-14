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
const map1 = new Image();
map1.src = 'media/boceto.png';

//mapas settings
const mapa1 = new mapa(map1, 0, 0, 700, 700);



function mapas(mapa){
    ctx.drawImage(mapa.source, mapa.mx, mapa.my, mapa.height, mapa.width);
}