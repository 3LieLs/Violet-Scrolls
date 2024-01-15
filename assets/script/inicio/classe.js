/*-MENSAGEM CLASSE-*/
var escolhaClasse = window.document.querySelector('p#mensagemClasse')

function Classe() {
    escolhaClasse.innerHTML = `Escolha a sua classe.`
        
}

var botaoVoltarClasse = window.document.querySelector('input#voltarClasse')
botaoVoltarClasse.addEventListener('click', voltarClasseClick)
document.addEventListener('keypress', voltarClasseAtalho)

function voltarClasseClick() {
    usuario.style.display = 'contents'
    classe.style.display = 'none'
    classeDisplay = false
}
function voltarClasseAtalho(atalho) {
    if (classeDisplay == true) {
        if (atalho.key == 'b') {
            botaoVoltarClasse.click()
        }
    }
}
/*-----*/

/*-ESCOLHA CLASSE-*/

/*-GUERREIRO-*/
var botaoClasseGuerreiro = window.document.querySelector('input#guerreiro')
botaoClasseGuerreiro.addEventListener('mouseover', botaoClasseGuerreiroHover)
botaoClasseGuerreiro.addEventListener('mouseout', botaoClasseGuerreiroOut)

function botaoClasseGuerreiroClick() {
    jogador.vidaCombate = 20, jogador.manaCombate = 10, jogador.energiaCombate = 15
    jogador.vida = 20, jogador.mana = 10, jogador.energia = 15
    jogador.classe = 'Guerreiro'

    classe.style.display = 'none'
    arma.style.display = 'contents'
    Arma()
}

function botaoClasseGuerreiroHover() {
    botaoClasseGuerreiro.style.cursor = 'pointer'
    botaoClasseGuerreiro.style.background = 'red'
    botaoClasseGuerreiro.style.transition = '0.5s'
}

function botaoClasseGuerreiroOut() {
    botaoClasseGuerreiro.style.background = 'black'
}
/*-----*/

/*-MAGO-*/
var botaoClasseMago = window.document.querySelector('input#mago')
botaoClasseMago.addEventListener('click', botaoClasseMagoClick)
botaoClasseMago.addEventListener('mouseover', botaoClasseMagoHover)
botaoClasseMago.addEventListener('mouseout', botaoClasseMagoOut)

function botaoClasseMagoClick() {
    jogador.vidaCombate = 15, jogador.manaCombate = 20, jogador.energiaCombate = 10
    jogador.vida = 15, jogador.mana = 20, jogador.energia = 10
    jogador.classe = 'Mago'

    classe.style.display = 'none'
    arma.style.display = 'contents'
    Arma()
}

function botaoClasseMagoHover() {
    botaoClasseMago.style.cursor = 'pointer'
    botaoClasseMago.style.background = 'blue'
    botaoClasseMago.style.transition = '0.5s'
}

function botaoClasseMagoOut() {
    botaoClasseMago.style.background = 'black'
}
/*-----*/

/*-ARQUEIRO-*/
var botaoClasseArqueiro = window.document.querySelector('input#arqueiro')
botaoClasseArqueiro.addEventListener('click', botaoClasseArqueiroClick)
botaoClasseArqueiro.addEventListener('mouseover', botaoClasseArqueiroHover)
botaoClasseArqueiro.addEventListener('mouseout', botaoClasseArqueiroOut)

function botaoClasseArqueiroClick() {
    jogador.vidaCombate = 15, jogador.manaCombate = 10, jogador.energiaCombate = 20
    jogador.vida = 15, jogador.mana = 10, jogador.energia = 20
    jogador.classe = 'Arqueiro'

    classe.style.display = 'none'
    arma.style.display = 'contents'
    Arma()
}

function botaoClasseArqueiroHover() {
    botaoClasseArqueiro.style.cursor = 'pointer'
    botaoClasseArqueiro.style.background = 'green'
    botaoClasseArqueiro.style.transition = '0.5s'
}

function botaoClasseArqueiroOut() {
    botaoClasseArqueiro.style.background = 'black'
}
/*-----*/
