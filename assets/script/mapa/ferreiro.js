/*-FERREIRO VARIÁVEIS-*/
var ferreiroPecitas

var botaoAbrirFecharLojaFerreiro = window.document.querySelector('input#botaoAbrirFecharLojaFerreiro');
botaoAbrirFecharLojaFerreiro.addEventListener('click', botaoAbrirFecharLojaFerreiroClick);

var LojaFerreiroAbertoFechado = false;

var lojaComprarFerreiroMensagem = window.document.querySelector('p#lojaComprarFerreiroMensagem'); 

var nomeItemComprarFerreiro1 = window.document.querySelector('h1#nomeItemComprarFerreiro1');
var informacaoComprarItemFerreiro1 = window.document.querySelector('p#informacaoItemComprarFerreiro1');
var custoItemComprarFerreiro1 = window.document.querySelector('p#custoItemComprarFerreiro1');
var comprarItemFerreiro1 = window.document.querySelector('input#comprarItemFerreiro1');
comprarItemFerreiro1.addEventListener('click', comprarItemFerreiro1Click);

var nomeItemComprarFerreiro2 = window.document.querySelector('h1#nomeItemComprarFerreiro2');
var informacaoComprarItemFerreiro2 = window.document.querySelector('p#informacaoItemComprarFerreiro2');
var custoItemComprarFerreiro2 = window.document.querySelector('p#custoItemComprarFerreiro2');
var comprarItemFerreiro2 = window.document.querySelector('input#comprarItemFerreiro2');
comprarItemFerreiro2.addEventListener('click', comprarItemFerreiro2Click);

var nomeItemComprarFerreiro3 = window.document.querySelector('h1#nomeItemComprarFerreiro3');
var informacaoComprarItemFerreiro3 = window.document.querySelector('p#informacaoItemComprarFerreiro3');
var custoItemComprarFerreiro3 = window.document.querySelector('p#custoItemComprarFerreiro3');
var comprarItemFerreiro3 = window.document.querySelector('input#comprarItemFerreiro3');
comprarItemFerreiro3.addEventListener('click', comprarItemFerreiro3Click);

var nomeItemComprarFerreiro4 = window.document.querySelector('h1#nomeItemComprarFerreiro4');
var informacaoComprarItemFerreiro4 = window.document.querySelector('p#informacaoItemComprarFerreiro4');
var custoItemComprarFerreiro4 = window.document.querySelector('p#custoItemComprarFerreiro4');
var comprarItemFerreiro4 = window.document.querySelector('input#comprarItemFerreiro4');
comprarItemFerreiro4.addEventListener('click', comprarItemFerreiro4Click);

var nomeItemComprarFerreiro5 = window.document.querySelector('h1#nomeItemComprarFerreiro5');
var informacaoComprarItemFerreiro5 = window.document.querySelector('p#informacaoItemComprarFerreiro5');
var custoItemComprarFerreiro5 = window.document.querySelector('p#custoItemComprarFerreiro5');
var comprarItemFerreiro5 = window.document.querySelector('input#comprarItemFerreiro5');
comprarItemFerreiro5.addEventListener('click', comprarItemFerreiro5Click);

var nomeItemComprarFerreiro6 = window.document.querySelector('h1#nomeItemComprarFerreiro6');
var informacaoComprarItemFerreiro6 = window.document.querySelector('p#informacaoItemComprarFerreiro6');
var custoItemComprarFerreiro6 = window.document.querySelector('p#custoItemComprarFerreiro6');
var comprarItemFerreiro6 = window.document.querySelector('input#comprarItemFerreiro6');
comprarItemFerreiro6.addEventListener('click', comprarItemFerreiro6Click);



var nomeItemVenderFerreiro1 = window.document.querySelector('h1#nomeItemVenderFerreiro1');
var informacaoVenderItemFerreiro1 = window.document.querySelector('p#informacaoItemVenderFerreiro1');
var custoItemVenderFerreiro1 = window.document.querySelector('p#custoItemVenderFerreiro1');
var venderItemFerreiro1 = window.document.querySelector('input#venderItemFerreiro1');
venderItemFerreiro1.addEventListener('click', venderItemFerreiro1Click);

var nomeItemVenderFerreiro2 = window.document.querySelector('h1#nomeItemVenderFerreiro2');
var informacaoVenderItemFerreiro2 = window.document.querySelector('p#informacaoItemVenderFerreiro2');
var custoItemVenderFerreiro2 = window.document.querySelector('p#custoItemVenderFerreiro2');
var venderItemFerreiro2 = window.document.querySelector('input#venderItemFerreiro2');
venderItemFerreiro2.addEventListener('click', venderItemFerreiro2Click);

var nomeItemVenderFerreiro3 = window.document.querySelector('h1#nomeItemVenderFerreiro3');
var informacaoVenderItemFerreiro3 = window.document.querySelector('p#informacaoItemVenderFerreiro3');
var custoItemVenderFerreiro3 = window.document.querySelector('p#custoItemVenderFerreiro3');
var venderItemFerreiro3 = window.document.querySelector('input#venderItemFerreiro3');
venderItemFerreiro3.addEventListener('click', venderItemFerreiro3Click);

var nomeItemVenderFerreiro4 = window.document.querySelector('h1#nomeItemVenderFerreiro4');
var informacaoVenderItemFerreiro4 = window.document.querySelector('p#informacaoItemVenderFerreiro4');
var custoItemVenderFerreiro4 = window.document.querySelector('p#custoItemVenderFerreiro4');
var venderItemFerreiro4 = window.document.querySelector('input#venderItemFerreiro4');
venderItemFerreiro4.addEventListener('click', venderItemFerreiro4Click);

var nomeItemVenderFerreiro5 = window.document.querySelector('h1#nomeItemVenderFerreiro5');
var informacaoVenderItemFerreiro5 = window.document.querySelector('p#informacaoItemVenderFerreiro5');
var custoItemVenderFerreiro5 = window.document.querySelector('p#custoItemVenderFerreiro5');
var venderItemFerreiro5 = window.document.querySelector('input#venderItemFerreiro5');
venderItemFerreiro5.addEventListener('click', venderItemFerreiro5Click);

var nomeItemVenderFerreiro6 = window.document.querySelector('h1#nomeItemVenderFerreiro6');
var informacaoVenderItemFerreiro6 = window.document.querySelector('p#informacaoItemVenderFerreiro6');
var custoItemVenderFerreiro6 = window.document.querySelector('p#custoItemVenderFerreiro6');
var venderItemFerreiro6 = window.document.querySelector('input#venderItemFerreiro6');
venderItemFerreiro6.addEventListener('click', venderItemFerreiro6Click);
/*-----*/

/*-ABRIR/FECHAR FERREIRO LOJA-*/
function botaoAbrirFecharLojaFerreiroClick()
{
    if (LojaFerreiroAbertoFechado == false)
    {
        LojaFerreiroAbertoFechado = true

        lojaComprarFerreiro.style.left = '15%';
        lojaComprarFerreiro.style.opacity = '1';

        lojaVenderFerreiro.style.right = '15%';
        lojaVenderFerreiro.style.opacity = '1';

        botaoAbrirFecharLojaFerreiro.value = 'Fechar loja';
    }
    else
    {
        LojaFerreiroAbertoFechado = false

        lojaComprarFerreiro.style.left = '-6%';
        lojaComprarFerreiro.style.opacity = '0';

        lojaVenderFerreiro.style.right = '-6%';
        lojaVenderFerreiro.style.opacity = '0';

        botaoAbrirFecharLojaFerreiro.value = 'Abrir loja';
    }
    
}
/*-----*/



/*-----*/
attLojaComprarFerreiro();

function attLojaComprarFerreiro()
{
    lojaComprarFerreiroMensagem.innerHTML = 'Pode comprar o que quiser, desde que tenha pecitas, claro'

    nomeItemComprarFerreiro1.innerHTML = `${espadaDeAco.nome}`;
    informacaoItemComprarFerreiro1.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemComprarFerreiro1.innerHTML = `Preço: ${espadaDeAco.preco} Pecitas`;

    nomeItemComprarFerreiro2.innerHTML = `${arcoLongo.nome}`;
    informacaoItemComprarFerreiro2.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemComprarFerreiro2.innerHTML = `Preço: ${arcoLongo.preco} Pecitas`;

    nomeItemComprarFerreiro3.innerHTML = `${armaduraDeEscamas.nome}`;
    informacaoItemComprarFerreiro3.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemComprarFerreiro3.innerHTML = `Preço: ${armaduraDeEscamas.preco} Pecitas`;

    nomeItemComprarFerreiro4.innerHTML = `${armaduraDeEscamas.nome}`;
    informacaoItemComprarFerreiro4.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemComprarFerreiro4.innerHTML = `Preço: ${armaduraDeEscamas.preco} Pecitas`;

    nomeItemComprarFerreiro5.innerHTML = `${armaduraDeEscamas.nome}`;
    informacaoItemComprarFerreiro5.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemComprarFerreiro5.innerHTML = `Preço: ${armaduraDeEscamas.preco} Pecitas`;

    nomeItemComprarFerreiro6.innerHTML = `${armaduraDeEscamas.nome}`;
    informacaoItemComprarFerreiro6.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemComprarFerreiro6.innerHTML = `Preço: ${armaduraDeEscamas.preco} Pecitas`;
}
/*-----*/

/*-----*/
function comprarItemFerreiro1Click()
{
    if (espadaDeAco.obtido == false)
    {
        if (jogador.pecitas - espadaDeAco.preco >= 0)
        {
            adicionarEspadaDeAco()
            adicionarItem();
    
            jogador.pecitas -= espadaDeAco.preco;
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
    if (arcoLongo.obtido == false)
    {
        if (jogador.pecitas - arcoLongo.preco >= 0)
        {
            adicionarArcoLongo()
            adicionarItem();
    
            jogador.pecitas -= arcoLongo.preco;
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
    if (armaduraDeEscamas.obtido == false)
    {
        if (jogador.pecitas - armaduraDeEscamas.preco >= 0)
        {
            adicionarArmaduraDeEscamas()
            adicionarItem();
    
            jogador.pecitas -= armaduraDeEscamas.preco;
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

function comprarItemFerreiro4Click()
{
    if (espadaDeAco.obtido == false)
    {
        if (jogador.pecitas - espadaDeAco.preco >= 0)
        {
            adicionarEspadaDeAco()
            adicionarItem();
    
            jogador.pecitas -= espadaDeAco.preco;
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

function comprarItemFerreiro5Click()
{
    if (espadaDeAco.obtido == false)
    {
        if (jogador.pecitas - espadaDeAco.preco >= 0)
        {
            adicionarEspadaDeAco()
            adicionarItem();
    
            jogador.pecitas -= espadaDeAco.preco;
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

function comprarItemFerreiro6Click()
{
    if (espadaDeAco.obtido == false)
    {
        if (jogador.pecitas - espadaDeAco.preco >= 0)
        {
            adicionarEspadaDeAco()
            adicionarItem();
    
            jogador.pecitas -= espadaDeAco.preco;
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
attLojaVenderFerreiro();

function attLojaVenderFerreiro()
{
    ferreiroPecitas = 20

    nomeItemVenderFerreiro1.innerHTML = `${espadaDeAco.nome}`;
    informacaoItemVenderFerreiro1.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro1.innerHTML = `Preço: ${espadaDeAco.preco} Pecitas`;

    nomeItemVenderFerreiro2.innerHTML = `${arcoLongo.nome}`;
    informacaoItemVenderFerreiro2.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro2.innerHTML = `Preço: ${arcoLongo.preco} Pecitas`;

    nomeItemVenderFerreiro3.innerHTML = `${armaduraDeAco.nome}`;
    informacaoItemVenderFerreiro3.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro3.innerHTML = `Preço: ${armaduraDeAco.preco} Pecitas`;

    nomeItemVenderFerreiro4.innerHTML = `${armaduraDeEscamas.nome}`;
    informacaoItemVenderFerreiro4.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro4.innerHTML = `Preço: ${armaduraDeEscamas.preco} Pecitas`;

    nomeItemVenderFerreiro5.innerHTML = `${chicoteDeAco.nome}`;
    informacaoItemVenderFerreiro5.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro5.innerHTML = `Preço: ${chicoteDeAco.preco} Pecitas`;

    nomeItemVenderFerreiro6.innerHTML = `${adaga.nome}`;
    informacaoItemVenderFerreiro6.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro6.innerHTML = `Preço: ${adaga.preco} Pecitas`;
}
/*-----*/

/*-----*/
function venderItemFerreiro1Click()
{
    if (espadaDeAco.obtido == true)
    {
        if (ferreiroPecitas - espadaDeAco.preco >= 0)
        {
            removerEspadaDeAco();
            removerItem();
    
            jogador.pecitas += espadaDeAco.preco;
            ferreiroPecitas -= espadaDeAco.preco;
        }
        else
        {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else
    {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro2Click()
{
    if (arcoLongo.obtido == true)
    {
        if (ferreiroPecitas - arcoLongo.preco >= 0)
        {
            removerEspadaDeAco();
            removerItem();
    
            jogador.pecitas += arcoLongo.preco;
            ferreiroPecitas -= arcoLongo.preco;
        }
        else
        {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else
    {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro3Click()
{
    if (armaduraDeAco.obtido == true)
    {
        if (ferreiroPecitas - armaduraDeAco.preco >= 0)
        {
            removerEspadaDeAco();
            removerItem();
    
            jogador.pecitas += armaduraDeAco.preco;
            ferreiroPecitas -= armaduraDeAco.preco;
        }
        else
        {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else
    {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro4Click()
{
    if (armaduraDeEscamas.obtido == false)
    {
        if (jogador.pecitas - armaduraDeEscamas.preco >= 0)
        {
            adicionarEspadaDeAco()
            adicionarItem();
    
            jogador.pecitas -= armaduraDeEscamas.preco;
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

function venderItemFerreiro5Click()
{
    if (chicoteDeAco.obtido == true)
    {
        if (ferreiroPecitas - chicoteDeAco.preco >= 0)
        {
            removerEspadaDeAco();
            removerItem();
    
            jogador.pecitas += chicoteDeAco.preco;
            ferreiroPecitas -= chicoteDeAco.preco;
        }
        else
        {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else
    {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro6Click()
{
    if (adaga.obtido == true)
    {
        if (ferreiroPecitas - adaga.preco >= 0)
        {
            removerEspadaDeAco();
            removerItem();
    
            jogador.pecitas += adaga.preco;
            ferreiroPecitas -= adaga.preco;
        }
        else
        {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else
    {
        alert('Você não possui este item');
    }
}
/*-----*/