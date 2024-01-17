/*-DEFENDER-*/
var botaoDefesa = window.document.querySelector('input#defesa')

document.addEventListener(`keypress`, defesaAtalho)
botaoDefesa.addEventListener('click', botaoDefesaClick)
botaoDefesa.addEventListener('mouseover', botaoDefesaHover)
botaoDefesa.addEventListener('mouseout', botaoDefesaOut)

function defesaUso() {
    miniGameDisplay.style.display = 'none'

    if (jogador.click >= 2) {
       armaduraJogador.defesaCombate = parseInt(armaduraJogador.defesa * 2)
    }

    if (jogador.click <= 1) {
        armaduraJogador.defesaCombate = parseInt(armaduraJogador.defesa + (armaduraJogador.defesa / 2))
    }

    legendaView.innerHTML = `${jogador.nome} utilizou Defesa<br> Defesa aumentou para ${armaduraJogador.defesaCombate}`

    jogador.click = 0
}

function defesaAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '3') {
            console.log("Defesa usado");
            botaoDefesa.click()
        }
    }
}

function botaoDefesaClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        jogador.minigame == 'defesa'
        minigameVal.style.top = `${50}%`
        miniGameDisplay.style.display = 'contents'
        setTimeout(defesaUso, 3000)
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

function botaoDefesaHover() {
    if (vezUsuario == true) {
        defesa.style.cursor = 'pointer'
        defesa.style.background = 'purple'
        defesa.style.transition = '0.5s'
    } else {
        defesa.style.cursor = 'not-allowed'
    }
}

function botaoDefesaOut() {
    defesa.style.background = 'gray'
}

function minigameDefesa() {
    let num1 = Math.floor(Math.random() * 2) + 1;

    jogador.tamanho = jogador.tamanho + 0.5

    minigameVal.style.scale = `${jogador.tamanho}`

    if (jogador.tamanho == 9 && num1 == 1) {
        jogador.click = jogador.click + 1
        minigameVal.style.left = `${35}%`
    }

    if (jogador.tamanho == 9 && num1 == 2) {
        jogador.click = jogador.click + 1
        minigameVal.style.left = `${65}%`
    }

    if (jogador.click == 2) {
        minigameVal.style.display = 'none'
    }

}
/*-----*/