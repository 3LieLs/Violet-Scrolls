botaoFerreiro = window.document.querySelector('input#botaoFerreiro')
botaoFerreiro.addEventListener('click', botaoFerreiroClick)

var ferreiroDisplayVal = false

function botaoFerreiroClick() {
    if (ferreiroDisplayVal == false) {
        ferreiroDisplayVal = true

        ferreiroDisplayStyle.style.opacity = '1'
        ferreiroDisplayStyle.style.right = '1%'

        
        vendedorDisplayVal = false

        vendedorDisplayStyle.style.opacity = '0'
        vendedorDisplayStyle.style.right = '-5%'

        feiticeiroDisplayVal = false

        feiticeiroDisplayStyle.style.opacity = '0'
        feiticeiroDisplayStyle.style.right = '-5%'
    }

    else {
        ferreiroDisplayVal = false

        ferreiroDisplayStyle.style.opacity = '0'
        ferreiroDisplayStyle.style.right = '-5%'
    }
}