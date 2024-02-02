/*-TAVERNA VARIÁVEIS-*/
var missao = 
{
    ativo: false, recompensa: 0, inimigoDerrotar: '', inimigosDerrotados: 0, inimigosDerrotadosMax: 0
}

var botaoAbrirMissoes = window.document.querySelector('input#botaoAbrirMissoes');
botaoAbrirMissoes.addEventListener('click', botaoAbrirMissoesClick);

var botaoFecharMissoes = window.document.querySelector('input#botaoFecharMissoes');
botaoFecharMissoes.addEventListener('click', botaoFecharMissoesClick);


var nomeMissao1 = window.document.querySelector('h1#nomeMissao1');
var informacaoMissao1 = window.document.querySelector('p#informacaoMissao1');
var recompensaMissao1 = window.document.querySelector('p#recompensaMissao1');

var nomeMissao2 = window.document.querySelector('h1#nomeMissao2');
var informacaoMissao2 = window.document.querySelector('p#informacaoMissao2');
var recompensaMissao2 = window.document.querySelector('p#recompensaMissao2');

var nomeMissao3 = window.document.querySelector('h1#nomeMissao3');
var informacaoMissao3 = window.document.querySelector('p#informacaoMissao3');
var recompensaMissao3 = window.document.querySelector('p#recompensaMissao3');


var aceitarMissao1 = window.document.querySelector('input#aceitarMissao1');
aceitarMissao1.addEventListener('click', aceitarMissao1Click);

var aceitarMissao2 = window.document.querySelector('input#aceitarMissao2');
aceitarMissao2.addEventListener('click', aceitarMissao2Click);

var aceitarMissao3 = window.document.querySelector('input#aceitarMissao3');
aceitarMissao3.addEventListener('click', aceitarMissao3Click);
/*-----*/

/*-ABRIR/FECHAR MISSÕES-*/
function botaoAbrirMissoesClick()
{
    missoesTaverna.style.right = '1%';
    missoesTaverna.style.opacity = '1';
    missoesTaverna.style.zIndex = '9999';

    botaoAbrirMissoes.style.opacity = '0';
    botaoAbrirMissoes.style.zIndex = '-9999';
}

function botaoFecharMissoesClick()
{
    missoesTaverna.style.right = '-5%';
    missoesTaverna.style.opacity = '0';
    missoesTaverna.style.zIndex = '-9999';

    botaoAbrirMissoes.style.opacity = '1';
    botaoAbrirMissoes.style.zIndex = '9999';
}
/*-----*/

/*-MISSÃO ESCOLHA-*/
function aceitarMissao1Click()
{
    missao.ativo = true
    missao.recompensa = 3;
    missao.inimigoDerrotar = 'Goblin';
    missao.inimigosDerrotados = 0;
    missao.inimigosDerrotadosMax = 5;
}

function aceitarMissao2Click()
{
    missao.ativo = true
    missao.recompensa = 10;
    missao.inimigoDerrotar = 'Golem';
    missao.inimigosDerrotados = 0;
    missao.inimigosDerrotadosMax = 3;
}

function aceitarMissao3Click()
{
    missao.ativo = true
    missao.recompensa = 20;
    missao.inimigoDerrotar = 'Dragão';
    missao.inimigosDerrotados = 0;
    missao.inimigosDerrotadosMax = 1;
}
/*-----*/

/*-MISSÕES INFORMAÇÃO-*/
attMissoes();
setTimeout(attMissoes, 300000);

function attMissoes()
{
    nomeMissao1.innerHTML = `Derrotar Goblins`;
    informacaoMissao1.innerHTML = `Preciso que alguém derrote 5 Goblins`;
    recompensaMissao1.innerHTML = `Recompensa: 3 Pecitas`;

    nomeMissao2.innerHTML = `Derrotar Golens`;
    informacaoMissao2.innerHTML = `Preciso que alguém derrote 3 Golens`;
    recompensaMissao2.innerHTML = `Recompensa: 10 Pecitas`;

    nomeMissao3.innerHTML = `Derrotar Dragão`;
    informacaoMissao3.innerHTML = `Preciso que alguém derrote 1 Dragão`;
    recompensaMissao3.innerHTML = `Recompensa: 20 Pecitas`;
}
/*-----*/