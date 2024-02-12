/*-GOLEM HUD-*/
var golem =
{
    nome: 'Golem', classe: 'fisico', resistencia: '', fraqueza: '', experiencia: 30,

    vidaBase: 50, energiaBase: 30, manaBase: 0,
    vidaCombate: 50, energiaCombate: 30,

    energiaGasto: 10, energiaRecuperacao: 20, manaGasto: 0, manaRecuperacao: 0,

    danoBase: 15, danoCombate: 15, 
}

/*-GOLEM COMBATE-*/
function iniciarGolemCombate()
{
    cavernaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    fase = 'golem';
    local = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Golem.gif';
    inimigoHudImagem.style.width = '50%';

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGolem();
    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

function definirEstatisticaGolem()
{
    inimigoGeral = golem;
}
/*-----*/