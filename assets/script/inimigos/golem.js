/*-GOLEM HUD-*/
var golem =
{
    nome: 'Golem', classe: 'fisico',
    vida: 50, energia: 30,
    vidaCombate: 50, energiaCombate: 30,
    dano: 15, danoCombate: 15, energiaGasto: 10, energiaRecuperacao: 20,
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
    inimigoGeral.nome = golem.nome;
    inimigoGeral.classe = golem.classe;

    inimigoGeral.vida = golem.vida;
    inimigoGeral.energia = golem.energia;

    inimigoGeral.vidaCombate = golem.vidaCombate;
    inimigoGeral.energiaCombate = golem.energiaCombate;

    inimigoGeral.energiaGasto = golem.energiaGasto;
    inimigoGeral.energiaRecuperacao = golem.energiaRecuperacao;

    inimigoGeral.dano = golem.dano;
    inimigoGeral.danoCombate = golem.danoCombate;
}
/*-----*/