/*-MUDAR RODADA-*/
function mudarRodada() {
    rodada += 1
    legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada}<br><br>`)
}
/*-----*/


/*-----*/
function buff_debuff() {
    if (rodada == rodadaBuffMax) {
        magiaBuffGeral.ativo = false

        armaGeral.danoCombate -= magiaBuffGeral.danoBuff
    }

    if (magiaBuffGeral.ativo == true) {
        if (vidaGanha > 0) {
            jogador.vidaCombate += vidaGanha;

            jogador.porcentagem = 100 - ((vidaGanha / jogador.vida) * 100)
            jogador.porcentagem = 100 - jogador.porcentagem
            jogador.porcentagem = jogador.porcentagem.toPrecision(2)

            jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) + parseInt(jogador.porcentagem)

            legendaView.insertAdjacentHTML('beforeend', `${jogador.nome} recuperou ${vidaGanha} de vida<br><br>`);
        }

        jogadorCombateHud();
        inimigoCombateHud();
    }
}
/*-----*/


/*-CRÍTICO-*/
function critico() {
    let chance = Math.floor(Math.random() * 100) + 0;

    if (chance <= 10) {
        armaJogador.danoCombate = armaJogador.danoCombate * 2;

        inimigo.danoCombate = inimigo.danoCombate * 2;
    }
}
/*-----*/

/*-CALCULO DEFESA-*/
function calculoDefesa() {
    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / (100 + parseInt(armaduraGeral.defesaCombate))) * 150;
    armaduraGeral.defesaCombate = armaduraGeral.defesaCombate.toPrecision(3);

    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / 100) * inimigoGeral.danoCombate;
    inimigoGeral.danoCombate = inimigoGeral.danoCombate - armaduraGeral.defesaCombate;

    inimigoGeral.danoCombate = Math.trunc(inimigoGeral.danoCombate);
}
/*-----*/

/*-DEFINIR ESTATISTICA-*/
function definirEstatisticaGeral() {
    legendaView.innerHTML = ``;
    voltarMovesetInicio()

    mainJogadorDerrotado.style.display = 'none';
    mainInimigoDerrotado.style.display = 'none';

    jogador.vidaCombate = jogador.vida, jogador.energiaCombate = jogador.energia, jogador.manaCombate = jogador.mana;
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100;

    armaGeral.danoCombate = armaGeral.dano;

    inimigoGeral.porcentagem = 0, inimigoGeral.vidaPorcentagem = 100, inimigoGeral.energiaPorcentagem = 100, inimigoGeral.manaPorcentagem = 100;

    inimigoGeral.vidaCombate = inimigoGeral.vida, inimigoGeral.energiaCombate = inimigoGeral.energia, inimigoGeral.manaCombate = inimigoGeral.mana;
}
/*-----*/