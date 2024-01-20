/*-DESCANSAR-*/
function descansoUso() {
    if (jogador.energiaCombate + armaduraGeral.energiaRecuperacao > jogador.energia) {
        jogador.energiaCombate = jogador.energia
        jogador.energiaPorcentagem = 100

    } else {
        jogador.energiaCombate = jogador.energiaCombate + armaduraGeral.energiaRecuperacao

        jogador.porcentagem = 100 - ((armaduraGeral.energiaRecuperacao / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem)
    }

    legendaView.innerHTML = `${jogador.nome} utilizou Descanso<br>Energia recuperado: ${armaduraGeral.energiaRecuperacao}`

    jogadorCombateHud()
    inimigoCombateHud()
}


function botaoDescansoClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(descansoUso, 0)
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