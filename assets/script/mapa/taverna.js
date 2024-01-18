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

    racaGeral.vidaCombate = racaGeral.vida, racaGeral.energiaCombate = racaGeral.energia, racaGeral.manaCombate = racaGeral.mana
    racaGeral.vidaPorcentagem = 100, racaGeral.energiaPorcentagem = 100, racaGeral.manaPorcentagem = 100

    armaGeral.danoCombate = armaGeral.dano

    inimigo.porcentagem = 0, inimigo.vidaPorcentagem = 100, inimigo.energiaPorcentagem = 100, inimigo.manaPorcentagem = 100

    inimigo.vidaCombate = inimigo.vida, inimigo.energiaCombate = inimigo.energia

    golem.vidaCombate = golem.vida, golem.energiaCombate = golem.energia

    dragao.vidaCombate = dragao.vida, dragao.manaCombate = dragao.mana
}
/*-----*/
