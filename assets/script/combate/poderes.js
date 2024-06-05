/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarPoderElfo() {
    if (rodada == rodadaPoderElfoMax) {
        buffElfo = false;
    }
    if (buffElfo == true) {
        danoPoderElfo = magiaDanoGeral.danoBase * 1;
        danoPoderElfo = Math.round(danoPoderElfo);
        magiaDanoGeral.danoCombate += danoPoderElfo;
        buffElfoTrueFalse = true;
    }
}
function desaplicarPoderElfo() {
    if (buffElfo == true) {
        if (jogador.manaCombate + Math.round(jogador.manaBase * 0.25) > jogador.manaBase) {
            jogador.manaCombate = jogador.manaBase;
            jogador.manaPorcentagem = 100;

        } else {
            jogador.manaCombate += Math.round(jogador.manaBase * 0.25);

            jogador.porcentagem = 100 - ((Math.round(jogador.manaBase * 0.25) / jogador.manaBase) * 100);
            jogador.porcentagem = 100 - jogador.porcentagem;
            jogador.porcentagem = jogador.porcentagem.toPrecision(2);

            jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem);
        }
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${Math.round(jogador.manaBase * 0.25)} de mana`);

        atualizarCombateHud('jogador');

        if (buffElfoTrueFalse == true) {
            magiaDanoGeral.danoCombate -= danoPoderElfo;
            buffElfoTrueFalse.jogador = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarPoderOrc() {
    if (rodada == rodadaPoderOrcMax) {
        buffOrc = false;
    }
    if (buffOrc == true) {
        danoPoderOrc = armaGeral.danoBase * 1;
        danoPoderOrc = Math.round(danoPoderOrc);
        armaGeral.danoCombate += danoPoderOrc;
        buffOrcTrueFalse = true;
    }
}
function desaplicarPoderOrc() {
    if (buffOrc == true) {
        if (jogador.energiaCombate + Math.round(jogador.energiaBase * 0.25) > jogador.energiaBase) {
            jogador.energiaCombate = jogador.energiaBase;
            jogador.energiaPorcentagem = 100;

        } else {
            jogador.energiaCombate += Math.round(jogador.energiaBase * 0.25);

            jogador.porcentagem = 100 - ((Math.round(jogador.energiaBase * 0.25) / jogador.energiaBase) * 100);
            jogador.porcentagem = 100 - jogador.porcentagem;
            jogador.porcentagem = jogador.porcentagem.toPrecision(2);

            jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem);
        }
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${Math.round(jogador.energiaBase * 0.25)} de energia`);

        atualizarCombateHud('jogador');

        if (buffOrcTrueFalse == true) {
            armaGeral.danoCombate -= danoPoderOrc;
            buffOrcTrueFalse.jogador = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarPoderVampiro() {
    if (rodada == rodadaPoderVampiroMax) {
        buffVampiro = false;
    }
}
function desaplicarPoderVampiro() {
    if (buffVampiro == true) {
        if (jogador.vidaCombate + Math.round(jogador.vidaBase * 0.20) > jogador.vidaBase) {
            jogador.vidaCombate = jogador.vidaBase;
            jogador.vidaPorcentagem = 100;

        } else {
            jogador.vidaCombate += Math.round(jogador.vidaBase * 0.20);

            jogador.porcentagem = 100 - ((Math.round(jogador.vidaBase * 0.20) / jogador.vidaBase) * 100)
            jogador.porcentagem = 100 - jogador.porcentagem
            jogador.porcentagem = jogador.porcentagem.toPrecision(2)

            jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) + parseInt(jogador.porcentagem)
        }
        inimigoAtingidoDano(Math.round(inimigoGeral.vidaBase * 0.20));
        atualizarCombateHud('inimigo');

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${Math.round(jogador.vidaBase * 0.20)} de vida`);
        legendaView.insertAdjacentHTML('beforeend', `<br>${inimigoGeral.nome} perdeu ${Math.round(inimigoGeral.vidaBase * 0.20)} de vida`);

        atualizarCombateHud('jogador');
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/