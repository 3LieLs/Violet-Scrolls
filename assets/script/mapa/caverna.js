/*-CAVERNA VARIÁVEIS-*/
var botaoIniciarCombateCaverna = window.document.querySelector('input#botaoIniciarCombateCaverna');
botaoIniciarCombateCaverna.addEventListener('click', botaoIniciarCombateCavernaClick);
/*-----*/

/*-CAVERNA-*/
function botaoIniciarCombateCavernaClick() {
    cavernaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    let x = Math.floor(Math.random() * 3) + 1
    if (x == 1) {
        iniciarGolemCombate();
    }

    if (x == 2) {
        iniciarGolemDeGeloCombate();
    }

    if (x == 3) {
        iniciarGolemDeFogoCombate();
    }

}
/*-----*/