/*-ATAQUE FRACO-*/
function ataqueFracoDano() {
    aplicarFraquezaResistenciaInimigo();
    aplicarCriticoJogador();
    aplicarMissJogador();

    /*-APLICAR DANO CASO ACERTO-*/
    if (missJogador == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} errou seu ataque!`);
        if (armaGeral.energiaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${armaGeral.energiaCustoCombate}`);
        }
        if (armaGeral.manaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${armaGeral.manaCustoCombate}`);
        }
    }

    if (missJogador == false) {
        inimigoAtingidoDano(armaGeral.danoCombate)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} atacou com ${armaGeral.nome}<br>Dano causado: ${armaGeral.danoCombate}`)
        if (armaGeral.energiaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${armaGeral.energiaCustoCombate}`);
        }
        if (armaGeral.manaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${armaGeral.manaCustoCombate}`);
        }
        if (criticoJogador == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Acerto crítico!`);
        }

        verificarDebuffArmaJogador();
    }
    /*-----*/

    /*-DESCONTAR ENERGIA/MANA-*/
    if (armaGeral.energiaCustoCombate > 0) {
        jogador.energiaCombate = jogador.energiaCombate - armaGeral.energiaCustoCombate;

        jogador.porcentagem = 100 - ((armaGeral.energiaCustoCombate / jogador.energiaBase) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem;

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0;
            jogador.energiaPorcentagem = 0.1;
        }
    }

    if (armaGeral.manaCustoCombate > 0) {
        jogador.manaCombate = jogador.manaCombate - armaGeral.manaCustoCombate;

        jogador.porcentagem = 100 - ((armaGeral.manaCustoCombate / jogador.manaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem;

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0;
            jogador.manaPorcentagem = 0.1;
        }
    }
    /*-----*/

    desaplicarFraquezaResistenciaInimigo();
    desaplicarCriticoJogador();
    desaplicarMissJogador()

    jogadorCombateHud();
    inimigoCombateHud();
}
/*-----*/

/*-----*/
function botaoAtaqueFracoClick() {
    if (jogador.energiaCombate - armaGeral.energiaCustoCombate >= 0 && jogador.manaCombate - armaGeral.manaCustoCombate >= 0) {
        inicioRodada();
        inicioBuffDebuffJogador();

        setTimeout(ataqueFracoDano, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(fimBuffDebuffJogador, 3000);
        

        setTimeout(fimRodada, 4000);
    }

    if (jogador.energiaCombate - armaGeral.energiaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (jogador.manaCombate - armaGeral.manaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/