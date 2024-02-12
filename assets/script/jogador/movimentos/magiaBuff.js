/*-----*/
var rodadaBuffMax = 0, danoAumentado = 0, vidaGanha = 0
/*-----*/


/*-DESCANSAR-*/
function magiaBuffUso() {
    magiaBuffGeral.ativo = true
    rodadaBuffMax = parseInt(rodada) + parseInt(magiaBuffGeral.duracao)

    vidaGanha = magiaBuffGeral.vidaRegen;

    armaGeral.danoCombate += magiaBuffGeral.danoBuff

    if (magiaRecuperacaoGeral.classe == 'Mágico') {
        jogador.manaCombate = jogador.manaCombate - magiaBuffGeral.manaCusto

        jogador.porcentagem = 100 - ((magiaBuffGeral.manaCusto / jogador.manaBase) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
        }

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaBuffGeral.nome}<br>Mana gasta: ${magiaBuffGeral.manaCusto}`)

        if (magiaBuffGeral.danoBuff > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>${magiaBuffGeral.nome} aumentou o dano de ${jogador.nome} em ${magiaBuffGeral.danoBuff}`)
        }
        if (magiaBuffGeral.vidaBuff > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>${magiaBuffGeral.nome} aumentou a vida de ${jogador.nome} em ${magiaBuffGeral.vidaBuff}`)
        }
        if (magiaBuffGeral.vidaRegen > 0) {
            legendaView.insertAdjacentHTML('beforeend', `<br>${magiaBuffGeral.nome} criou uma regeneração de vida em ${jogador.nome} de ${magiaBuffGeral.vidaRegen} vida`)
        }
    }

    jogadorCombateHud()
    inimigoCombateHud()
}


function botaoMagiaBuffClick() {
    if (magiaBuffGeral.classe == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - magiaBuffGeral.energiaCusto >= 0 || magiaBuffGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - magiaBuffGeral.manaCusto >= 0) {
        vezUsuario = false;

        inicioRodada();

        setTimeout(magiaBuffUso, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 3000)
        //setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 4000);
    }

    if (magiaBuffGeral.classe == 'Físico' && jogador.energiaCombate <= 0 || jogador.energiaCombate - magiaBuffGeral.energiaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (magiaBuffGeral.classe == 'Mágico' && jogador.manaCombate <= 0 || jogador.manaCombate - magiaBuffGeral.manaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/
function efeitoBuff() {

}
/*-----*/