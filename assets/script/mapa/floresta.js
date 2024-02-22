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

    let x = Math.floor(Math.random() * 2) + 1
    if (x == 1) {
        iniciarGoblinCombate();
    }

    if (x == 2) {
        iniciarBesouroGiganteCombate();
    }
}
/*-----*/