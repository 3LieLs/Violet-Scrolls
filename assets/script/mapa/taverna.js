/*-TAVERNA VARIÁVEIS-*/
var missao =
{
    ativo: false, recompensa: 0, inimigoDerrotar: '', inimigosDerrotados: 0, inimigosDerrotadosMax: 0
}

var botaoAbrirMissoes = window.document.querySelector('input#botaoAbrirMissoes');
botaoAbrirMissoes.addEventListener('click', botaoAbrirMissoesClick);

var botaoFecharMissoes = window.document.querySelector('input#botaoFecharMissoes');
botaoFecharMissoes.addEventListener('click', botaoFecharMissoesClick);

var aceitarMissao1 = window.document.querySelector('input#aceitarMissao1');
aceitarMissao1.addEventListener('click', aceitarMissao1Click);

var aceitarMissao2 = window.document.querySelector('input#aceitarMissao2');
aceitarMissao2.addEventListener('click', aceitarMissao2Click);

var aceitarMissao3 = window.document.querySelector('input#aceitarMissao3');
aceitarMissao3.addEventListener('click', aceitarMissao3Click);
/*-----*/

/*-ABRIR/FECHAR MISSÕES-*/
function botaoAbrirMissoesClick() {
    missoesTaverna.style.right = '1%';
    missoesTaverna.style.opacity = '1';
    missoesTaverna.style.zIndex = '9999';

    botaoAbrirMissoes.style.opacity = '0';
    botaoAbrirMissoes.style.zIndex = '-9999';
}

function botaoFecharMissoesClick() {
    missoesTaverna.style.right = '-5%';
    missoesTaverna.style.opacity = '0';
    missoesTaverna.style.zIndex = '-9999';

    botaoAbrirMissoes.style.opacity = '1';
    botaoAbrirMissoes.style.zIndex = '9999';
}
/*-----*/

/*-MISSÃO ESCOLHA-*/
function aceitarMissao1Click() {
    missao.ativo = true
    missao.recompensa = inimigoDerrotados[0] * inimigoRecompensa[0];
    missao.inimigoDerrotar = inimigoDerrotar[0];
    missao.inimigosDerrotados = 0;
    missao.inimigosDerrotadosMax = inimigoDerrotados[0];
}

function aceitarMissao2Click() {
    missao.ativo = true
    missao.recompensa = inimigoDerrotados[1] * inimigoRecompensa[1];
    missao.inimigoDerrotar = inimigoDerrotar[1];
    missao.inimigosDerrotados = 0;
    missao.inimigosDerrotadosMax = inimigoDerrotados[1];
}

function aceitarMissao3Click() {
    missao.ativo = true
    missao.recompensa = inimigoDerrotados[2] * inimigoRecompensa[2];
    missao.inimigoDerrotar = inimigoDerrotar[2];
    missao.inimigosDerrotados = 0;
    missao.inimigosDerrotadosMax = inimigoDerrotados[2];
}
/*-----*/

/*-MISSÕES INFORMAÇÃO-*/
setTimeout(attMissoes, 1000);
setInterval(attMissoes, 15000);

var aleat = 0, inimigoDerrotar = [], inimigoDerrotados = [], inimigoDerrotadosMin = [], inimigoDerrotadosMax = [], inimigoRecompensa = []

function attMissoes() {
    aleatoriarMissao()
    nomeMissao1.innerHTML = `Derrotar ${inimigoDerrotar[0]}`;
    informacaoMissao1.innerHTML = `Preciso que alguém derrote ${inimigoDerrotados[0]} ${inimigoDerrotar[0]}`;
    recompensaMissao1.innerHTML = `Recompensa: ${inimigoDerrotados[0] * inimigoRecompensa[0]} Pecitas`;

    aleatoriarMissao()
    nomeMissao2.innerHTML = `Derrotar ${inimigoDerrotar[1]}`;
    informacaoMissao2.innerHTML = `Preciso que alguém derrote ${inimigoDerrotados[1]} ${inimigoDerrotar[1]}`;
    recompensaMissao2.innerHTML = `Recompensa: ${inimigoDerrotados[1] * inimigoRecompensa[1]} Pecitas`;

    aleatoriarMissao()
    nomeMissao3.innerHTML = `Derrotar ${inimigoDerrotar[2]}`;
    informacaoMissao3.innerHTML = `Preciso que alguém derrote ${inimigoDerrotados[2]} ${inimigoDerrotar[2]}`;
    recompensaMissao3.innerHTML = `Recompensa: ${inimigoDerrotados[2] * inimigoRecompensa[2]} Pecitas`;
}

function aleatoriarMissao() {
    let x = Math.floor(Math.random() * 6) + 1

    if (x == 1) {
        inimigoDerrotar[aleat] = goblin.nome
        inimigoDerrotadosMax[aleat] = goblin.missaoMax
        inimigoRecompensa[aleat] = goblin.recompensa
    }
    if (x == 2) {
        inimigoDerrotar[aleat] = besouroGigante.nome
        inimigoDerrotadosMax[aleat] = besouroGigante.missaoMax
        inimigoRecompensa[aleat] = besouroGigante.recompensa
    }
    if (x == 3) {
        inimigoDerrotar[aleat] = golemDePedra.nome
        inimigoDerrotadosMax[aleat] = golemDePedra.missaoMax
        inimigoRecompensa[aleat] = golemDePedra.recompensa
    }
    if (x == 4) {
        inimigoDerrotar[aleat] = golemDeGelo.nome
        inimigoDerrotadosMax[aleat] = golemDeGelo.missaoMax
        inimigoRecompensa[aleat] = golemDeGelo.recompensa
    }
    if (x == 5) {
        inimigoDerrotar[aleat] = golemDeFogo.nome
        inimigoDerrotadosMax[aleat] = golemDeFogo.missaoMax
        inimigoRecompensa[aleat] = golemDeFogo.recompensa
    }
    if (x == 6) {
        inimigoDerrotar[aleat] = dragao.nome
        inimigoDerrotadosMax[aleat] = dragao.missaoMax
        inimigoRecompensa[aleat] = dragao.recompensa
    }

    inimigoDerrotadosMin[aleat] = inimigoDerrotadosMax[aleat] / 2
    inimigoDerrotadosMin[aleat] = Math.round(inimigoDerrotadosMin[aleat])

    inimigoDerrotados[aleat] = Math.floor(Math.random() * inimigoDerrotadosMax[aleat]) + inimigoDerrotadosMin[aleat]

    aleat++

    if (aleat > 2) {
        aleat = 0
    }
}
/*-----*/