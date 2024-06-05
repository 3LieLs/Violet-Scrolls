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
            atualizarCombateHud('jogador');
            userDerrotado('jogador');
        }
        /*-----*/
    }

    /*-INIMIGO-*//*-INIMIGO-*//*-INIMIGO-*/
    if (inimigoGeralDerrotado == false) {

        /*-CASO O INIMIGO PERCA-*/
        if (inimigoGeral.vidaCombate <= 0) {
            inimigoGeral.vidaCombate = 0;
            atualizarCombateHud('inimigo');
            userDerrotado('inimigo');
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
/*-ATUALIZAR HUD-*/
function atualizarCombateHud(user) {
    if (user == 'jogador') {
        estatisticaVida.innerHTML = `Vida: ${jogador.vidaCombate}`;
        estatisticaVida.style.backgroundSize = `${jogador.vidaPorcentagem}% 100%`;

        estatisticaEnergia.innerHTML = `Energia: ${jogador.energiaCombate}`;
        estatisticaEnergia.style.backgroundSize = `${jogador.energiaPorcentagem}% 100%`;

        estatisticaMana.innerHTML = `Mana: ${jogador.manaCombate}`;
        estatisticaMana.style.backgroundSize = `${jogador.manaPorcentagem}% 100%`;
    }

    if (user == 'inimigo') {
        inimigoHudNome.innerHTML = `${inimigoGeral.nome}`;
        inimigoHudVida.innerHTML = `Vida: ${inimigoGeral.vidaCombate}`;
        inimigoHudVida.style.backgroundSize = `${inimigoGeral.vidaPorcentagem}% 100%`;

        if (inimigoGeral.energiaBase > 0) {
            inimigoHudEnergia.style.visibility = 'visible'
            inimigoHudEnergia.innerHTML = `Energia: ${inimigoGeral.energiaCombate}`;
            inimigoHudEnergia.style.background = `url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUXFRUVFxcXFxUVFRcXFRUXFxUVFxUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8PFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBv/EACMQAQEBAAECBQUAAAAAAAAAAAABEQIS8DFhcYGRIUFRsdH/xAAZAQEBAQADAAAAAAAAAAAAAAAAAQIDBAb/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARFBMf/aAAwDAQACEQMRAD8A8SGjoPMgi6gEgJARRRJQKCykVKgqBqi6srKiCiAqKlURqIVAqLCKqYaLARYiwD2VekEYICKAmINRKYYQAKBQqKLpaYYAixLAXiqRoExYiiETkQoEpQAotQURYgEWBGhRARA0SqCogCwQTUVAWwsTFihhCpgNUqRbAFQEUKkALRQTQBRUWCJASKosDQNBVGdEolFIYVkVIshATCmlAxcSrKBSEIolWiaClARbUwXASVUAAAVAADEFFkZjUUNE2KDIWgotRrGUQWBRAsQFUkAIShFApQBU1URBUxdDVEwAJTQFQFKlq1MAIGqCmgMKCVSKmqgRcRYlQotIIlAFCBGgqVpmgRSKlRFKgKkUUTEWqKlFoIiFQUxqJF4qGC7ATWCANCosZDFSLoi6gVMQKSLFogRQSlIgqxUlVUSCiCRRKouJVAQwKAi0FRYUii6AiMUBa0LIggGLoiBQBdEUARYoAASrExcSoAmEFEUEIYAVSiiJWmcFUiasUXfL9/0OkTUc7Rai1pQRBoIIgABVSrihiYsQFxUERSGqghIKozVAEC1cBC0wsUE1cZosVeLMaildOn0+RnPUGXOxNWoNqIqCgVEC0IClRQIYChhgVPAiooiiKCCognJC0iqupVgoVmNJYBixFijWhnlPiCYy5VUsWK2CWKgLqKIAsBFMAE1qIAUKiEWJF0AgAtZ5U0BIYIqtVAgLE0QF1ZEWKN75QXO/oJtYcSlFciKQQNVAF1bELRCUIkBVglBUxSAAmApBAVBAWAgNQTQAXQE1UqyqNB39hGWNRaitixFQSrEoBFRaBoi0QgkAUoAasSgAIC4FXQEXUAgGgAUCLGVUdfYZ6kNZxiqtRWiFSLWVQUESrogq2iUEDjU1YtVYCIBKSEAABVQEXWVioIaUUEAUb4sNRUrYnuDLHLxKC8aRYDKgoIyvJQGaAKy1ACkAQW+DILQnj3+GooJUq0ASLQSjMAVUoANNcQVKAA//2Q==);`;
            inimigoHudEnergia.style.backgroundSize = `${inimigoGeral.energiaPorcentagem}% 100%`;
        }

        if (inimigoGeral.manaBase > 0) {
            inimigoHudMana.style.visibility = 'visible'
            inimigoHudMana.innerHTML = `Mana: ${inimigoGeral.manaCombate}`;
            inimigoHudMana.style.background = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC);`;
            inimigoHudMana.style.backgroundSize = `${inimigoGeral.manaPorcentagem}% 100%`;
        }
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
/*-JOGADOR/INIMIGO DERROTADO-*/
function userDerrotado(user) {
    if (user == 'jogador') {
        if (jogador.vidaCombate <= 0) {
            jogadorGeralDerrotado = true
            setTimeout(() => {
                definirEstatisticaGeral();

                mainHud.style.display = 'none';
                mainInimigoHud.style.display = 'none';
                florestaDisplay.style.display = 'none';
                cavernaDisplay.style.display = 'none';
                montanhaDisplay.style.display = 'none';

                mainJogadorDerrotado.style.display = 'contents';
                rpgGeral.style.backgroundColor = 'black';
                mensagemJogadorDerrotado.innerHTML = 'Você foi derrotado'

                setTimeout(() => {
                    mensagemJogadorDerrotado.insertAdjacentHTML('beforeend', `<br>Um camponês te encontrou desacordado e te levou para a taverna`);
                }, 2000)

                setTimeout(() => {
                    mainJogadorDerrotado.style.display = 'none';
                    localMapa = 'taverna';
                    definirMusica();
                }, 5000)
            }, 2000)
        }
    }

    if (user == 'inimigo') {
        if (inimigoGeral.vidaCombate <= 0) {
            inimigoGeralDerrotado = true

            setTimeout(() => {
                mainHud.style.display = 'none';
                mainInimigoHud.style.display = 'none';

                if (inimigoCombatendo == 'Goblin') {
                    localMapa = 'floresta';
                }
                if (inimigoCombatendo == 'Besouro gigante') {
                    localMapa = 'floresta';
                }

                if (inimigoCombatendo == 'Golem de pedra') {
                    localMapa = 'caverna';
                }
                if (inimigoCombatendo == 'Golem de gelo') {
                    localMapa = 'caverna';
                }
                if (inimigoCombatendo == 'Golem de fogo') {
                    localMapa = 'caverna';
                }

                if (inimigoCombatendo == 'Dragão') {
                    localMapa = 'montanha';
                }

                missaoProgresso();
                adicionarExperiencia();
                setTimeout(definirMusica, 2000);
                setTimeout(definirEstatisticaGeral, 2000);
            }, 2000)
        }
    }
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