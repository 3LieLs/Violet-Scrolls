/*-VENDEDOR VARIÁVEIS-*/
var botaoAbrirLojaVendedor = window.document.querySelector('input#botaoAbrirLojaVendedor');
botaoAbrirLojaVendedor.addEventListener('click', botaoAbrirLojaVendedorClick);

var botaoFecharLojaVendedor = window.document.querySelector('input#botaoFecharLojaVendedor');
botaoFecharLojaVendedor.addEventListener('click', botaoFecharLojaVendedorClick);

var nomeItemVendedor1 = window.document.querySelector('h1#nomeItemVendedor1');
var informacaoItemVendedor1 = window.document.querySelector('p#informacaoItemVendedor1');
var custoItemVendedor3 = window.document.querySelector('p#custoItemVendedor1');
var comprarItemVendedor1 = window.document.querySelector('input#comprarItemVendedor1');
comprarItemVendedor1.addEventListener('click', comprarItemVendedor1Click);

var nomeItemVendedor2 = window.document.querySelector('h1#nomeItemVendedor2');
var informacaoItemVendedor2 = window.document.querySelector('p#informacaoItemVendedor2');
var custoItemVendedor3 = window.document.querySelector('p#custoItemVendedor2');
var comprarItemVendedor2 = window.document.querySelector('input#comprarItemVendedor2');
comprarItemVendedor2.addEventListener('click', comprarItemVendedor2Click);

var nomeItemVendedor3 = window.document.querySelector('h1#nomeItemVendedor3');
var informacaoItemVendedor3 = window.document.querySelector('p#informacaoItemVendedor3');
var custoItemVendedor3 = window.document.querySelector('p#custoItemVendedor3');
var comprarItemVendedor3 = window.document.querySelector('input#comprarItemVendedor3');
comprarItemVendedor3.addEventListener('click', comprarItemVendedor3Click);
/*-----*/


/*-VENDEDOR-*/
function botaoAbrirLojaVendedorClick()
{
    lojaVendedor.style.right = '1%';
    lojaVendedor.style.opacity = '1';
    lojaVendedor.style.zIndex = '9999';

    botaoAbrirLojaVendedor.style.opacity = '0';
    botaoAbrirLojaVendedor.style.zIndex = '-9999';
}

function botaoFecharLojaVendedorClick()
{
    lojaVendedor.style.right = '-5%';
    lojaVendedor.style.opacity = '0';
    lojaVendedor.style.zIndex = '-9999';

    botaoAbrirLojaVendedor.style.opacity = '1';
    botaoAbrirLojaVendedor.style.zIndex = '9999';
}
/*-----*/

/*-----*/
function comprarItemVendedor1Click()
{
    if (jogador.pecitas)
    {
        addItemVal 
        addItemNome
        funcaoEquip
        adicionarItem();
    
        jogador.pecitas
    }
    else
    {
        alert('Dinheiro insuficiente')
    }
}

function comprarItemVendedor2Click()
{
    if (jogador.pecitas)
    {
        addItemVal 
        addItemNome
        funcaoEquip
        adicionarItem();
    
        jogador.pecitas
    }
    else
    {
        alert('Dinheiro insuficiente')
    }
}

function comprarItemVendedor3Click()
{
    if (jogador.pecitas)
    {
        addItemVal 
        addItemNome
        funcaoEquip
        adicionarItem();
    
        jogador.pecitas
    }
    else
    {
        alert('Dinheiro insuficiente')
    }
}
/*-----*/

/*-----*/
attLojaVendedor();

function attLojaVendedor()
{
    nomeItemVendedor1.innerHTML
    informacaoItemVendedor1.innerHTML
    custoItemVendedor1.innerHTML

    nomeItemVendedor2.innerHTML
    informacaoItemVendedor2.innerHTML
    custoItemVendedor2.innerHTML

    nomeItemVendedor3.innerHTML
    informacaoItemVendedor3.innerHTML
    custoItemVendedor3.innerHTML
}
/*-----*/