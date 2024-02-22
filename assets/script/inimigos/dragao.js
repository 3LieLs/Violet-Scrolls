/*-DRAGÃO STATS-*/
var dragao =
{
    nome: 'Dragão', resistencia: 'Fogo', fraqueza: 'Eletricidade',
    nivel: 1, experiencia: 60,

    vidaBase: 150, energiaBase: 70, manaBase: 50,
    vidaCombate: 150, energiaCombate: 70, manaCombate: 50,

    energiaRecuperacao: 45, manaRecuperacao: 30,
}
/*-----*/

/*-DRAGÃO GOLPES-*/
var mordidaCortante =
{
    nome: 'Mordida cortante',

    danoBase: 25, danoCombate: 25, tipoDano: 'Físico',
    debuff: 'sangramento', chance: 30, duracao: 2,

    energiaCusto: 20, energiaCustoCombate: 20, manaCusto: 0, manaCustoCombate: 0,
}

var soproFlamejante =
{
    nome: 'Sopro flamejante', val: 'soproFlamejante',

    danoBase: 40, danoCombate: 40, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 25, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15,
}
/*-----*/

/*-DRAGÃO INICIO COMBATE-*/
function iniciarDragaoCombate() {
    inimigoCombatendo = 'Dragão';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Dragão.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = dragao;
    inimigoArmaGeral = soproFlamejante;
    funcaoInimigoAtaque = DragaoAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-DRAGÃO ATAQUE-*/
function DragaoAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 25) {
        inimigoArmaGeral = soproFlamejante;
    }
    if (random > 25) {
        inimigoArmaGeral = mordidaCortante;
    }

    inimigoAtaqueAto()
}
/*-----*/