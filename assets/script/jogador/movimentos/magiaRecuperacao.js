/*-DESCANSAR-*/
function magiaRecuperacaoUso() {

    if (magiaRecuperacaoGeral.classe == 'Mágico') {
        legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada = rodada + 1}<br><br> ${jogador.nome} utilizou ${magiaRecuperacaoGeral.nome}<br>${magiaRecuperacaoGeral.tipo} recuperado: ${magiaRecuperacaoGeral.vidaRecuperacao}<br>Mana gasta: ${magiaRecuperacaoGeral.manaCusto}<br><br>`)

        if (jogador.vidaCombate + magiaRecuperacaoGeral.vidaRecuperacao > jogador.vida) {
            jogador.vidaCombate = jogador.vida
            jogador.vidaPorcentagem = 100

        } else {
            jogador.vidaCombate = jogador.vidaCombate + magiaRecuperacaoGeral.vidaRecuperacao

            jogador.porcentagem = 100 - ((magiaRecuperacaoGeral.vidaRecuperacao / jogador.vida) * 100)
            jogador.porcentagem = 100 - jogador.porcentagem
            jogador.porcentagem = jogador.porcentagem.toPrecision(2)

            jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) + parseInt(jogador.porcentagem)
        }

        jogador.manaCombate = jogador.manaCombate - magiaRecuperacaoGeral.manaCusto

        jogador.porcentagem = 100 - ((magiaRecuperacaoGeral.manaCusto / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
        }

    }


    jogadorCombateHud()
    inimigoCombateHud()
}


function botaoMagiaRestauracaoClick() {
    if (vezUsuario == true) {
        if (magiaRecuperacaoGeral.classe == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - magiaRecuperacaoGeral.energiaCusto >= 0 || magiaRecuperacaoGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - magiaRecuperacaoGeral.manaCusto >= 0) {

            vezUsuario = false

            setTimeout(magiaRecuperacaoUso, 0)
            setTimeout(acaoIntervalo, 2000)

            setTimeout(inimigoAtaque, 2000)
            setTimeout(jogadorCombateHud, 2000)
            setTimeout(inimigoCombateHud, 2000)
            setTimeout(inimigoDerrotado, 2000)
            setTimeout(jogadorDerrotado, 3000)
        }

        if (magiaRecuperacaoGeral.classe == 'Mágico' && jogador.manaCombate <= 0 || jogador.manaCombate - magiaRecuperacaoGeral.manaCusto < 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        }

        if (magiaRecuperacaoGeral.classe == 'Físico' && jogador.energiaCombate <= 0 || jogador.energiaCombate - magiaRecuperacaoGeral.energiaCusto < 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}
/*-----*/