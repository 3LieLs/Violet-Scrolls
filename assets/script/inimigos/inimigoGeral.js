/*-STATUS INIMIGO VARIÁVEIS-*/
var inimigoGeral =
{
    nome: '', classe: '', resistencia: '', fraqueza: '', experiencia: 0,

    vidaBase: 0, manaBase: 0, energiaBase: 0,
    vidaCombate: 0, energiaCombate: 0, manaCombate: 0,

    energiaGasto: 0, energiaRecuperacao: 0, manaGasto: 0, manaRecuperacao: 0,

    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,

    danoBase: 0, danoCombate: 0,
}


var inimigoHudNome = window.document.querySelector('p#inimigoHudNome');
var inimigoHudVida = window.document.querySelector('p#inimigoHudVida');
var inimigoHudEnergiaMana = window.document.querySelector('p#inimigoHudEnergiaMana');
var inimigoHudImagem = window.document.querySelector('img#inimigoHudImagem');

var mensagemInimigoDerrotadoVal = window.document.querySelector('div#mensagemInimigoDerrotado');
var experienciaGanhaVal = window.document.querySelector('p#experienciaGanha');
/*-----*/


/*-INIMIGO DERROTADO-*/
function inimigoDerrotado() {
    if (inimigoGeral.vidaCombate <= 0) {
        rodada = 0;

        mainHud.style.display = 'none';
        mainInimigoHud.style.display = 'none';

        if (fase == 'goblin') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            local = 'floresta';
        }

        if (fase == 'golem') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            local = 'caverna';
        }

        if (fase == 'dragao') {
            jogadorNivel.experiencia += inimigoGeral.experiencia;
            local = 'montanha';
        }

        missaoProgresso();
        experienciaGanha();
        setTimeout(definirEstatisticaGeral, 2000);
        setTimeout(definirMusica, 2000);
    }
}
/*-----*/


/*-INIMIGO EXPERIÊNCIA-*/
function experienciaGanha() {
    mainInimigoDerrotado.style.display = 'contents';

    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100);
    jogador.porcentagem = jogador.porcentagem.toPrecision(3);

    jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem);

    if (jogadorNivel.experienciaPorcentagem > 100) {
        jogadorNivel.experienciaPorcentagem = 100;
    }

    mensagemInimigoDerrotadoVal.innerHTML = `${fase} derrotado`;
    experienciaGanhaVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;
    experienciaGanhaVal.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`;
}
/*-----*/


/*-INIMIGO MISSÃO-*/
function missaoProgresso() {
    if (missao.ativo == true) {
        missao.inimigosDerrotados++;

        if (missao.inimigosDerrotados >= missao.inimigosDerrotadosMax) {
            missao.ativo = false;
            jogador.pecitas += missao.recompensa;
            menuMissao.innerHTML = `Nenhuma missão iniciada`;
        }
    }
}
/*-----*/