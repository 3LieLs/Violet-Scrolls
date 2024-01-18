/*-VOLTAR RAÇA-*/
var botaoVoltarRaca = window.document.querySelector('input#voltarRaca')
botaoVoltarRaca.addEventListener('click', voltarRacaClick)

function voltarRacaClick() {
    escolhaNome.style.display = 'contents'
    escolhaRaca.style.display = 'none'
}
/*-----*/

/*-ESCOLHA RAÇA-*/

/*-HUMANO-*/
var botaoHumano = window.document.querySelector('input#humano')
botaoHumano.addEventListener('click', botaoHumanoClick)

function botaoHumanoClick() {
    racaGeral = racaHumano

    escolhaRaca.style.display = 'none'
    mainBauInicial.style.display = 'contents'
}
/*-----*/

/*-Elfo-*/
var botaoElfo = window.document.querySelector('input#elfo')
botaoElfo.addEventListener('click', botaoElfoClick)

function botaoElfoClick() {
    racaGeral = racaElfo

    escolhaRaca.style.display = 'none'
    mainBauInicial.style.display = 'contents'
}
/*-----*/

/*-orc-*/
var botaoOrc = window.document.querySelector('input#orc')
botaoOrc.addEventListener('click', botaoOrcClick)

function botaoOrcClick() {
    racaGeral = racaOrc

    escolhaRaca.style.display = 'none'
    mainBauInicial.style.display = 'contents'
}
/*-----*/

/*-Draconato-*/
var botaoDraconato = window.document.querySelector('input#draconato')
botaoDraconato.addEventListener('click', botaoDraconatoClick)

function botaoDraconatoClick() {
    racaGeral = racaDraconato

    escolhaRaca.style.display = 'none'
    mainBauInicial.style.display = 'contents'
}
/*-----*/

/*-VAMPIRO-*/
var botaoVampiro = window.document.querySelector('input#vampiro')
botaoVampiro.addEventListener('click', botaoVampiroClick)

function botaoVampiroClick() {
    racaGeral = racaVampiro

    escolhaRaca.style.display = 'none'
    mainBauInicial.style.display = 'contents'
}
/*-----*/