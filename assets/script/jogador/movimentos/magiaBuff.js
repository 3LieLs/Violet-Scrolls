/*-DESCANSAR-*/
function magiaBuffUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaBuffGeral.nome}<br>Mana gasta: ${magiaBuffGeral.manaCustoCombate}`)

    if (magiaBuffGeral.buff == 'dano') {
        buffDano.jogador = true
        rodadaBuffDanoMax.jogador = parseInt(rodada) + parseInt(magiaBuffGeral.duracao)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaBuffGeral.nome} aumentou o dano de ${jogador.nome} em ${danoGanho}`)
    }


    if (magiaBuffGeral.buff == 'vidaRegen') {
        buffVidaRegen.jogador = true;
        rodadaBuffVidaRegenMax.jogador = parseInt(rodada) + parseInt(magiaBuffGeral.duracao);

        vidaGanha = jogador.vidaBase * magiaBuffGeral.vidaRegenBuff;
        vidaGanha = Math.round(vidaGanha);

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaBuffGeral.nome} criou uma regeneração de vida em ${jogador.nome} de ${vidaGanha} de vida`)
    }



    jogador.manaCombate = jogador.manaCombate - magiaBuffGeral.manaCustoCombate;

    jogador.porcentagem = 100 - ((magiaBuffGeral.manaCustoCombate / jogador.manaBase) * 100);
    jogador.porcentagem = 100 - jogador.porcentagem;
    jogador.porcentagem = jogador.porcentagem.toPrecision(2);

    jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem;

    if (jogador.manaCombate < 0) {
        jogador.manaCombate = 0
    }

    jogadorCombateHud();
    inimigoCombateHud();
}


function botaoMagiaBuffClick() {
    if (jogador.energiaCombate - magiaBuffGeral.energiaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (jogador.manaCombate - magiaBuffGeral.manaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }

    if (jogador.energiaCombate - magiaBuffGeral.energiaCustoCombate >= 0 && jogador.manaCombate - magiaBuffGeral.manaCustoCombate >= 0) {
        inicioRodada();
        inicioBuffDebuff();

        magiaBuffUso();
        setTimeout(inimigoAtaque, 2000);

        setTimeout(fimBuffDebuff, 3000);
        setTimeout(fimRodada, 4000);
    }
}
/*-----*/