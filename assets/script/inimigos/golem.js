/*-GOLEM HUD-*/
var golem =
{
    nome: 'Golem', classe: 'fisico', resistencia: 'Físico', fraqueza: 'Fogo', experiencia: 30,

    vidaBase: 50, energiaBase: 30, manaBase: 0,
    vidaCombate: 50, energiaCombate: 30,

    energiaGasto: 10, energiaRecuperacao: 20, manaGasto: 0, manaRecuperacao: 0,

    danoBase: 15, danoCombate: 15, 
}


var golpeMacico =
{
    nome: 'Golpe maciço', val: 'golpeMacico',

    danoBase: 12, danoCombate: 12, tipoDano: 'Físico', 
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 10, energiaCustoCombate: 10, manaCusto: 0, manaCustoCombate: 0,
}

/*-GOLEM COMBATE-*/
function iniciarGolemCombate()
{
    cavernaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    fase = 'golem';
    local = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Golem.gif';
    inimigoHudImagem.style.width = '50%';

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGolem();
    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

function definirEstatisticaGolem()
{
    inimigoGeral = golem;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = GolemAtaque;
}
/*-----*/

/*-----*/
function GolemAtaque() {
    aplicarFraquezaResistenciaJogador()

    if (inimigoGeral.energiaCombate - inimigoArmaGeral.energiaCusto >= 0) {

        if (jogador.vidaCombate - inimigoArmaGeral.danoCombate < 0) {
            jogador.vidaCombate = 0;
            jogador.vidaPorcentagem = 0.1;
            jogador.porcentagem = 0;
        }
        else {
            jogador.vidaCombate -= inimigoArmaGeral.danoCombate;

            jogador.porcentagem = 100 - ((inimigoArmaGeral.danoCombate / jogador.vidaBase) * 100);
            jogador.porcentagem = 100 - jogador.porcentagem;
            jogador.porcentagem = jogador.porcentagem.toPrecision(2);

            jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;

            inimigoGeral.energiaCombate = inimigoGeral.energiaCombate - inimigoArmaGeral.energiaCusto;

            inimigoGeral.porcentagem = 100 - ((inimigoArmaGeral.energiaCusto / inimigoGeral.energiaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.energiaPorcentagem = inimigoGeral.energiaPorcentagem - inimigoGeral.porcentagem;
        }

        if (inimigoGeral.energiaCombate < 0) {
            inimigoGeral.energiaCombate = 0;
            inimigoGeral.energiaPorcentagem = 0.1;
        }

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou com ${inimigoArmaGeral.nome}<br>Dano causado: ${inimigoArmaGeral.danoCombate}<br>Energia usada: ${inimigoArmaGeral.energiaCusto}`);

        verificarDebuffArmaInimigo()

    } else {
        inimigoGeral.energiaCombate += inimigoGeral.energiaRecuperacao;

        inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaRecuperacao / inimigoGeral.energiaBase) * 100);
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

        inimigoGeral.energiaPorcentagem = parseInt(inimigoGeral.energiaPorcentagem) + parseInt(inimigoGeral.porcentagem);

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.energiaRecuperacao}`);
    }

    desaplicarFraquezaResistenciaJogador()
}
/*-----*/