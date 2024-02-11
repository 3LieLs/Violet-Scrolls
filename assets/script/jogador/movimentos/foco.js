/*-FOCAR-*/
function focoUso()
{
    if (jogador.manaCombate + armaduraGeral.manaRecuperacao > jogador.mana)
    {
        jogador.manaCombate = jogador.mana;
        jogador.manaPorcentagem = 100;

    }
    else
    {
        jogador.manaCombate = jogador.manaCombate + armaduraGeral.manaRecuperacao;

        jogador.porcentagem = 100 - ((armaduraGeral.manaRecuperacao / jogador.mana) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem);
    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou Focar<br>Mana recuperado: ${armaduraGeral.manaRecuperacao}`);

    jogadorCombateHud();
    inimigoCombateHud();
}

function botaoFocoClick()
{
    inicioRodada();

    setTimeout(focoUso, 0);

    setTimeout(inimigoAtaque, 2000);
    setTimeout(jogadorCombateHud, 2000);
    setTimeout(inimigoCombateHud, 2000);
    setTimeout(jogadorDerrotado, 3000);

    setTimeout(buff_debuff_jogador, 3000)
    //setTimeout(buff_debuff_inimigo, 3500)

    setTimeout(fimRodada, 4000);
}
/*-----*/