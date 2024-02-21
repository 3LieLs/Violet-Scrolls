/*-DRAGÃO STATS-*/
var dragao =
{
    nome: 'Dragão', resistencia: 'Fogo', fraqueza: 'Eletricidade',
    nivel: 1, experiencia: 60,

    vidaBase: 80, energiaBase: 50, manaBase: 30,
    vidaCombate: 80, energiaCombate: 50, manaCombate: 30,

    energiaRecuperacao: 30, manaRecuperacao: 30,

    danoBase: 25, danoCombate: 25,
}
/*-----*/

/*-DRAGÃO GOLPES-*/
var mordidaCortante =
{
    nome: 'Mordida cortante',

    danoBase: 16, danoCombate: 16, tipoDano: 'Físico',
    debuff: 'sangramento', chance: 30, duracao: 2,

    energiaCusto: 12, energiaCustoCombate: 12, manaCusto: 0, manaCustoCombate: 0,
}

var soproFlamejante =
{
    nome: 'Sopro flamejante', val: 'soproFlamejante',

    danoBase: 25, danoCombate: 25, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 25, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15,
}
/*-----*/

/*-DRAGÃO INICIO COMBATE-*/
function iniciarDragaoCombate() {
    inimigoCombatendo = 'dragao';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Dragão.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = dragao;
    inimigoArmaGeral = soproFlamejante;
    funcaoInimigoAtaque = DragaoAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-DRAGÃO ATAQUE-*/
function DragaoAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 25) {
        inimigoArmaGeral = soproFlamejante;
    }
    if (random > 25) {
        inimigoArmaGeral = mordidaCortante;
    }

    if (inimigoArmaGeral.energiaCusto > 0) {
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


    if (inimigoArmaGeral.manaCusto > 0) {
        if (inimigoGeral.manaCombate - inimigoArmaGeral.manaCusto >= 0) {
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

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou com ${inimigoArmaGeral.nome}<br>Dano causado: ${inimigoArmaGeral.danoCombate}<br>Mana usada: ${inimigoArmaGeral.manaCusto}`);

            desaplicarFraquezaResistenciaJogador()
            desaplicarCriticoInimigo()
            verificarDebuffArmaInimigo()
        } else {
            inimigoGeral.manaCombate += inimigoGeral.manaRecuperacao;

            inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaRecuperacao / inimigoGeral.manaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.manaPorcentagem = parseInt(inimigoGeral.manaPorcentagem) + parseInt(inimigoGeral.porcentagem);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} focou<br>Mana recuperada: ${inimigoGeral.manaRecuperacao}`);
        }
    }
}
/*-----*/