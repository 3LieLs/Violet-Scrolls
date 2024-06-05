/*-DRAGÃO STATS-*/
var dragao =
{
    nome: 'Dragão', val: 'dragao', resistencia: 'Fogo', fraqueza: 'Elétrico',
    nivel: 1, experiencia: 60, missaoMax: 2, recompensa: 20,

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
    debuff: 'sangramento', chance: 20, duracao: 2,

    energiaCusto: 20, energiaCustoCombate: 20, manaCusto: 0, manaCustoCombate: 0,
}

var soproFlamejante =
{
    nome: 'Sopro flamejante', val: 'soproFlamejante',

    danoBase: 40, danoCombate: 40, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 0, duracao: 3,

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

    atualizarCombateHud('jogador');
    atualizarCombateHud('inimigo');

    definirMusica();
}
/*-----*/

/*-DRAGÃO ATAQUE-*/
function DragaoAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 20) {
        inimigoArmaGeral = soproFlamejante;
    }
    if (random > 20) {
        inimigoArmaGeral = mordidaCortante;
    }

    inimigoAtaqueAto()
}
/*-----*/