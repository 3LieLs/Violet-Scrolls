/*-----*//*-----*//*-----*//*-----*//*-----*/
var buffElfoTrueFalse = false, buffOrcTrueFalse = false, buffVampiroTrueFalse = false;

var buffDanoTrueFalse = { jogador: false, inimigo: false, },
    debuffSangramentoTrueFalse = { jogador: false, inimigo: false, },
    debuffChamasTrueFalse = { jogador: false, inimigo: false, },
    debuffCongelamentoTrueFalse = { jogador: false, inimigo: false, },
    debuffEletricidadeTrueFalse = { jogador: false, inimigo: false, };
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-BUFF VIDA REGEN-*//*-BUFF VIDA REGEN-*//*-BUFF VIDA REGEN-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarBuffVidaRegenJogador() {
    if (rodada == rodadaBuffVidaRegenMax.jogador) {
        buffVidaRegen.jogador = false;
    }
}
function desaplicarBuffVidaRegenJogador() {
    if (buffVidaRegen.jogador == true) {
        if (jogador.vidaCombate + vidaGanha > jogador.vidaBase) {
            jogador.vidaCombate = jogador.vidaBase;
            jogador.vidaPorcentagem = 100;

        } else {
            jogador.vidaCombate += vidaGanha;

            jogador.porcentagem = 100 - ((vidaGanha / jogador.vidaBase) * 100)
            jogador.porcentagem = 100 - jogador.porcentagem
            jogador.porcentagem = jogador.porcentagem.toPrecision(2)

            jogador.vidaPorcentagem = parseInt(jogador.vidaPorcentagem) + parseInt(jogador.porcentagem)
        }
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${vidaGanha} de vida`);

        jogadorCombateHud();
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarBuffVidaRegenInimigo() {
    if (rodada == rodadaBuffVidaRegenMax.inimigo) {
        buffVidaRegen.inimigo = false;
    }
}
function desaplicarBuffVidaRegenInimigo() {
    if (buffVidaRegen.inimigo == true) {
        if (inimigoGeral.vidaCombate + vidaGanha > inimigoGeral.vidaBase) {
            inimigoGeral.vidaCombate = inimigoGeral.vidaBase;
            inimigoGeral.vidaPorcentagem = 100;

        } else {
            inimigoGeral.vidaCombate += vidaGanha;

            inimigoGeral.porcentagem = 100 - ((vidaGanha / inimigoGeral.vidaBase) * 100)
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

            inimigoGeral.vidaPorcentagem = parseInt(inimigoGeral.vidaPorcentagem) + parseInt(inimigoGeral.porcentagem)
        }
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} recuperou ${vidaGanha} de vida`);

        inimigoCombateHud();
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/


/*-BUFF DANO-*//*-BUFF DANO-*//*-BUFF DANO-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarBuffDanoJogador() {
    if (rodada == rodadaBuffDanoMax.jogador) {
        buffDano.jogador = false;
    }
    if (buffDano.jogador == true) {
        armaGeral.danoCombate += Math.ceil(armaGeral.danoBase * magiaBuffGeral.danoBuff);
        buffDanoTrueFalse.jogador = true
    }
}
function desaplicarBuffDanoJogador() {
    if (buffDano.jogador == true) {
        if (buffDanoTrueFalse.jogador == true) {
            armaGeral.danoCombate += Math.ceil(armaGeral.danoBase * magiaBuffGeral.danoBuff);
            buffDanoTrueFalse.jogador = false
        }
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarBuffDanoInimigo() {
    if (rodada == rodadaBuffDanoMax.inimigo) {
        buffDano.inimigo = false;
    }
    if (buffDano.inimigo == true) {
        inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * magiaBuffGeral.danoBuff);
        buffDanoTrueFalse.inimigo = true
    }
}
function desaplicarBuffDanoInimigo() {
    if (buffDano.inimigo == true) {
        if (buffDanoTrueFalse.inimigo == true) {
            inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * magiaBuffGeral.danoBuff);
            buffDanoTrueFalse.inimigo = false
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF VENENO-*//*-DEBUFF VENENO-*//*-DEBUFF VENENO-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarDebuffVenenoJogador() {
    if (rodada == rodadaDebuffVenenoMax.jogador) {
        debuffVeneno.jogador = false;
    }
}
function desaplicarDebuffVenenoJogador() {
    if (debuffVeneno.jogador == true) {
        jogadorAtingidoDano(Math.ceil(jogador.vidaBase * 0.25));
        jogadorCombateHud();
        inimigoCombateHud()
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${Math.ceil(jogador.vidaBase * 0.25)} de vida por causa do veneno`);
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarDebuffVenenoInimigo() {
    if (rodada == rodadaDebuffVenenoMax.inimigo) {
        debuffVeneno.inimigo = false;
    }
}
function desaplicarDebuffVenenoInimigo() {
    if (debuffVeneno.inimigo == true) {
        inimigoAtingidoDano(Math.ceil(inimigoGeral.vidaBase * 0.25));
        inimigoCombateHud();
        inimigoCombateHud()
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${Math.ceil(inimigoGeral.vidaBase * 0.25)} de vida por causa do veneno`);
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF SANGRAMENTO-*//*-DEBUFF SANGRAMENTO-*//*-DEBUFF SANGRAMENTO-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarDebuffSangramentoJogador() {
    if (rodada == rodadaDebuffSangramentoMax.jogador) {
        debuffSangramento.jogador = false;
    }

    if (debuffSangramento.jogador == true && rodada < rodadaDebuffSangramentoMax.jogador) {
        inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * 0.15);
        debuffSangramentoTrueFalse.jogador = true;
    }
}
function desaplicarDebuffSangramentoJogador() {
    if (debuffSangramento.jogador == true) {
        jogadorAtingidoDano(Math.ceil(jogador.vidaBase * 0.15));
        jogadorCombateHud();
        inimigoCombateHud()
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${Math.ceil(jogador.vidaBase * 0.15)} de vida por causa do sangramento`);

        if (debuffSangramentoTrueFalse.jogador == true) {
            inimigoArmaGeral.danoCombate -= Math.ceil(inimigoArmaGeral.danoBase * 0.15);
            debuffSangramentoTrueFalse.jogador = false;
        }
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarDebuffSangramentoInimigo() {
    if (rodada == rodadaDebuffSangramentoMax.inimigo) {
        debuffSangramento.inimigo = false;
    }

    if (debuffSangramento.inimigo == true && rodada < rodadaDebuffSangramentoMax.inimigo) {
        armaGeral.danoCombate += Math.ceil(armaGeral.danoBase * 0.15);
        debuffSangramentoTrueFalse.inimigo = true;
    }
}
function desaplicarDebuffSangramentoInimigo() {
    if (debuffSangramento.inimigo == true) {
        inimigoAtingidoDano(Math.ceil(inimigoGeral.vidaBase * 0.15));
        jogadorCombateHud();
        inimigoCombateHud()
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${Math.ceil(inimigoGeral.vidaBase * 0.15)} de vida por causa do sangramento`);

        if (debuffSangramentoTrueFalse.inimigo == true) {
            armaGeral.danoCombate -= Math.ceil(armaGeral.danoBase * 0.15);
            debuffSangramentoTrueFalse.inimigo = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF CHAMAS-*//*-DEBUFF CHAMAS-*//*-DEBUFF CHAMAS-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarDebuffChamasJogador() {
    if (rodada == rodadaDebuffChamasMax.jogador) {
        debuffChamas.jogador = false;
    }
    if (debuffChamas.jogador == true) {
        armaGeral.danoCombate -= Math.ceil(armaGeral.danoBase * 0.15);
        debuffChamasTrueFalse.jogador = true;
    }
}
function desaplicarDebuffChamasJogador() {
    if (debuffChamas.jogador == true) {
        jogadorAtingidoDano(Math.ceil(jogador.vidaBase * 0.10));
        jogadorCombateHud();
        inimigoCombateHud()

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${Math.ceil(jogador.vidaBase * 0.10)} de vida por causa das chamas`);

        if (debuffChamasTrueFalse.jogador == true) {
            armaGeral.danoCombate += Math.ceil(armaGeral.danoBase * 0.15);
            debuffChamasTrueFalse.jogador = false;
        }
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarDebuffChamasInimigo() {
    if (rodada == rodadaDebuffChamasMax.inimigo) {
        debuffChamas.inimigo = false;
    }
    if (debuffChamas.inimigo == true) {
        inimigoArmaGeral.danoCombate -= Math.ceil(inimigoArmaGeral.danoBase * 0.15);
        debuffChamasTrueFalse.inimigo = true;
    }
}
function desaplicarDebuffChamasInimigo() {
    if (debuffChamas.inimigo == true) {
        inimigoAtingidoDano(Math.ceil(inimigoGeral.vidaBase * 0.10));
        jogadorCombateHud();
        inimigoCombateHud()

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${Math.ceil(inimigoGeral.vidaBase * 0.10)} de vida por causa das chamas`);

        if (debuffChamasTrueFalse.inimigo == true) {
            inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * 0.15);
            debuffChamasTrueFalse.inimigo = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF CONGELAMNETO-*//*-DEBUFF CONGELAMNETO-*//*-DEBUFF CONGELAMNETO-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarDebuffCongelamentoJogador() {
    if (rodada == rodadaDebuffCongelamentoMax.jogador) {
        debuffCongelamento.jogador = false
    }
    if (debuffCongelamento.jogador == true) {
        armaGeral.energiaCustoCombate += Math.ceil(armaGeral.energiaCusto * 0.25);
        debuffCongelamentoTrueFalse.jogador = true;
    }
}
function desaplicarDebuffCongelamentoJogador() {
    if (debuffCongelamento.jogador == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} se sente mais pesado devido ao congelamento`);
        if (debuffCongelamentoTrueFalse.jogador == true) {
            armaGeral.energiaCustoCombate -= Math.ceil(armaGeral.energiaCusto * 0.25);
            debuffCongelamentoTrueFalse.jogador = false;
        }
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarDebuffCongelamentoInimigo() {
    if (rodada == rodadaDebuffCongelamentoMax.inimigo) {
        debuffCongelamento.inimigo = false
    }
    if (debuffCongelamento.inimigo == true) {
        inimigoArmaGeral.energiaCustoCombate += Math.ceil(inimigoArmaGeral.energiaCusto * 0.25);
        debuffCongelamentoTrueFalse.inimigo = true;
    }
}
function desaplicarDebuffCongelamentoInimigo() {
    if (debuffCongelamento.inimigo == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} se sente mais pesado devido ao congelamento`);
        if (debuffCongelamentoTrueFalse.inimigo == true) {
            inimigoArmaGeral.energiaCustoCombate -= Math.ceil(inimigoArmaGeral.energiaCusto * 0.25);
            debuffCongelamentoTrueFalse.inimigo = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF ELETRICIDADE-*//*-DEBUFF ELETRICIDADE-*//*-DEBUFF ELETRICIDADE-*/
/*JOGADOR*//*JOGADOR*//*JOGADOR*/
function aplicarDebuffEletricidadeJogador() {
    if (rodada == rodadaDebuffEletricidadeMax.jogador) {
        debuffEletricidade.jogador = false
    }
    if (debuffEletricidade.jogador == true) {
        armaGeral.manaCusto += Math.ceil(armaGeral.manaCusto * 0.25)
        magiaDanoGeral.manaCusto += Math.ceil(magiaDanoGeral.manaCusto * 0.25)
        magiaRecuperacaoGeral.manaCusto += Math.ceil(magiaRecuperacaoGeral.manaCusto * 0.25)
        magiaBuffGeral.manaCusto += Math.ceil(magiaBuffGeral.manaCusto * 0.25)

        debuffEletricidadeTrueFalse.jogador = true;
    }
}
function desaplicarDebuffEletricidadeJogador() {
    if (debuffEletricidade.jogador == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} não consegue se concentrar direito devido a eletricidade`);

        if (debuffEletricidadeTrueFalse.jogador == true) {
            armaGeral.manaCustoCombate -= Math.ceil(armaGeral.manaCusto * 0.25)
            magiaDanoGeral.manaCustoCombate -= Math.ceil(magiaDanoGeral.manaCusto * 0.25)
            magiaRecuperacaoGeral.manaCustoCombate -= Math.ceil(magiaRecuperacaoGeral.manaCusto * 0.25)
            magiaBuffGeral.manaCustoCombate -= Math.ceil(magiaBuffGeral.manaCusto * 0.25)

            debuffEletricidadeTrueFalse.jogador = false;
        }
    }
}

/*INIMIGO*//*INIMIGO*//*INIMIGO*/
function aplicarDebuffEletricidadeInimigo() {
    if (rodada == rodadaDebuffEletricidadeMax.inimigo) {
        debuffEletricidade.inimigo = false
    }
    if (debuffEletricidade.inimigo == true) {
        inimigoArmaGeral.manaCustoCombate += Math.ceil(inimigoArmaGeral.manaCusto * 0.25)

        debuffEletricidadeTrueFalse.inimigo = true;
    }
}
function desaplicarDebuffEletricidadeInimigo() {
    if (debuffEletricidade.inimigo == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} não consegue se concentrar direito devido a eletricidade`);

        if (debuffEletricidadeTrueFalse.inimigo == true) {
            inimigoArmaGeral.manaCustoCombate -= Math.ceil(inimigoArmaGeral.manaCusto * 0.25)

            debuffEletricidadeTrueFalse.inimigo = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/




/*-PODER ORC-*//*-PODER ORC-*//*-PODER ORC-*/
function aplicarPoderOrc() {
    if (rodada == rodadaPoderOrcMax) {
        buffOrc = false;
    }
    if (buffOrc == true) {
        danoPoderOrc = armaGeral.danoBase * 1;
        danoPoderOrc = Math.ceil(danoPoderOrc);
        armaGeral.danoCombate += danoPoderOrc;
        buffOrcTrueFalse = true;
    }
}
function desaplicarPoderOrc() {
    if (buffOrc == true) {
        if (jogador.energiaCombate + Math.ceil(jogador.energiaBase * 0.25) > jogador.energiaBase) {
            jogador.energiaCombate = jogador.energiaBase;
            jogador.energiaPorcentagem = 100;

        } else {
            jogador.energiaCombate += Math.ceil(jogador.energiaBase * 0.25);

            jogador.porcentagem = 100 - ((Math.ceil(jogador.energiaBase * 0.25) / jogador.energiaBase) * 100);
            jogador.porcentagem = 100 - jogador.porcentagem;
            jogador.porcentagem = jogador.porcentagem.toPrecision(2);

            jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem);
        }
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} recuperou ${Math.ceil(jogador.energiaBase * 0.25)} de energia`);

        jogadorCombateHud();

        if (buffOrcTrueFalse == true) {
            armaGeral.danoCombate -= danoPoderOrc;
            buffOrcTrueFalse.jogador = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/