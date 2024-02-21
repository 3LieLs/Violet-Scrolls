/*-MONTANHA VARIÁVEIS-*/
var botaoIniciarCombateMontanha = window.document.querySelector('input#botaoIniciarCombateMontanha');
botaoIniciarCombateMontanha.addEventListener('click', botaoIniciarCombateMontanhaClick);
/*-----*/


/*-MONTANHA-*/
function botaoIniciarCombateMontanhaClick() {
    montanhaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    iniciarDragaoCombate();
}
/*-----*/