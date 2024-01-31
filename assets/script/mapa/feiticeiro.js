/*-FEITICEIRO VAIRÁVEIS-*/
var botaoAbrirLojaFeiticeiro = window.document.querySelector('input#botaoAbrirLojaFeiticeiro');
botaoAbrirLojaFeiticeiro.addEventListener('click', botaoAbrirLojaFeiticeiroClick);

var botaoFecharLojaFeiticeiro = window.document.querySelector('input#botaoFecharLojaFeiticeiro');
botaoFecharLojaFeiticeiro.addEventListener('click', botaoFecharLojaFeiticeiroClick);
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