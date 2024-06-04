/*-----*//*-----*//*-----*//*-----*//*-----*/
var buffElfoTrueFalse = false, buffOrcTrueFalse = false, buffVampiroTrueFalse = false;

var buffDanoTrueFalse = { jogador: false, inimigo: false, },
    buffDefesaTrueFalse = { jogador: false, inimigo: false, },
    debuffSangramentoTrueFalse = { jogador: false, inimigo: false, },
    debuffChamasTrueFalse = { jogador: false, inimigo: false, },
    debuffCongelamentoTrueFalse = { jogador: false, inimigo: false, },
    debuffEletricidadeTrueFalse = { jogador: false, inimigo: false, };
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-BUFF VIDA REGEN-*//*-BUFF VIDA REGEN-*//*-BUFF VIDA REGEN-*/
function aplicarBuffVidaRegen(user) {
    if (user == 'jogador') {
        if (rodada == rodadaBuffVidaRegenMax.jogador) {
            buffVidaRegen.jogador = false;
        }
    }

    if (user == 'inimigo') {
        if (rodada == rodadaBuffVidaRegenMax.inimigo) {
            buffVidaRegen.inimigo = false;
        }
    }
}

function desaplicarBuffVidaRegen(user) {
    if (user == 'jogador') {
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

    if (user == 'inimigo') {
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
}
/*-----*//*-----*//*-----*//*-----*//*-----*/


/*-BUFF DANO-*//*-BUFF DANO-*//*-BUFF DANO-*/
function aplicarBuffDano(user) {
    if (user == 'jogador') {
        if (rodada == rodadaBuffDanoMax.jogador) {
            buffDano.jogador = false;
        }
        if (buffDano.jogador == true) {
            armaGeral.danoCombate += Math.ceil(armaGeral.danoBase * magiaBuffGeral.danoBuff);
            buffDanoTrueFalse.jogador = true
        }
    }

    if (user == 'inimigo') {
        if (rodada == rodadaBuffDanoMax.inimigo) {
            buffDano.inimigo = false;
        }
        if (buffDano.inimigo == true) {
            inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * magiaBuffGeral.danoBuff);
            buffDanoTrueFalse.inimigo = true
        }
    }
}

function desaplicarBuffDano(user) {
    if (user == 'jogador') {
        if (buffDano.jogador == true) {
            if (buffDanoTrueFalse.jogador == true) {
                armaGeral.danoCombate -= Math.ceil(armaGeral.danoBase * magiaBuffGeral.danoBuff);
                buffDanoTrueFalse.jogador = false
            }
        }
    }

    if (user == 'inimigo') {
        if (buffDano.inimigo == true) {
            if (buffDanoTrueFalse.inimigo == true) {
                inimigoArmaGeral.danoCombate -= Math.ceil(inimigoArmaGeral.danoBase * magiaBuffGeral.danoBuff);
                buffDanoTrueFalse.inimigo = false
            }
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-BUFF DEFESA-*//*-BUFF DEFESA-*//*-BUFF DEFESA-*/
function aplicarBuffDefesa(user) {
    if (user == 'jogador') {
        if (rodada == rodadaBuffDefesaMax.jogador) {
            buffDefesa.jogador = false;
        }
        if (buffDefesa.jogador == true) {
            armaduraGeral.defesaCombate += Math.ceil(parseFloat(armaduraGeral.defesaBase) + parseFloat(magiaBuffGeral.defesaBuff));
            buffDefesaTrueFalse.jogador = true
        }
    }

    if (user == 'inimigo') {

    }
}

function desaplicarBuffDefesa(user) {
    if (user == 'jogador') {
        if (buffDefesa.jogador == true) {
            if (buffDefesaTrueFalse.jogador == true) {
                armaduraGeral.defesaCombate -= Math.ceil(parseFloat(armaduraGeral.defesaBase) + parseFloat(magiaBuffGeral.defesaBuff));
                buffDefesaTrueFalse.jogador = false
            }
        }
    }

    if (user == 'inimigo') {

    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF VENENO-*//*-DEBUFF VENENO-*//*-DEBUFF VENENO-*/
function aplicarDebuffVeneno(user) {
    if (user == 'jogador') {
        if (rodada == rodadaDebuffVenenoMax.jogador) {
            debuffVeneno.jogador = false;
        }
    }

    if (user == 'inimigo') {
        if (rodada == rodadaDebuffVenenoMax.inimigo) {
            debuffVeneno.inimigo = false;
        }
    }
}

function desaplicarDebuffVeneno(user) {
    if (user == 'jogador') {
        if (debuffVeneno.jogador == true) {
            jogadorAtingidoDano(Math.ceil(jogador.vidaBase * 0.25));
            jogadorCombateHud();
            inimigoCombateHud()
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${Math.ceil(jogador.vidaBase * 0.25)} de vida por causa do veneno`);
        }
    }

    if (user == 'inimigo') {
        if (debuffVeneno.inimigo == true) {
            inimigoAtingidoDano(Math.ceil(inimigoGeral.vidaBase * 0.25));
            inimigoCombateHud();
            inimigoCombateHud()
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${Math.ceil(inimigoGeral.vidaBase * 0.25)} de vida por causa do veneno`);
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF SANGRAMENTO-*//*-DEBUFF SANGRAMENTO-*//*-DEBUFF SANGRAMENTO-*/
function aplicarDebuffSangramento(user) {
    if (user == 'jogador') {
        if (rodada == rodadaDebuffSangramentoMax.jogador) {
            debuffSangramento.jogador = false;
        }

        if (debuffSangramento.jogador == true && rodada < rodadaDebuffSangramentoMax.jogador) {
            inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * 0.15);
            debuffSangramentoTrueFalse.jogador = true;
        }
    }

    if (user == 'inimigo') {
        if (rodada == rodadaDebuffSangramentoMax.inimigo) {
            debuffSangramento.inimigo = false;
        }

        if (debuffSangramento.inimigo == true && rodada < rodadaDebuffSangramentoMax.inimigo) {
            armaGeral.danoCombate += Math.ceil(armaGeral.danoBase * 0.15);
            debuffSangramentoTrueFalse.inimigo = true;
        }
    }
}

function desaplicarDebuffSangramento(user) {
    if (user == 'jogador') {
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

    if (user == 'inimigo') {
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
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF CHAMAS-*//*-DEBUFF CHAMAS-*//*-DEBUFF CHAMAS-*/
function aplicarDebuffChamas(user) {
    if (user == 'jogador') {
        if (rodada == rodadaDebuffChamasMax.jogador) {
            debuffChamas.jogador = false;
        }
        if (debuffChamas.jogador == true) {
            armaGeral.danoCombate -= Math.ceil(armaGeral.danoBase * 0.15);
            debuffChamasTrueFalse.jogador = true;
        }
    }

    if (user == 'inimigo') {
        if (rodada == rodadaDebuffChamasMax.inimigo) {
            debuffChamas.inimigo = false;
        }
        if (debuffChamas.inimigo == true) {
            inimigoArmaGeral.danoCombate -= Math.ceil(inimigoArmaGeral.danoBase * 0.15);
            debuffChamasTrueFalse.inimigo = true;
        }
    }
}

function desaplicarDebuffChamas(user) {
    if (user == 'jogador') {
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

    if (user == 'inimigo') {
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
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF CONGELAMNETO-*//*-DEBUFF CONGELAMNETO-*//*-DEBUFF CONGELAMNETO-*/
function aplicarDebuffCongelamento(user) {
    if (user == 'jogador') {
        if (rodada == rodadaDebuffCongelamentoMax.jogador) {
            debuffCongelamento.jogador = false
        }
        if (debuffCongelamento.jogador == true) {
            armaGeral.energiaCustoCombate += Math.ceil(armaGeral.energiaCusto * 0.25);
            debuffCongelamentoTrueFalse.jogador = true;
        }
    }

    if (user == 'inimigo') {
        if (rodada == rodadaDebuffCongelamentoMax.inimigo) {
            debuffCongelamento.inimigo = false
        }
        if (debuffCongelamento.inimigo == true) {
            inimigoArmaGeral.energiaCustoCombate += Math.ceil(inimigoArmaGeral.energiaCusto * 0.25);
            debuffCongelamentoTrueFalse.inimigo = true;
        }
    }

}

function desaplicarDebuffCongelamento(user) {
    if (user == 'jogador') {
        if (debuffCongelamento.jogador == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} se sente mais pesado devido ao congelamento`);
            if (debuffCongelamentoTrueFalse.jogador == true) {
                armaGeral.energiaCustoCombate -= Math.ceil(armaGeral.energiaCusto * 0.25);
                debuffCongelamentoTrueFalse.jogador = false;
            }
        }
    }

    if (user == 'inimigo') {
        if (debuffCongelamento.inimigo == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} se sente mais pesado devido ao congelamento`);
            if (debuffCongelamentoTrueFalse.inimigo == true) {
                inimigoArmaGeral.energiaCustoCombate -= Math.ceil(inimigoArmaGeral.energiaCusto * 0.25);
                debuffCongelamentoTrueFalse.inimigo = false;
            }
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-DEBUFF ELETRICIDADE-*//*-DEBUFF ELETRICIDADE-*//*-DEBUFF ELETRICIDADE-*/
function aplicarDebuffEletricidade(user) {
    if (user == 'jogador') {
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

    if (user == 'inimigo') {
        if (rodada == rodadaDebuffEletricidadeMax.inimigo) {
            debuffEletricidade.inimigo = false
        }
        if (debuffEletricidade.inimigo == true) {
            inimigoArmaGeral.manaCustoCombate += Math.ceil(inimigoArmaGeral.manaCusto * 0.25)

            debuffEletricidadeTrueFalse.inimigo = true;
        }
    }

}

function desaplicarDebuffEletricidade(user) {
    if (user == 'jogador') {
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

    if (user == 'inimigo') {
        if (debuffEletricidade.inimigo == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} não consegue se concentrar direito devido a eletricidade`);

            if (debuffEletricidadeTrueFalse.inimigo == true) {
                inimigoArmaGeral.manaCustoCombate -= Math.ceil(inimigoArmaGeral.manaCusto * 0.25)

                debuffEletricidadeTrueFalse.inimigo = false;
            }
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