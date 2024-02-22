/*-GOLEM STATUS-*/
var golem =
{
    nome: 'Golem', resistencia: 'Físico', fraqueza: 'Nenhuma',
    nivel: 1, experiencia: 30,

    vidaBase: 65, energiaBase: 30, manaBase: 0,
    vidaCombate: 65, energiaCombate: 30, manaCombate: 0,

    energiaRecuperacao: 15, manaRecuperacao: 0,
}
/*-----*/

/*-GOLEM GOLPES-*/
var golpeMacico =
{
    nome: 'Golpe maciço',

    danoBase: 12, danoCombate: 12, tipoDano: 'Físico',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 10, energiaCustoCombate: 10, manaCusto: 0, manaCustoCombate: 0,
}

var abaloSismico =
{
    nome: 'Abalo sísmico',

    danoBase: 20, danoCombate: 20, tipoDano: 'Físico',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 15, energiaCustoCombate: 15, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/

/*-GOLEM INICIO COMBATE-*/
function iniciarGolemCombate() {
    inimigoCombatendo = 'golem';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/Golem.gif';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = golem;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = GolemAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOLEM ATAQUE-*/
function GolemAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 30) {
        inimigoArmaGeral = abaloSismico;
    }
    if (random > 30) {
        inimigoArmaGeral = golpeMacico;
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