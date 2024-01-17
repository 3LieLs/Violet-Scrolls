/*-DESCANSAR-*/
var botaoDescanso = window.document.querySelector('input#descanso')

document.addEventListener(`keypress`, descansoAtalho)
botaoDescanso.addEventListener('click', botaoDescansoClick)
botaoDescanso.addEventListener('mouseover', botaoDescansoHover)
botaoDescanso.addEventListener('mouseout', botaoDescansoOut)

function descansoUso() {
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

function descansoAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '4') {
            console.log("Descanso usado");
            botaoDescansar.click()
        }
    }
}

function botaoDescansoClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(descansoUso, 3000)
        setTimeout(acaoIntervalo, 5000)

        setTimeout(inimigoAtaque, 5000)
        setTimeout(usuarioCombateView, 5000)
        setTimeout(inimigoCombateView, 5000)
        setTimeout(inimigoDerrotado, 5000)
        setTimeout(jogadorDerrotado, 7000)

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoDescansoHover() {
    if (vezUsuario == true) {
        descanso.style.cursor = 'pointer'
        descanso.style.background = 'purple'
        descanso.style.transition = '0.5s'
    } else {
        descanso.style.cursor = 'not-allowed'
    }
}

function botaoDescansoOut() {
    descanso.style.background = 'gray'
}
/*-----*/