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

    terceiraEscolha.value = 'Contra-ataque'
    terceiraEscolha.id = 'contraAtaque'

    terceiraEscolha = window.document.querySelector('input#contraAtaque')
    terceiraEscolha.addEventListener('click', contraAtaqueClick)

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
    botaoAtaqueForteClick()
    voltarMovesetInicio()
}

function contraAtaqueClick() {
    botaoContraAtaqueClick()
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
    botaoMagiaDanoClick()
    voltarMovesetInicio()
}

function magiaRecuperarClick() {
    botaoMagiaRestauracaoClick()
    voltarMovesetInicio()
}

function magiaBuffClick() {
    botaoMagiaBuffClick()
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
    primeiraEscolha.addEventListener('click', bloquearClick)

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

function bloquearClick() {
    botaoBloquearClick()
    voltarMovesetInicio()
}

function descansoClick() {
    botaoDescansoClick()
    voltarMovesetInicio()
}

function focoClick() {
    botaoFocoClick()
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
    primeiraEscolha.removeEventListener('click', bloquearClick)


    segundaEscolha.removeEventListener('click', ataqueForteClick)
    segundaEscolha.removeEventListener('click', magiaRecuperarClick)
    segundaEscolha.removeEventListener('click', descansoClick)


    terceiraEscolha.removeEventListener('click', contraAtaqueClick)
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

/*-CALCULO DEFESA-*/
function calculoDefesa() {
    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / (100 + parseInt(armaduraGeral.defesaCombate))) * 150
    armaduraGeral.defesaCombate = armaduraGeral.defesaCombate.toPrecision(3)

    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / 100) * inimigoGeral.danoCombate
    inimigoGeral.danoCombate = inimigoGeral.danoCombate - armaduraGeral.defesaCombate

    inimigoGeral.danoCombate = Math.trunc(inimigoGeral.danoCombate)
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