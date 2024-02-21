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
    /*-BUFF DANO-*/
    if (rodada == rodadaBuffDanoMax.jogador && buffDano.jogador == true) {
        buffDano.jogador = false

        let x = armaGeral.danoCombate * magiaBuffGeral.danoBuff
        x = Math.round(x)
        armaGeral.danoCombate -= x
    }
    /*-----*/

    /*-BUFF VIDA REGEN-*/
    if (rodada < rodadaBuffVidaRegenMax.jogador && buffVidaRegen.jogador == true) {
        if (vidaGanha > 0) {
            jogador.vidaCombate += vidaGanha;

            jogador.porcentagem = 100 - ((vidaGanha / jogador.vidaBase) * 100)
            jogador.porcentagem = 100 - jogador.porcentagem
            jogador.porcentagem = jogador.porcentagem.toPrecision(2)

            jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) + parseInt(jogador.porcentagem)

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${vidaGanha} de vida`);
        }

        jogadorCombateHud();
        inimigoCombateHud();
    } else {
        buffVidaRegen.jogador = false
    }
    /*-----*/



    /*-DEBUFF VENENO-*/
    if (rodada < rodadaDebuffVenenoMax.jogador && debuffVeneno.jogador == true) {
        venenoDano = jogador.vidaBase * 0.15
        venenoDano = Math.round(venenoDano)

        jogador.vidaCombate -= venenoDano;

        jogador.porcentagem = 100 - ((venenoDano / jogador.vidaBase) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) - parseInt(jogador.porcentagem)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${venenoDano} de vida por causa do veneno`);

        jogadorCombateHud();
        inimigoCombateHud();
    } else {
        debuffVeneno.jogador = false
    }
    /*-----*/

    /*-DEBUFF CHAMAS-*/
    if (rodada < rodadaDebuffChamasMax.jogador && debuffChamas.jogador == true) {
        let x = armaGeral.danoCombate * 0.10
        x = Math.round(x)
        armaGeral.danoCombate -= x


        chamasDano = jogador.vidaBase * 0.10
        chamasDano = Math.round(chamasDano)

        jogador.vidaCombate -= chamasDano;

        jogador.porcentagem = 100 - ((chamasDano / jogador.vidaBase) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) - parseInt(jogador.porcentagem)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${chamasDano} de vida por causa das chamas`);

        jogadorCombateHud();
        inimigoCombateHud();
    }
    if (rodada == rodadaDebuffChamasMax.jogador && debuffChamas.jogador == true) {
        debuffChamas.jogador = false

        let x = armaGeral.danoCombate * 0.10
        Math.round(x)
        armaGeral.danoCombate += x
    }
    /*-----*/

    /*-DEBUFF CONGELADO-*/
    if (rodada < rodadaDebuffCongeladoMax.jogador && debuffCongelado.jogador == true) {
        let x = armaGeral.energiaCusto * 0.25
        x = Math.round(x)
        armaGeral.energiaCusto += x

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} se sente mais pesado devido ao congelamento`);
    }
    if (rodada == rodadaDebuffCongeladoMax && debuffCongelado == true) {
        debuffCongelado.jogador = false

        let x = armaGeral.energiaCusto * 0.25
        Math.round(x)
        armaGeral.energiaCusto -= x
    }
    /*-----*/


    /*-DEBUFF ELETRICIDADE-*/
    if (rodada < rodadaDebuffEletricidadeMax.jogador && debuffEletricidade.jogador == true) {
        let w = armaGeral.manaCusto * 0.25
        let x = magiaDanoGeral.manaCusto * 0.25
        let y = magiaRecuperacaoGeral.manaCusto * 0.25
        let z = magiaBuffGeral.manaCusto * 0.25
        w = Math.round(w)
        x = Math.round(x)
        y = Math.round(y)
        z = Math.round(z)

        armaGeral.manaCusto += w
        magiaDanoGeral.manaCusto += x
        magiaRecuperacaoGeral.manaCusto += y
        magiaBuffGeral.manaCusto += z

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} não consegue se concentrar direito devido a eletricidade`);
    }
    if (rodada == rodadaDebuffEletricidadeMax.jogador && debuffEletricidade.jogador == true) {
        debuffEletricidade.jogador = false

        let w = armaGeral.manaCusto * 0.25
        let x = magiaDanoGeral.manaCusto * 0.25
        let y = magiaRecuperacaoGeral.manaCusto * 0.25
        let z = magiaBuffGeral.manaCusto * 0.25
        Math.round(w)
        Math.round(x)
        Math.round(y)
        Math.round(z)

        armaGeral.manaCusto -= w
        magiaDanoGeral.manaCusto -= x
        magiaRecuperacaoGeral.manaCusto -= y
        magiaBuffGeral.manaCusto -= z
    }
    /*-----*/
    if (jogador.vidaCombate <= 0) {
        jogador.vidaCombate = 0
        jogadorCombateHud()
        setTimeout(jogadorDerrotado, 1000)
    }
}



/*-----*/
function buff_debuff_inimigo() {
    /*-BUFF DANO-*/
    if (rodada == rodadaBuffDanoMax.inimigo && buffDano.inimigo == true) {
        buffDano.inimigo = false

        let x = inimigoArmaGeral.danoCombate * magiaBuffGeral.danoBuff
        Math.round(x)
        inimigoArmaGeral.danoCombate -= x
    }
    /*-----*/

    /*-BUFF VIDA REGEN-*/
    if (rodada < rodadaBuffVidaRegenMax.inimigo && buffVidaRegen.inimigo == true) {
        if (vidaGanha > 0) {
            inimigoGeral.vidaCombate += vidaGanha;

            inimigoGeral.porcentagem = 100 - ((vidaGanha / inimigoGeral.vidaBase) * 100)
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

            inimigoGeral.vidaPorcentagem = parseInt(inimigoGeral.vidaPorcentagem) + parseInt(inimigoGeral.porcentagem)

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} recuperou ${vidaGanha} de vida`);
        }

        jogadorCombateHud();
        inimigoCombateHud();
    } else {
        buffVidaRegen.inimigo = false
    }
    /*-----*/



    /*-DEBUFF VENENO-*/
    if (rodada < rodadaDebuffVenenoMax.inimigo && debuffVeneno.inimigo == true) {
        venenoDano = inimigoGeral.vidaBase * 0.15
        venenoDano = Math.round(venenoDano)

        inimigoGeral.vidaCombate -= venenoDano;

        inimigoGeral.porcentagem = 100 - ((venenoDano / inimigoGeral.vidaBase) * 100)
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

        inimigoGeral.vidaPorcentagem = parseInt(inimigoGeral.vidaPorcentagem) - parseInt(inimigoGeral.porcentagem)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${venenoDano} de vida por causa do veneno`);

        jogadorCombateHud();
        inimigoCombateHud();
    } else {
        debuffVeneno.inimigo = false
    }
    /*-----*/

    /*-DEBUFF CHAMAS-*/
    if (rodada < rodadaDebuffChamasMax.inimigo && debuffChamas.inimigo == true) {
        let x = inimigoArmaGeral.danoCombate * 0.10
        x = Math.round(x)
        inimigoArmaGeral.danoCombate -= x

        chamasDano = inimigoGeral.vidaBase * 0.10
        chamasDano = Math.round(chamasDano)

        inimigoGeral.vidaCombate -= chamasDano;

        inimigoGeral.porcentagem = 100 - ((chamasDano / inimigoGeral.vidaBase) * 100)
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

        inimigoGeral.vidaPorcentagem = parseInt(inimigoGeral.vidaPorcentagem) - parseInt(inimigoGeral.porcentagem)

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${chamasDano} de vida por causa das chamas`);

        jogadorCombateHud();
        inimigoCombateHud();
    }
    if (rodada == rodadaDebuffChamasMax.inimigo && debuffChamas.inimigo == true) {
        debuffChamas.inimigo = false

        let x = inimigoArmaGeral.danoCombate * 0.10
        x = Math.round(x)
        inimigoArmaGeral.danoCombate += x
    }
    /*-----*/

    /*-DEBUFF CONGELADO-*/
    if (rodada < rodadaDebuffCongeladoMax.inimigo && debuffCongelado.inimigo == true) {
        let x = inimigoArmaGeral.energiaCusto * 0.25
        x = Math.round(x)
        inimigoArmaGeral.energiaCusto += x

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} se sente mais pesado devido ao congelamento`);
    }
    if (rodada == rodadaDebuffCongeladoMax && debuffCongelado == true) {
        debuffCongelado.inimigo = false

        let x = inimigoArmaGeral.energiaCusto * 0.25
        x = Math.round(x)
        inimigoArmaGeral.energiaCusto -= x
    }
    /*-----*/

    /*-DEBUFF ELETRICIDADE-*/
    if (rodada < rodadaDebuffEletricidadeMax.inimigo && debuffEletricidade.inimigo == true) {
        let w = inimigoArmaGeral.manaCusto * 0.25
        let x = magiaDanoGeral.manaCusto * 0.25
        let y = magiaRecuperacaoGeral.manaCusto * 0.25
        let z = magiaBuffGeral.manaCusto * 0.25
        w = Math.round(w)
        x = Math.round(x)
        y = Math.round(y)
        z = Math.round(z)

        inimigoArmaGeral.manaCusto += w
        magiaDanoGeral.manaCusto += x
        magiaRecuperacaoGeral.manaCusto += y
        magiaBuffGeral.manaCusto += z

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} não consegue se concentrar direito devido a eletricidade`);
    }
    if (rodada == rodadaDebuffEletricidadeMax.inimigo && debuffEletricidade.inimigo == true) {
        debuffEletricidade.inimigo = false

        let w = inimigoArmaGeral.manaCusto * 0.25
        let x = magiaDanoGeral.manaCusto * 0.25
        let y = magiaRecuperacaoGeral.manaCusto * 0.25
        let z = magiaBuffGeral.manaCusto * 0.25
        w = Math.round(w)
        x = Math.round(x)
        y = Math.round(y)
        z = Math.round(z)

        inimigoArmaGeral.manaCusto -= w
        magiaDanoGeral.manaCusto -= x
        magiaRecuperacaoGeral.manaCusto -= y
        magiaBuffGeral.manaCusto -= z
    }
    /*-----*/

    if (inimigoGeral.vidaCombate <= 0) {
        inimigoGeral.vidaCombate = 0
        inimigoCombateHud()
        setTimeout(inimigoDerrotado, 1000)
    }
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
    mainJogadorDerrotado.style.display = 'none';
    mainInimigoDerrotado.style.display = 'none';

    inimigoHudEnergia.style.visibility = 'hidden'
    inimigoHudMana.style.visibility = 'hidden'

    jogador.vidaCombate = jogador.vidaBase, jogador.energiaCombate = jogador.energiaBase, jogador.manaCombate = jogador.manaBase;
    jogador.vidaPorcentagem = 100, jogador.energiaPorcentagem = 100, jogador.manaPorcentagem = 100;
    armaGeral.danoCombate = armaGeral.danoBase;

    inimigoGeral.vidaCombate = inimigoGeral.vidaBase, inimigoGeral.energiaCombate = inimigoGeral.energiaBase, inimigoGeral.manaCombate = inimigoGeral.manaBase;
    inimigoGeral.porcentagem = 0, inimigoGeral.vidaPorcentagem = 100, inimigoGeral.energiaPorcentagem = 100, inimigoGeral.manaPorcentagem = 100;
    inimigoArmaGeral.danoCombate = inimigoArmaGeral.danoBase



    legendaView.innerHTML = ``;
    voltarMovesetInicio()
    rodada = 0;

    rodadaBuffDanoMax.jogador = 0, rodadaBuffDanoMax.inimigo = 0
    rodadaBuffVidaRegenMax.jogador = 0, rodadaBuffVidaRegenMax.inimigo = 0
    rodadaBuffDefesaMax.jogador = 0, rodadaBuffDefesaMax.inimigo = 0
    rodadaBuffVidaMax.jogador = 0, rodadaBuffVidaMax.inimigo = 0
    rodadaDebuffVenenoMax.jogador = 0, rodadaDebuffVenenoMax.inimigo = 0
    rodadaDebuffChamasMax.jogador = 0, rodadaDebuffChamasMax.inimigo = 0
    rodadaDebuffCongeladoMax.jogador = 0, rodadaDebuffCongeladoMax.inimigo = 0
    rodadaDebuffEletricidadeMax.jogador = 0, rodadaDebuffEletricidadeMax.inimigo = 0

    buffVidaRegen.jogador = false, buffVidaRegen.inimigo = false
    buffDano.jogador = false, buffDano.inimigo = false
    debuffVeneno.jogador = false, debuffVeneno.inimigo = false
    debuffChamas.jogador = false, debuffChamas.inimigo = false
    debuffCongelado.jogador = false, debuffCongelado.inimigo = false
    debuffEletricidade.jogador = false, debuffEletricidade.inimigo = false
}
/*-----*/