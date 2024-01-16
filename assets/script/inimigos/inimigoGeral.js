var inimigoNomeView = window.document.querySelector('p#inimigoNome')

var inimigoFisicoVidaView = window.document.querySelector('p#inimigoFisicoVida')
var inimigoFisicoEnergiaView = window.document.querySelector('p#inimigoFisicoEnergia')

var inimigoMagicoVidaView = window.document.querySelector('p#inimigoMagicoVida')
var inimigoMagicoManaView = window.document.querySelector('p#inimigoMagicoMana')


/*-INIMIGO HUD-*/
function inimigoCombateView() {
    if (inimigo.classe == 'fisico') {
        inimigoNomeView.innerHTML = `${inimigo.nome}`
        inimigoFisicoVidaView.innerHTML = `Vida: ${inimigo.vidaCombate}`
        inimigoFisicoVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        inimigoFisicoEnergiaView.innerHTML = `Energia: ${inimigo.energiaCombate}`
        inimigoFisicoEnergiaView.style.backgroundSize = `${inimigo.energiaPorcentagem}% 100%`
    }

    if (inimigo.classe == 'magico') {
        inimigoNomeView.innerHTML = `${inimigo.nome}`
        inimigoMagicoVidaView.innerHTML = `Vida: ${dragao.vidaCombate}`
        inimigoMagicoVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        inimigoMagicoManaView.innerHTML = `Mana: ${dragao.manaCombate}`
        inimigoMagicoManaView.style.backgroundSize = `${inimigo.manaPorcentagem}% 100%`
    }
}
/*-----*/

/*-INIMIGO DERROTADO-*/
var mensagemInimigoDerrotadoVal = window.document.querySelector('div#mensagemInimigoDerrotado')
var experienciaGanhaVal = window.document.querySelector('p#experienciaGanha')

function inimigoDerrotado() {
   
    if (inimigo.vidaCombate <= 0) {
        
        mainHudDisplay = false
        mainHud.style.display = 'none'

        inimigoFisicoFase.style.display = 'none'
        inimigoMagicoFase.style.display = 'none'

        if (fase == 'goblin') {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 10
        }
        if (fase == 'golem') {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 30
        }
        if (fase == 'dragao') {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 60
        }

        experienciaGanha()
        setTimeout(definirEstatisticaGeral, 2000)
        setTimeout(definirMusica, 2000)
    }
    
}

function experienciaGanha() {
    mainInimigoDerrotado.style.display = 'contents'

    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100)
    jogador.porcentagem = jogador.porcentagem.toPrecision(3)

    jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem)

    if (jogadorNivel.experienciaPorcentagem > 100) {
        jogadorNivel.experienciaPorcentagem = 100
    }

    mensagemInimigoDerrotadoVal.innerHTML = `${fase} derrotado`
    experienciaGanhaVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`
    experienciaGanhaVal.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`

    fase = 'safezone'
}


/*-----*/