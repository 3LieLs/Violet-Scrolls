var botaoAbrirLojaFerreiro = window.document.querySelector('input#botaoAbrirLojaFerreiro')
botaoAbrirLojaFerreiro.addEventListener('click', botaoAbrirLojaFerreiroClick)

function botaoAbrirLojaFerreiroClick() {
    lojaFerreiro.style.right = '1%'
    lojaFerreiro.style.opacity = '1'
    lojaFerreiro.style.zIndex = '9999'

    botaoAbrirLojaFerreiro.style.opacity = '0'
    botaoAbrirLojaFerreiro.style.zIndex = '-9999'
}

var botaoFecharLojaFerreiro = window.document.querySelector('input#botaoFecharLojaFerreiro')
botaoFecharLojaFerreiro.addEventListener('click', botaoFecharLojaFerreiroClick)

function botaoFecharLojaFerreiroClick() {
    lojaFerreiro.style.right = '-5%'
    lojaFerreiro.style.opacity = '0'
    lojaFerreiro.style.zIndex = '-9999'

    botaoAbrirLojaFerreiro.style.opacity = '1'
    botaoAbrirLojaFerreiro.style.zIndex = '9999'
}