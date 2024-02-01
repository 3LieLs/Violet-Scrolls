/*-FEITICEIRO VAIRÁVEIS-*/
var botaoAbrirLojaFeiticeiro = window.document.querySelector('input#botaoAbrirLojaFeiticeiro');
botaoAbrirLojaFeiticeiro.addEventListener('click', botaoAbrirLojaFeiticeiroClick);

var botaoFecharLojaFeiticeiro = window.document.querySelector('input#botaoFecharLojaFeiticeiro');
botaoFecharLojaFeiticeiro.addEventListener('click', botaoFecharLojaFeiticeiroClick);


var nomeItemFeiticeiro1 = window.document.querySelector('h1#nomeItemFeiticeiro1');
var informacaoItemFeiticeiro1 = window.document.querySelector('p#informacaoItemFeiticeiro1');
var custoItemFeiticeiro3 = window.document.querySelector('p#custoItemFeiticeiro1');
var comprarItemFeiticeiro1 = window.document.querySelector('input#comprarItemFeiticeiro1');
comprarItemFeiticeiro1.addEventListener('click', comprarItemFeiticeiro1Click);

var nomeItemFeiticeiro2 = window.document.querySelector('h1#nomeItemFeiticeiro2');
var informacaoItemFeiticeiro2 = window.document.querySelector('p#informacaoItemFeiticeiro2');
var custoItemFeiticeiro3 = window.document.querySelector('p#custoItemFeiticeiro2');
var comprarItemFeiticeiro2 = window.document.querySelector('input#comprarItemFeiticeiro2');
comprarItemFeiticeiro2.addEventListener('click', comprarItemFeiticeiro2Click);

var nomeItemFeiticeiro3 = window.document.querySelector('h1#nomeItemFeiticeiro3');
var informacaoItemFeiticeiro3 = window.document.querySelector('p#informacaoItemFeiticeiro3');
var custoItemFeiticeiro3 = window.document.querySelector('p#custoItemFeiticeiro3');
var comprarItemFeiticeiro3 = window.document.querySelector('input#comprarItemFeiticeiro3');
comprarItemFeiticeiro3.addEventListener('click', comprarItemFeiticeiro3Click);
/*-----*/

/*-ABRIR/FECHAR FEITICEIRO LOJA-*/
function botaoAbrirLojaFeiticeiroClick()
{
    lojaFeiticeiro.style.right = '1%';
    lojaFeiticeiro.style.opacity = '1';
    lojaFeiticeiro.style.zIndex = '9999';

    botaoAbrirLojaFeiticeiro.style.opacity = '0';
    botaoAbrirLojaFeiticeiro.style.zIndex = '-9999';
}

function botaoFecharLojaFeiticeiroClick()
{
    lojaFeiticeiro.style.right = '-5%';
    lojaFeiticeiro.style.opacity = '0';
    lojaFeiticeiro.style.zIndex = '-9999';

    botaoAbrirLojaFeiticeiro.style.opacity = '1';
    botaoAbrirLojaFeiticeiro.style.zIndex = '9999';
}
/*-----*/

/*-----*/
function comprarItemFeiticeiro1Click()
{
    if (cajadoDeFogo.obtido == false)
    {
        if (jogador.pecitas - cajadoDeFogo.preco >= 0)
        {
            cajadoDeFogo.obtido = true;

            addItemVal = cajadoDeFogo.val;
            addItemNome = cajadoDeFogo.nome;
            funcaoEquip = equipCajadoDeFogo;
            adicionarItem();
    
            jogador.pecitas -= cajadoDeFogo.preco;
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

function comprarItemFeiticeiro2Click()
{
    if (adaga.obtido == false)
    {
        if (jogador.pecitas - adaga.preco >= 0)
        {
            adaga.obtido = true;

            addItemVal = adaga.val;
            addItemNome = adaga.nome;
            funcaoEquip = equipAdaga;
            adicionarItem();
    
            jogador.pecitas -= adaga.preco;
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

function comprarItemFeiticeiro3Click()
{
    if (tunicaBasica.obtido == false)
    {
        if (jogador.pecitas - tunicaBasica.preco >= 0)
        {
            tunicaBasica.obtido = true;

            addItemVal = tunicaBasica.val;
            addItemNome = tunicaBasica.nome;
            funcaoEquip = equipTunicaBasica;
            adicionarItem();
    
            jogador.pecitas -= tunicaBasica.preco;
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
attLojaFeiticeiro();

function attLojaFeiticeiro()
{
    nomeItemFeiticeiro1.innerHTML = `${cajadoDeFogo.nome}`;
    informacaoItemFeiticeiro1.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemFeiticeiro1.innerHTML = `Preço: ${cajadoDeFogo.preco} Pecitas`;

    nomeItemFeiticeiro2.innerHTML = `${adaga.nome}`;
    informacaoItemFeiticeiro2.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemFeiticeiro2.innerHTML = `Preço: ${adaga.preco} Pecitas`;

    nomeItemFeiticeiro3.innerHTML = `${tunicaBasica.nome}`;
    informacaoItemFeiticeiro3.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemFeiticeiro3.innerHTML = `Preço: ${tunicaBasica.preco} Pecitas`;
}
/*-----*/