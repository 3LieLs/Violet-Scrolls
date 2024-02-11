/*-MUDAR RODADA-*/
function inicioRodada() {
    vezUsuario = false;
    rodada += 1
    legendaView.insertAdjacentHTML('beforeend', `--------------------------------<br>`)
    legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada}`)
}

function fimRodada() {  
    vezUsuario = true;
    legendaView.insertAdjacentHTML('beforeend', `<br>--------------------------------<br><br>`)
}
/*-----*/



/*-BUFF / DEBUFF-*/
function buff_debuff_jogador() {
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

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${vidaGanha} de vida`);
        }

        jogadorCombateHud();
        inimigoCombateHud();
    }
}
/*-----*/

/*-----*/
function buff_debuff_inimigo() {

}
/*-----*/



/*-CRÍTICO-*/
function critico() {
    let chanceCritico = Math.floor(Math.random() * 100) + 0;

    if (chanceCritico <= 10) {
        armaGeral.danoCombate *= 2;

        inimigoGeral.danoCombate *= 2;
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