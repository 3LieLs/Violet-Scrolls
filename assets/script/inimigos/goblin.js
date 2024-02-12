/*-GOBLIN VARIÁVEIS-*/
var goblin =
{
    nome: 'Goblin', classe: 'fisico', resistencia: '', fraqueza: '', experiencia: 10,

    vidaBase: 25, energiaBase: 15, manaBase: 0,
    vidaCombate: 25, energiaCombate: 15, manaCombate: 0,

    energiaGasto: 3, energiaRecuperacao: 10, manaGasto: 0, manaRecuperacao: 0,

    danoBase: 5, danoCombate: 5,
}

/*-GOBLIN COMBATE-*/
function iniciarGoblinCombate() {
    florestaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    fase = 'goblin';
    local = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Goblin.gif';
    inimigoHudImagem.style.width = '50%';

    mainInimigoHud.style.display = 'contents';

    mainHud.style.display = 'contents';

    definirEstatisticaGoblin();
    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}

function definirEstatisticaGoblin() {
    inimigoGeral = goblin;
}
/*-----*/