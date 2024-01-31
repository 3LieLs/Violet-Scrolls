/*-TAVERNA-*/
var botaoAbrirMissoes = window.document.querySelector('input#botaoAbrirMissoes');
botaoAbrirMissoes.addEventListener('click', botaoAbrirMissoesClick);

function botaoAbrirMissoesClick() {
    missoesTaverna.style.right = '1%';
    missoesTaverna.style.opacity = '1';
    missoesTaverna.style.zIndex = '9999';

    botaoAbrirMissoes.style.opacity = '0';
    botaoAbrirMissoes.style.zIndex = '-9999';
}

var botaoFecharMissoes = window.document.querySelector('input#botaoFecharMissoes');
botaoFecharMissoes.addEventListener('click', botaoFecharMissoesClick);

function botaoFecharMissoesClick() {
    missoesTaverna.style.right = '-5%';
    missoesTaverna.style.opacity = '0';
    missoesTaverna.style.zIndex = '-9999';

    botaoAbrirMissoes.style.opacity = '1';
    botaoAbrirMissoes.style.zIndex = '9999';
}
/*-----*/

/*-MISSÕES-*/
var menuMissao = window.document.querySelector('div#menuMissao')

var nomeMissao1 = window.document.querySelector('h1#nomeMissao1')
var informacaoMissao1 = window.document.querySelector('p#informacaoMissao1')
var recompensaMissao1 = window.document.querySelector('p#recompensaMissao1')

var nomeMissao2 = window.document.querySelector('h1#nomeMissao2')
var informacaoMissao2 = window.document.querySelector('p#informacaoMissao2')
var recompensaMissao2 = window.document.querySelector('p#recompensaMissao2')

var nomeMissao3 = window.document.querySelector('h1#nomeMissao3')
var informacaoMissao3 = window.document.querySelector('p#informacaoMissao3')
var recompensaMissao3 = window.document.querySelector('p#recompensaMissao3')

var aceitarMissao1 = window.document.querySelector('input#aceitarMissao1')
aceitarMissao1.addEventListener('click', aceitarMissao1Click)

var aceitarMissao2 = window.document.querySelector('input#aceitarMissao2')


var aceitarMissao3 = window.document.querySelector('input#aceitarMissao3')


attMissoes()

function attMissoes() {
    nomeMissao1.innerHTML = `Derrotar Goblins`
    informacaoMissao1.innerHTML = `Preciso que alguém derrote 5 Goblins`
    recompensaMissao1.innerHTML = `Recompensa: 3 Pecitas`

    nomeMissao2.innerHTML = `Derrotar Golens`
    informacaoMissao2.innerHTML = `Preciso que alguém derrote 3 Golens`
    recompensaMissao2.innerHTML = `Recompensa: 10 Pecitas`

    nomeMissao3.innerHTML = `Derrotar Dragão`
    informacaoMissao3.innerHTML = `Preciso que alguém derrote 1 Dragão`
    recompensaMissao3.innerHTML = `Recompensa: 20 Pecitas`
}
var missao = {
    recompensa: 0, inimigoDerrotar: '', inimigosDerrotados: 0, inimigosDerrotadosMax: 0
}


function aceitarMissao1Click() {
    missao.recompensa = 3;
    missao.inimigoDerrotar = 'Goblin'
    missao.inimigosDerrotados = 0
    missao.inimigosDerrotadosMax = 5
    menuMissao.innerHTML = `${nomeMissao1.innerHTML}:<br> ${missao.inimigosDerrotados}/${missao.inimigosDerrotadosMax}`;
}
/*-----*/