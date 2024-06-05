/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaGeral =
{
    nome: '', buff: '', poder: '', fraqueza: '', resistencia: '',
    vidaBase: 0, manaBase: 0, energiaBase: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,
}
var poderUtilizado = false;
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaHumano =
{
    nome: 'Humano', buff: '', poder: 'Nenhum', fraqueza: 'Nenhuma', resistencia: 'Nenhuma',
    vidaBase: 200, manaBase: 20, energiaBase: 20,
    vidaCombate: 200, manaCombate: 20, energiaCombate: 20,
}
/*-PODER HUMANO-*/
var rodadaPoderHumanoMax = 0, buffHumano = false;
function poderHumanoUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>Nada Aconteceu`)
}

function poderHumanoClick() {
    inicioRodada();
    inicioBuffDebuff();

    setTimeout(poderHumanoUso, 0);
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaElfo =
{
    nome: 'Elfo', buff: '', poder: 'Paciência élfica', fraqueza: 'Físico', resistencia: 'Elétrico',
    vidaBase: 20, manaBase: 30, energiaBase: 10,
    vidaCombate: 20, manaCombate: 30, energiaCombate: 10,
}
/*-PODER ELFO-*/
var rodadaPoderElfoMax = 0, buffElfo = false;
function poderElfoUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${racaGeral.poder}`)

    buffElfo = true
    rodadaPoderElfoMax = parseInt(rodada) + 3

    legendaView.insertAdjacentHTML('beforeend', `<br>${racaGeral.poder} dobrou o dano das magias de ${jogador.nome}`)
}

function poderElfoClick() {
    inicioRodada();
    inicioBuffDebuff();

    setTimeout(poderElfoUso, 0);
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaOrc =
{
    nome: 'Orc', buff: '', poder: 'Furia primitiva', fraqueza: 'Gelo', resistencia: 'Físico',
    vidaBase: 30, manaBase: 10, energiaBase: 20,
    vidaCombate: 30, manaCombate: 10, energiaCombate: 20,
}
/*-PODER ORC-*/
var rodadaPoderOrcMax = 0, buffOrc = false;
function poderOrcUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${racaGeral.poder}`)

    buffOrc = true
    rodadaPoderOrcMax = parseInt(rodada) + 3

    legendaView.insertAdjacentHTML('beforeend', `<br>${racaGeral.poder} dobrou o dano da arma de ${jogador.nome}`)
}

function poderOrcClick() {
    inicioRodada();
    inicioBuffDebuff();

    setTimeout(poderOrcUso, 0);
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaDraconato =
{
    nome: 'Draconato', buff: '', poder: 'Sopro dracônico', fraqueza: 'Elétrico', resistencia: 'Fogo',
    vidaBase: 25, manaBase: 15, energiaBase: 20,
    vidaCombate: 25, manaCombate: 15, energiaCombate: 20,
}
/*-PODER DRACONATO-*/
function poderDraconatoUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${racaGeral.poder}`);

    inimigoAtingidoDano(Math.round(inimigoGeral.vidaBase * 0.50));
    legendaView.insertAdjacentHTML('beforeend', `<br><br>Dano causado: ${Math.round(inimigoGeral.vidaBase * 0.50)}`);
    atualizarCombateHud('inimigo')

    if (debuffChamas.inimigo == false) {
        rodadaDebuffChamasMax.inimigo = parseInt(rodada) + 3;
        debuffChamas.inimigo = true;

        legendaView.insertAdjacentHTML('beforeend', `<br><br>${racaGeral.poder} incendiou ${inimigoGeral.nome}`);
    }
}

function poderDraconatoClick() {
    inicioRodada();
    inicioBuffDebuff();

    setTimeout(poderDraconatoUso, 0);
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaVampiro =
{
    nome: 'Vampiro', buff: '', poder: 'Absorvição de vida', fraqueza: 'Fogo', resistencia: 'Gelo',
    vidaBase: 15, manaBase: 25, energiaBase: 20,
    vidaCombate: 15, manaCombate: 25, energiaCombate: 20,
}
/*-PODER VAMPIRO-*/
var rodadaPoderVampiroMax = 0, buffVampiro = false;
function poderVampiroUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${racaGeral.poder}`)

    buffVampiro = true
    rodadaPoderVampiroMax = parseInt(rodada) + 3

    legendaView.insertAdjacentHTML('beforeend', `<br>${racaGeral.poder} criou um campo de sugamento de vida`)
}

function poderVampiroClick() {
    inicioRodada();
    inicioBuffDebuff();

    setTimeout(poderVampiroUso, 0);
    setTimeout(inimigoAtaque, 2000);

    setTimeout(fimBuffDebuff, 3000);
    setTimeout(fimRodada, 4000);
}
/*-----*//*-----*//*-----*//*-----*//*-----*/