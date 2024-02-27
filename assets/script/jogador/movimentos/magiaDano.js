/*-ATAQUE FRACO-*/
function MagiaDanoUso() {
    aplicarFraquezaResistenciaInimigo()
    aplicarMissJogador()

    /*-APLICAR DANO CASO ACERTO-*/
    if (missJogador == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} errou sua magia!`);
        if (magiaDanoGeral.energiaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${magiaDanoGeral.energiaCustoCombate}`);
        }
        if (magiaDanoGeral.manaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${magiaDanoGeral.manaCustoCombate}`);
        }
    }

    if (missJogador == false) {
        inimigoAtingidoDano(magiaDanoGeral.danoCombate)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaDanoGeral.nome}<br>Dano causado: ${magiaDanoGeral.danoCombate}`)
        if (magiaDanoGeral.energiaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${magiaDanoGeral.energiaCustoCombate}`);
        }
        if (magiaDanoGeral.manaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${magiaDanoGeral.manaCustoCombate}`);
        }

        verificarDebuffMagiaJogador()
    }
    /*-----*/

    /*-DESCONTAR ENERGIA/MANA-*/
    if (magiaDanoGeral.energiaCustoCombate > 0) {
        jogador.energiaCombate = jogador.energiaCombate - magiaDanoGeral.energiaCustoCombate

        jogador.porcentagem = 100 - ((magiaDanoGeral.energiaCustoCombate / jogador.energiaBase) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0
            jogador.energiaPorcentagem = 0.1;
        }
    }

    if (magiaDanoGeral.manaCustoCombate > 0) {
        jogador.manaCombate = jogador.manaCombate - magiaDanoGeral.manaCustoCombate

        jogador.porcentagem = 100 - ((magiaDanoGeral.manaCustoCombate / jogador.manaBase) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
            jogador.manaPorcentagem = 0.1;
        }
    }
    /*-----*/

    desaplicarFraquezaResistenciaInimigo()
    desaplicarMissJogador()

    jogadorCombateHud()
    inimigoCombateHud()
}
/*-----*/

/*-----*/
function botaoMagiaDanoClick() {
    if (jogador.energiaCombate - magiaDanoGeral.energiaCustoCombate >= 0 && jogador.manaCombate - magiaDanoGeral.manaCustoCombate >= 0) {
        inicioRodada();
        inicioBuffDebuffJogador();

        setTimeout(MagiaDanoUso, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(fimBuffDebuffJogador, 3000);

        setTimeout(fimRodada, 4000);
    }

    if (jogador.energiaCombate - magiaDanoGeral.energiaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (jogador.manaCombate - magiaDanoGeral.manaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/