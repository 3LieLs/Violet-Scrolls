/*-----*/
function botaoFugirClick() {
    let x = Math.floor(Math.random() * 100) + 1

    if (x > 0) {
        inicioRodada();
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} fugiu da batalha`);
        fimRodada();

        setTimeout(function () {
            mainHud.style.display = 'none';
            mainInimigoHud.style.display = 'none';

            localMapa = 'taverna';
            definirEstatisticaGeral()
            definirMusica();
        }, 2000)
    } else {
        inicioRodada();
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} não conseguiu fugir`);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 3000)
        setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 4000);
    }
}
/*-----*/