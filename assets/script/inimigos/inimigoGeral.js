/*-----*//*-----*//*-----*//*-----*//*-----*/
var inimigoCombatendo = ''

var inimigoHudNome = window.document.querySelector('p#inimigoHudNome');
var inimigoHudVida = window.document.querySelector('p#inimigoHudVida');
var inimigoHudEnergia = window.document.querySelector('p#inimigoHudEnergia');
var inimigoHudMana = window.document.querySelector('p#inimigoHudMana');
var inimigoHudImagem = window.document.querySelector('img#inimigoHudImagem');

var mensagemInimigoDerrotadoVal = window.document.querySelector('div#mensagemInimigoDerrotado');
var experienciaGanhaVal = window.document.querySelector('p#experienciaGanha');
/*-----*/

/*-STATUS INIMIGOS-*/
var inimigoGeral =
{
    nome: '', val: '', resistencia: '', fraqueza: '',
    nivel: 0, experiencia: 0, missaoMax: 0, recompensa: 0,

    vidaBase: 0, manaBase: 0, energiaBase: 0,
    vidaCombate: 0, energiaCombate: 0, manaCombate: 0,

    energiaGasto: 0, energiaRecuperacao: 0, manaGasto: 0, manaRecuperacao: 0,

    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,

    danoBase: 0, danoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-INIMIGO DERROTADO-*/
function inimigoDerrotado() {
    if (inimigoGeral.vidaCombate <= 0) {
        mainHud.style.display = 'none';
        mainInimigoHud.style.display = 'none';

        if (inimigoCombatendo == 'Goblin') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            localMapa = 'floresta';
        }
        if (inimigoCombatendo == 'Besouro gigante') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            localMapa = 'floresta';
        }

        if (inimigoCombatendo == 'Golem de pedra') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            localMapa = 'caverna';
        }
        if (inimigoCombatendo == 'Golem de gelo') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            localMapa = 'caverna';
        }
        if (inimigoCombatendo == 'Golem de fogo') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            localMapa = 'caverna';
        }

        if (inimigoCombatendo == 'Dragão') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            localMapa = 'montanha';
        }

        missaoProgresso();
        experienciaGanha();
        setTimeout(definirEstatisticaGeral, 2000);
        setTimeout(definirMusica, 2000);
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/