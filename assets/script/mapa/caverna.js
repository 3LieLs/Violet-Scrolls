/*-CAVERNA VARIÁVEIS-*/
var botaoIniciarCombateCaverna = window.document.querySelector('input#botaoIniciarCombateCaverna');
botaoIniciarCombateCaverna.addEventListener('click', botaoIniciarCombateCavernaClick);
/*-----*/

/*-CAVERNA-*/
function botaoIniciarCombateCavernaClick() {
    cavernaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';
    
    iniciarGolemCombate();
}
/*-----*/