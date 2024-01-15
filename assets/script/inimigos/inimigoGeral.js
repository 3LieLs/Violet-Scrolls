/*-INIMIGO HUD-*/
function inimigoCombateView() {
    if (fase == 'goblin') {
        goblinVidaView.innerHTML = `Vida: ${goblin.vidaCombate}`
        goblinVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        goblinEnergiaView.innerHTML = `Energia: ${goblin.energiaCombate}`
        goblinEnergiaView.style.backgroundSize = `${inimigo.energiaPorcentagem}% 100%`
    }

    if (fase == 'golem') {
        golemVidaView.innerHTML = `Vida: ${golem.vidaCombate}`
        golemVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        golemEnergiaView.innerHTML = `Energia: ${golem.energiaCombate}`
        golemEnergiaView.style.backgroundSize = `${inimigo.energiaPorcentagem}% 100%`
    }

    if (fase == 'dragao') {
        dragaoVidaView.innerHTML = `Vida: ${dragao.vidaCombate}`
        dragaoVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        dragaoManaView.innerHTML = `Mana: ${dragao.manaCombate}`
        dragaoManaView.style.backgroundSize = `${inimigo.manaPorcentagem}% 100%`
    }
}
/*-----*/

/*-INIMIGO DERROTADO-*/
function inimigoDerrotado() {
    if (fase == 'goblin' && goblin.vidaCombate <= 0) {
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGoblin.style.display = 'none'

        jogadorNivel.experiencia = jogadorNivel.experiencia + 10

        experienciaGanha()
        setTimeout(definirEstatisticaGeral, 2000)
        setTimeout(definirMusica, 2000)
    }

    if (fase == 'golem' && golem.vidaCombate <= 0) {
        fase = 'safezone'
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGolem.style.display = 'none'
        experienciaGanha()
        definirEstatisticaGeral()
        definirMusica()
    }

    if (fase == 'dragao' && dragao.vidaCombate <= 0) {
        fase = 'safezone'
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseDragao.style.display = 'none'
        experienciaGanha()
        definirEstatisticaGeral()
        definirMusica()
    }
}

var mensagemInimigoDerrotadoVal = window.document.querySelector('div#mensagemInimigoDerrotado')
var experienciaGanhaVal = window.document.querySelector('p#experienciaGanha')

function experienciaGanha() {
    mainInimigoDerrotado.style.display = 'contents'

    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100)
    jogador.porcentagem = jogador.porcentagem.toPrecision(3)

    jogador.experienciaPorcentagem = jogador.experienciaPorcentagem + jogador.porcentagem
    if (jogador.experienciaPorcentagem > 100) {
        jogador.experienciaPorcentagem = 100
    }

    mensagemInimigoDerrotadoVal.innerHTML = `${fase} derrotado`
    experienciaGanhaVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`
    experienciaGanhaVal.style.backgroundSize = `${jogador.experienciaPorcentagem}% 100%`

    fase = 'safezone'
}
/*-----*/