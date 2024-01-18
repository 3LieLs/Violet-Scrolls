/*-SELEÇÃO DE GÊNERO-*/
var botaoMasculino = window.document.querySelector('input#botaoMasculino')
botaoMasculino.addEventListener('click', botaoMasculinoClick)
botaoMasculino.addEventListener('mouseover', botaoMasculinoHover)
botaoMasculino.addEventListener('mouseout', botaoMasculinoOut)

function botaoMasculinoClick() {
    jogador.genero = 'Homem'
    escolhaGenero.style.display = 'none'
    escolhaNome.style.display = 'contents'
}
function botaoMasculinoHover() {
    botaoMasculino.style.cursor = 'pointer'
    botaoMasculino.style.background = 'blue'
    botaoMasculino.style.transition = '0.5s'
}
function botaoMasculinoOut() {
    botaoMasculino.style.background = 'black'
}

var botaoFeminino = window.document.querySelector('input#botaoFeminino')
botaoFeminino.addEventListener('click', botaoFemininoClick)
botaoFeminino.addEventListener('mouseover', botaoFemininoHover)
botaoFeminino.addEventListener('mouseout', botaoFemininoOut)

function botaoFemininoClick() {
    jogador.genero = 'Mulher'
    escolhaGenero.style.display = 'none'
    escolhaNome.style.display = 'contents'
}
function botaoFemininoHover() {
    botaoFeminino.style.cursor = 'pointer'
    botaoFeminino.style.background = '#F005D0'
    botaoFeminino.style.transition = '0.5s'
}
function botaoFemininoOut() {
    botaoFeminino.style.background = 'black'
}
/*-----*/

/*-SELEÇÃO DE NOME-*/
var enviarNomeJogador = window.document.querySelector('input#enviarNomeJogador')
enviarNomeJogador.addEventListener('click', enviarNomeJogadorClick)
enviarNomeJogador.addEventListener('mouseover', enviarNomeJogadorHover)
enviarNomeJogador.addEventListener('mouseout', enviarNomeJogadorOut)

function enviarNomeJogadorClick() {
    jogadorNome = window.document.querySelector('input#nomeJogador')
    jogador.nome = String(jogadorNome.value)
    escolhaNome.style.display = 'none'
    escolhaRaca.style.display = 'contents'
}
function enviarNomeJogadorHover() {
    enviarNomeJogador.style.cursor = 'pointer'
    enviarNomeJogador.style.animation = 'botaoAnimacao 2s 0ms infinite running'
    enviarNomeJogador.style.background = 'gray'
}
function enviarNomeJogadorOut() {
    enviarNomeJogador.style.background = 'black'
    enviarNomeJogador.style.transform = 'scale(1.0)'
    enviarNomeJogador.style.animation = 'paused'
}
/*-----*/
