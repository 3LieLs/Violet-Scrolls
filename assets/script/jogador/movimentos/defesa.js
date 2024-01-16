/*-DEFENDER-*/
var botaoDefesa = window.document.querySelector('input#defesa')

document.addEventListener(`keypress`, defesaAtalho)
botaoDefesa.addEventListener('click', botaoDefesaClick)
botaoDefesa.addEventListener('mouseover', botaoDefesaHover)
botaoDefesa.addEventListener('mouseout', botaoDefesaOut)

function defesaTempo() {
    legendaView.innerHTML = `${jogador.nome} utilizou Defesa<br> Defesa aumentou para ${parseInt(armaduraJogador.defesa + (armaduraJogador.defesa / 2))}`
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
        setTimeout(defesaTempo, 500)
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
/*-----*/