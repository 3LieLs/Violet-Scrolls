/*-INICIO-*/
var botaoInicioVal = window.document.querySelector('input#botaoInicio')
botaoInicioVal.addEventListener('click', botaoInicioClick)
botaoInicioVal.addEventListener('mouseover', botaoInicioHover) //Serve para deixar o html mais limpinho
botaoInicioVal.addEventListener('mouseout', botaoInicioOut)

function botaoInicioClick() {
    inicio.style.display = 'none'
    selecao.style.display = 'contents'
}
function botaoInicioHover() {
    botaoInicioVal.style.cursor = 'pointer'
    botaoInicioVal.style.animation = 'botaoAnimacao 2s 0ms infinite running'//começa a animação
    botaoInicioVal.style.background = 'gray'
}
function botaoInicioOut() {
    botaoInicioVal.style.background = 'black'
    botaoInicioVal.style.transform = 'scale(1.0)'
    botaoInicioVal.style.animation = 'paused'//pausa a animação
}
/*-----*/
