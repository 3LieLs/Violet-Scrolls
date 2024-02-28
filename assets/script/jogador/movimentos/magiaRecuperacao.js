/*-DESCANSAR-*/
function magiaRecuperacaoUso() {
    if (magiaRecuperacaoGeral.tipo == 'Vida') {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaRecuperacaoGeral.nome}<br>Mana gasta: ${magiaRecuperacaoGeral.manaCustoCombate}`)
        legendaView.insertAdjacentHTML('beforeend', `<br>${magiaRecuperacaoGeral.tipo} recuperado: ${magiaRecuperacaoGeral.vidaRecuperacao}`)

        if (jogador.vidaCombate + magiaRecuperacaoGeral.vidaRecuperacao > jogador.vidaBase) {
            jogador.vidaCombate = jogador.vidaBase
            jogador.vidaPorcentagem = 100

        } else {
            jogador.vidaCombate += magiaRecuperacaoGeral.vidaRecuperacao

            jogador.porcentagem = 100 - ((magiaRecuperacaoGeral.vidaRecuperacao / jogador.vidaBase) * 100)
            jogador.porcentagem = 100 - jogador.porcentagem
            jogador.porcentagem = jogador.porcentagem.toPrecision(2)

            jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) + parseInt(jogador.porcentagem)
        }
    }

    if (magiaRecuperacaoGeral.tipo == 'Elementares') {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaRecuperacaoGeral.nome}<br>Mana gasta: ${magiaRecuperacaoGeral.manaCustoCombate}`)
        legendaView.insertAdjacentHTML('beforeend', `<br>${magiaRecuperacaoGeral.nome} purificou ${jogador.nome} de todas os efeitos negativos ${magiaRecuperacaoGeral.tipo}`)

        rodadaDebuffChamasMax.jogador = 0
        rodadaDebuffCongeladoMax.jogador = 0
        rodadaDebuffEletricidadeMax.jogador = 0

        debuffChamas.jogador = false
        debuffCongelado.jogador = false
        debuffEletricidade.jogador = false
    }

    if (magiaRecuperacaoGeral.tipo == 'Físico') {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaRecuperacaoGeral.nome}<br>Mana gasta: ${magiaRecuperacaoGeral.manaCustoCombate}`)
        legendaView.insertAdjacentHTML('beforeend', `<br>${magiaRecuperacaoGeral.nome} purificou ${jogador.nome} de todas os efeitos negativos ${magiaRecuperacaoGeral.tipo}`)

        rodadaDebuffSangramentoMax.jogador = 0
        rodadaDebuffVenenoMax.jogador = 0

        debuffSangramento.jogador = false
        debuffVeneno.jogador = false
    }

    jogador.manaCombate = jogador.manaCombate - magiaRecuperacaoGeral.manaCustoCombate

    jogador.porcentagem = 100 - ((magiaRecuperacaoGeral.manaCustoCombate / jogador.manaBase) * 100)
    jogador.porcentagem = 100 - jogador.porcentagem
    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

    jogador.manaPorcentagem -= jogador.porcentagem

    if (jogador.manaCombate < 0) {
        jogador.manaCombate = 0
    }

    jogadorCombateHud()
    inimigoCombateHud()
}


function botaoMagiaRecuperacaoClick() {
    if (jogador.energiaCombate - magiaRecuperacaoGeral.energiaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (jogador.manaCombate - magiaRecuperacaoGeral.manaCustoCombate < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }

    if (jogador.energiaCombate - magiaRecuperacaoGeral.energiaCustoCombate >= 0 && jogador.manaCombate - magiaRecuperacaoGeral.manaCustoCombate >= 0) {
        inicioRodada();
        inicioBuffDebuff();

        magiaRecuperacaoUso();
        setTimeout(inimigoAtaque, 2000);

        setTimeout(fimBuffDebuff, 3000);
        setTimeout(fimRodada, 4000);
    }
}
/*-----*/