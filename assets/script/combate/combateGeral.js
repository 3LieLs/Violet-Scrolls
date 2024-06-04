/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-MUDAR RODADA-*/
var rodada = 0, vezUsuario = true;

function inicioRodada() {
    vezUsuario = false;
    rodada += 1
    legendaView.insertAdjacentHTML('beforeend', `/-----/<br>`)
    legendaView.insertAdjacentHTML('beforeend', `Rodada: ${rodada}`)
}

function fimRodada() {
    vezUsuario = true;
    legendaView.insertAdjacentHTML('beforeend', `<br>/-----/<br><br>`)
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-BUFF E DEBUFF INIMIGO/JOGADOR-*/
function inicioBuffDebuff() {
    /*-JOGADOR-*//*-JOGADOR-*//*-JOGADOR-*/
    /*-BUFF VIDA REGEN-*/
    aplicarBuffVidaRegen('jogador')
    aplicarBuffVidaRegen('inimigo')
    /*-----*/

    /*-BUFF DANO-*/
    aplicarBuffDano('jogador')
    aplicarBuffDano('inimigo')
    /*-----*/

     /*-BUFF DEFESA-*/
     //aplicarBuffDefesa('jogador')
     //aplicarBuffDefesa('inimigo')
     /*-----*/

    /*-DEBUFF VENENO-*/
    aplicarDebuffVeneno('jogador')
    aplicarDebuffVeneno('inimigo')
    /*-----*/

    /*-DEBUFF SANGRAMENTO-*/
    aplicarDebuffSangramento('jogador')
    aplicarDebuffSangramento('inimigo')
    /*-----*/

    /*-DEBUFF CHAMAS-*/
    aplicarDebuffChamas('jogador')
    aplicarDebuffChamas('inimigo')
    /*-----*/

    /*-DEBUFF CONGELAMNETO-*/
    aplicarDebuffCongelamento('jogador')
    aplicarDebuffCongelamento('inimigo')
    /*-----*/

    /*-DEBUFF ELETRICIDADE-*/
    aplicarDebuffEletricidade('jogador')
    aplicarDebuffEletricidade('inimigo')
    /*-----*/

    /*-PODER ELFO-*/
    aplicarPoderElfo()
    /*-----*/
    /*-PODER ORC-*/
    aplicarPoderOrc()
    /*-----*/
    /*-PODER VAMPIRO-*/
    aplicarPoderVampiro()
    /*-----*/
    /*-----*//*-----*//*-----*//*-----*/
}
/*-----*/
function fimBuffDebuff() {
    /*-JOGADOR-*//*-JOGADOR-*//*-JOGADOR-*/
    if (jogadorGeralDerrotado == false) {
        /*-BUFF VIDA REGEN-*/
        desaplicarBuffVidaRegen('jogador')
        desaplicarBuffVidaRegen('inimigo')
        /*-----*/

        /*-BUFF DANO-*/
        desaplicarBuffDano('jogador')
        desaplicarBuffDano('inimigo')
        /*-----*/

        /*-BUFF DEFESA-*/
        //desaplicarBuffDefesa('jogador')
        //desaplicarBuffDefesa('inimigo')
        /*-----*/

        /*-DEBUFF SANGRAMENTO-*/
        desaplicarDebuffSangramento('jogador')
        desaplicarDebuffSangramento('inimigo')
        /*-----*/

        /*-DEBUFF VENENO-*/
        desaplicarDebuffVeneno('jogador')
        desaplicarDebuffVeneno('inimigo')
        /*-----*/

        /*-DEBUFF CHAMAS-*/
        desaplicarDebuffChamas('jogador')
        desaplicarDebuffChamas('inimigo')
        /*-----*/

        /*-DEBUFF CONGELAMENTO-*/
        desaplicarDebuffCongelamento('jogador')
        desaplicarDebuffCongelamento('inimigo')
        /*-----*/

        /*-DEBUFF ELETRICIDADE-*/
        desaplicarDebuffEletricidade('jogador')
        desaplicarDebuffEletricidade('inimigo')
        /*-----*/

        /*-PODER ELFO-*/
        desaplicarPoderElfo()
        /*-----*/
        /*-PODER ORC-*/
        desaplicarPoderOrc()
        /*-----*/
        /*-PODER VAMPIRO-*/
        desaplicarPoderVampiro()
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
/*-APLICAR/DESAPLICAR FRAQUEZA/RESISTÊNCIA-*/
function aplicarFraquezaResistencia(user) {
    if (user == 'jogador') {
        if (racaGeral.fraqueza == inimigoArmaGeral.tipoDano) {
            let aumentarDano = inimigoArmaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            inimigoArmaGeral.danoCombate += aumentarDano
        }
        if (racaGeral.fraqueza == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate += aumentarDano
        }
        if (racaGeral.resistencia == inimigoArmaGeral.tipoDano) {
            let aumentarDano = inimigoArmaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            inimigoArmaGeral.danoCombate -= aumentarDano
        }
        if (racaGeral.resistencia == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate -= aumentarDano
        }
    }


    if (user == 'inimigo') {
        if (inimigoGeral.fraqueza == armaGeral.tipoDano) {
            let aumentarDano = armaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            armaGeral.danoCombate += aumentarDano
        }
        if (inimigoGeral.fraqueza == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate += aumentarDano
        }


        if (inimigoGeral.resistencia == armaGeral.tipoDano) {
            let aumentarDano = armaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            armaGeral.danoCombate -= aumentarDano
        }
        if (inimigoGeral.resistencia == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate -= aumentarDano
        }
    }
}
/*-----*/
function desaplicarFraquezaResistencia(user) {
    if (user == 'jogador') {
        if (racaGeral.fraqueza == inimigoArmaGeral.tipoDano) {
            let aumentarDano = inimigoArmaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            inimigoArmaGeral.danoCombate -= aumentarDano
        }
        /*-----*/
        if (racaGeral.fraqueza == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate -= aumentarDano
        }
        /*-----*/
        if (racaGeral.resistencia == inimigoArmaGeral.tipoDano) {
            let aumentarDano = inimigoArmaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            inimigoArmaGeral.danoCombate += aumentarDano
        }
        /*-----*/
        if (racaGeral.resistencia == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate += aumentarDano
        }
        /*-----*/
    }

    if (user == 'inimigo') {
        if (inimigoGeral.fraqueza == armaGeral.tipoDano) {
            let aumentarDano = armaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            armaGeral.danoCombate -= aumentarDano
        }
        if (inimigoGeral.fraqueza == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate -= aumentarDano
        }


        if (inimigoGeral.resistencia == armaGeral.tipoDano) {
            let aumentarDano = armaGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            armaGeral.danoCombate += aumentarDano
        }
        if (inimigoGeral.resistencia == magiaDanoGeral.tipoDano) {
            let aumentarDano = magiaDanoGeral.danoBase * 0.15
            aumentarDano = Math.round(aumentarDano)
            magiaDanoGeral.danoCombate += aumentarDano
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-CALCULO CRÍTICO-*/
var danoCritico = 0, chanceCriticoJogador = 5, chanceCriticoInimigo = 5, criticoJogador = false, criticoInimigo = false;
function aplicarCritico(user) {
    if (user == 'jogador') {
        let x = Math.floor(Math.random() * 100) + 0;
        if (x <= chanceCriticoJogador) {
            criticoJogador = true;
            danoCritico = armaGeral.danoBase * 0.5;
            danoCritico = Math.round(danoCritico);
            armaGeral.danoCombate += danoCritico;
        }
    }
    if (user == 'inimigo') {
        let x = Math.floor(Math.random() * 100) + 0;
        if (x <= chanceCriticoInimigo) {
            criticoInimigo = true
            danoCritico = inimigoArmaGeral.danoBase * 0.5;
            danoCritico = Math.round(danoCritico);
            inimigoArmaGeral.danoCombate += danoCritico;
        }
    }
}

function desaplicarCritico(user) {
    if (user == 'jogador') {
        if (criticoJogador == true) {
            criticoJogador = false;
            armaGeral.danoCombate -= danoCritico;
        }
    }
    if (user == 'inimigo') {
        if (criticoInimigo == true) {
            criticoInimigo = false
            inimigoArmaGeral.danoCombate -= danoCritico;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-CALCULO ERRO GOLPE-*/
var danoMiss = 0, danoMagiaMiss = 0, chanceMissJogador = 5, chanceMissInimigo = 5, missJogador = false, missInimigo = false;
function aplicarMiss(user) {
    if (user == 'jogador') {
        let x = Math.floor(Math.random() * 100) + 0;
        if (x <= chanceMissJogador) {
            missJogador = true;
            danoMiss = armaGeral.danoCombate;
            armaGeral.danoCombate -= danoMiss;
            danoMagiaMiss = magiaDanoGeral.danoCombate;
            magiaDanoGeral.danoCombate -= danoMagiaMiss;
        }
    }
    if (user == 'inimigo') {
        let x = Math.floor(Math.random() * 100) + 0;
        if (x <= chanceMissInimigo) {
            missInimigo = true
            danoMiss = inimigoArmaGeral.danoCombate;
            inimigoArmaGeral.danoCombate -= danoMiss;
        }
    }
}

function desaplicarMiss(user) {
    if (user == 'jogador') {
        if (missJogador == true) {
            missJogador = false;
            armaGeral.danoCombate += danoMiss;
            magiaDanoGeral.danoCombate += danoMagiaMiss;
        }
    }
    if (user == 'inimigo') {
        if (missInimigo == true) {
            missInimigo = false
            inimigoArmaGeral.danoCombate += danoMiss;
        }
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-CALCULO DEFESA-*/
function aplicarDefesa(user) {
    if (user == 'jogador') {
        inimigoArmaGeral.danoCombate -= Math.ceil(inimigoArmaGeral.danoBase * armaduraGeral.defesaCombate)
    }

    if (user == 'inimigo') {

    }
}

function desaplicarDefesa(user) {
    if (user == 'jogador') {
        inimigoArmaGeral.danoCombate += Math.ceil(inimigoArmaGeral.danoBase * armaduraGeral.defesaCombate)
    }

    if (user == 'inimigo') {

    }
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

    poderUtilizado = false;
    buffElfo = false;
    buffOrc = false;
    buffVampiro = false;

    legendaView.innerHTML = ``;
    voltarMovesetInicio()
    rodada = 0;
    jogadorGeralDerrotado = false, inimigoGeralDerrotado = false

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