/*-MENU-*/
var menuNomeVal = window.document.querySelector(`p#menuNome`)
var menuGeneroVal = window.document.querySelector(`p#menuGenero`)
var menuRacaVal = window.document.querySelector(`p#menuRaca`)

var menuVidaVal = window.document.querySelector(`p#menuVida`)
var menuEnergiaVal = window.document.querySelector(`p#menuEnergia`)
var menuManaVal = window.document.querySelector(`p#menuMana`)

var menuArmaVal = window.document.querySelector(`p#menuArmaNome`)
var menuDanoVal = window.document.querySelector(`p#menuDano`)
var menuEnergiaCustoVal = window.document.querySelector(`p#menuEnergiaCusto`)
var menuManaCustoVal = window.document.querySelector(`p#menuManaCusto`)

var menuArmaduraVal = window.document.querySelector(`p#menuArmaduraNome`)
var menuDefesaVal = window.document.querySelector(`p#menuDefesa`)
var menuEnergiaRecuperacaoVal = window.document.querySelector(`p#menuEnergiaRecuperacao`)
var menuManaRecuperacaoVal = window.document.querySelector(`p#menuManaRecuperacao`)

var experienciaAtualVal = window.document.querySelector('p#experienciaAtual')
var nivelAtualVal = window.document.querySelector('p#nivelAtual')

var menuBotaoVal = window.document.querySelector(`input#botaoMenu`)
menuBotaoVal.addEventListener('click', menuDisplay)

function menuDisplay() {
    if (menuAbertoFechado == false) {
        setTimeout (menuAnimacaoAbrir, 100)
        setTimeout (menuDisplayAbrir, 0)

        menuNomeVal.innerHTML = `Nome: ${jogador.nome}`
        menuGeneroVal.innerHTML = `Gênero: ${jogador.genero}`
        menuRacaVal.innerHTML = `Raça: ${racaGeral.nome}`

        menuVidaVal.innerHTML = `Vida: ${jogador.vida}`
        menuEnergiaVal.innerHTML = `Energia: ${jogador.energia}`
        menuManaVal.innerHTML = `Mana: ${jogador.mana}`

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

        setTimeout (menuAnimacaoFechar, 100)
       
        setTimeout (menuDisplayFechar, 500)
    }
}

function menuDisplayAbrir() {
    menu.style.display = 'contents'
    taverna.style.display = 'none'
    menuAbertoFechado = true
}

function menuDisplayFechar() {
    menu.style.display = 'none'
    taverna.style.display = 'contents'
    menuAbertoFechado = false
}


function menuAnimacaoAbrir() {
    nivel.style.opacity = '1'
    nivel.style.top = '5%'

    menuNomeGeneroRaca.style.opacity = '1'
    menuNomeGeneroRaca.style.left = '1%'
    
    menuStats.style.opacity = '1'
    menuStats.style.left = '1%'

    menuArma.style.opacity = '1'
    menuArma.style.right = '1%'

    menuArmadura.style.opacity = '1'
    menuArmadura.style.right = '1%'

    menuItens.style.opacity = '1'
    
}

function menuAnimacaoFechar() {
    nivel.style.opacity = '0'
    nivel.style.top = '-15%'

    menuNomeGeneroRaca.style.opacity = '0'
    menuNomeGeneroRaca.style.left = '-5%'
    
    menuStats.style.opacity = '0'
    menuStats.style.left = '-5%'

    menuArma.style.opacity = '0'
    menuArma.style.right = '-5%'

    menuArmadura.style.opacity = '0'
    menuArmadura.style.right = '-5%'

    menuItens.style.opacity = '0'
    
}
/*-----*/

/*-TAVERNA-*/
var mensagemTaverna = window.document.querySelector('p#mensagemTaverna')
mensagemTaverna.innerHTML = ``
/*-----*/

/*-MASMORRA-*/
var botaoMasmorra = window.document.querySelector('input#botaoMasmorra')
botaoMasmorra.addEventListener('click', iniciarCombate)

function iniciarCombate() {
    escolhaInimigo = Math.floor(Math.random() * 100) + 0;

    if (escolhaInimigo >= 0 && escolhaInimigo <= 60) {
        iniciarGoblinCombate()
    }

    if (escolhaInimigo > 60 && escolhaInimigo < 90) {
        iniciarGolemCombate()
    }

    if (escolhaInimigo >= 90 && escolhaInimigo <= 100) {
        iniciarDragaoCombate()
    }
}

/*-DEFINIR ESTATISTICA-*/
function definirEstatisticaGeral() {
    legendaView.innerHTML = ``

    mainJogadorDerrotado.style.display = 'none'
    mainInimigoDerrotado.style.display = 'none'

    jogador.vidaCombate = jogador.vida, jogador.energiaCombate = jogador.energia, jogador.manaCombate = jogador.mana
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100

    armaGeral.danoCombate = armaGeral.dano

    inimigoGeral.porcentagem = 0, inimigoGeral.vidaPorcentagem = 100, inimigoGeral.energiaPorcentagem = 100, inimigoGeral.manaPorcentagem = 100

    inimigoGeral.vidaCombate = inimigoGeral.vida, inimigoGeral.energiaCombate = inimigoGeral.energia, inimigoGeral.manaCombate = inimigoGeral.mana
}
/*-----*/
