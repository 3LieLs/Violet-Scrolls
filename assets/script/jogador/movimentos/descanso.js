/*-DESCANSAR-*/
function descansoUso()
{
    if (jogador.energiaCombate + armaduraGeral.energiaRecuperacao > jogador.energia)
    {
        jogador.energiaCombate = jogador.energia;
        jogador.energiaPorcentagem = 100;

    } 
    else 
    {
        jogador.energiaCombate = jogador.energiaCombate + armaduraGeral.energiaRecuperacao;

        jogador.porcentagem = 100 - ((armaduraGeral.energiaRecuperacao / jogador.energia) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem);
    }

    legendaView.insertAdjacentHTML('beforeend', `${jogador.nome} utilizou Descanso<br>Energia recuperado: ${armaduraGeral.energiaRecuperacao}<br><br>`);

    jogadorCombateHud();
    inimigoCombateHud();
}


function botaoDescansoClick()
{
    vezUsuario = false;

    mudarRodada();
    setTimeout(descansoUso, 0);
    setTimeout(acaoIntervalo, 2000);

    setTimeout(inimigoAtaque, 2000);
    setTimeout(jogadorCombateHud, 2000);
    setTimeout(inimigoCombateHud, 2000);
    setTimeout(inimigoDerrotado, 2000);
    setTimeout(jogadorDerrotado, 3000);
    setTimeout(buff_debuff, 3000)
}
/*-----*/