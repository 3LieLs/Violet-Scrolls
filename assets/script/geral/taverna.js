/*-MENU-*/
var menuNomeVal = window.document.querySelector(`p#menuNome`)
var menuGeneroVal = window.document.querySelector(`p#menuGenero`)
var menuClasseVal = window.document.querySelector(`p#menuClasse`)

var menuVidaVal = window.document.querySelector(`p#menuVida`)
var menuEnergiaVal = window.document.querySelector(`p#menuEnergia`)
var menuManaVal = window.document.querySelector(`p#menuMana`)

var menuArmaVal = window.document.querySelector(`p#menuArma`)
var menuDanoVal = window.document.querySelector(`p#menuDano`)
var menuEnergiaCustoVal = window.document.querySelector(`p#menuEnergiaCusto`)
var menuManaCustoVal = window.document.querySelector(`p#menuManaCusto`)

var menuArmaduraVal = window.document.querySelector(`p#menuArmadura`)
var menuDefesaVal = window.document.querySelector(`p#menuDefesa`)
var menuEnergiaRecuperacaoVal = window.document.querySelector(`p#menuEnergiaRecuperacao`)
var menuManaRecuperacaoVal = window.document.querySelector(`p#menuManaRecuperacao`)

var experienciaAtualVal = window.document.querySelector('p#experienciaAtual')
var nivelAtualVal = window.document.querySelector('p#nivelAtual')

var menuBotaoVal = window.document.querySelector(`input#botaoMenu`)
document.addEventListener(`keypress`, menuAtalho)
menuBotaoVal.addEventListener('click', menuDisplay)

function menuAtalho(atalho) {
    if (safeZone == true) {
        if (atalho.key == 'g') {
            console.log("Menu aberto");
            menuBotaoVal.click()
        }
    }
}

function menuDisplay() {
    if (menuAbertoFechado == false) {
        menu.style.display = 'contents'
        menuAbertoFechado = true

        menuNomeVal.innerHTML = `Nome: ${jogador.nome}`
        menuGeneroVal.innerHTML = `Gênero: ${jogador.genero}`
        menuClasseVal.innerHTML = `Classe: ${jogador.classe}`

        menuVidaVal.innerHTML = `Vida: ${jogador.vida}`
        menuEnergiaVal.innerHTML = `Energia: ${jogador.energia}`
        menuManaVal.innerHTML = `Mana: ${jogador.mana}`

        menuArmaVal.innerHTML = `Arma:<br>${armaJogador.nome}`
        menuDanoVal.innerHTML = `Dano: ${armaJogador.dano}`
        menuEnergiaCustoVal.innerHTML = `E custo: ${armaJogador.energiaCusto}`
        menuManaCustoVal.innerHTML = `M custo: ${armaJogador.manaCusto}`

        menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraJogador.nome}`
        menuDefesaVal.innerHTML = `Defesa: ${armaduraJogador.defesa}`
        menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraJogador.energiaRecuperacao}`
        menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraJogador.manaRecuperacao}`

        nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`
        experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`

        if (jogadorNivel.experiencia >= jogadorNivel.proximoNivel) {
            upStatus.style.display = 'contents'
        }
    } else {
        menu.style.display = 'none'
        menuAbertoFechado = false
    }
}
/*-----*/

/*-TAVERNA-*/
var mensagemSafeZoneVal = window.document.querySelector('p#mensagemSafeZone')
mensagemSafeZoneVal.innerHTML = ``
/*-----*/

/*-GOBLIN-*/
var botaoGoblinVal = window.document.querySelector('input#botaoGoblin')
botaoGoblinVal.addEventListener('click', botaoGoblinClick)
botaoGoblinVal.addEventListener('mouseover', botaoGoblinHover)
botaoGoblinVal.addEventListener('mouseout', botaoGoblinOut)

function botaoGoblinClick() {
    fase = 'goblin'
    mainSafeZone.style.display = 'none'
    mainHud.style.display = 'contents'
    mainFaseGoblin.style.display = 'contents'
    definirEstatisticaGeral()
    usuarioCombateView()
    inimigoCombateView()
    definirMusica()
}
function botaoGoblinHover() {
    botaoGoblinVal.style.cursor = 'pointer'
    botaoGoblinVal.style.background = 'orange'
    botaoGoblinVal.style.transition = '0.5s'
}
function botaoGoblinOut() {
    botaoGoblinVal.style.background = 'gray'
}
/*-----*/

/*-GOLEM-*/
var botaoGolemVal = window.document.querySelector('input#botaoGolem')
botaoGolemVal.addEventListener('click', botaoGolemClick)
botaoGolemVal.addEventListener('mouseover', botaoGolemHover)
botaoGolemVal.addEventListener('mouseout', botaoGolemOut)

function botaoGolemClick() {
    fase = 'golem'
    mainSafeZone.style.display = 'none'
    mainHud.style.display = 'contents'
    mainFaseGolem.style.display = 'contents'
    definirEstatisticaGeral()
    usuarioCombateView()
    inimigoCombateView()
    definirMusica()
}
function botaoGolemHover() {
    botaoGolemVal.style.cursor = 'pointer'
    botaoGolemVal.style.background = 'orange'
    botaoGolemVal.style.transition = '0.5s'
}
function botaoGolemOut() {
    botaoGolemVal.style.background = 'gray'
}
/*-----*/

/*-DRAGÃO-*/
var botaoDragaoVal = window.document.querySelector('input#botaoDragao')
botaoDragaoVal.addEventListener('click', botaoDragaoClick)
botaoDragaoVal.addEventListener('mouseover', botaoDragaoHover)
botaoDragaoVal.addEventListener('mouseout', botaoDragaoOut)

function botaoDragaoClick() {
    fase = 'dragao'
    mainSafeZone.style.display = 'none'
    mainHud.style.display = 'contents'
    mainFaseDragao.style.display = 'contents'
    definirEstatisticaGeral()
    usuarioCombateView()
    inimigoCombateView()
    definirMusica()
}
function botaoDragaoHover() {
    botaoDragaoVal.style.cursor = 'pointer'
    botaoDragaoVal.style.background = 'orange'
    botaoDragaoVal.style.transition = '0.5s'
}
function botaoDragaoOut() {
    botaoDragaoVal.style.background = 'gray'
}
/*-----*/

/*-DEFINIR ESTATISTICA-*/
function definirEstatisticaGeral() {
    legendaView.innerHTML = ``

    jogador.vidaCombate = jogador.vida, jogador.energiaCombate = jogador.energia, jogador.manaCombate = jogador.mana
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100,

    inimigo.porcentagem = 0, inimigo.vidaPorcentagem = 100, inimigo.energiaPorcentagem = 100, inimigo.manaPorcentagem = 100,

    goblin.vidaCombate = goblin.vida, goblin.energiaCombate = goblin.energia

    golem.vidaCombate = golem.vida, golem.energiaCombate = golem.energia

    dragao.vidaCombate = dragao.vida, dragao.manaCombate = dragao.mana
}
/*-----*/
