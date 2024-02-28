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
var inimigoGeralDerrotado = false
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-INIMIGO DERROTADO-*/
function inimigoDerrotado() {
    if (inimigoGeral.vidaCombate <= 0) {
        inimigoGeralDerrotado = true

        setTimeout(() => {
            mainHud.style.display = 'none';
            mainInimigoHud.style.display = 'none';

            if (inimigoCombatendo == 'Goblin') {
                localMapa = 'floresta';
            }
            if (inimigoCombatendo == 'Besouro gigante') {
                localMapa = 'floresta';
            }

            if (inimigoCombatendo == 'Golem de pedra') {
                localMapa = 'caverna';
            }
            if (inimigoCombatendo == 'Golem de gelo') {
                localMapa = 'caverna';
            }
            if (inimigoCombatendo == 'Golem de fogo') {
                localMapa = 'caverna';
            }

            if (inimigoCombatendo == 'Dragão') {
                localMapa = 'montanha';
            }

            missaoProgresso();
            adicionarExperiencia();
            setTimeout(definirMusica, 2000);
            setTimeout(definirEstatisticaGeral, 2000);
        }, 2000)
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/