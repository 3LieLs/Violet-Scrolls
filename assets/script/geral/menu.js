/*-MENU-*/
var menuNomeVal = window.document.querySelector(`p#menuNome`)
var menuGeneroVal = window.document.querySelector(`p#menuGenero`)
var menuRacaVal = window.document.querySelector(`p#menuRaca`)
var menuPecitasVal = window.document.querySelector(`p#menuPecitas`)

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
        setTimeout(menuAnimacaoAbrir, 100)
        setTimeout(menuDisplayAbrir, 0)

        menuNomeVal.innerHTML = `Nome: ${jogador.nome}`
        menuGeneroVal.innerHTML = `Gênero: ${jogador.genero}`
        menuRacaVal.innerHTML = `Raça: ${racaGeral.nome}`
        menuPecitasVal.innerHTML = `Pecitas: ${jogador.pecitas}`

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

        setTimeout(menuAnimacaoFechar, 100)

        setTimeout(menuDisplayFechar, 500)
    }
}

function menuDisplayAbrir() {
    menu.style.display = 'contents'
    if (local == 'taverna') {
        taverna.style.display = 'none'
    }
    if (local == 'vendedorDisplay') {
        vendedorDisplay.style.display = 'none'
    }
    if (local == 'ferreiroDisplay') {
        ferreiroDisplay.style.display = 'none'
    }
    if (local == 'feiticeiroDisplay') {
        feiticeiroDisplay.style.display = 'none'
    }

    menuAbertoFechado = true
}

function menuDisplayFechar() {
    menu.style.display = 'none'
    if (local == 'taverna') {
        taverna.style.display = 'contents'
    }
    if (local == 'vendedorDisplay') {
        vendedorDisplay.style.display = 'contents'
    }
    if (local == 'ferreiroDisplay') {
        ferreiroDisplay.style.display = 'contents'
    }
    if (local == 'feiticeiroDisplay') {
        feiticeiroDisplay.style.display = 'contents'
    }
    
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

    menuTeste.style.opacity = '1'
    menuTeste.style.bottom = '5%'

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

    menuTeste.style.opacity = '0'
    menuTeste.style.bottom = '-5%'

}
/*-----*/