/*-----*/
var
    rodadaBuffDanoMax = { jogador: 0, inimigo: 0, },
    rodadaBuffVidaRegenMax = { jogador: 0, inimigo: 0, },
    rodadaBuffDefesaMax = { jogador: 0, inimigo: 0, },
    rodadaBuffVidaMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffVenenoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffChamasMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffCongeladoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffEletricidadeMax = { jogador: 0, inimigo: 0, }

var
    buffVidaRegen = { jogador: false, inimigo: false, },
    buffDano = { jogador: false, inimigo: false, },
    debuffVeneno = { jogador: false, inimigo: false, },
    debuffChamas = { jogador: false, inimigo: false, },
    debuffCongelado = { jogador: false, inimigo: false, },
    debuffEletricidade = { jogador: false, inimigo: false, }
/*-----*/


/*-DESCANSAR-*/
function magiaBuffUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaBuffGeral.nome}<br>Mana gasta: ${magiaBuffGeral.manaCusto}`)

    if (magiaBuffGeral.buff == 'dano') {
        buffDano.jogador = true
        rodadaBuffDanoMax.jogador = parseInt(rodada) + parseInt(magiaBuffGeral.duracao)

        danoGanho = armaGeral.danoCombate * magiaBuffGeral.danoBuff
        danoGanho = Math.round(danoGanho)
        armaGeral.danoCombate += danoGanho

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaBuffGeral.nome} aumentou o dano de ${jogador.nome} em ${danoGanho}`)
    }


    if (magiaBuffGeral.buff == 'vidaRegen') {
        buffVidaRegen.jogador = true
        rodadaBuffVidaRegenMax.jogador = parseInt(rodada) + parseInt(magiaBuffGeral.duracao)

        vidaGanha = jogador.vidaBase * magiaBuffGeral.vidaRegenBuff
        vidaGanha = Math.round(vidaGanha)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaBuffGeral.nome} criou uma regeneração de vida em ${jogador.nome} de ${vidaGanha} de vida`)
    }



    jogador.manaCombate = jogador.manaCombate - magiaBuffGeral.manaCusto

    jogador.porcentagem = 100 - ((magiaBuffGeral.manaCusto / jogador.manaBase) * 100)
    jogador.porcentagem = 100 - jogador.porcentagem
    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

    jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

    if (jogador.manaCombate < 0) {
        jogador.manaCombate = 0
    }

    jogadorCombateHud()
    inimigoCombateHud()
}


function botaoMagiaBuffClick() {
    if (magiaBuffGeral.classe == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - magiaBuffGeral.energiaCusto >= 0 || magiaBuffGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - magiaBuffGeral.manaCusto >= 0) {
        vezUsuario = false;

        inicioRodada();

        setTimeout(magiaBuffUso, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 3000)
        setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 4000);
    }

    if (magiaBuffGeral.classe == 'Físico' && jogador.energiaCombate <= 0 || jogador.energiaCombate - magiaBuffGeral.energiaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (magiaBuffGeral.classe == 'Mágico' && jogador.manaCombate <= 0 || jogador.manaCombate - magiaBuffGeral.manaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/