/*-INIMIGO HUD-*/
function inimigoCombateHud() {
    inimigoHudNome.innerHTML = `${inimigoGeral.nome}`;

    inimigoHudVida.innerHTML = `Vida: ${inimigoGeral.vidaCombate}`;
    inimigoHudVida.style.backgroundSize = `${inimigoGeral.vidaPorcentagem}% 100%`;

    if (inimigoGeral.classe == 'fisico') {
        inimigoHudEnergiaMana.innerHTML = `Energia: ${inimigoGeral.energiaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.energiaPorcentagem}% 100%`;
    }

    if (inimigoGeral.classe == 'magico') {
        inimigoHudEnergiaMana.innerHTML = `Mana: ${inimigoGeral.manaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.manaPorcentagem}% 100%`;
    }
}
/*-----*/


/*-----*/
var funcaoInimigoAtaque
/*-----*/


/*-----*/
var inimigoArmaGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/


/*-INIMIGO ATAQUE-*/
function inimigoAtaque() {
    if (inimigoGeral.vidaCombate > 0) {
        funcaoInimigoAtaque()
    }
}
/*-----*/


/*-----*/
function aplicarFraquezaResistenciaJogador() {
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

function desaplicarFraquezaResistenciaJogador() {
    if (racaGeral.fraqueza == inimigoArmaGeral.tipoDano) {
        let aumentarDano = inimigoArmaGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        inimigoArmaGeral.danoCombate -= aumentarDano
    }

    if (racaGeral.fraqueza == magiaDanoGeral.tipoDano) {
        let aumentarDano = magiaDanoGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        magiaDanoGeral.danoCombate -= aumentarDano
    }


    if (racaGeral.resistencia == inimigoArmaGeral.tipoDano) {
        let aumentarDano = inimigoArmaGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        inimigoArmaGeral.danoCombate += aumentarDano
    }

    if (racaGeral.resistencia == magiaDanoGeral.tipoDano) {
        let aumentarDano = magiaDanoGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        magiaDanoGeral.danoCombate += aumentarDano
    }
}
/*-----*/


/*-----*/
function verificarDebuffArmaInimigo() {
    if (inimigoArmaGeral.debuff == 'veneno') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffVeneno.jogador == false) {
            rodadaDebuffVenenoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffVeneno.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} envenenou ${jogador.nome}`);
        }
    }

    if (inimigoArmaGeral.debuff == 'chamas') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffChamas.jogador == false) {
            rodadaDebuffChamasMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffChamas.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} incendiou ${jogador.nome}`);
        }
    }

    if (inimigoArmaGeral.debuff == 'congelado') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffCongelado.jogador == false) {
            rodadaDebuffCongeladoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffCongelado.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} congelou ${jogador.nome}`);
        }
    }

    if (inimigoArmaGeral.debuff == 'eletricidade') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffEletricidade.jogador == false) {
            rodadaDebuffEletricidadeMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffEletricidade.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} eletrizou ${jogador.nome}`);
        }
    }
}
/*-----*/