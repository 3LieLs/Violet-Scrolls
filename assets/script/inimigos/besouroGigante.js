/*-BESOURO GIGANTE STATUS-*/
var besouroGigante =
{
    nome: 'Besouro gigante', resistencia: 'Nenhuma', fraqueza: 'Fogo',
    nivel: 1, experiencia: 5,

    vidaBase: 15, energiaBase: 25, manaBase: 0,
    vidaCombate: 15, energiaCombate: 25, manaCombate: 0,

    energiaRecuperacao: 15, manaRecuperacao: 0,
}
/*-----*/

/*-BESOURO GIGANTE GOLPES-*/
var mordidaVenenosa =
{
    nome: 'Mordida venenosa',

    danoBase: 3, danoCombate: 3, tipoDano: 'Físico',
    debuff: 'veneno', chance: 50, duracao: 4,

    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}

var cuspeToxico =
{
    nome: 'Cuspe tóxico',

    danoBase: 10, danoCombate: 10, tipoDano: 'Físico',
    debuff: 'veneno', chance: 20, duracao: 2,

    energiaCusto: 10, energiaCustoCombate: 10, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/

/*-BESOURO GIGANTE INICIO COMBATE-*/
function iniciarBesouroGiganteCombate() {
    inimigoCombatendo = 'Besouro gigante';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/BesouroGigante.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = besouroGigante;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = BesouroGiganteAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-BESOURO GIGANTE ATAQUE-*/
function BesouroGiganteAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 30) {
        inimigoArmaGeral = cuspeToxico;
    }
    if (random > 30) {
        inimigoArmaGeral = mordidaVenenosa;
    }

    if (inimigoGeral.energiaCombate - inimigoArmaGeral.energiaCusto >= 0) {
        aplicarFraquezaResistenciaJogador()
        aplicarCriticoInimigo()

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
        if (criticoInimigo == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br>Acerto crítico!`)
        }

        desaplicarFraquezaResistenciaJogador()
        desaplicarCriticoInimigo()
        verificarDebuffArmaInimigo()

    } else {
        inimigoGeral.energiaCombate += inimigoGeral.energiaRecuperacao;

        inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaRecuperacao / inimigoGeral.energiaBase) * 100);
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

        inimigoGeral.energiaPorcentagem = parseInt(inimigoGeral.energiaPorcentagem) + parseInt(inimigoGeral.porcentagem);

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.energiaRecuperacao}`);
    }
}
/*-----*/