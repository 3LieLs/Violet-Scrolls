function acaoIntervalo() {
    vezUsuario = true
}

var legendaView = window.document.querySelector('p#mensagemLegenda')

/*-JOGADOR HUD-*/
var estatisticaVida = window.document.querySelector('p#estatisticaVida')
var estatisticaEnergia = window.document.querySelector('p#estatisticaEnergia')
var estatisticaMana = window.document.querySelector('p#estatisticaMana')

function jogadorCombateHud() {
    estatisticaVida.innerHTML = `Vida: ${racaGeral.vidaCombate}`
    estatisticaVida.style.backgroundSize = `${racaGeral.vidaPorcentagem}% 100%`
    
    estatisticaEnergia.innerHTML = `Energia: ${racaGeral.energiaCombate}`
    estatisticaEnergia.style.backgroundSize = `${racaGeral.energiaPorcentagem}% 100%`

    estatisticaMana.innerHTML = `Mana: ${racaGeral.manaCombate}`
    estatisticaMana.style.backgroundSize = `${racaGeral.manaPorcentagem}% 100%`
}
/*-----*/

/*-JOGADOR DERROTADO-*/
var mensagemInimigoJogadorVal = window.document.querySelector('div#mensagemJogadorDerrotado')

function jogadorDerrotado() {
    if (jogador.vidaCombate <= 0) {
        fase = 'taverna'

        mainHudDisplay = false
        mainHud.style.display = 'none'

        inimigoFisicoFase.style.display = 'none'
        inimigoMagicoFase.style.display = 'none' 

        definirEstatisticaGeral()
        definirMusica()

        //derrota()
        //setTimeout(definirEstatisticaGeral, 2000)
        //setTimeout(definirMusica, 2000)
    }
}

function derrota() {
    mainJogadorDerrotado.style.display = 'contents'
    mensagemJogadorDerrotadoVal.innerHTML = `${jogador.nome} foi derrotado`
    fase = 'taverna'
}
/*-----*/

/*-EXPERIÊNCIA / SUBIR NÍVEL-*/
var botaoSubirNivel = window.document.querySelector('input#subirNivel')
botaoSubirNivel.addEventListener('click', mostrarStats)

function mostrarStats() {
    subirNivel.style.display = 'none'
    upStatus.style.display = 'contents'
}


var botaoSubirVida = window.document.querySelector('input#subirVida')
var botaoSubirEnergia = window.document.querySelector('input#subirEnergia')
var botaoSubirMana = window.document.querySelector('input#subirMana')

botaoSubirVida.addEventListener('click', upVida)
botaoSubirEnergia.addEventListener('click', upEnergia)
botaoSubirMana.addEventListener('click', upMana)

function upVida() {
    jogador.vida = jogador.vida + 5
    jogadorNivel.nivel = jogadorNivel.nivel + 1
    jogadorNivel.experiencia = jogadorNivel.experiencia - jogadorNivel.proximoNivel
    jogadorNivel.proximoNivel = parseInt(jogadorNivel.proximoNivel) + parseInt(jogadorNivel.proximoNivel)

    barraExperiencia()
    jogadorNivel.experienciaPorcentagem = 0

    menuVidaVal.innerHTML = `Vida: ${jogador.vida}` 
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`
    
    upStatus.style.display = 'none' 
}

function upEnergia() {
    jogador.energia = jogador.energia + 5
    jogadorNivel.nivel = jogadorNivel.nivel + 1
    jogadorNivel.experiencia = jogadorNivel.experiencia - jogadorNivel.proximoNivel
    jogadorNivel.proximoNivel = parseInt(jogadorNivel.proximoNivel) + parseInt(jogadorNivel.proximoNivel)

    barraExperiencia()
    jogadorNivel.experienciaPorcentagem = 0

    menuEnergiaVal.innerHTML = `Energia: ${jogador.energia}` 
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`

    upStatus.style.display = 'none'
}

function upMana() {
    jogador.mana = jogador.mana + 5
    jogadorNivel.nivel = jogadorNivel.nivel + 1
    jogadorNivel.experiencia = jogadorNivel.experiencia - jogadorNivel.proximoNivel
    jogadorNivel.proximoNivel = parseInt(jogadorNivel.proximoNivel) + parseInt(jogadorNivel.proximoNivel)

    barraExperiencia()
    jogadorNivel.experienciaPorcentagem = 0
    
    menuManaVal.innerHTML = `Mana: ${jogador.mana}` 
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`

    upStatus.style.display = 'none' 
}

function barraExperiencia() {
    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100)
        jogador.porcentagem = jogador.porcentagem.toPrecision(3)

        jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem)

        if (jogadorNivel.experienciaPorcentagem > 100) {
            jogadorNivel.experienciaPorcentagem = 100
        }

        experienciaAtualVal.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`
}
/*-----*/