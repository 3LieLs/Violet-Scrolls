/*-ITENS INICIAIS-*/
var abrirBauInicial = window.document.querySelector('input#abrirBauInicial')
abrirBauInicial.addEventListener('click',  abrirBauInicialClick)

var armaInicial = window.document.querySelector('input#armaInicial')

var armaduraInicial = window.document.querySelector('input#armaduraInicial')

var item1 = window.document.querySelector('li#item1')
var item2 = window.document.querySelector('li#item2')
var item3 = window.document.querySelector('li#item3')
var item4 = window.document.querySelector('li#item4')
var item5 = window.document.querySelector('li#item5')
var item6 = window.document.querySelector('li#item6')
var item7 = window.document.querySelector('li#item7')
var item8 = window.document.querySelector('li#item8')

var continuarInicio = window.document.querySelector('input#continuarInicio')
continuarInicio.addEventListener('click',  continuarInicioClick)

var itensAdquiridos = window.document.querySelector('ul#itensAdquiridos')

var mensagemBauInicial = window.document.querySelector('p#mensagemBauInicial')

function  abrirBauInicialClick() {
    bauInicial.style.display = 'none'
    mensagemBauInicial.innerHTML = `Você pega alguns itens dentro dele...`
    
    armaGeral = adaga
    armaduraGeral = armaduraDePele
    jogador.pecitas = parseInt(jogador.pecitas) + 5

    itensIniciais.style.display = 'contents'
    
    item1.innerHTML = `${5} Pecitas`
    item2.innerHTML = `${adaga.nome}`
    item3.innerHTML = `${armaduraDePele.nome}`
    setTimeout (sumirItensAdquiridos, 2000)

}

function sumirItensAdquiridos() {
    itensAdquiridos.style.opacity = '0'
}

var continuarClick = 0

function continuarInicioClick() {
    
    continuarClick ++

        mensagemBauInicial.innerHTML = `Logo a frente você avista uma taverna bastante iluminada...`

    if (continuarClick == 2) {
        mainBauInicial.style.display = 'none'
        itensIniciais.style.display = 'none'

        local = 'taverna'
        taverna.style.display = 'contents'
        mainBotaoMenu.style.display = 'contents'

        continuarClick = 0
    }
   
}
/*-----*/