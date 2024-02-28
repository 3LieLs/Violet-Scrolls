/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaGeral =
{
    nome: '', buff: '', poder: '', fraqueza: '', resistencia: '',
    vidaBase: 0, manaBase: 0, energiaBase: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaHumano =
{
    nome: 'Humano', buff: '', poder: '', fraqueza: 'Nenhuma', resistencia: 'Nenhuma',
    vidaBase: 20, manaBase: 20, energiaBase: 20,
    vidaCombate: 20, manaCombate: 20, energiaCombate: 20,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaElfo =
{
    nome: 'Elfo', buff: '', poder: '', fraqueza: 'Físico', resistencia: 'Elétrico',
    vidaBase: 20, manaBase: 30, energiaBase: 10,
    vidaCombate: 20, manaCombate: 30, energiaCombate: 10,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaOrc =
{
    nome: 'Orc', buff: '', poder: 'Furia primitiva', fraqueza: 'Gelo', resistencia: 'Físico',
    vidaBase: 30, manaBase: 10, energiaBase: 20,
    vidaCombate: 30, manaCombate: 10, energiaCombate: 20,
}

var rodadaPoderOrcMax = 0, buffOrc = false;
function poderOrcUso() {
    legendaView.insertAdjacentHTML('beforeend', `<br><br>${jogador.nome} utilizou ${racaGeral.poder}`)

    buffOrc = true
    rodadaPoderOrcMax = parseInt(rodada) + parseInt(3)

    legendaView.insertAdjacentHTML('beforeend', `<br>${racaGeral.poder} dobrou o dano de ${jogador.nome}`)

    jogadorCombateHud()
    inimigoCombateHud()
}
/*-----*/

/*-----*/
function botaoPoderOrcClick() {
    inicioRodada();
    inicioBuffDebuffJogador();

    setTimeout(poderOrcUso, 0);

    setTimeout(inimigoAtaque, 2000);
    setTimeout(jogadorCombateHud, 2000);
    setTimeout(inimigoCombateHud, 2000);
    setTimeout(jogadorDerrotado, 3000);

    setTimeout(fimBuffDebuffJogador, 3000);


    setTimeout(fimRodada, 4000);
}
/*-----*/
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaDraconato =
{
    nome: 'Draconato', buff: '', poder: '', fraqueza: 'Elétrico', resistencia: 'Fogo',
    vidaBase: 25, manaBase: 15, energiaBase: 20,
    vidaCombate: 25, manaCombate: 15, energiaCombate: 20,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var racaVampiro =
{
    nome: 'Vampiro', buff: '', poder: '', fraqueza: 'Fogo', resistencia: 'Gelo',
    vidaBase: 15, manaBase: 25, energiaBase: 20,
    vidaCombate: 15, manaCombate: 25, energiaCombate: 20,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/