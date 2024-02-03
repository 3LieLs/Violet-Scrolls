/*-DEFENDER-*/
var danoBloqueado = 0;

function bloquearUso()
{
    legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada = rodada + 1}<br><br> ${jogador.nome} Assumiu uma postura defensiva<br><br>`);

    danoBloqueado = inimigoGeral.danoCombate;
    inimigoGeral.danoCombate = inimigoGeral.danoCombate / 2;
}
function bloquearDesuso()
{
    inimigoGeral.danoCombate = danoBloqueado;
}

function botaoBloquearClick()
{
    vezUsuario = false;

    setTimeout(bloquearUso, 0);
    setTimeout(bloquearDesuso, 3000);
    setTimeout(acaoIntervalo, 2000);

    setTimeout(inimigoAtaque, 2000);
    setTimeout(jogadorCombateHud, 2000);
    setTimeout(inimigoCombateHud, 2000);
    setTimeout(inimigoDerrotado, 2000);
    setTimeout(jogadorDerrotado, 3000);
}
/*-----*/