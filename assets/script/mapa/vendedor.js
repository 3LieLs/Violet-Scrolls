botaoVendedor = window.document.querySelector('input#botaoVendedor')
botaoVendedor.addEventListener('click', botaoVendedorClick)

var vendedorDisplayVal = false

function botaoVendedorClick() {
    if (vendedorDisplayVal == false) {
        vendedorDisplayVal = true

        vendedorDisplayStyle.style.opacity = '1'
        vendedorDisplayStyle.style.right = '1%'



        ferreiroDisplayVal = false

        ferreiroDisplayStyle.style.opacity = '0'
        ferreiroDisplayStyle.style.right = '-5%'

        feiticeiroDisplayVal = false

        feiticeiroDisplayStyle.style.opacity = '0'
        feiticeiroDisplayStyle.style.right = '-5%'
    }

    else {
        vendedorDisplayVal = false

        vendedorDisplayStyle.style.opacity = '0'
        vendedorDisplayStyle.style.right = '-5%'
    }
}