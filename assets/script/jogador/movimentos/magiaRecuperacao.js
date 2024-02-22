/*-DESCANSAR-*/
function magiaRecuperacaoUso() {

    if (magiaRecuperacaoGeral.tipo == 'vida') {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaRecuperacaoGeral.nome}<br>Mana gasta: ${magiaRecuperacaoGeral.manaCusto}`)
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

    if (magiaRecuperacaoGeral.tipo == 'buff') {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaRecuperacaoGeral.nome}<br>Mana gasta: ${magiaRecuperacaoGeral.manaCusto}`)
        legendaView.insertAdjacentHTML('beforeend', `<br>${magiaRecuperacaoGeral.nome} purificou ${jogador.nome} de todas os efeitos negativos`)

        rodadaDebuffSangramentoMax.jogador = 0
        rodadaDebuffVenenoMax.jogador = 0
        rodadaDebuffChamasMax.jogador = 0
        rodadaDebuffCongeladoMax.jogador = 0
        rodadaDebuffEletricidadeMax.jogador = 0

        debuffSangramento.jogador = false
        debuffVeneno.jogador = false
        debuffChamas.jogador = false
        debuffCongelado.jogador = false
        debuffEletricidade.jogador = false
    }

    jogador.manaCombate = jogador.manaCombate - magiaRecuperacaoGeral.manaCusto

    jogador.porcentagem = 100 - ((magiaRecuperacaoGeral.manaCusto / jogador.manaBase) * 100)
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
    if (jogador.energiaCombate - magiaRecuperacaoGeral.energiaCusto >= 0 || jogador.manaCombate - magiaRecuperacaoGeral.manaCusto >= 0) {
        inicioRodada();

        setTimeout(magiaRecuperacaoUso, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 3000)
        setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 4000);
    }

    if (jogador.energiaCombate - magiaRecuperacaoGeral.energiaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (jogador.manaCombate - magiaRecuperacaoGeral.manaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/