
var puntosJ1 = 0;
var puntosJA = 0;
var turno = 0;
var estadoPartida = true;

while(estadoPartida == true){
    if(turno == 0){
        res = window.confirm("Desea Solicitar Numero?.\n PUNTUACION ACTUAL" + puntosJ1)
        if(res == true){
            puntosJ1 += Math.floor(Math.random()*11);
            if(puntosJ1 > 20){
                window.alert("HAS PERDIDO, TE HAS PASADO DE 20 PUNTOS");
                estadoPartida = false;
            }
        }else {
            let mensaje = "PARTIDA FINALIZADA."
            if(puntosJ1 > puntosJA) mensaje += "HAS GANADO";
            else if(puntosJ1 < puntosJA) mensaje += "HAS PERDIDO";
            else mensaje += "HAS EMPATADO";
            window.alert(mensaje);
            estadoPartida = false;
        }

        turno++;
    }else if(turno == 1){
        if(puntosJA <17){
            puntosJA += Math.floor(Math.random()*11);
        }
        turno--;
    }
}
