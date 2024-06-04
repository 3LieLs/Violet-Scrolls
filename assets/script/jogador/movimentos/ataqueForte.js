/*-ATAQUE FORTE-*/
function ataqueForteDano() {
    aplicarFraquezaResistencia('inimigo')
    aplicarCritico('jogador')
    aplicarMiss('jogador')

    /*-APLICAR DANO CASO ACERTO-*/
    if (missJogador == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} errou seu ataque!`);
        if (armaGeral.energiaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${parseInt(armaGeral.energiaCustoCombate + (armaGeral.energiaCustoCombate / 2))}`);
        }
        if (armaGeral.manaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${parseInt(armaGeral.manaCustoCombate + (armaGeral.manaCustoCombate / 2))}`);
        }
    }

    if (missJogador == false) {
        inimigoAtingidoDano(parseInt(armaGeral.danoCombate + (armaGeral.danoCombate / 2)))

        legendaView.insertAdjacentHTML('beforeend', `<br><br> ${jogador.nome} atacou com ${armaGeral.nome} com força<br>Dano causado: ${parseInt(armaGeral.danoCombate + (armaGeral.danoCombate / 2))}`);
        if (armaGeral.energiaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${parseInt(armaGeral.energiaCustoCombate + (armaGeral.energiaCustoCombate / 2))}`);
        }
        if (armaGeral.manaCustoCombate > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${parseInt(armaGeral.manaCustoCombate + (armaGeral.manaCustoCombate / 2))}`);
        }
        if (criticoJogador == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Acerto crítico!`)
        }

        verificarDebuffArmaJogador()
    }
    /*-----*/

    /*-DESCONTAR ENERGIA/MANA-*/
    if (armaGeral.energiaCustoCombate > 0) {
        jogador.energiaCombate = jogador.energiaCombate - parseInt(armaGeral.energiaCustoCombate + (armaGeral.energiaCustoCombate / 2));

        jogador.porcentagem = 100 - ((parseInt(armaGeral.energiaCustoCombate + (armaGeral.energiaCustoCombate / 2)) / jogador.energiaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem;

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0;
            jogador.energiaPorcentagem = 0.1;
        }
    }

    if (armaGeral.manaCustoCombate > 0) {
        jogador.manaCombate = jogador.manaCombate - parseInt(armaGeral.manaCustoCombate + (armaGeral.manaCustoCombate / 2));

        jogador.porcentagem = 100 - ((parseInt(armaGeral.manaCustoCombate + (armaGeral.manaCustoCombate / 2)) / jogador.manaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem;

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0;
            jogador.manaPorcentagem = 0.1;
        }
    }
    /*-----*/

    desaplicarFraquezaResistencia('inimigo');
    desaplicarCritico('jogador');
    desaplicarMiss('jogador');

    jogadorCombateHud();
    inimigoCombateHud();
    inimigoDerrotado();
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
function botaoAtaqueForteClick() {
    if (jogador.energiaCombate - (parseInt(armaGeral.energiaCustoCombate + (armaGeral.energiaCustoCombate / 2))) < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }
    /*-----*/
    if (jogador.manaCombate - (parseInt(armaGeral.manaCustoCombate + (armaGeral.manaCustoCombate / 2))) < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }

    if (jogador.energiaCombate - (parseInt(armaGeral.energiaCustoCombate + (armaGeral.energiaCustoCombate / 2))) >= 0 && jogador.manaCombate - (parseInt(armaGeral.manaCustoCombate + (armaGeral.manaCustoCombate / 2))) >= 0) {
        inicioRodada();
        inicioBuffDebuff();

        ataqueForteDano();
        setTimeout(inimigoAtaque, 2000);

        setTimeout(fimBuffDebuff, 3000);
        setTimeout(fimRodada, 4000);
    }
    /*-----*/
}
/*-----*//*-----*//*-----*//*-----*//*-----*/