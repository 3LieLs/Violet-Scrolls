/*-COMBATE GERAL VARIÁVEIS-*/
var semEnergiaMana = window.document.querySelector('p#semEnergiaMana');

var primeiraEscolha = window.document.querySelector('input#movesetArmaEscolha');
primeiraEscolha.addEventListener('click', movesetArmaEscolhaClick);

var segundaEscolha = window.document.querySelector('input#movesetMagiaEscolha');
segundaEscolha.addEventListener('click', movesetMagiaEscolhaClick);

var terceiraEscolha = window.document.querySelector('input#movesetArmaduraEscolha');
terceiraEscolha.addEventListener('click', movesetArmaduraEscolhaClick);

var quartaEscolha = window.document.querySelector('input#movesetOutrosEscolha');
quartaEscolha.addEventListener('click', movesetOutrosEscolhaClick);
/*-----*/

function acaoIntervalo()
{
    vezUsuario = true;
}

function semEnergiaManaVisibilidade()
{
    semEnergiaManaDisplay.style.animation = 'semEnergiaManaMostrar 3s 0ms 1';

    setTimeout(function ()
     {
        semEnergiaManaDisplay.style.animation = 'semEnergiaManaEsconder 1s 1s 1';
      }, 2000)
}
/*-----*/

/*-----*/
/*-MOVESET ARMA-*/
function movesetArmaEscolhaClick()
{
    primeiraEscolha.value = 'Ataque fraco';
    primeiraEscolha.id = 'ataqueFraco';

    primeiraEscolha = window.document.querySelector('input#ataqueFraco');
    primeiraEscolha.addEventListener('click', ataqueFracoClick);

    segundaEscolha.value = 'Ataque forte';
    segundaEscolha.id = 'ataqueForte';

    segundaEscolha = window.document.querySelector('input#ataqueForte');
    segundaEscolha.addEventListener('click', ataqueForteClick);

    terceiraEscolha.value = 'Contra-ataque';
    terceiraEscolha.id = 'contraAtaque';

    terceiraEscolha = window.document.querySelector('input#contraAtaque');
    terceiraEscolha.addEventListener('click', contraAtaqueClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarArmaAcao';

    quartaEscolha = window.document.querySelector('input#voltarArmaAcao');
    quartaEscolha.addEventListener('click', voltarArmaAcaoClick);
}

function ataqueFracoClick()
{
    if (vezUsuario == false) {
        movesetArmaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoAtaqueFracoClick();
        voltarMovesetInicio();
    }
}

function ataqueForteClick()
{
    if (vezUsuario == false) {
        movesetArmaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoAtaqueForteClick();
        voltarMovesetInicio();
    }
}

function contraAtaqueClick()
{
    if (vezUsuario == false) {
        movesetArmaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoContraAtaqueClick();
        voltarMovesetInicio();
    }
}

function voltarArmaAcaoClick()
{
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET MAGIA-*/
function movesetMagiaEscolhaClick()
{
    primeiraEscolha.value = 'Magia Dano';
    primeiraEscolha.id = 'magiaDano';

    primeiraEscolha = window.document.querySelector('input#magiaDano');
    primeiraEscolha.addEventListener('click', magiaDanoClick);

    segundaEscolha.value = 'magia Recuperação';
    segundaEscolha.id = 'magiaRecuperar';

    segundaEscolha = window.document.querySelector('input#magiaRecuperar');
    segundaEscolha.addEventListener('click', magiaRecuperarClick);

    terceiraEscolha.value = 'Magia Buff';
    terceiraEscolha.id = 'magiaBuff';

    terceiraEscolha = window.document.querySelector('input#magiaBuff');
    terceiraEscolha.addEventListener('click', magiaBuffClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarMagiaAcao';

    quartaEscolha = window.document.querySelector('input#voltarMagiaAcao');
    quartaEscolha.addEventListener('click', voltarMagiaAcaoClick);
}

function magiaDanoClick()
{
    if (vezUsuario == false) {
        movesetMagiaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoMagiaDanoClick();
        voltarMovesetInicio();
    }
}

function magiaRecuperarClick()
{
    if (vezUsuario == false) {
        movesetMagiaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoMagiaDanoClick();
        voltarMovesetInicio();
    }
}

function magiaBuffClick()
{
    if (vezUsuario == false) {
        movesetMagiaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoMagiaBuffClick();
        voltarMovesetInicio();
    }
}

function voltarMagiaAcaoClick()
{
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET ARMADURA-*/
function movesetArmaduraEscolhaClick()
{
    primeiraEscolha.value = 'Bloquear';
    primeiraEscolha.id = 'bloquear';

    primeiraEscolha = window.document.querySelector('input#bloquear');
    primeiraEscolha.addEventListener('click', bloquearClick);

    segundaEscolha.value = 'Descanso';
    segundaEscolha.id = 'descanso';

    segundaEscolha = window.document.querySelector('input#descanso');
    segundaEscolha.addEventListener('click', descansoClick);

    terceiraEscolha.value = 'Foco';
    terceiraEscolha.id = 'foco';

    terceiraEscolha = window.document.querySelector('input#foco');
    terceiraEscolha.addEventListener('click', focoClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarArmaduraAcao';

    quartaEscolha = window.document.querySelector('input#voltarArmaduraAcao');
    quartaEscolha.addEventListener('click', voltarArmaduraAcaoClick);
}

function bloquearClick()
{
    if (vezUsuario == false) {
        movesetArmaduraEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoBloquearClick();
        voltarMovesetInicio();
    }
}

function descansoClick()
{
    if (vezUsuario == false) {
        movesetArmaduraEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoDescansoClick();
        voltarMovesetInicio();
    }
}

function focoClick()
{
    if (vezUsuario == false) {
        movesetArmaduraEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }

    if (vezUsuario == true) {
        botaoFocoClick();
        voltarMovesetInicio();
    }
}

function voltarArmaduraAcaoClick()
{
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET OUTROS-*/
function movesetOutrosEscolhaClick()
{

}
/*-----*/

/*-MOVESET RESET-*/
function voltarMovesetInicio()
{
    primeiraEscolha.removeEventListener('click', ataqueFracoClick);
    primeiraEscolha.removeEventListener('click', magiaDanoClick);
    primeiraEscolha.removeEventListener('click', bloquearClick);


    segundaEscolha.removeEventListener('click', ataqueForteClick);
    segundaEscolha.removeEventListener('click', magiaRecuperarClick);
    segundaEscolha.removeEventListener('click', descansoClick);


    terceiraEscolha.removeEventListener('click', contraAtaqueClick);
    terceiraEscolha.removeEventListener('click', magiaBuffClick);
    terceiraEscolha.removeEventListener('click', focoClick);


    quartaEscolha.removeEventListener('click', voltarArmaAcaoClick);
    quartaEscolha.removeEventListener('click', voltarMagiaAcaoClick);
    quartaEscolha.removeEventListener('click', voltarArmaduraAcaoClick);


    primeiraEscolha.value = 'Atacar';
    primeiraEscolha.id = 'movesetArmaEscolha';

    primeiraEscolha = window.document.querySelector('input#movesetArmaEscolha');
    primeiraEscolha.addEventListener('click', movesetArmaEscolhaClick);

    segundaEscolha.value = 'Magia';
    segundaEscolha.id = 'movesetMagiaEscolha';

    segundaEscolha = window.document.querySelector('input#movesetMagiaEscolha');
    segundaEscolha.addEventListener('click', movesetMagiaEscolhaClick);

    terceiraEscolha.value = 'Defesa/Recuperar';
    terceiraEscolha.id = 'movesetArmaduraEscolha';

    terceiraEscolha = window.document.querySelector('input#movesetArmaduraEscolha');
    terceiraEscolha.addEventListener('click', movesetArmaduraEscolhaClick);

    quartaEscolha.value = 'Outros';
    quartaEscolha.id = 'movesetOutrosEscolha';

    quartaEscolha = window.document.querySelector('input#movesetOutrosEscolha');
    quartaEscolha.addEventListener('click', movesetOutrosEscolhaClick);
}
/*-----*/

/*-CRÍTICO-*/
function critico()
{
    let chance = Math.floor(Math.random() * 100) + 0;

    if (chance <= 10)
    {
        armaJogador.danoCombate = armaJogador.danoCombate * 2;

        inimigo.danoCombate = inimigo.danoCombate * 2;
    }
}
/*-----*/

/*-CALCULO DEFESA-*/
function calculoDefesa()
{
    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / (100 + parseInt(armaduraGeral.defesaCombate))) * 150;
    armaduraGeral.defesaCombate = armaduraGeral.defesaCombate.toPrecision(3);

    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / 100) * inimigoGeral.danoCombate;
    inimigoGeral.danoCombate = inimigoGeral.danoCombate - armaduraGeral.defesaCombate;

    inimigoGeral.danoCombate = Math.trunc(inimigoGeral.danoCombate);
}
/*-----*/

/*-DEFINIR ESTATISTICA-*/
function definirEstatisticaGeral()
{
    legendaView.innerHTML = ``;
    voltarMovesetInicio()

    mainJogadorDerrotado.style.display = 'none';
    mainInimigoDerrotado.style.display = 'none';

    jogador.vidaCombate = jogador.vida, jogador.energiaCombate = jogador.energia, jogador.manaCombate = jogador.mana;
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100;

    armaGeral.danoCombate = armaGeral.dano;

    inimigoGeral.porcentagem = 0, inimigoGeral.vidaPorcentagem = 100, inimigoGeral.energiaPorcentagem = 100, inimigoGeral.manaPorcentagem = 100;

    inimigoGeral.vidaCombate = inimigoGeral.vida, inimigoGeral.energiaCombate = inimigoGeral.energia, inimigoGeral.manaCombate = inimigoGeral.mana;
}
/*-----*/