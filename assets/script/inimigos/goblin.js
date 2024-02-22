/*-GOBLIN STATUS-*/
var goblin =
{
    nome: 'Goblin', resistencia: 'Nenhuma', fraqueza: 'Físico',
    nivel: 1, experiencia: 10,

    vidaBase: 25, energiaBase: 20, manaBase: 0,
    vidaCombate: 25, energiaCombate: 20, manaCombate: 0,

    energiaRecuperacao: 15, manaRecuperacao: 0,
}
/*-----*/

/*-GOBLIN INICIO COMBATE-*/
function iniciarGoblinCombate() {
    inimigoCombatendo = 'Goblin';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Goblin.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = goblin;

    let x = Math.floor(Math.random() * 2) + 1
    if (x == 1) {
        inimigoArmaGeral = lancaEnvenenada
    }
    if (x == 2) {
        inimigoArmaGeral = adaga
    } 
    funcaoInimigoAtaque = GoblinAtaque

    mainHud.style.display = 'contents';
    mainInimigoHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOBLIN ATAQUE-*/
function GoblinAtaque() {
    inimigoAtaqueAto()
}
/*-----*/