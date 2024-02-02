/*-GOBLIN VARIÁVEIS-*/
var goblin =
{
    nome: 'Goblin', classe: 'fisico', experiencia: 10,
    vida: 25, energia: 15,
    vidaCombate: 25, energiaCombate: 15,
    dano: 5, danoCombate: 5, energiaGasto: 3, energiaRecuperacao: 10,
}

/*-GOBLIN COMBATE-*/
function iniciarGoblinCombate()
{
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

function definirEstatisticaGoblin()
{
    inimigoGeral.nome = goblin.nome;
    inimigoGeral.classe = goblin.classe;
    inimigoGeral.experiencia = goblin.experiencia

    inimigoGeral.vida = goblin.vida;
    inimigoGeral.energia = goblin.energia;

    inimigoGeral.vidaCombate = goblin.vidaCombate;
    inimigoGeral.energiaCombate = goblin.energiaCombate;

    inimigoGeral.energiaGasto = goblin.energiaGasto;
    inimigoGeral.energiaRecuperacao = goblin.energiaRecuperacao;

    inimigoGeral.dano = goblin.dano;
    inimigoGeral.danoCombate = goblin.danoCombate;
}
/*-----*/