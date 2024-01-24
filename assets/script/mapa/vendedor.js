var botaoAbrirLojaVendedor = window.document.querySelector('input#botaoAbrirLojaVendedor')
botaoAbrirLojaVendedor.addEventListener('click', botaoAbrirLojaVendedorClick)

function botaoAbrirLojaVendedorClick() {
    lojaVendedor.style.right = '1%'
    lojaVendedor.style.opacity = '1'
    lojaVendedor.style.zIndex = '9999'

    botaoAbrirLojaVendedor.style.opacity = '0'
    botaoAbrirLojaVendedor.style.zIndex = '-9999'
}

var botaoFecharLojaVendedor = window.document.querySelector('input#botaoFecharLojaVendedor')
botaoFecharLojaVendedor.addEventListener('click', botaoFecharLojaVendedorClick)

function botaoFecharLojaVendedorClick() {
    lojaVendedor.style.right = '-5%'
    lojaVendedor.style.opacity = '0'
    lojaVendedor.style.zIndex = '-9999'

    botaoAbrirLojaVendedor.style.opacity = '1'
    botaoAbrirLojaVendedor.style.zIndex = '9999'
}