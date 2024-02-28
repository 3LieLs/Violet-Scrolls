/*-FOCAR-*/
function focoUso() {
    if (jogador.manaCombate + armaduraGeral.manaRecuperacao > jogador.manaBase) {
        jogador.manaCombate = jogador.manaBase;
        jogador.manaPorcentagem = 100;

    } else {
        jogador.manaCombate = jogador.manaCombate + armaduraGeral.manaRecuperacao;

        jogador.porcentagem = 100 - ((armaduraGeral.manaRecuperacao / jogador.manaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem);
    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou Focar<br>Mana recuperado: ${armaduraGeral.manaRecuperacao}`);

    jogadorCombateHud();
    inimigoCombateHud();
}

function botaoFocoClick() {
    inicioRodada();
    inicioBuffDebuff();

    focoUso();
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*/