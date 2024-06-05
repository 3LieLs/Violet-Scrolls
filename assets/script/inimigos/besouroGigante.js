/*-BESOURO GIGANTE STATUS-*/
var besouroGigante =
{
    nome: 'Besouro gigante', val: 'besouroGigante', resistencia: 'Nenhuma', fraqueza: 'Fogo',
    nivel: 1, experiencia: 5, missaoMax: 10, recompensa: 3,

    vidaBase: 15, energiaBase: 30, manaBase: 0,
    vidaCombate: 15, energiaCombate: 30, manaCombate: 0,

    energiaRecuperacao: 20, manaRecuperacao: 0,
}
/*-----*/

/*-BESOURO GIGANTE GOLPES-*/
var mordidaVenenosa =
{
    nome: 'Mordida venenosa',

    danoBase: 3, danoCombate: 3, tipoDano: 'Físico',
    debuff: 'veneno', chance: 25, duracao: 2,

    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}

var cuspeToxico =
{
    nome: 'Cuspe tóxico',

    danoBase: 10, danoCombate: 10, tipoDano: 'Físico',
    debuff: 'veneno', chance: 50, duracao: 4,

    energiaCusto: 10, energiaCustoCombate: 10, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/

/*-BESOURO GIGANTE INICIO COMBATE-*/
function iniciarBesouroGiganteCombate() {
    inimigoCombatendo = 'Besouro gigante';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/BesouroGigante.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = besouroGigante;
    inimigoArmaGeral = mordidaVenenosa;
    funcaoInimigoAtaque = BesouroGiganteAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    atualizarCombateHud('jogador');
    atualizarCombateHud('inimigo');

    definirMusica();
}
/*-----*/

/*-BESOURO GIGANTE ATAQUE-*/
function BesouroGiganteAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 30) {
        inimigoArmaGeral = cuspeToxico;
    }
    if (random > 30) {
        inimigoArmaGeral = mordidaVenenosa;
    }

    inimigoAtaqueAto()
}
/*-----*/