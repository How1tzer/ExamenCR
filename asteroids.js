

function colision(obstaculo) {
    ctx.beginPath();
    ctx.fillStyle = obstaculo.color;
    ctx.fillRect(obstaculo.ox, obstaculo.oy, obstaculo.width, obstaculo.height);
    ctx.closePath();

    if (jugador1.jx < obstaculo.ox + obstaculo.width && jugador1.jx + jugador1.width > obstaculo.ox &&
        jugador1.jy < obstaculo.oy + obstaculo.height && jugador1.jy + jugador1.height > obstaculo.oy) {
        jugador1.direct = "";
    }
}