/*-----*//*-----*//*-----*//*-----*//*-----*/
var danoGanho = 0, buffElfoTrueFalse = false, buffOrcTrueFalse = false, buffVampiroTrueFalse = false;

var debuffSangramentoVal = 0, debuffChamasVal = 0, debuffCongelamentoVal = 0, debuffEletricidadeVal = 0,
    buffDanoTrueFalse = {
        jogador: false, inimigo: false,
    },
    debuffSangramentoTrueFalse = {
        jogador: false, inimigo: false,
    },
    debuffChamasTrueFalse = {
        jogador: false, inimigo: false,
    },
    debuffCongelamentoTrueFalse = {
        jogador: false, inimigo: false,
    },
    debuffEletricidadeTrueFalse = {
        jogador: false, inimigo: false,
    };
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarBuffDano(rodadaBuffDanoMax, buffDano, buffDanoTrueFalse, userArma) {
    if (rodada == rodadaBuffDanoMax) {
        buffDano = false;
    }
    if (buffDano == true) {
        danoGanho = userArma.danoCombate * magiaBuffGeral.danoBuff;
        danoGanho = Math.round(danoGanho);
        userArma.danoCombate += danoGanho;
        buffDanoTrueFalse = true
    }
}
function desaplicarBuffDano(buffDano, buffDanoTrueFalse, userArma) {
    if (buffDano == true) {
        if (buffDanoTrueFalse.jogador == true) {
            userArma.danoCombate -= danoGanho;
            buffDanoTrueFalse = false
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarDebuffSangramento(rodadaDebuffSangramentoMax, debuffSangramento, debuffSangramentoTrueFalse, userArma) {
    if (debuffSangramento == true && rodada < rodadaDebuffSangramentoMax) {
        debuffSangramentoVal = userArma.danoBase * 0.15;
        debuffSangramentoVal = Math.round(debuffSangramentoVal);
        userArma.danoCombate += debuffSangramentoVal;
        debuffSangramentoTrueFalse = true;
    } else {
        debuffSangramento = false;
    }
}
function desaplicarDebuffSangramento(debuffSangramento, debuffSangramentoTrueFalse, userNome, userVida, userArma, userAtingido) {
    if (debuffSangramento == true) {
        sangramentoDano = userVida * 0.10;
        sangramentoDano = Math.round(sangramentoDano);

        userAtingido(sangramentoDano);
        jogadorCombateHud();
        inimigoCombateHud()
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${userNome} perdeu ${sangramentoDano} de vida por causa do sangramento`);


        if (debuffSangramentoTrueFalse == true) {
            userArma.danoCombate -= debuffSangramentoVal;
            debuffSangramentoTrueFalse = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarDebuffChamas(rodadaDebuffChamasMax, debuffChamas, debuffChamasTrueFalse, userArma) {
    if (rodada == rodadaDebuffChamasMax) {
        debuffChamas = false;
    }
    if (debuffChamas == true) {
        debuffChamasVal = userArma.danoBase * 0.15;
        debuffChamasVal = Math.round(debuffChamasVal);
        userArma.danoCombate -= debuffChamasVal;
        debuffChamasTrueFalse = true;
    }
}
function desaplicarDebuffChamas(debuffChamas, debuffChamasTrueFalse, userNome, userVida, userArma, userAtingido) {
    if (debuffChamas == true) {
        chamasDano = userVida * 0.10;
        chamasDano = Math.round(chamasDano);
        userAtingido(chamasDano);
        jogadorCombateHud();
        inimigoCombateHud()

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${userNome} perdeu ${chamasDano} de vida por causa das chamas`);

        if (debuffChamasTrueFalse == true) {
            userArma.danoCombate += debuffChamasVal;
            debuffChamasTrueFalse = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarDebuffCongelamento(rodadaDebuffCongelamentoMax, debuffCongelamento, debuffCongelamentoTrueFalse, userArma) {
    if (rodada == rodadaDebuffCongelamentoMax) {
        debuffCongelamento = false
    }
    if (debuffCongelamento == true) {
        debuffCongelamentoVal = userArma.energiaCusto * 0.25;
        debuffCongelamentoVal = Math.round(debuffCongelamentoVal);
        userArma.energiaCustoCombate += debuffCongelamentoVal;
        debuffCongelamentoTrueFalse = true;
    }
}
function desaplicarDebuffCongelamento(debuffCongelamento, debuffCongelamentoTrueFalse, userNome, userArma) {
    if (debuffCongelamento == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${userNome} se sente mais pesado devido ao congelamento`);
        if (debuffCongelamentoTrueFalse == true) {
            userArma.energiaCustoCombate -= debuffCongelamentoVal;
            debuffCongelamentoTrueFalse = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function aplicarDebuffEletricidade(rodadaDebuffEletricidadeMax, debuffEletricidade, debuffEletricidadeTrueFalse, userArma, userMagiaDano, userMagiaRecuperacao, userMagiaBuff) {
    if (rodada == rodadaDebuffEletricidadeMax) {
        debuffEletricidade = false
    }
    if (debuffEletricidade == true) {
        let w = userArma.manaCusto * 0.25
        let x = userMagiaDano.manaCusto * 0.25
        let y = userMagiaRecuperacao.manaCusto * 0.25
        let z = userMagiaBuff.manaCusto * 0.25
        w = Math.round(w)
        x = Math.round(x)
        y = Math.round(y)
        z = Math.round(z)

        userArma.manaCusto += w
        userMagiaDano.manaCusto += x
        userMagiaRecuperacao.manaCusto += y
        userMagiaBuff.manaCusto += z

        debuffEletricidadeTrueFalse = true;
    }
}
function desaplicarDebuffEletricidade(debuffEletricidade, debuffEletricidadeTrueFalse, userNome, userArma, userMagiaDano, userMagiaRecuperacao, userMagiaBuff) {
    if (debuffEletricidade == true) {
        legendaView.insertAdjacentHTML('beforeend', `<br><br>${userNome} não consegue se concentrar direito devido a eletricidade`);

        if (debuffEletricidadeTrueFalse == true) {
            let w = userArma.manaCusto * 0.25;
            let x = userMagiaDano.manaCusto * 0.25;
            let y = userMagiaRecuperacao.manaCusto * 0.25;
            let z = userMagiaBuff.manaCusto * 0.25;
            w = Math.round(w);
            x = Math.round(x);
            y = Math.round(y);
            z = Math.round(z);

            userArma.manaCusto -= w;
            userMagiaDano.manaCusto -= x;
            userMagiaRecuperacao.manaCusto -= y;
            userMagiaBuff.manaCusto -= z;
            debuffEletricidadeTrueFalse.jogador = false;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/