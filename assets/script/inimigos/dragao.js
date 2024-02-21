/*-DRAGÃO VARIÁVEIS-*/
var dragao =
{
    nome: 'Dragão', classe: 'magico', resistencia: 'Fogo', fraqueza: 'Eletricidade', experiencia: 60,

    vidaBase: 80, energiaBase: 0, manaBase: 50,
    vidaCombate: 80, energiaCombate: 0, manaCombate: 50,

    energiaGasto: 15, energiaRecuperacao: 30, manaGasto: 15, manaRecuperacao: 30,

    danoBase: 25, danoCombate: 25,
}
/*-----*/

var soproFlamejante =
{
    nome: 'Sopro flamejante', val: 'soproFlamejante',

    danoBase: 16, danoCombate: 16, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 25, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 20, manaCustoCombate: 20,
}

/*-DRAGÃO COMBATE-*/
function iniciarDragaoCombate() {
    montanhaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    fase = 'dragao';
    local = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Dragão.gif';
    inimigoHudImagem.style.width = '50%';

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaDragao();
    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}

function definirEstatisticaDragao() {
    inimigoGeral = dragao;
    inimigoArmaGeral = soproFlamejante;
    funcaoInimigoAtaque = DragaoAtaque;
}
/*-----*/

/*-----*/
function DragaoAtaque() {
    aplicarFraquezaResistenciaJogador()

    if (inimigoGeral.manaCombate - inimigoArmaGeral.manaCusto >= 0) {

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

            inimigoGeral.manaCombate = inimigoGeral.manaCombate - inimigoArmaGeral.manaCusto;

            inimigoGeral.porcentagem = 100 - ((inimigoArmaGeral.manaCusto / inimigoGeral.manaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.manaPorcentagem = inimigoGeral.manaPorcentagem - inimigoGeral.porcentagem;
        }

        if (inimigoGeral.manaCombate < 0) {
            inimigoGeral.manaCombate = 0;
            inimigoGeral.manaPorcentagem = 0.1;
        }

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou com ${inimigoArmaGeral.nome}<br>Dano causado: ${inimigoArmaGeral.danoCombate}<br>Energia usada: ${inimigoArmaGeral.manaCusto}`);

        verificarDebuffArmaInimigo()

    } else {
        inimigoGeral.manaCombate += inimigoGeral.manaRecuperacao;

        inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaRecuperacao / inimigoGeral.manaBase) * 100);
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

        inimigoGeral.manaPorcentagem = parseInt(inimigoGeral.manaPorcentagem) + parseInt(inimigoGeral.porcentagem);

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.manaRecuperacao}`);
    }

    desaplicarFraquezaResistenciaJogador()
}
/*-----*/