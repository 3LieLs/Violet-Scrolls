/*-DESCANSAR-*/
function descansoUso() {
    let recuperacaoEnergiaGeral = Math.ceil(jogador.energiaBase * armaduraGeral.energiaRecuperacao)

    if (jogador.energiaCombate + recuperacaoEnergiaGeral > jogador.energiaBase) {
        jogador.energiaCombate = jogador.energiaBase;
        jogador.energiaPorcentagem = 100;

    } else {
        jogador.energiaCombate += recuperacaoEnergiaGeral;

        jogador.porcentagem = 100 - ((recuperacaoEnergiaGeral / jogador.energiaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem);
    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou Descanso<br>Energia recuperado: ${recuperacaoEnergiaGeral}`);

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