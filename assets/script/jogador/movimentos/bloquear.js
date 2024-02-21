/*-DEFENDER-*/
var danoBloqueado = 0;

function bloquearUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} Assumiu uma postura defensiva`);

    danoBloqueado = inimigoGeral.danoCombate;
    inimigoGeral.danoCombate = inimigoGeral.danoCombate / 2;
    inimigoGeral.danoCombate = Math.round(inimigoGeral.danoCombate)
}
function bloquearDesuso() {
    inimigoGeral.danoCombate = danoBloqueado;
}

function botaoBloquearClick() {
    inicioRodada();

    setTimeout(bloquearUso, 0);
    setTimeout(bloquearDesuso, 3000);

    setTimeout(inimigoAtaque, 2000);
    setTimeout(jogadorCombateHud, 2000);
    setTimeout(inimigoCombateHud, 2000);
    setTimeout(jogadorDerrotado, 3000);

    setTimeout(buff_debuff_jogador, 3000)
    setTimeout(buff_debuff_inimigo, 3500)

    setTimeout(fimRodada, 4000);
}
/*-----*/