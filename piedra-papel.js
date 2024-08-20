function EleccionPc(Elijo) {
    math1 = Math.random()
    if (math1 < 0.33) {
        Elijo = 'Piedra';
        Enemigo.src = 'imagenes/3.png';
    } else if (math1 >= 0.33 && math1 < 0.66){
        Elijo = 'Papel';
        Enemigo.src = 'imagenes/2.png';
    } else if (math1 >= 0.66 && math1 < 1) {
        Elijo = 'Tijera';
        Enemigo.src = 'imagenes/1.png';
    }
    return Elijo
}

function EleccionJugador(Eleccion){
    Elijo = EleccionPc(Elijo)
    if (RecordJugador.Derrota === 5) {
        Resultado.innerHTML = 'DERROTA';
        backToZero();
    } else if (RecordJugador.Victoria === 5){
        Resultado.innerHTML = 'VICTORIA';
        backToZero();
    }else if (Eleccion === Elijo){
        RecordJugador.Empate ++;
    } else if (Eleccion === 'Papel') {
        if (Elijo === 'Tijera'){
            RecordJugador.Derrota ++;
        } else {
            RecordJugador.Victoria ++;
        }
    } else if (Eleccion === 'Tijera') {
        if (Elijo === 'Piedra') {
            RecordJugador.Derrota ++;
        } else {
            RecordJugador.Victoria ++;
        }
    } else if (Eleccion === 'Piedra') {
        if (Elijo === 'Papel') {
            RecordJugador.Derrota ++;
        } else {
            RecordJugador.Victoria ++;
        }
    }
    if(RecordJugador.Victoria > 0 || RecordJugador.Derrota > 0 || RecordJugador.Empate > 0) {
        Resultado.innerHTML = '';
    }
    return ModificarRecord();;
}

function ModificarRecord() {
    victory.innerHTML = `Victorias: ${RecordJugador.Victoria}`;
    defeat.innerHTML = `Derrotas: ${RecordJugador.Derrota}`;
    ties.innerHTML = `Empates: ${RecordJugador.Empate}`;
    PcChoice.innerHTML = `Tu oponente eligio: ${Elijo}`;
}

function backToZero() {
    RecordJugador.Derrota = 0;
    RecordJugador.Victoria = 0;
    RecordJugador.Empate = 0
}

let RecordJugador = {
    Victoria: 0,
    Derrota: 0,
    Empate: 0
    }
let Elijo = '';

let victory = document.querySelector('.Vic')
let defeat = document.querySelector('.Der')
let ties = document.querySelector('.Emp')
let PcChoice = document.querySelector('.pcCHoice');
let Enemigo = document.querySelector(`.ImagenEnemigo`);
let Resultado = document.querySelector('.Resultado');