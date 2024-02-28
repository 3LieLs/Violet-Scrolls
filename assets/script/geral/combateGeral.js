/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-MUDAR RODADA-*/
var rodada = 0, vezUsuario = true;

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
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-BUFF E DEBUFF INIMIGO/JOGADOR-*/
var danoGanho = 0, buffDanoTrueFalse = false; buffOrcTrueFalse = false;

var debuffSangramentoVal = 0, debuffChamasVal = 0, debuffCongelamentoVal = 0, debuffEletricidadeVal = 0,
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

function inicioBuffDebuff() {
    /*-JOGADOR-*//*-JOGADOR-*//*-JOGADOR-*/
    /*-BUFF DANO-*/
    if (rodada == rodadaBuffDanoMax.jogador) {
        buffDano.jogador = false;
    }
    if (buffDano.jogador == true) {
        danoGanho = armaGeral.danoCombate * magiaBuffGeral.danoBuff;
        danoGanho = Math.round(danoGanho);
        armaGeral.danoCombate += danoGanho;
        buffDanoTrueFalse = true
    }
    /*-----*/
    /*-BUFF VIDA REGEN-*/
    if (rodada == rodadaBuffVidaRegenMax.jogador && buffVidaRegen.jogador == true) {
        buffVidaRegen.jogador = false;
    }
    /*-----*/
    /*-DEBUFF SANGRAMENTO-*/
    if (rodada == rodadaDebuffSangramentoMax.jogador) {
        debuffSangramento.jogador = false;
    }
    if (debuffSangramento.jogador == true) {
        debuffSangramentoVal = inimigoArmaGeral.danoBase * 0.15;
        debuffSangramentoVal = Math.round(debuffSangramentoVal);
        inimigoArmaGeral.danoCombate += debuffSangramentoVal;
        debuffSangramentoTrueFalse.jogador = true;
    }
    /*-----*/
    /*-DEBUFF VENENO-*/
    if (rodada == rodadaDebuffVenenoMax.jogador) {
        debuffVeneno.jogador = false;
    }
    /*-----*/
    /*-DEBUFF CHAMAS-*/
    if (rodada == rodadaDebuffChamasMax.jogador) {
        debuffChamas.jogador = false;
    }
    if (debuffChamas.jogador == true) {
        debuffChamasVal = armaGeral.danoBase * 0.15;
        debuffChamasVal = Math.round(debuffChamasVal);
        armaGeral.danoCombate -= debuffChamasVal;
        debuffChamasTrueFalse.jogador = true;
    }
    /*-----*/
    /*-DEBUFF CONGELADO-*/
    if (rodada == rodadaDebuffCongelamentoMax.jogador) {
        debuffCongelamento.jogador = false
    }
    if (debuffCongelamento.jogador == true) {
        debuffCongelamentoVal = armaGeral.energiaCusto * 0.25;
        debuffCongelamentoVal = Math.round(debuffCongelamentoVal);
        armaGeral.energiaCustoCombate += debuffCongelamentoVal;
        debuffCongelamentoTrueFalse.jogador = true;
    }

    /*-----*/
    /*-DEBUFF ELETRICIDADE-*/
    if (rodada == rodadaDebuffEletricidadeMax.jogador) {
        debuffEletricidade.jogador = false
    }
    if (debuffEletricidade.jogador == true) {
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

        debuffEletricidadeTrueFalse.jogador = true;
    }
    /*-----*/
    /*-PODER ORC-*/
    if (rodada == rodadaPoderOrcMax) {
        buffOrc = false;
    }
    if (buffOrc == true) {
        danoPoderOrc = armaGeral.danoBase * 2;
        danoPoderOrc = Math.round(danoPoderOrc);
        armaGeral.danoCombate += danoPoderOrc;
        buffOrcTrueFalse = true
    }
    /*-----*/
    /*-----*//*-----*//*-----*//*-----*/

    /*-INIMIGO-*//*-INIMIGO-*//*-INIMIGO-*/
    /*-DEBUFF SANGRAMENTO-*/
    if (rodada == rodadaDebuffSangramentoMax.inimigo) {
        debuffSangramento.inimigo = false;
    }
    if (debuffSangramento.inimigo == true) {
        debuffSangramentoVal = armaGeral.danoBase * 0.15;
        debuffSangramentoVal = Math.round(debuffSangramentoVal);
        armaGeral.danoCombate += debuffSangramentoVal;
        debuffSangramentoTrueFalse.inimigo = true;
    }
    /*-----*/
    /*-DEBUFF VENENO-*/
    if (rodada == rodadaDebuffVenenoMax.inimigo) {
        debuffVeneno.inimigo = false;
    }
    /*-----*/
    /*-DEBUFF CHAMAS-*/
    if (rodada == rodadaDebuffChamasMax.inimigo) {
        debuffChamas.inimigo = false;
    }
    if (debuffChamas.inimigo == true) {
        debuffChamasVal = inimigoArmaGeral.danoBase * 0.15;
        debuffChamasVal = Math.round(debuffChamasVal);
        inimigoArmaGeral.danoCombate -= debuffChamasVal;
        debuffChamasTrueFalse.inimigo = true;
    }
    /*-----*/
    /*-DEBUFF CONGELADO-*/
    if (rodada == rodadaDebuffCongelamentoMax.inimigo) {
        debuffCongelamento.inimigo = false
    }
    if (debuffCongelamento.inimigo == true) {
        debuffCongelamentoVal = inimigoArmaGeral.energiaCusto * 0.25;
        debuffCongelamentoVal = Math.round(debuffCongelamentoVal);
        inimigoArmaGeral.energiaCustoCombate += debuffCongelamentoVal;
        debuffCongelamentoTrueFalse.inimigo = true;
    }
    /*-----*/
    /*-DEBUFF ELETRICIDADE-*/
    if (rodada == rodadaDebuffEletricidadeMax.inimigo) {
        debuffEletricidade.inimigo = false
    }
    if (debuffEletricidade.inimigo == true) {
        let w = inimigoArmaGeral.manaCusto * 0.25
        w = Math.round(w)
        inimigoArmaGeral.manaCustoCombate += w
        debuffEletricidadeTrueFalse.inimigo = true;
    }
    /*-----*/
}
/*-----*/
function fimBuffDebuff() {
    /*-JOGADOR-*//*-JOGADOR-*//*-JOGADOR-*/
    if (jogadorGeralDerrotado == false) {
        /*-BUFF DANO-*/
        if (buffDano.jogador == true) {
            if (buffDanoTrueFalse.jogador == true) {
                armaGeral.danoCombate -= danoGanho;
                buffDanoTrueFalse.jogador = false
            }
        }
        /*-----*/
        /*-BUFF VIDA REGEN-*/
        if (buffVidaRegen.jogador == true) {
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
        }
        /*-----*/
        /*-DEBUFF SANGRAMENTO-*/
        if (debuffSangramento.jogador == true) {
            sangramentoDano = jogador.vidaBase * 0.10;
            sangramentoDano = Math.round(sangramentoDano);
            jogadorAtingidoDano(sangramentoDano);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${sangramentoDano} de vida por causa do sangramento`);

            jogadorCombateHud();
            inimigoCombateHud();

            if (debuffSangramentoTrueFalse.jogador == true) {
                inimigoArmaGeral.danoCombate -= debuffSangramentoVal;
                debuffSangramentoTrueFalse.jogador = false;
            }
        }
        /*-----*/
        /*-DEBUFF VENENO-*/
        if (debuffVeneno.jogador == true) {
            venenoDano = jogador.vidaBase * 0.20;
            venenoDano = Math.round(venenoDano);
            jogadorAtingidoDano(venenoDano);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${venenoDano} de vida por causa do veneno`);

            jogadorCombateHud();
            inimigoCombateHud();
        }
        /*-----*/
        /*-DEBUFF CHAMAS-*/
        if (debuffChamas.jogador == true) {
            chamasDano = jogador.vidaBase * 0.10;
            chamasDano = Math.round(chamasDano);
            jogadorAtingidoDano(chamasDano);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} perdeu ${chamasDano} de vida por causa das chamas`);

            jogadorCombateHud();
            inimigoCombateHud();

            if (debuffChamasTrueFalse.jogador == true) {
                armaGeral.danoCombate += debuffChamasVal;
                debuffChamasTrueFalse.jogador = false
            }
        }
        /*-----*/
        /*-DEBUFF CONGELADO-*/
        if (debuffCongelamento.jogador == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} se sente mais pesado devido ao congelamento`);
            if (debuffCongelamentoTrueFalse.jogador == true) {
                armaGeral.energiaCustoCombate -= debuffCongelamentoVal;
                debuffCongelamentoTrueFalse.jogador = false;
            }
        }
        /*-----*/
        /*-DEBUFF ELETRICIDADE-*/
        if (debuffEletricidade.jogador == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} não consegue se concentrar direito devido a eletricidade`);

            if (debuffEletricidadeTrueFalse.jogador == true) {
                let w = armaGeral.manaCusto * 0.25;
                let x = magiaDanoGeral.manaCusto * 0.25;
                let y = magiaRecuperacaoGeral.manaCusto * 0.25;
                let z = magiaBuffGeral.manaCusto * 0.25;
                w = Math.round(w);
                x = Math.round(x);
                y = Math.round(y);
                z = Math.round(z);

                armaGeral.manaCusto -= w;
                magiaDanoGeral.manaCusto -= x;
                magiaRecuperacaoGeral.manaCusto -= y;
                magiaBuffGeral.manaCusto -= z;
                debuffEletricidadeTrueFalse.jogador = false;
            }
        }
        /*-----*/
        /*-PODER ORC-*/
        if (buffOrc == true) {
            if (buffOrcTrueFalse == true) {
                armaGeral.danoCombate -= danoPoderOrc;
                buffOrcTrueFalse.jogador = false;
            }
        }
        /*-----*/
        /*-CASO O JOGADOR PERCA-*/
        if (jogador.vidaCombate <= 0) {
            jogador.vidaCombate = 0;
            jogadorCombateHud();
            jogadorDerrotado();
        }
        /*-----*/
    }

    /*-INIMIGO-*//*-INIMIGO-*//*-INIMIGO-*/
    if (inimigoGeralDerrotado == false) {
        /*-DEBUFF SANGRAMENTO-*/
        if (debuffSangramento.inimigo == true) {
            sangramentoDano = inimigoGeral.vidaBase * 0.10;
            sangramentoDano = Math.round(sangramentoDano);
            inimigoAtingidoDano(sangramentoDano);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${sangramentoDano} de vida por causa do sangramento`);

            jogadorCombateHud();
            inimigoCombateHud();

            if (debuffSangramentoTrueFalse.inimigo == true) {
                armaGeral.danoCombate -= debuffSangramentoVal;
                debuffSangramentoTrueFalse.inimigo = false;
            }
        }
        /*-----*/
        /*-DEBUFF VENENO-*/
        if (debuffVeneno.inimigo == true) {
            venenoDano = inimigoGeral.vidaBase * 0.20;
            venenoDano = Math.round(venenoDano);
            inimigoAtingidoDano(venenoDano);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${venenoDano} de vida por causa do veneno`);

            jogadorCombateHud();
            inimigoCombateHud();
        }
        /*-----*/
        /*-DEBUFF CHAMAS-*/
        if (debuffChamas.inimigo == true) {
            chamasDano = inimigoGeral.vidaBase * 0.10;
            chamasDano = Math.round(chamasDano);
            inimigoAtingidoDano(chamasDano);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} perdeu ${chamasDano} de vida por causa das chamas`);

            jogadorCombateHud();
            inimigoCombateHud();

            if (debuffChamasTrueFalse.inimigo == true) {
                inimigoArmaGeral.danoCombate += debuffChamasVal;
                debuffChamasTrueFalse.inimigo = false
            }
        }
        /*-----*/
        /*-DEBUFF CONGELADO-*/
        if (debuffCongelamento.inimigo == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} se sente mais pesado devido ao congelamento`);
            if (debuffCongelamentoTrueFalse.inimigo == true) {
                inimigoArmaGeral.energiaCustoCombate -= debuffCongelamentoVal;
                debuffCongelamentoTrueFalse.inimigo = false;
            }
        }
        /*-----*/
        /*-DEBUFF ELETRICIDADE-*/
        if (debuffEletricidade.inimigo == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} não consegue se concentrar direito devido a eletricidade`);

            if (debuffEletricidadeTrueFalse.inimigo == true) {
                let w = inimigoArmaGeral.manaCusto * 0.25;
                w = Math.round(w);
                inimigoArmaGeral.manaCustoCombate -= w;

                debuffEletricidadeTrueFalse.inimigo = false;
            }
        }
        /*-----*/
        /*-CASO O INIMIGO PERCA-*/
        if (inimigoGeral.vidaCombate <= 0) {
            inimigoGeral.vidaCombate = 0;
            inimigoCombateHud();
            inimigoDerrotado();
        }
        /*-----*/
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-CALCULO CRÍTICO-*/
var danoCritico = 0, chanceCriticoJogador = 5, chanceCriticoInimigo = 5, criticoJogador = false, criticoInimigo = false;
/*-JOGADOR-*/
function aplicarCriticoJogador() {
    let x = Math.floor(Math.random() * 100) + 0;

    if (x <= chanceCriticoJogador) {
        criticoJogador = true;
        danoCritico = armaGeral.danoBase * 0.5;
        danoCritico = Math.round(danoCritico);
        armaGeral.danoCombate += danoCritico;
    }
}
function desaplicarCriticoJogador() {
    if (criticoJogador == true) {
        criticoJogador = false;
        armaGeral.danoCombate -= danoCritico;
    }
}
/*-INIMIGO-*/
function aplicarCriticoInimigo() {
    let x = Math.floor(Math.random() * 100) + 0;

    if (x <= chanceCriticoInimigo) {
        criticoInimigo = true
        danoCritico = inimigoArmaGeral.danoBase * 0.5;
        danoCritico = Math.round(danoCritico);
        inimigoArmaGeral.danoCombate += danoCritico;
    }
}
function desaplicarCriticoInimigo() {
    if (criticoInimigo == true) {
        criticoInimigo = false
        inimigoArmaGeral.danoCombate -= danoCritico;
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-CALCULO ERRO GOLPE-*/
var danoMiss = 0, danoMagiaMiss = 0, chanceMissJogador = 5, chanceMissInimigo = 5, missJogador = false, missInimigo = false;
/*-JOGADOR-*/
function aplicarMissJogador() {
    let x = Math.floor(Math.random() * 100) + 0;
    if (x <= chanceMissJogador) {
        missJogador = true;
        danoMiss = armaGeral.danoCombate;
        armaGeral.danoCombate -= danoMiss;
        danoMagiaMiss = magiaDanoGeral.danoCombate;
        magiaDanoGeral.danoCombate -= danoMagiaMiss;
    }
}
function desaplicarMissJogador() {
    if (missJogador == true) {
        missJogador = false;
        armaGeral.danoCombate += danoMiss;
        magiaDanoGeral.danoCombate += danoMagiaMiss;
    }
}
/*-INIMIGO-*/
function aplicarMissInimigo() {
    let x = Math.floor(Math.random() * 100) + 0;

    if (x <= chanceMissInimigo) {
        missInimigo = true
        danoMiss = inimigoArmaGeral.danoCombate;
        inimigoArmaGeral.danoCombate -= danoMiss;
    }
}
function desaplicarMissInimigo() {
    if (missInimigo == true) {
        missInimigo = false
        inimigoArmaGeral.danoCombate += danoMiss;
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-CALCULO DEFESA-*/
function calculoDefesa() {
    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / (100 + parseInt(armaduraGeral.defesaCombate))) * 150;
    armaduraGeral.defesaCombate = armaduraGeral.defesaCombate.toPrecision(3);

    armaduraGeral.defesaCombate = (armaduraGeral.defesaCombate / 100) * inimigoGeral.danoCombate;
    inimigoGeral.danoCombate = inimigoGeral.danoCombate - armaduraGeral.defesaCombate;

    inimigoGeral.danoCombate = Math.trunc(inimigoGeral.danoCombate);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-RESETAR ESTATÍSTICAS-*/
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
    jogadorGeralDerrotado = false ,inimigoGeralDerrotado = false

    rodadaBuffDanoMax.jogador = 0, rodadaBuffDanoMax.inimigo = 0
    rodadaBuffVidaRegenMax.jogador = 0, rodadaBuffVidaRegenMax.inimigo = 0
    rodadaBuffDefesaMax.jogador = 0, rodadaBuffDefesaMax.inimigo = 0
    rodadaBuffVidaMax.jogador = 0, rodadaBuffVidaMax.inimigo = 0
    rodadaDebuffSangramentoMax.jogador = 0, rodadaDebuffSangramentoMax.inimigo = 0
    rodadaDebuffVenenoMax.jogador = 0, rodadaDebuffVenenoMax.inimigo = 0
    rodadaDebuffChamasMax.jogador = 0, rodadaDebuffChamasMax.inimigo = 0
    rodadaDebuffCongelamentoMax.jogador = 0, rodadaDebuffCongelamentoMax.inimigo = 0
    rodadaDebuffEletricidadeMax.jogador = 0, rodadaDebuffEletricidadeMax.inimigo = 0

    buffVidaRegen.jogador = false, buffVidaRegen.inimigo = false
    buffDano.jogador = false, buffDano.inimigo = false
    debuffSangramento.jogador = false, debuffSangramento.inimigo = false
    debuffVeneno.jogador = false, debuffVeneno.inimigo = false
    debuffChamas.jogador = false, debuffChamas.inimigo = false
    debuffCongelamento.jogador = false, debuffCongelamento.inimigo = false
    debuffEletricidade.jogador = false, debuffEletricidade.inimigo = false


}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-EXPERIÊNCIA GANHO-*/
function adicionarExperiencia() {
    mainInimigoDerrotado.style.display = 'contents';
    rpgGeral.style.backgroundColor = 'black';

    jogadorNivel.experiencia += inimigoGeral.experiencia;

    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100);
    jogador.porcentagem = jogador.porcentagem.toPrecision(3);

    jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem);

    if (jogadorNivel.experienciaPorcentagem > 100) {
        jogadorNivel.experienciaPorcentagem = 100;
    }

    mensagemInimigoDerrotado.innerHTML = `${inimigoCombatendo} derrotado`;
    experienciaGanha.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;
    experienciaGanha.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-MISSÃO CONCLUÍDA-*/
function missaoProgresso() {
    if (missao.ativo == true && missao.inimigoDerrotar == inimigoCombatendo) {
        missao.inimigosDerrotados++;

        if (missao.inimigosDerrotados >= missao.inimigosDerrotadosMax) {
            missao.ativo = false;
            jogador.pecitas += missao.recompensa;
            menuMissao.innerHTML = `Nenhuma missão iniciada`;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/