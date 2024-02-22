/*-GOLEM DE FOGO STATUS-*/
var golemDeFogo =
{
    nome: 'Golem de fogo', resistencia: 'Fogo', fraqueza: 'Fogo',
    nivel: 1, experiencia: 30,

    vidaBase: 50, energiaBase: 0, manaBase: 40,
    vidaCombate: 50, energiaCombate: 0, manaCombate: 40,

    energiaRecuperacao: 0, manaRecuperacao: 30,
}
/*-----*/

/*-GOLEM DE FOGO GOLPES-*/
var esferaFlamejante =
{
    nome: 'Esfera flamejante',

    danoBase: 15, danoCombate: 15, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 30, duracao: 2,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}

var erupcao =
{
    nome: 'Erupção',

    danoBase: 20, danoCombate: 20, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 15, duracao: 4,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 20, manaCustoCombate: 20,
}
/*-----*/

/*-GOLEM DE FOGO INICIO COMBATE-*/
function iniciarGolemDeFogoCombate() {
    inimigoCombatendo = 'Golem de fogo';
    localMapa = 'combate';

    inimigoHudImagem.src = 'assets/content/img/GolemDeFogo.webp';
    inimigoHudImagem.style.width = '50%';

    inimigoGeral = golemDeFogo;
    inimigoArmaGeral = golpeMacico;
    funcaoInimigoAtaque = GolemDeFogoAtaque;

    mainInimigoHud.style.display = 'contents';
    mainHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOLEM DE FOGO ATAQUE-*/
function GolemDeFogoAtaque() {
    let random = Math.floor(Math.random() * 100) + 0

    if (random <= 30) {
        inimigoArmaGeral = erupcao;
    }
    if (random > 30) {
        inimigoArmaGeral = esferaFlamejante;
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