/*-DRAGÃO VARIÁVEIS-*/
var dragao =
{
    nome: 'Dragão', classe: 'magico',
    vida: 80, mana: 50,
    vidaCombate: 80, manaCombate: 50,
    dano: 25, danoCombate: 25, manaGasto: 15, manaRecuperacao: 30,
}
/*-----*/

/*-DRAGÃO COMBATE-*/
function iniciarDragaoCombate()
{
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

function definirEstatisticaDragao()
{
    inimigoGeral.nome = dragao.nome;
    inimigoGeral.classe = dragao.classe;

    inimigoGeral.vida = dragao.vida;
    inimigoGeral.mana = dragao.mana;

    inimigoGeral.vidaCombate = dragao.vidaCombate;
    inimigoGeral.manaCombate = dragao.manaCombate;

    inimigoGeral.manaGasto = dragao.manaGasto;
    inimigoGeral.manaRecuperacao = dragao.manaRecuperacao;

    inimigoGeral.dano = dragao.dano;
    inimigoGeral.danoCombate = dragao.danoCombate;
}
/*-----*/