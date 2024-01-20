/*-FOCAR-*/
function focoUso() {
    if (jogador.manaCombate + armaduraGeral.manaRecuperacao > jogador.mana) {
        jogador.manaCombate = jogador.mana
        jogador.manaPorcentagem = 100

    } else {
        jogador.manaCombate = jogador.manaCombate + armaduraGeral.manaRecuperacao

        jogador.porcentagem = 100 - ((armaduraGeral.manaRecuperacao / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem)
    }

    legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada = rodada + 1}<br><br> ${jogador.nome} utilizou Focar<br>Mana recuperado: ${armaduraGeral.manaRecuperacao}<br><br>`)

    jogadorCombateHud()
    inimigoCombateHud()
}

function botaoFocoClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(focoUso, 0)
        setTimeout(acaoIntervalo, 2000)

        setTimeout(inimigoAtaque, 2000)
        setTimeout(jogadorCombateHud, 2000)
        setTimeout(inimigoCombateHud, 2000)
        setTimeout(inimigoDerrotado, 2000)
        setTimeout(jogadorDerrotado, 3000)

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}
/*-----*/