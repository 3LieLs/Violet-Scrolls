/*-DESCANSAR-*/
function descansoUso() {
    if (jogador.energiaCombate + armaduraGeral.energiaRecuperacao > jogador.energiaBase) {
        jogador.energiaCombate = jogador.energiaBase;
        jogador.energiaPorcentagem = 100;

    } else {
        jogador.energiaCombate = jogador.energiaCombate + armaduraGeral.energiaRecuperacao;

        jogador.porcentagem = 100 - ((armaduraGeral.energiaRecuperacao / jogador.energiaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem);
    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou Descanso<br>Energia recuperado: ${armaduraGeral.energiaRecuperacao}`);

    jogadorCombateHud();
    inimigoCombateHud();
}


function botaoDescansoClick() {
    inicioRodada();
    inicioBuffDebuff();

    descansoUso();
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*/