var legendaView = window.document.querySelector('p#mensagemLegenda')

/*-JOGADOR HUD-*/
var estatisticaVidaView = window.document.querySelector('p#estatisticaVida')
var estatisticaEnergiaView = window.document.querySelector('p#estatisticaEnergia')
var estatisticaManaView = window.document.querySelector('p#estatisticaMana')

function usuarioCombateView() {
    estatisticaVidaView.innerHTML = `Vida: ${jogador.vidaCombate}`
    estatisticaVidaView.style.backgroundSize = `${jogador.vidaPorcentagem}% 100%`
    
    estatisticaEnergiaView.innerHTML = `Energia: ${jogador.energiaCombate}`
    estatisticaEnergiaView.style.backgroundSize = `${jogador.energiaPorcentagem}% 100%`

    estatisticaManaView.innerHTML = `Mana: ${jogador.manaCombate}`
    estatisticaManaView.style.backgroundSize = `${jogador.manaPorcentagem}% 100%`
}
/*-----*/

/*-JOGADOR DERROTADO-*/
function jogadorDerrotado() {
    if (jogador.vidaCombate <= 0) {
        fase = 'safezone'
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGoblin.style.display = 'none'
        mainFaseGolem.style.display = 'none'
        mainFaseDragao.style.display = 'none'
        mainSafeZone.style.display = 'contents'
        definirMusica()
    }
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
    
    menuManaVal.innerHTML = `Mana: ${jogador.mana}` 
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`

    upStatus.style.display = 'none' 
}

function barraExperiencia() {
    jogador.porcentagem = 100 - ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100)
    jogador.porcentagem = 100 - jogador.porcentagem
    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

    jogador.experienciaPorcentagem = parseInt(jogador.experienciaPorcentagem) + parseInt(jogador.porcentagem)

    if (jogador.experienciaPorcentagem > 100) {
        jogador.experienciaPorcentagem = 100
    }

    experienciaAtualVal.style.backgroundSize = `${jogador.experienciaPorcentagem}%, 100%`
}
/*-----*/