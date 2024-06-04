/*-FOCAR-*/
function focoUso() {
    let recuperacaoManaGeral = Math.ceil(jogador.manaBase * armaduraGeral.manaRecuperacao)

    if (jogador.manaCombate + recuperacaoManaGeral > jogador.manaBase) {
        jogador.manaCombate = jogador.manaBase;
        jogador.manaPorcentagem = 100;

    } else {
        jogador.manaCombate += recuperacaoManaGeral;

        jogador.porcentagem = 100 - ((recuperacaoManaGeral / jogador.manaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem);
    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou Focar<br>Mana recuperado: ${recuperacaoManaGeral}`);

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