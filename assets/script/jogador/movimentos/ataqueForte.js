/*-ATAQUE ESPECIAL-*/
function ataqueForteDano() {
    aplicarFraquezaResistenciaInimigo()
    aplicarCriticoJogador()

    if (inimigoGeral.vidaCombate - parseInt(armaGeral.danoCombate + (armaGeral.danoCombate / 2)) < 0) {
        inimigoGeral.vidaCombate = 0;
        inimigoGeral.vidaPorcentagem = 0.1;

    } else {
        inimigoGeral.vidaCombate = inimigoGeral.vidaCombate - parseInt(armaGeral.danoCombate + (armaGeral.danoCombate / 2));

        inimigoGeral.porcentagem = 100 - ((parseInt(armaGeral.danoCombate + (armaGeral.danoCombate / 2)) / inimigoGeral.vidaBase) * 100);
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

        inimigoGeral.vidaPorcentagem = inimigoGeral.vidaPorcentagem - inimigoGeral.porcentagem;

    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br> ${jogador.nome} atacou com ${armaGeral.nome} com força<br>Dano causado: ${parseInt(armaGeral.danoCombate + (armaGeral.danoCombate / 2))}<br>Energia gasta: ${parseInt(armaGeral.energiaCusto + (armaGeral.energiaCusto / 2))}`);
    if (criticoJogador == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br>Acerto crítico!`)
    }

    verificarDebuffArmaJogador()

    jogador.energiaCombate = jogador.energiaCombate - parseInt(armaGeral.energiaCusto + (armaGeral.energiaCusto / 2));

    jogador.porcentagem = 100 - ((parseInt(armaGeral.energiaCusto + (armaGeral.energiaCusto / 2)) / jogador.energiaBase) * 100);
    jogador.porcentagem = 100 - jogador.porcentagem;
    jogador.porcentagem = jogador.porcentagem.toPrecision(2);

    jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem;

    if (jogador.energiaCombate < 0) {
        jogador.energiaCombate = 0;
    }

    jogadorCombateHud();
    inimigoCombateHud();

    desaplicarFraquezaResistenciaInimigo()
    desaplicarCriticoJogador()
}

function botaoAtaqueForteClick() {
    if (armaGeral.tipoDano == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - armaGeral.energiaCusto >= 0 || armaGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - armaGeral.manaCusto >= 0) {
        inicioRodada();

        setTimeout(ataqueForteDano, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 3000)
        setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 4000);
    }

    if (armaGeral.tipoDano == 'Físico' && jogador.energiaCombate < 0 || armaGeral.classe == 'Físico' && jogador.energiaCombate - armaGeral.energiaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (armaGeral.tipoDano == 'Mágico' && jogador.manaCombate < 0 || armaGeral.classe == 'Mágico' && jogador.manaCombate - armaGeral.manaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/