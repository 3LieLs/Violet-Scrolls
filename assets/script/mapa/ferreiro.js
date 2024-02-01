/*-FERREIRO VARIÁVEIS-*/
var botaoAbrirLojaFerreiro = window.document.querySelector('input#botaoAbrirLojaFerreiro');
botaoAbrirLojaFerreiro.addEventListener('click', botaoAbrirLojaFerreiroClick);

var botaoFecharLojaFerreiro = window.document.querySelector('input#botaoFecharLojaFerreiro');
botaoFecharLojaFerreiro.addEventListener('click', botaoFecharLojaFerreiroClick);


var nomeItemFerreiro1 = window.document.querySelector('h1#nomeItemFerreiro1');
var informacaoItemFerreiro1 = window.document.querySelector('p#informacaoItemFerreiro1');
var custoItemFerreiro3 = window.document.querySelector('p#custoItemFerreiro1');
var comprarItemFerreiro1 = window.document.querySelector('input#comprarItemFerreiro1');
comprarItemFerreiro1.addEventListener('click', comprarItemFerreiro1Click);

var nomeItemFerreiro2 = window.document.querySelector('h1#nomeItemFerreiro2');
var informacaoItemFerreiro2 = window.document.querySelector('p#informacaoItemFerreiro2');
var custoItemFerreiro3 = window.document.querySelector('p#custoItemFerreiro2');
var comprarItemFerreiro2 = window.document.querySelector('input#comprarItemFerreiro2');
comprarItemFerreiro2.addEventListener('click', comprarItemFerreiro2Click);

var nomeItemFerreiro3 = window.document.querySelector('h1#nomeItemFerreiro3');
var informacaoItemFerreiro3 = window.document.querySelector('p#informacaoItemFerreiro3');
var custoItemFerreiro3 = window.document.querySelector('p#custoItemFerreiro3');
var comprarItemFerreiro3 = window.document.querySelector('input#comprarItemFerreiro3');
comprarItemFerreiro3.addEventListener('click', comprarItemFerreiro3Click);
/*-----*/

/*-ABRIR/FECHAR FERREIRO LOJA-*/
function botaoAbrirLojaFerreiroClick()
{
    lojaFerreiro.style.right = '1%';
    lojaFerreiro.style.opacity = '1';
    lojaFerreiro.style.zIndex = '9999';

    botaoAbrirLojaFerreiro.style.opacity = '0';
    botaoAbrirLojaFerreiro.style.zIndex = '-9999';
}

function botaoFecharLojaFerreiroClick()
{
    lojaFerreiro.style.right = '-5%';
    lojaFerreiro.style.opacity = '0';
    lojaFerreiro.style.zIndex = '-9999';

    botaoAbrirLojaFerreiro.style.opacity = '1';
    botaoAbrirLojaFerreiro.style.zIndex = '9999';
}
/*-----*/


/*-----*/
function comprarItemFerreiro1Click()
{
    jogador.pecitas += 100
    if (chicoteDeAco.obtido == false)
    {
        if (jogador.pecitas - chicoteDeAco.preco >= 0)
        {
            chicoteDeAco.obtido = true;

            addItemVal = chicoteDeAco.val;
            addItemNome = chicoteDeAco.nome;
            funcaoEquip = equipChicoteDeAco;
            adicionarItem();
    
            jogador.pecitas -= chicoteDeAco.preco;
        }
        else
        {
            alert('Dinheiro insuficiente');
        }
    }
    else
    {
        alert('Você já possui este item');
    }
}

function comprarItemFerreiro2Click()
{
    if (arcoSimples.obtido == false)
    {
        if (jogador.pecitas - arcoSimples.preco >= 0)
        {
            arcoSimples.obtido = true;

            addItemVal = arcoSimples.val;
            addItemNome = arcoSimples.nome;
            funcaoEquip = equipArcoSimples;
            adicionarItem();
    
            jogador.pecitas -= arcoSimples.preco;
        }
        else
        {
            alert('Dinheiro insuficiente');
        }
    }
    else
    {
        alert('Você já possui este item');
    }
}

function comprarItemFerreiro3Click()
{
    if (armaduraDeCouro.obtido == false)
    {
        if (jogador.pecitas - armaduraDeCouro.preco >= 0)
        {
            armaduraDeCouro.obtido = true;

            addItemVal = armaduraDeCouro.val;
            addItemNome = armaduraDeCouro.nome;
            funcaoEquip = equipArmaduraDeCouro;
            adicionarItem();
    
            jogador.pecitas -= armaduraDeCouro.preco;
        }
        else
        {
            alert('Dinheiro insuficiente');
        }
    }
    else
    {
        alert('Você já possui este item');
    }
}
/*-----*/


/*-----*/
attLojaFerreiro();

function attLojaFerreiro()
{
    nomeItemFerreiro1.innerHTML = `${chicoteDeAco.nome}`;
    informacaoItemFerreiro1.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemFerreiro1.innerHTML = `Preço: ${chicoteDeAco.preco} Pecitas`;

    nomeItemFerreiro2.innerHTML = `${arcoSimples.nome}`;
    informacaoItemFerreiro2.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemFerreiro2.innerHTML = `Preço: ${arcoSimples.preco} Pecitas`;

    nomeItemFerreiro3.innerHTML = `${armaduraDeCouro.nome}`;
    informacaoItemFerreiro3.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemFerreiro3.innerHTML = `Preço: ${armaduraDeCouro.preco} Pecitas`;
}
/*-----*/