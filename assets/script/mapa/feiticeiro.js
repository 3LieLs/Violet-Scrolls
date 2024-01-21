botaoFeiticeiro = window.document.querySelector('input#botaoFeiticeiro')
botaoFeiticeiro.addEventListener('click', botaoFeiticeiroClick)

var feiticeiroDisplayVal = false

function botaoFeiticeiroClick() {
    if (feiticeiroDisplayVal == false) {
        feiticeiroDisplayVal = true

        feiticeiroDisplayStyle.style.opacity = '1'
        feiticeiroDisplayStyle.style.right = '1%'



        vendedorDisplayVal = false

        vendedorDisplayStyle.style.opacity = '0'
        vendedorDisplayStyle.style.right = '-5%'

        ferreiroDisplayVal = false

        ferreiroDisplayStyle.style.opacity = '0'
        ferreiroDisplayStyle.style.right = '-5%'
    }

    else {
        feiticeiroDisplayVal = false

        feiticeiroDisplayStyle.style.opacity = '0'
        feiticeiroDisplayStyle.style.right = '-5%'
    }
}

function fecharLojas() {
    
}