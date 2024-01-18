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
menuBotaoVal.addEventListener('click', menuDisplay)

function menuDisplay() {
    if (menuAbertoFechado == false) {
        menu.style.display = 'contents'
        menuAbertoFechado = true

        menuNomeVal.innerHTML = `Nome: ${jogador.nome}`
        menuGeneroVal.innerHTML = `Gênero: ${jogador.genero}`
        menuClasseVal.innerHTML = `Raça: ${racaGeral.nome}`

        menuVidaVal.innerHTML = `Vida: ${racaGeral.vida}`
        menuEnergiaVal.innerHTML = `Energia: ${racaGeral.energia}`
        menuManaVal.innerHTML = `Mana: ${racaGeral.mana}`

        menuArmaVal.innerHTML = `Arma:<br>${armaGeral.nome}`
        menuDanoVal.innerHTML = `Dano: ${armaGeral.dano}`
        menuEnergiaCustoVal.innerHTML = `E custo: ${armaGeral.energiaCusto}`
        menuManaCustoVal.innerHTML = `M custo: ${armaGeral.manaCusto}`

        menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraGeral.nome}`
        menuDefesaVal.innerHTML = `Defesa: ${armaduraGeral.defesa}`
        menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraGeral.energiaRecuperacao}`
        menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraGeral.manaRecuperacao}`

        nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`
        experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`

        barraExperiencia()

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
var mensagemSafeZoneVal = window.document.querySelector('p#mensagemTaverna')
mensagemTaverna.innerHTML = ``

var inimigoFisicoImagemVal = window.document.querySelector('img#inimigoFisicoImagem')
var inimigoMagicoImagemVal = window.document.querySelector('img#inimigoMagicoImagem')
/*-----*/

/*-GOBLIN-*/
var botaoGoblinVal = window.document.querySelector('input#botaoGoblin')
botaoGoblinVal.addEventListener('click', botaoGoblinClick)
botaoGoblinVal.addEventListener('mouseover', botaoGoblinHover)
botaoGoblinVal.addEventListener('mouseout', botaoGoblinOut)

function botaoGoblinClick() {
    taverna.style.display = 'none'
    
    fase = 'goblin'
    inimigoFisicoImagemVal.src = 'assets/content/img/Goblin.gif'
    inimigoFisicoImagemVal.style.width = '50%'

    inimigoFisicoFase.style.display = 'contents'
    
    mainHud.style.display = 'contents'
    
    definirEstatisticaGoblin()
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
    taverna.style.display = 'none'
    
    fase = 'golem'
    inimigoFisicoImagemVal.src = 'assets/content/img/Golem.gif'
    inimigoFisicoImagemVal.style.width = '50%'

    inimigoFisicoFase.style.display = 'contents'
    
    mainHud.style.display = 'contents'
    
    definirEstatisticaGolem()
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
    taverna.style.display = 'none'
    
    fase = 'dragao'
    inimigoMagicoImagemVal.src = 'assets/content/img/Dragão.gif'
    inimigoMagicoImagemVal.style.width = '50%'

    inimigoMagicoFase.style.display = 'contents'
    
    mainHud.style.display = 'contents'
    
    definirEstatisticaDragao()
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
    
    mainJogadorDerrotado.style.display = 'none'
    mainInimigoDerrotado.style.display = 'none'

    jogador.vidaCombate = jogador.vida, jogador.energiaCombate = jogador.energia, jogador.manaCombate = jogador.mana
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100,

    armaJogador.danoCombate = armaJogador.dano

    inimigo.porcentagem = 0, inimigo.vidaPorcentagem = 100, inimigo.energiaPorcentagem = 100, inimigo.manaPorcentagem = 100,

    inimigo.vidaCombate = inimigo.vida, inimigo.energiaCombate = inimigo.energia

    golem.vidaCombate = golem.vida, golem.energiaCombate = golem.energia

    dragao.vidaCombate = dragao.vida, dragao.manaCombate = dragao.mana
}
/*-----*/