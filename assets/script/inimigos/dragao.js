/*-DRAGÃO VARIÁVEIS-*/
var dragao =
{
    nome: 'Dragão', classe: 'magico', resistencia: '', fraqueza: '', experiencia: 60,

    vidaBase: 80, energiaBase: 0, manaBase: 50,
    vidaCombate: 80, energiaCombate: 0, manaCombate: 50,

    energiaGasto: 15, energiaRecuperacao: 30, manaGasto: 15, manaRecuperacao: 30,

    danoBase: 25, danoCombate: 25,
}
/*-----*/

/*-DRAGÃO COMBATE-*/
function iniciarDragaoCombate() {
    montanhaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    fase = 'dragao';
    local = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Dragão.gif';
    inimigoHudImagem.style.width = '50%';

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaDragao();
    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}

function definirEstatisticaDragao() {
    inimigoGeral = dragao;
}
/*-----*/