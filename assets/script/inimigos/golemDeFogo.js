/*-GOLEM DE FOGO STATUS-*/
var golemDeFogo =
{
    nome: 'Golem de fogo', resistencia: 'Fogo', fraqueza: 'Fogo',
    nivel: 1, experiencia: 30,

    vidaBase: 35, energiaBase: 0, manaBase: 60,
    vidaCombate: 35, energiaCombate: 0, manaCombate: 60,

    energiaRecuperacao: 0, manaRecuperacao: 30,
}
/*-----*/

/*-GOLEM DE FOGO GOLPES-*/
var esferaFlamejante =
{
    nome: 'Esfera flamejante',

    danoBase: 25, danoCombate: 25, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 30, duracao: 2,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 12, manaCustoCombate: 12,
}

var erupcao =
{
    nome: 'Erupção',

    danoBase: 40, danoCombate: 40, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 15, duracao: 4,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 40, manaCustoCombate: 40,
}
/*-----*/

/*-GOLEM DE FOGO INICIO COMBATE-*/
function iniciarGolemDeFogoCombate() {
    inimigoCombatendo = 'Golem de fogo';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/GolemDeFogo.webp';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = golemDeFogo;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = GolemDeFogoAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOLEM DE FOGO ATAQUE-*/
function GolemDeFogoAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 20) {
        inimigoArmaGeral = erupcao;
    }
    if (random > 20) {
        inimigoArmaGeral = esferaFlamejante;
    }

    inimigoAtaqueAto()
}
/*-----*/