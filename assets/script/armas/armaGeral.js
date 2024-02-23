/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var soco =
{
    nome: 'Soco', val: 'soco', obtido: false, peso: 0, preco: 0,

    danoBase: 1, danoCombate: 1, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var adaga =
{
    nome: 'Adaga', val: 'adaga', obtido: false, peso: 0, preco: 3,

    danoBase: 3, danoCombate: 3, tipoDano: 'Físico',
    debuff: 'sangramento', chance: 5, duracao: 2,

    energiaCusto: 2, energiaCustoCombate: 2, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipAdaga() {
    armaGeral = adaga;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarAdaga() {
    jogador.peso += adaga.peso
    adaga.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = adaga.val;
    addItemNome = adaga.nome;
    funcaoEquip = equipAdaga;
}
/*-----*/
function removerAdaga() {
    adaga.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = adaga.val;
    removItemNome = adaga.nome;
}
/*-----*/
function adagaComprar() {
    if (adaga.obtido == false) {
        if (jogador.pecitas - adaga.preco >= 0) {
            adicionarAdaga()
            adicionarItem()

            jogador.pecitas -= adaga.preco;
        }
        else {
            alert('Dinheiro insuficiente');
        }
    }
    else {
        alert('Você já possui este item');
    }
}
/*-----*/
function adagaVender() {
    if (adaga.obtido == true) {
        if (ferreiro.pecitas - adaga.preco >= 0) {
            removerAdaga()
            removerItem()

            jogador.pecitas += adaga.preco;
        }
        else {
            alert('O ferreiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/