/*-----*/
var funcaoInimigoAtaque
/*-----*/


/*-INIMIGO HUD-*/
function inimigoCombateHud() {
    inimigoHudNome.innerHTML = `${inimigoGeral.nome}`;

    inimigoHudVida.innerHTML = `Vida: ${inimigoGeral.vidaCombate}`;
    inimigoHudVida.style.backgroundSize = `${inimigoGeral.vidaPorcentagem}% 100%`;

    if (inimigoGeral.classe == 'fisico') {
        inimigoHudEnergiaMana.innerHTML = `Energia: ${inimigoGeral.energiaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.energiaPorcentagem}% 100%`;
    }

    if (inimigoGeral.classe == 'magico') {
        inimigoHudEnergiaMana.innerHTML = `Mana: ${inimigoGeral.manaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.manaPorcentagem}% 100%`;
    }
}
/*-----*/



/*-INIMIGO ATAQUE-*/
function inimigoAtaque() {
    if (inimigoGeral.vidaCombate > 0) {
        funcaoInimigoAtaque()
    }
}
/*-----*/