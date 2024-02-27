/*-DEFENDER-*/
var danoBloqueado = 0;

function bloquearUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} Assumiu uma postura defensiva`);

    danoBloqueado = inimigoArmaGeral.danoCombate * 0.25;
    danoBloqueado = Math.round(danoBloqueado)
    inimigoArmaGeral.danoCombate -= danoBloqueado;
}
function bloquearDesuso() {
    inimigoArmaGeral.danoCombate += danoBloqueado;
}

function botaoBloquearClick() {
    inicioRodada();
    inicioBuffDebuffJogador();

    setTimeout(bloquearUso, 0);
    setTimeout(bloquearDesuso, 3000);

    setTimeout(inimigoAtaque, 2000);
    setTimeout(jogadorCombateHud, 2000);
    setTimeout(inimigoCombateHud, 2000);
    setTimeout(jogadorDerrotado, 3000);

    setTimeout(fimBuffDebuffJogador, 3000);

    setTimeout(fimRodada, 4000);
}
/*-----*/