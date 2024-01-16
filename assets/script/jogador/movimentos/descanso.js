/*-DESCANSAR-*/
var botaoDescansar = window.document.querySelector('input#descansar')

document.addEventListener(`keypress`, descansarAtalho)
botaoDescansar.addEventListener('click', botaoDescansarClick)
botaoDescansar.addEventListener('mouseover', botaoDescansarHover)
botaoDescansar.addEventListener('mouseout', botaoDescansarOut)

function descansarTempo() {
    if (jogador.energiaCombate + armaduraJogador.energiaRecuperacao > jogador.energia) {
        jogador.energiaCombate = jogador.energia
        jogador.energiaPorcentagem = 100

    } else {
        jogador.energiaCombate = jogador.energiaCombate + armaduraJogador.energiaRecuperacao

        jogador.porcentagem = 100 - ((armaduraJogador.energiaRecuperacao / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem)
    }
    legendaView.innerHTML = `${jogador.nome} utilizou Descanso<br>Energia recuperado: ${armaduraJogador.energiaRecuperacao}}`
    usuarioCombateView()
    inimigoCombateView()
}

function descansarAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '4') {
            console.log("Descanso usado");
            botaoDescansar.click()
        }
    }
}

function botaoDescansarClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(descansarTempo, 500)
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

function botaoDescansarHover() {
    if (vezUsuario == true) {
        descansar.style.cursor = 'pointer'
        descansar.style.background = 'purple'
        descansar.style.transition = '0.5s'
    } else {
        descansar.style.cursor = 'not-allowed'
    }
}

function botaoDescansarOut() {
    descansar.style.background = 'gray'
}
/*-----*/