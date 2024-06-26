/*-COMBATE GERAL VARIÁVEIS-*/
var semEnergiaMana = window.document.querySelector('p#semEnergiaMana');

var primeiraEscolha = window.document.querySelector('input#movesetArmaEscolha');
primeiraEscolha.addEventListener('click', movesetArmaEscolhaClick);

var segundaEscolha = window.document.querySelector('input#movesetMagiaEscolha');
segundaEscolha.addEventListener('click', movesetMagiaEscolhaClick);

var terceiraEscolha = window.document.querySelector('input#movesetArmaduraEscolha');
terceiraEscolha.addEventListener('click', movesetArmaduraEscolhaClick);

var quartaEscolha = window.document.querySelector('input#movesetOutrosEscolha');
quartaEscolha.addEventListener('click', movesetOutrosEscolhaClick);
/*-----*/

/*-MOVESET ARMA-*/
function movesetArmaEscolhaClick() {

    primeiraEscolha.removeEventListener('click', movesetArmaEscolhaClick);
    segundaEscolha.removeEventListener('click', movesetMagiaEscolhaClick);
    terceiraEscolha.removeEventListener('click', movesetArmaduraEscolhaClick);
    quartaEscolha.removeEventListener('click', movesetOutrosEscolhaClick);


    primeiraEscolha.value = 'Ataque fraco';
    primeiraEscolha.id = 'ataqueFraco';

    primeiraEscolha = window.document.querySelector('input#ataqueFraco');
    primeiraEscolha.addEventListener('click', ataqueFracoClick);

    segundaEscolha.value = 'Ataque forte';
    segundaEscolha.id = 'ataqueForte';

    segundaEscolha = window.document.querySelector('input#ataqueForte');
    segundaEscolha.addEventListener('click', ataqueForteClick);

    terceiraEscolha.value = 'Contra-ataque';
    terceiraEscolha.id = 'contraAtaque';

    terceiraEscolha = window.document.querySelector('input#contraAtaque');
    terceiraEscolha.addEventListener('click', contraAtaqueClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarArmaAcao';

    quartaEscolha = window.document.querySelector('input#voltarArmaAcao');
    quartaEscolha.addEventListener('click', voltarArmaAcaoClick);
}

function ataqueFracoClick() {
    if (vezUsuario == false) {
        console.log(`Calma ${jogador.nome}, espere a sua vez ${vezUsuario}`)
    }
    if (vezUsuario == true) {
        botaoAtaqueFracoClick();
        voltarMovesetInicio();
    }
}

function ataqueForteClick() {
    if (vezUsuario == false) {
        console.log(`Calma ${jogador.nome}, espere a sua vez ${vezUsuario}`)
    }
    if (vezUsuario == true) {
        botaoAtaqueForteClick();
        voltarMovesetInicio();
    }
}

function contraAtaqueClick() {
    if (vezUsuario == false) {
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoContraAtaqueClick();
        voltarMovesetInicio();
    }
}

function voltarArmaAcaoClick() {
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET MAGIA-*/
function movesetMagiaEscolhaClick() {
    primeiraEscolha.removeEventListener('click', movesetArmaEscolhaClick);
    segundaEscolha.removeEventListener('click', movesetMagiaEscolhaClick);
    terceiraEscolha.removeEventListener('click', movesetArmaduraEscolhaClick);
    quartaEscolha.removeEventListener('click', movesetOutrosEscolhaClick);

    primeiraEscolha.value = 'Magia Dano';
    primeiraEscolha.id = 'magiaDano';

    primeiraEscolha = window.document.querySelector('input#magiaDano');
    primeiraEscolha.addEventListener('click', magiaDanoClick);

    segundaEscolha.value = 'magia Recuperação';
    segundaEscolha.id = 'magiaRecuperar';

    segundaEscolha = window.document.querySelector('input#magiaRecuperar');
    segundaEscolha.addEventListener('click', magiaRecuperarClick);

    terceiraEscolha.value = 'Magia Buff';
    terceiraEscolha.id = 'magiaBuff';

    terceiraEscolha = window.document.querySelector('input#magiaBuff');
    terceiraEscolha.addEventListener('click', magiaBuffClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarMagiaAcao';

    quartaEscolha = window.document.querySelector('input#voltarMagiaAcao');
    quartaEscolha.addEventListener('click', voltarMagiaAcaoClick);
}

function magiaDanoClick() {
    if (vezUsuario == false) {
        movesetMagiaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoMagiaDanoClick();
        voltarMovesetInicio();
    }
}

function magiaRecuperarClick() {
    if (vezUsuario == false) {
        movesetMagiaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoMagiaRecuperacaoClick();
        voltarMovesetInicio();
    }
}

function magiaBuffClick() {
    if (vezUsuario == false) {
        movesetMagiaEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoMagiaBuffClick();
        voltarMovesetInicio();
    }
}

function voltarMagiaAcaoClick() {
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET ARMADURA-*/
function movesetArmaduraEscolhaClick() {
    primeiraEscolha.removeEventListener('click', movesetArmaEscolhaClick);
    segundaEscolha.removeEventListener('click', movesetMagiaEscolhaClick);
    terceiraEscolha.removeEventListener('click', movesetArmaduraEscolhaClick);
    quartaEscolha.removeEventListener('click', movesetOutrosEscolhaClick);

    primeiraEscolha.value = 'Bloquear';
    primeiraEscolha.id = 'bloquear';

    primeiraEscolha = window.document.querySelector('input#bloquear');
    primeiraEscolha.addEventListener('click', bloquearClick);

    segundaEscolha.value = 'Descanso';
    segundaEscolha.id = 'descanso';

    segundaEscolha = window.document.querySelector('input#descanso');
    segundaEscolha.addEventListener('click', descansoClick);

    terceiraEscolha.value = 'Foco';
    terceiraEscolha.id = 'foco';

    terceiraEscolha = window.document.querySelector('input#foco');
    terceiraEscolha.addEventListener('click', focoClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarArmaduraAcao';

    quartaEscolha = window.document.querySelector('input#voltarArmaduraAcao');
    quartaEscolha.addEventListener('click', voltarArmaduraAcaoClick);
}

function bloquearClick() {
    if (vezUsuario == false) {
        movesetArmaduraEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoBloquearClick();
        voltarMovesetInicio();
    }
}

function descansoClick() {
    if (vezUsuario == false) {
        movesetArmaduraEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoDescansoClick();
        voltarMovesetInicio();
    }
}

function focoClick() {
    if (vezUsuario == false) {
        movesetArmaduraEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoFocoClick();
        voltarMovesetInicio();
    }
}

function voltarArmaduraAcaoClick() {
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET OUTROS-*/
function movesetOutrosEscolhaClick() {
    primeiraEscolha.removeEventListener('click', movesetArmaEscolhaClick);
    segundaEscolha.removeEventListener('click', movesetMagiaEscolhaClick);
    terceiraEscolha.removeEventListener('click', movesetArmaduraEscolhaClick);
    quartaEscolha.removeEventListener('click', movesetOutrosEscolhaClick);

    primeiraEscolha.value = 'Poder';
    primeiraEscolha.id = 'poder';

    primeiraEscolha = window.document.querySelector('input#poder');
    primeiraEscolha.addEventListener('click', poderClick);

    segundaEscolha.value = 'Poções';
    segundaEscolha.id = 'pocoes';

    segundaEscolha = window.document.querySelector('input#pocoes');
    segundaEscolha.addEventListener('click', pocoesClick);

    terceiraEscolha.value = 'Fugir';
    terceiraEscolha.id = 'fugir';

    terceiraEscolha = window.document.querySelector('input#fugir');
    terceiraEscolha.addEventListener('click', fugirClick);

    quartaEscolha.value = 'Voltar';
    quartaEscolha.id = 'voltarOutrosAcao';

    quartaEscolha = window.document.querySelector('input#voltarOutrosAcao');
    quartaEscolha.addEventListener('click', voltarOutrosAcaoClick);
}

function poderClick() {
    if (vezUsuario == false) {
        movesetOutrosEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoPoderClick();
        voltarMovesetInicio();
    }
}

function pocoesClick() {
    if (vezUsuario == false) {
        movesetOutrosEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoPocoesClick();
        voltarMovesetInicio();
    }
}

function fugirClick() {
    if (vezUsuario == false) {
        movesetOutrosEscolhaClick()
        console.log(`Calma ${jogador.nome}, espere a sua vez`)
    }
    if (vezUsuario == true) {
        botaoFugirClick();
        voltarMovesetInicio();
    }
}

function voltarOutrosAcaoClick() {
    voltarMovesetInicio();
}
/*-----*/

/*-MOVESET RESET-*/
function voltarMovesetInicio() {
    primeiraEscolha.removeEventListener('click', ataqueFracoClick);
    primeiraEscolha.removeEventListener('click', magiaDanoClick);
    primeiraEscolha.removeEventListener('click', bloquearClick);
    primeiraEscolha.removeEventListener('click', poderClick);

    segundaEscolha.removeEventListener('click', ataqueForteClick);
    segundaEscolha.removeEventListener('click', magiaRecuperarClick);
    segundaEscolha.removeEventListener('click', descansoClick);
    segundaEscolha.removeEventListener('click', pocoesClick);

    terceiraEscolha.removeEventListener('click', contraAtaqueClick);
    terceiraEscolha.removeEventListener('click', magiaBuffClick);
    terceiraEscolha.removeEventListener('click', focoClick);
    terceiraEscolha.removeEventListener('click', fugirClick);

    quartaEscolha.removeEventListener('click', voltarArmaAcaoClick);
    quartaEscolha.removeEventListener('click', voltarMagiaAcaoClick);
    quartaEscolha.removeEventListener('click', voltarArmaduraAcaoClick);
    quartaEscolha.removeEventListener('click', voltarOutrosAcaoClick);


    primeiraEscolha.value = 'Atacar';
    primeiraEscolha.id = 'movesetArmaEscolha';

    primeiraEscolha = window.document.querySelector('input#movesetArmaEscolha');
    primeiraEscolha.addEventListener('click', movesetArmaEscolhaClick);

    segundaEscolha.value = 'Magia';
    segundaEscolha.id = 'movesetMagiaEscolha';

    segundaEscolha = window.document.querySelector('input#movesetMagiaEscolha');
    segundaEscolha.addEventListener('click', movesetMagiaEscolhaClick);

    terceiraEscolha.value = 'Defesa/Recuperar';
    terceiraEscolha.id = 'movesetArmaduraEscolha';

    terceiraEscolha = window.document.querySelector('input#movesetArmaduraEscolha');
    terceiraEscolha.addEventListener('click', movesetArmaduraEscolhaClick);

    quartaEscolha.value = 'Outros';
    quartaEscolha.id = 'movesetOutrosEscolha';

    quartaEscolha = window.document.querySelector('input#movesetOutrosEscolha');
    quartaEscolha.addEventListener('click', movesetOutrosEscolhaClick);
}
/*-----*/
/*-----*//*-----*//*-----*//*-----*//*-----*/


/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-JOGADOR ATINGIDO DANO-*/
function jogadorAtingidoDano(danoJogadorGeral) {
    jogadorAtingidoEfeito()

    if (jogador.vidaCombate - danoJogadorGeral < 0) {
        jogador.vidaCombate = 0;
        jogador.vidaPorcentagem = 0.1;
        jogador.porcentagem = 0;
    } else {
        jogador.vidaCombate -= danoJogadorGeral;

        jogador.porcentagem = 100 - ((danoJogadorGeral / jogador.vidaBase) * 100);
        jogador.porcentagem = 100 - jogador.porcentagem;
        jogador.porcentagem = jogador.porcentagem.toPrecision(2);

        jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;
    }

    danoJogadorGeral = 0;
}

function jogadorAtingidoEfeito() {
    setTimeout(function () {
        window.document.body.style.opacity = '0.5'
    }, 0);
    setTimeout(function () {
        window.document.body.style.opacity = '1'
    }, 250);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-VERIFICAR DEBUFF DA ARMA DO JOGADOR-*/
function verificarDebuffArmaJogador() {
    /*-----*/
    if (armaGeral.debuff == 'sangramento') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < armaGeral.chance && debuffSangramento.inimigo == false) {
            rodadaDebuffSangramentoMax.inimigo = parseInt(rodada) + parseInt(armaGeral.duracao)
            debuffSangramento.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${armaGeral.nome} cortou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (armaGeral.debuff == 'veneno') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < armaGeral.chance && debuffVeneno.inimigo == false) {
            rodadaDebuffVenenoMax.inimigo = parseInt(rodada) + parseInt(armaGeral.duracao)
            debuffVeneno.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${armaGeral.nome} envenenou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (armaGeral.debuff == 'chamas') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < armaGeral.chance && debuffChamas.inimigo == false) {
            rodadaDebuffChamasMax.inimigo = parseInt(rodada) + parseInt(armaGeral.duracao)
            debuffChamas.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${armaGeral.nome} incendiou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (armaGeral.debuff == 'congelamento') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < armaGeral.chance && debuffCongelamento.inimigo == false) {
            rodadaDebuffCongelamentoMax.inimigo = parseInt(rodada) + parseInt(armaGeral.duracao)
            debuffCongelamento.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${armaGeral.nome} congelou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (armaGeral.debuff == 'eletricidade') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < armaGeral.chance && debuffEletricidade.inimigo == false) {
            rodadaDebuffEletricidadeMax.inimigo = parseInt(rodada) + parseInt(armaGeral.duracao)
            debuffEletricidade.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${armaGeral.nome} eletrizou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
}
/*-----*/

/*-VERIFICAR DEBUFF DA MAGIA DO JOGADOR-*/
function verificarDebuffMagiaJogador() {
    /*-----*/
    if (magiaDanoGeral.debuff == 'sangramento') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffSangramento.inimigo == false) {
            rodadaDebuffSangramentoMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffSangramento.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaDanoGeral.nome} cortou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (magiaDanoGeral.debuff == 'veneno') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffVeneno.inimigo == false) {
            rodadaDebuffVenenoMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffVeneno.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaDanoGeral.nome} envenenou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (magiaDanoGeral.debuff == 'chamas') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffChamas.inimigo == false) {
            rodadaDebuffChamasMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffChamas.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaDanoGeral.nome} incendiou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (magiaDanoGeral.debuff == 'congelamento') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffCongelamento.inimigo == false) {
            rodadaDebuffCongelamentoMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffCongelamento.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaDanoGeral.nome} congelou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
    if (magiaDanoGeral.debuff == 'eletricidade') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < magiaDanoGeral.chance && debuffEletricidade.inimigo == false) {
            rodadaDebuffEletricidadeMax.inimigo = parseInt(rodada) + parseInt(magiaDanoGeral.duracao)
            debuffEletricidade.inimigo = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${magiaDanoGeral.nome} eletrizou ${inimigoGeral.nome}`);
        }
    }
    /*-----*/
}
/*-----*//*-----*//*-----*//*-----*//*-----*/



/*-----*//*-----*//*-----*//*-----*//*-----*/
function semEnergiaManaVisibilidade() {
    semEnergiaManaDisplay.style.animation = 'semEnergiaManaMostrar 3s 0ms 1';

    setTimeout(function () {
        semEnergiaManaDisplay.style.animation = 'semEnergiaManaEsconder 1s 1s 1';
    }, 2000)
}
/*-----*//*-----*//*-----*//*-----*//*-----*/