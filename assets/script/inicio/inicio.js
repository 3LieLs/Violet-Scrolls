/*-INICIO VARIÁVEIS-*/
var botaoInicioVal = window.document.querySelector('input#botaoInicio');
botaoInicioVal.addEventListener('click', botaoInicioClick);
botaoInicioVal.addEventListener('mouseover', botaoInicioHover);
botaoInicioVal.addEventListener('mouseout', botaoInicioOut);
/*-----*/

/*-INICIO-*/
function botaoInicioClick()
{
    inicio.style.display = 'none';
    escolhaGenero.style.display = 'contents';
}

function botaoInicioHover()
{
    botaoInicioVal.style.cursor = 'pointer';
    botaoInicioVal.style.animation = 'botaoAnimacao 2s 0ms infinite running';
    botaoInicioVal.style.background = 'gray';
}

function botaoInicioOut()
{
    botaoInicioVal.style.background = 'black';
    botaoInicioVal.style.transform = 'scale(1.0)';
    botaoInicioVal.style.animation = 'paused';
}
/*-----*/