/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-INIMIGO ATAQUE-*/
var funcaoInimigoAtaque;

function inimigoAtaque() {
    if (inimigoGeralDerrotado == false) {
        funcaoInimigoAtaque();
    }
}

function inimigoAtaqueAto() {
    if (inimigoGeral.energiaCombate - inimigoArmaGeral.energiaCustoCombate >= 0 && inimigoGeral.manaCombate - inimigoArmaGeral.manaCustoCombate >= 0) {
        aplicarFraquezaResistencia('jogador');
        aplicarCritico('inimigo');
        aplicarMiss('inimigo');
        aplicarDefesa('jogador')

        /*-APLICAR DANO CASO ACERTO-*/
        if (missInimigo == true) {
            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} errou seu ataque!`);
            if (inimigoArmaGeral.energiaCustoCombate > 0) {
                legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${inimigoArmaGeral.energiaCustoCombate}`);
            }
            if (inimigoArmaGeral.manaCustoCombate > 0) {
                legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${inimigoArmaGeral.manaCustoCombate}`);
            }
        }

        if (missInimigo == false) {
            jogadorAtingidoDano(inimigoArmaGeral.danoCombate);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou com ${inimigoArmaGeral.nome}<br>Dano causado: ${inimigoArmaGeral.danoCombate}`);
            if (inimigoArmaGeral.energiaCustoCombate > 0) {
                legendaView.insertAdjacentHTML('beforeend', `<br>Energia usada: ${inimigoArmaGeral.energiaCustoCombate}`);
            }
            if (inimigoArmaGeral.manaCustoCombate > 0) {
                legendaView.insertAdjacentHTML('beforeend', `<br>Mana usada: ${inimigoArmaGeral.manaCustoCombate}`);
            }
            if (criticoInimigo == true) {
                legendaView.insertAdjacentHTML('beforeend', `<br>Acerto crítico!`);
            }

            verificarDebuffArmaInimigo();
        }
        /*-----*/

        desaplicarFraquezaResistencia('jogador');
        desaplicarCritico('inimigo');
        desaplicarMiss('inimigo');
        desaplicarDefesa('jogador')


        /*-DESCONTAR ENERGIA/MANA-*/
        if (inimigoArmaGeral.energiaCustoCombate > 0 && inimigoGeral.energiaCombate - inimigoArmaGeral.energiaCustoCombate >= 0) {
            inimigoGeral.energiaCombate = inimigoGeral.energiaCombate - inimigoArmaGeral.energiaCustoCombate;

            inimigoGeral.porcentagem = 100 - ((inimigoArmaGeral.energiaCustoCombate / inimigoGeral.energiaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.energiaPorcentagem = inimigoGeral.energiaPorcentagem - inimigoGeral.porcentagem;

            if (inimigoGeral.energiaCombate < 0) {
                inimigoGeral.energiaCombate = 0;
                inimigoGeral.energiaPorcentagem = 0.1;
            }
        }

        if (inimigoArmaGeral.manaCustoCombate > 0 && inimigoGeral.manaCombate - inimigoArmaGeral.manaCustoCombate >= 0) {
            inimigoGeral.manaCombate = inimigoGeral.manaCombate - inimigoArmaGeral.manaCustoCombate;

            inimigoGeral.porcentagem = 100 - ((inimigoArmaGeral.manaCustoCombate / inimigoGeral.manaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.manaPorcentagem = inimigoGeral.manaPorcentagem - inimigoGeral.porcentagem;

            if (inimigoGeral.manaCombate < 0) {
                inimigoGeral.manaCombate = 0;
                inimigoGeral.manaPorcentagem = 0.1;
            }
        }
        /*-----*/

        /*-RECUPERAR ENERGIA/MANA-*/
    } else {
        if (inimigoArmaGeral.energiaCustoCombate > inimigoArmaGeral.manaCustoCombate && inimigoGeral.energiaBase > 0) {
            inimigoGeral.energiaCombate += inimigoGeral.energiaRecuperacao;

            inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaRecuperacao / inimigoGeral.energiaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.energiaPorcentagem = parseInt(inimigoGeral.energiaPorcentagem) + parseInt(inimigoGeral.porcentagem);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.energiaRecuperacao}`);
        }

        if (inimigoArmaGeral.energiaCustoCombate < inimigoArmaGeral.manaCustoCombate && inimigoGeral.manaBase > 0) {
            inimigoGeral.manaCombate += inimigoGeral.manaRecuperacao;

            inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaRecuperacao / inimigoGeral.manaBase) * 100);
            inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
            inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

            inimigoGeral.manaPorcentagem = parseInt(inimigoGeral.manaPorcentagem) + parseInt(inimigoGeral.porcentagem);

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} focou<br>Mana recuperada: ${inimigoGeral.manaRecuperacao}`);
        }
    }
    /*-----*/
    atualizarCombateHud('jogador');
    atualizarCombateHud('inimigo');
    userDerrotado('jogador');
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-INIMIGOS ATINGIDO DANO/EFEITO-*/
function inimigoAtingidoDano(danoInimigoGeral) {
    inimigoAtingidoEfeito()

    if (inimigoGeral.vidaCombate - danoInimigoGeral < 0) {
        inimigoGeral.vidaCombate = 0;
        inimigoGeral.vidaPorcentagem = 0.1;
    } else {
        inimigoGeral.vidaCombate = inimigoGeral.vidaCombate - danoInimigoGeral;

        inimigoGeral.porcentagem = 100 - ((danoInimigoGeral / inimigoGeral.vidaBase) * 100);
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

        inimigoGeral.vidaPorcentagem = inimigoGeral.vidaPorcentagem - inimigoGeral.porcentagem;
    }

    danoInimigoGeral = 0
}

function inimigoAtingidoEfeito() {
    setTimeout(function () {
        inimigoHudImagem.style.opacity = '0.5'
    }, 0);
    setTimeout(function () {
        inimigoHudImagem.style.opacity = '1'
    }, 250);
    setTimeout(function () {
        inimigoHudImagem.style.opacity = '0.5'
    }, 500);
    setTimeout(function () {
        inimigoHudImagem.style.opacity = '1'
    }, 750);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-INIMIGOS ARMA/GOLPE-*/
var inimigoArmaGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-VERIFICAR DEBUFF DA ARMA DO INIMIGO-*/
function verificarDebuffArmaInimigo() {
    /*-----*/
    if (inimigoArmaGeral.debuff == 'sangramento') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffSangramento.jogador == false) {
            rodadaDebuffSangramentoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffSangramento.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} cortou ${jogador.nome}`);
        }
    }
    /*-----*/
    if (inimigoArmaGeral.debuff == 'veneno') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffVeneno.jogador == false) {
            rodadaDebuffVenenoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffVeneno.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} envenenou ${jogador.nome}`);
        }
    }
    /*-----*/
    if (inimigoArmaGeral.debuff == 'chamas') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffChamas.jogador == false) {
            rodadaDebuffChamasMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffChamas.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} incendiou ${jogador.nome}`);
        }
    }
    /*-----*/
    if (inimigoArmaGeral.debuff == 'congelamento') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffCongelamento.jogador == false) {
            rodadaDebuffCongelamentoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffCongelamento.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} congelou ${jogador.nome}`);
        }
    }
    /*-----*/
    if (inimigoArmaGeral.debuff == 'eletricidade') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffEletricidade.jogador == false) {
            rodadaDebuffEletricidadeMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffEletricidade.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} eletrizou ${jogador.nome}`);
        }
    }
    /*-----*/
}
/*-----*/