/*-FOCAR-*/
var botaoFocar = window.document.querySelector('input#focar')

document.addEventListener(`keypress`, focarAtalho)
botaoFocar.addEventListener('click', botaoFocarClick)
botaoFocar.addEventListener('mouseover', botaoFocarHover)
botaoFocar.addEventListener('mouseout', botaoFocarOut)

function focarTempo() {
    if (jogador.manaCombate + armaduraJogador.manaRecuperacao > jogador.mana) {
        jogador.manaCombate = jogador.mana
        jogador.manaPorcentagem = 100

    } else {
        jogador.manaCombate = jogador.manaCombate + armaduraJogador.manaRecuperacao

        jogador.porcentagem = 100 - ((armaduraJogador.manaRecuperacao / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem)
    }
    legendaView.innerHTML = `${jogador.nome} utilizou Focar<br>Mana recuperado: ${armaduraJogador.manaRecuperacao}`
    usuarioCombateView()
    inimigoCombateView()
}

function focarAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '5') {
            console.log("Foco usado");
            botaoFocar.click()
        }
    }
}

function botaoFocarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(focarTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (fase == 'goblin') {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'golem') {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'dragao') {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoFocarHover() {
    if (vezUsuario == true) {
        focar.style.cursor = 'pointer'
        focar.style.background = 'purple'
        focar.style.transition = '0.5s'
    } else {
        focar.style.cursor = 'not-allowed'
    }
}

function botaoFocarOut() {
    focar.style.background = 'gray'
}
/*-----*/