/*-GOBLIN VARIÁVEIS-*/
var goblin =
{
    nome: 'Goblin', classe: 'fisico', resistencia: '', fraqueza: '', experiencia: 10,

    vidaBase: 25, energiaBase: 15, manaBase: 0,
    vidaCombate: 25, energiaCombate: 15, manaCombate: 0,

    energiaRecuperacao: 10, manaRecuperacao: 0,
}

var goblinArma =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '', debuff: '',

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}

/*-GOBLIN COMBATE-*/
function iniciarGoblinCombate() {
    florestaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    fase = 'goblin';
    local = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Goblin.gif';
    inimigoHudImagem.style.width = '50%';

    mainInimigoHud.style.display = 'contents';

    mainHud.style.display = 'contents';

    definirEstatisticaGoblin();
    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}

function definirEstatisticaGoblin() {
    inimigoGeral = goblin;
    goblinArma = lancaEnvenenada
    funcaoInimigoAtaque = GoblinAtaque
}

function GoblinAtaque() {
    if (inimigoGeral.energiaCombate - goblinArma.energiaCusto >= 0) {

        if (jogador.vidaCombate - goblinArma.danoCombate < 0) {
            jogador.vidaCombate = 0;
            jogador.vidaPorcentagem = 0.1;
            jogador.porcentagem = 0;
        }
        else {

            jogador.vidaCombate -= goblinArma.danoCombate;

            jogador.porcentagem = 100 - ((goblinArma.danoCombate / jogador.vidaBase) * 100);
            jogador.porcentagem = 100 - jogador.porcentagem;
            jogador.porcentagem = jogador.porcentagem.toPrecision(2);

            jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;

            inimigoGeral.energiaCombate = inimigoGeral.energiaCombate - goblinArma.energiaCusto;

            inimigoGeral.porcentagem = 100 - ((goblinArma.energiaCusto / inimigoGeral.energiaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.energiaPorcentagem = inimigoGeral.energiaPorcentagem - inimigoGeral.porcentagem;
        }

        if (inimigoGeral.energiaCombate < 0) {
            inimigoGeral.energiaCombate = 0;
            inimigoGeral.energiaPorcentagem = 0.1;
        }

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou com ${goblinArma.nome}<br>Dano causado: ${goblinArma.danoCombate}<br>Energia usada: ${goblinArma.energiaCusto}`);

    } else {
        inimigoGeral.energiaCombate += inimigoGeral.energiaRecuperacao;

        inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaRecuperacao / inimigoGeral.energiaBase) * 100);
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

        inimigoGeral.energiaPorcentagem = parseInt(inimigoGeral.energiaPorcentagem) + parseInt(inimigoGeral.porcentagem);

        legendaView.insertAdjacentHTML('beforeend', `<br>${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.energiaRecuperacao}`);
    }
}
/*-----*/