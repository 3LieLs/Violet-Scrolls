/*-GOLEM DE PEDRA STATUS-*/
var golemDePedra =
{
    nome: 'Golem de pedra', val: 'golemDePedra', resistencia: 'Físico', fraqueza: 'Nenhuma',
    nivel: 1, experiencia: 30, missaoMax: 5, recompensa: 11,

    vidaBase: 75, energiaBase: 30, manaBase: 0,
    vidaCombate: 75, energiaCombate: 30, manaCombate: 0,

    energiaRecuperacao: 15, manaRecuperacao: 0,
}
/*-----*/

/*-GOLEM DE PEDRA GOLPES-*/
var golpeMacico =
{
    nome: 'Golpe maciço',

    danoBase: 20, danoCombate: 20, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 20, energiaCustoCombate: 20, manaCusto: 0, manaCustoCombate: 0,
}

var abaloSismico =
{
    nome: 'Abalo sísmico',

    danoBase: 35, danoCombate: 35, tipoDano: 'Físico',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 25, energiaCustoCombate: 25, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/

/*-GOLEM DE PEDRA INICIO COMBATE-*/
function iniciarGolemDePedraCombate() {
    inimigoCombatendo = 'Golem de pedra';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/GolemDePedra.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = golemDePedra;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = GolemDePedraAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOLEM DE PEDRA ATAQUE-*/
function GolemDePedraAtaque() {
    let random = Math.floor(Math.random() * 100) + 1

    if (random <= 40) {
        inimigoArmaGeral = abaloSismico;
    }
    if (random > 40) {
        inimigoArmaGeral = golpeMacico;
    }

    inimigoAtaqueAto()
}
/*-----*/