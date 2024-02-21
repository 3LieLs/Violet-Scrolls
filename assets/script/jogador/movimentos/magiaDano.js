/*-ATAQUE FRACO-*/
function MagiaDanoUso() {
    aplicarFraquezaResistenciaInimigo()

    if (inimigoGeral.vidaCombate - magiaDanoGeral.danoCombate < 0) {
        inimigoGeral.vidaCombate = 0
        inimigoGeral.vidaPorcentagem = 0.1

    } else {
        inimigoGeral.vidaCombate = inimigoGeral.vidaCombate - magiaDanoGeral.danoCombate

        inimigoGeral.porcentagem = 100 - ((magiaDanoGeral.danoCombate / inimigoGeral.vidaBase) * 100)
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

        inimigoGeral.vidaPorcentagem = inimigoGeral.vidaPorcentagem - inimigoGeral.porcentagem
    }

    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${magiaDanoGeral.nome}<br>Dano causado: ${magiaDanoGeral.danoCombate}<br>Mana gasta: ${magiaDanoGeral.manaCusto}`)

    jogador.manaCombate = jogador.manaCombate - magiaDanoGeral.manaCusto

    jogador.porcentagem = 100 - ((magiaDanoGeral.manaCusto / jogador.manaBase) * 100)
    jogador.porcentagem = 100 - jogador.porcentagem
    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

    jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

    if (jogador.manaCombate < 0) {
        jogador.manaCombate = 0
    }


    if (magiaDanoGeral.debuff == 'chamas') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffChamas.inimigo == false) {
            rodadaDebuffChamasMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffChamas.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} ficou em chamas`);
        }
    }

    if (magiaDanoGeral.debuff == 'congelado') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffCongelado.inimigo == false) {
            rodadaDebuffCongeladoMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffCongelado.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} ficou em congelado`);
        }
    }

    if (magiaDanoGeral.debuff == 'eletricidade') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffEletricidade.inimigo == false) {
            rodadaDebuffEletricidadeMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffEletricidade.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} ficou em eletricidade`);
        }
    }

    jogadorCombateHud()
    inimigoCombateHud()

    desaplicarFraquezaResistenciaInimigo()
}

function botaoMagiaDanoClick() {
    if (magiaDanoGeral.classe == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - magiaDanoGeral.energiaCusto >= 0 || magiaDanoGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - magiaDanoGeral.manaCusto >= 0) {
        inicioRodada();

        setTimeout(MagiaDanoUso, 0);
        setTimeout(inimigoDerrotado, 2000);

        setTimeout(inimigoAtaque, 2000);
        setTimeout(jogadorCombateHud, 2000);
        setTimeout(inimigoCombateHud, 2000);
        setTimeout(jogadorDerrotado, 3000);

        setTimeout(buff_debuff_jogador, 3000)
        setTimeout(buff_debuff_inimigo, 3500)

        setTimeout(fimRodada, 4000);
    }

    if (magiaDanoGeral.classe == 'Físico' && jogador.energiaCombate <= 0 || jogador.energiaCombate - magiaDanoGeral.energiaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem energia suficiente para esta ação';
        semEnergiaMana.style.color = 'green';

        semEnergiaManaVisibilidade();
    }

    if (magiaDanoGeral.classe == 'Mágico' && jogador.manaCombate <= 0 || jogador.manaCombate - magiaDanoGeral.manaCusto < 0) {
        semEnergiaMana.innerHTML = 'Você está sem mana suficiente para esta ação';
        semEnergiaMana.style.color = 'blue';

        semEnergiaManaVisibilidade();
    }
}
/*-----*/