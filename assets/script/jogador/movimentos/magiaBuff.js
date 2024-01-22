/*-DESCANSAR-*/
function magiaBuffUso() {

    if (magiaRecuperacaoGeral.classe == 'Mágico') {


        jogador.manaCombate = jogador.manaCombate - magiaBuffGeral.manaCusto

        jogador.porcentagem = 100 - ((magiaBuffGeral.manaCusto / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
        }

        legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada = rodada + 1}<br><br> ${jogador.nome} utilizou ${magiaBuffGeral.nome}<br>Mana gasta: ${magiaBuffGeral.manaCusto}<br><br>`)
    }

    jogadorCombateHud()
    inimigoCombateHud()
}


function botaoMagiaBuffClick() {
    if (vezUsuario == true) {
        if (magiaBuffGeral.classe == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - magiaBuffGeral.energiaCusto >= 0 || magiaBuffGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - magiaBuffGeral.manaCusto >= 0) {
            vezUsuario = false

            setTimeout(magiaBuffUso, 0)
            setTimeout(acaoIntervalo, 2000)

            setTimeout(inimigoAtaque, 2000)
            setTimeout(jogadorCombateHud, 2000)
            setTimeout(inimigoCombateHud, 2000)
            setTimeout(inimigoDerrotado, 2000)
            setTimeout(jogadorDerrotado, 3000)
        }

        if (magiaBuffGeral.classe == 'Mágico' && jogador.manaCombate <= 0 || jogador.manaCombate - magiaBuffGeral.manaCusto < 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        }

        if (magiaBuffGeral.classe == 'Físico' && jogador.energiaCombate <= 0 || jogador.energiaCombate - magiaBuffGeral.energiaCusto < 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}
/*-----*/