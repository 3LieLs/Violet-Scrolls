/*-DEFENDER-*/
function bloquearUso() {
    legendaView.innerHTML = `${jogador.nome} Bloqueou<br> Defesa aumentou para ${parseInt(armaduraGeral.defesaCombate + (armaduraGeral.defesaCombate / 2))}`
}

function botaoBloquearClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(bloquearUso, 0)
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

function minigameBloquear() {

}
/*-----*/