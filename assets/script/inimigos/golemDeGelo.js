/*-GOLEM DE GELO STATUS-*/
var golemDeGelo =
{
    nome: 'Golem de gelo', val: 'golemDeGelo', resistencia: 'Gelo', fraqueza: 'Fogo',
    nivel: 1, experiencia: 30, missaoMax: 5, recompensa: 8,

    vidaBase: 55, energiaBase: 40, manaBase: 25,
    vidaCombate: 55, energiaCombate: 40, manaCombate: 25,

    energiaRecuperacao: 25, manaRecuperacao: 20,
}
/*-----*/

/*-GOLEM DE GELO GOLPES-*/
var golpeGelido =
{
    nome: 'Golpe gélido',

    danoBase: 12, danoCombate: 12, tipoDano: 'Gelo',
    debuff: 'congelamento', chance: 25, duracao: 3,

    energiaCusto: 10, energiaCustoCombate: 10, manaCusto: 0, manaCustoCombate: 0,
}

var espinhoGlacial =
{
    nome: 'Espinho glacial',

    danoBase: 18, danoCombate: 18, tipoDano: 'Gelo',
    debuff: 'congelado', chance: 40, duracao: 4,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 12, manaCustoCombate: 12,
}
/*-----*/

/*-GOLEM DE GELO INICIO COMBATE-*/
function iniciarGolemDeGeloCombate() {
    inimigoCombatendo = 'Golem de gelo';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/GolemDeGelo.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = golemDeGelo;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = GolemDeGeloAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOLEM DE GELO ATAQUE-*/
function GolemDeGeloAtaque() {
    let random = Math.floor(Math.random() * 100) + 1

    
    if (random <= 40) {
        inimigoArmaGeral = espinhoGlacial;
    }
    if (random > 40) {
        inimigoArmaGeral = golpeGelido;
    }

    inimigoAtaqueAto()
}
/*-----*/