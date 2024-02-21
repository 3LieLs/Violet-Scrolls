/*-GOBLIN STATUS-*/
var goblin =
{
    nome: 'Goblin', resistencia: 'Nenhuma', fraqueza: 'Físico',
    nivel: 1, experiencia: 10,

    vidaBase: 25, energiaBase: 15, manaBase: 0,
    vidaCombate: 25, energiaCombate: 15, manaCombate: 0,

    energiaRecuperacao: 10, manaRecuperacao: 0,
}
/*-----*/

/*-GOBLIN INICIO COMBATE-*/
function iniciarGoblinCombate() {
    inimigoCombatendo = 'goblin';
    localMapa = 'combate';
    
    inimigoHudImagem.src = 'assets/content/img/Goblin.gif';
    inimigoHudImagem.style.width = '50%';
    
    inimigoGeral = goblin;
    inimigoArmaGeral = lancaEnvenenada
    funcaoInimigoAtaque = GoblinAtaque

    mainHud.style.display = 'contents';
    mainInimigoHud.style.display = 'contents';

    definirEstatisticaGeral();

    jogadorCombateHud();
    inimigoCombateHud();

    definirMusica();
}
/*-----*/

/*-GOBLIN ATAQUE-*/
function GoblinAtaque() {
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