/*-FLORESTA VARIÁVEIS-*/
var botaoIniciarCombateFloresta = window.document.querySelector('input#botaoIniciarCombateFloresta');
botaoIniciarCombateFloresta.addEventListener('click', botaoIniciarCombateFlorestaClick);
/*-----*/

/*-FLORESTA-*/
function botaoIniciarCombateFlorestaClick()
{
    florestaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    iniciarGoblinCombate();
}
/*-----*/