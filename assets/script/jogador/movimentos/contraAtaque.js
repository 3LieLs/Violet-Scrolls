/*-ATAQUE FRACO-*/
function contraAtaqueDano() {
    armaGeral.danoCombate = armaGeral.danoCombate * 2


    if (inimigoGeral.vidaCombate - armaGeral.danoCombate < 0) {
        inimigoGeral.vidaCombate = 0
        inimigoGeral.vidaPorcentagem = 0.1

    } else {
        inimigoGeral.vidaCombate = inimigoGeral.vidaCombate - armaGeral.danoCombate

        inimigoGeral.porcentagem = 100 - ((armaGeral.danoCombate / inimigoGeral.vidaBase) * 100)
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

        inimigoGeral.vidaPorcentagem = inimigoGeral.vidaPorcentagem - inimigoGeral.porcentagem

    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} contra-atacou com ${armaGeral.nome}<br>Dano causado: ${armaGeral.danoCombate}<br>Energia gasta: ${armaGeral.energiaCusto}`)

    jogador.energiaCombate = jogador.energiaCombate - armaGeral.energiaCusto

    jogador.porcentagem = 100 - ((armaGeral.energiaCusto / jogador.energiaBase) * 100)
    jogador.porcentagem = 100 - jogador.porcentagem
    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

    jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem

    if (jogador.energiaCombate < 0) {
        jogador.energiaCombate = 0
    }

    armaGeral.danoCombate = armaGeral.danoCombate / 2

    jogadorCombateHud()
    inimigoCombateHud()
}

function botaoContraAtaqueClick() {
    if (armaGeral.tipoDano == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - armaGeral.energiaCusto >= 0 || armaGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - armaGeral.manaCusto >= 0) {
        inicioRodada();

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} se preparou para um contra-ataque`);

        setTimeout(contraAtaqueDano, 4000);
        setTimeout(inimigoDerrotado, 4000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 5000)
        //setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 6000);
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