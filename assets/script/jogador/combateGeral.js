function acaoIntervalo() {
    vezUsuario = true
}

var primeiraEscolha = window.document.querySelector('input#movesetArmaEscolha')
primeiraEscolha.addEventListener('click', movesetArmaEscolhaClick)

var segundaEscolha = window.document.querySelector('input#movesetMagiaEscolha')
segundaEscolha.addEventListener('click', movesetMagiaEscolhaClick)

var terceiraEscolha = window.document.querySelector('input#movesetArmaduraEscolha')
terceiraEscolha.addEventListener('click', movesetArmaduraEscolhaClick)

var quartaEscolha = window.document.querySelector('input#movesetOutrosEscolha')
quartaEscolha.addEventListener('click', movesetOutrosEscolhaClick)
/*-----*/

/*-MOVESET ARMA-*/
function movesetArmaEscolhaClick() {
    primeiraEscolha.value = 'Ataque fraco'
    primeiraEscolha.id = 'ataqueFraco'

    primeiraEscolha = window.document.querySelector('input#ataqueFraco')
    primeiraEscolha.addEventListener('click', ataqueFracoClick)

    segundaEscolha.value = 'Ataque forte'
    segundaEscolha.id = 'ataqueForte'

    segundaEscolha = window.document.querySelector('input#ataqueForte')
    segundaEscolha.addEventListener('click', ataqueForteClick)

    terceiraEscolha.value = 'teste1'
    terceiraEscolha.id = 'teste1'

    terceiraEscolha = window.document.querySelector('input#teste1')
    terceiraEscolha.addEventListener('click', teste1Click)

    quartaEscolha.value = 'Voltar'
    quartaEscolha.id = 'voltarArmaAcao'

    quartaEscolha = window.document.querySelector('input#voltarArmaAcao')
    quartaEscolha.addEventListener('click', voltarArmaAcaoClick)
}

function ataqueFracoClick() {
    botaoAtaqueFracoClick()
    voltarMovesetInicio()
}

function ataqueForteClick() {
    alert('Ataque Forte Usado')
    voltarMovesetInicio()
}

function teste1Click() {
    alert('Teste1 Usado')
    voltarMovesetInicio()
}

function voltarArmaAcaoClick() {
    voltarMovesetInicio()
}
/*-----*/

/*-MOVESET MAGIA-*/
function movesetMagiaEscolhaClick() {
    primeiraEscolha.value = 'Magia Dano'
    primeiraEscolha.id = 'magiaDano'

    primeiraEscolha = window.document.querySelector('input#magiaDano')
    primeiraEscolha.addEventListener('click', magiaDanoClick)

    segundaEscolha.value = 'magia Recuperação'
    segundaEscolha.id = 'magiaRecuperar'

    segundaEscolha = window.document.querySelector('input#magiaRecuperar')
    segundaEscolha.addEventListener('click', magiaRecuperarClick)

    terceiraEscolha.value = 'Magia Buff'
    terceiraEscolha.id = 'magiaBuff'

    terceiraEscolha = window.document.querySelector('input#magiaBuff')
    terceiraEscolha.addEventListener('click', magiaBuffClick)

    quartaEscolha.value = 'Voltar'
    quartaEscolha.id = 'voltarMagiaAcao'

    quartaEscolha = window.document.querySelector('input#voltarMagiaAcao')
    quartaEscolha.addEventListener('click', voltarMagiaAcaoClick)
}

function magiaDanoClick() {
    alert('Magia Dano Usado')
    voltarMovesetInicio()
}

function magiaRecuperarClick() {
    alert('Magia Recuperar Usado')
    voltarMovesetInicio()
}

function magiaBuffClick() {
    alert('Magia Buff Usado')
    voltarMovesetInicio()
}

function voltarMagiaAcaoClick() {
    voltarMovesetInicio()
}
/*-----*/

/*-MOVESET ARMADURA-*/
function movesetArmaduraEscolhaClick() {
    primeiraEscolha.value = 'Bloquear'
    primeiraEscolha.id = 'bloquear'

    primeiraEscolha = window.document.querySelector('input#bloquear')
    primeiraEscolha.addEventListener('click', defesaClick)

    segundaEscolha.value = 'Descanso'
    segundaEscolha.id = 'descanso'

    segundaEscolha = window.document.querySelector('input#descanso')
    segundaEscolha.addEventListener('click', descansoClick)

    terceiraEscolha.value = 'Foco'
    terceiraEscolha.id = 'foco'

    terceiraEscolha = window.document.querySelector('input#foco')
    terceiraEscolha.addEventListener('click', focoClick)

    quartaEscolha.value = 'Voltar'
    quartaEscolha.id = 'voltarArmaduraAcao'

    quartaEscolha = window.document.querySelector('input#voltarArmaduraAcao')
    quartaEscolha.addEventListener('click', voltarArmaduraAcaoClick)
}

function defesaClick() {
    alert('Bloquear Usado')
    voltarMovesetInicio()
}

function descansoClick() {
    alert('Descanso Usado')
    voltarMovesetInicio()
}

function focoClick() {
    alert('Foco Usado')
    voltarMovesetInicio()
}

function voltarArmaduraAcaoClick() {
    voltarMovesetInicio()
}
/*-----*/

/*-MOVESET OUTROS-*/
function movesetOutrosEscolhaClick() { }
/*-----*/

/*-MOVESET RESET-*/
function voltarMovesetInicio() {
    primeiraEscolha.removeEventListener('click', ataqueFracoClick)
    primeiraEscolha.removeEventListener('click', magiaDanoClick)
    primeiraEscolha.removeEventListener('click', defesaClick)


    segundaEscolha.removeEventListener('click', ataqueForteClick)
    segundaEscolha.removeEventListener('click', magiaRecuperarClick)
    segundaEscolha.removeEventListener('click', descansoClick)


    terceiraEscolha.removeEventListener('click', teste1Click)
    terceiraEscolha.removeEventListener('click', magiaBuffClick)
    terceiraEscolha.removeEventListener('click', focoClick)


    quartaEscolha.removeEventListener('click', voltarArmaAcaoClick)
    quartaEscolha.removeEventListener('click', voltarMagiaAcaoClick)
    quartaEscolha.removeEventListener('click', voltarArmaduraAcaoClick)


    primeiraEscolha.value = 'Atacar'
    primeiraEscolha.id = 'movesetArmaEscolha'

    primeiraEscolha = window.document.querySelector('input#movesetArmaEscolha')
    primeiraEscolha.addEventListener('click', movesetArmaEscolhaClick)

    segundaEscolha.value = 'Magia'
    segundaEscolha.id = 'movesetMagiaEscolha'

    segundaEscolha = window.document.querySelector('input#movesetMagiaEscolha')
    segundaEscolha.addEventListener('click', movesetMagiaEscolhaClick)

    terceiraEscolha.value = 'Defesa/Recuperar'
    terceiraEscolha.id = 'movesetArmaduraEscolha'

    terceiraEscolha = window.document.querySelector('input#movesetArmaduraEscolha')
    terceiraEscolha.addEventListener('click', movesetArmaduraEscolhaClick)

    quartaEscolha.value = 'Outros'
    quartaEscolha.id = 'movesetOutrosEscolha'

    quartaEscolha = window.document.querySelector('input#movesetOutrosEscolha')
    quartaEscolha.addEventListener('click', movesetOutrosEscolhaClick)
}
/*-----*/

/*-CRÍTICO-*/
function critico() {
    let chance = Math.floor(Math.random() * 100) + 0;

    if (chance <= 10) {
        armaJogador.danoCombate = armaJogador.danoCombate * 2

        inimigo.danoCombate = inimigo.danoCombate * 2
    }
}
/*-----*/

/*-MINIGAME-*/
var minigameVal = window.document.querySelector('input#minigame')
minigameVal.addEventListener('click', minigameMove)

function minigameMove() {

    if (jogador.minigame == 'ataqueBasico') {
        minigameVal.addEventListener('click', minigameAtaqueBasico)
    }

    if (jogador.minigame == 'ataqueEspecial') {

    }

    if (jogador.minigame == 'defesa') {
        minigameVal.addEventListener('click', minigameDefesa)
    }

    if (jogador.minigame == 'descanso') {

    }

    if (jogador.minigame == 'foco') {

    }

}
/*-----*/