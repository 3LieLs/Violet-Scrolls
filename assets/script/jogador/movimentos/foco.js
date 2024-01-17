/*-FOCAR-*/
var botaoFoco = window.document.querySelector('input#foco')

document.addEventListener(`keypress`, focoAtalho)
botaoFoco.addEventListener('click', botaoFocoClick)
botaoFoco.addEventListener('mouseover', botaoFocoHover)
botaoFoco.addEventListener('mouseout', botaoFocoOut)

function focoUso() {
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

function focoAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '5') {
            console.log("Foco usado");
            botaoFocar.click()
        }
    }
}

function botaoFocoClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(focoUso, 3000)
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

function botaoFocoHover() {
    if (vezUsuario == true) {
        foco.style.cursor = 'pointer'
        foco.style.background = 'purple'
        foco.style.transition = '0.5s'
    } else {
        foco.style.cursor = 'not-allowed'
    }
}

function botaoFocoOut() {
    foco.style.background = 'gray'
}
/*-----*/