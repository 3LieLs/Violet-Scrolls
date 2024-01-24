/*-TAVERNA-*/
var botaoAbrirMissoes = window.document.querySelector('input#botaoAbrirMissoes')
botaoAbrirMissoes.addEventListener('click', botaoAbrirMissoesClick)

function botaoAbrirMissoesClick() {
    missoesTaverna.style.right = '1%'
    missoesTaverna.style.opacity = '1'
    missoesTaverna.style.zIndex = '9999'

    botaoAbrirMissoes.style.opacity = '0'
    botaoAbrirMissoes.style.zIndex = '-9999'
}

var botaoFecharMissoes = window.document.querySelector('input#botaoFecharMissoes')
botaoFecharMissoes.addEventListener('click', botaoFecharMissoesClick)

function botaoFecharMissoesClick() {
    missoesTaverna.style.right = '-5%'
    missoesTaverna.style.opacity = '0'
    missoesTaverna.style.zIndex = '-9999'

    botaoAbrirMissoes.style.opacity = '1'
    botaoAbrirMissoes.style.zIndex = '9999'
}
/*-----*/

/*-MASMORRA-
var botaoMasmorra = window.document.querySelector('input#botaoMasmorra')
botaoMasmorra.addEventListener('click', iniciarCombate)

function iniciarCombate() {
    escolhaInimigo = Math.floor(Math.random() * 100) + 0;

    if (escolhaInimigo >= 0 && escolhaInimigo <= 60) {
        iniciarGoblinCombate()
    }

    if (escolhaInimigo > 60 && escolhaInimigo < 90) {
        iniciarGolemCombate()
    }

    if (escolhaInimigo >= 90 && escolhaInimigo <= 100) {
        iniciarDragaoCombate()
    }
}
*/

/*-DEFINIR ESTATISTICA-*/
function definirEstatisticaGeral() {
    legendaView.innerHTML = ``

    mainJogadorDerrotado.style.display = 'none'
    mainInimigoDerrotado.style.display = 'none'

    jogador.vidaCombate = jogador.vida, jogador.energiaCombate = jogador.energia, jogador.manaCombate = jogador.mana
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100

    armaGeral.danoCombate = armaGeral.dano

    inimigoGeral.porcentagem = 0, inimigoGeral.vidaPorcentagem = 100, inimigoGeral.energiaPorcentagem = 100, inimigoGeral.manaPorcentagem = 100

    inimigoGeral.vidaCombate = inimigoGeral.vida, inimigoGeral.energiaCombate = inimigoGeral.energia, inimigoGeral.manaCombate = inimigoGeral.mana
}
/*-----*/
