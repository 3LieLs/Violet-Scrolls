/*-----*//*-----*//*-----*//*-----*//*-----*/
var arcoSimples =
{
    nome: 'Arco simples', val: 'arcoSimples', obtido: false, peso: 0, preco: 4,

    danoBase: 6, danoCombate: 6, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipArcoSimples() {
    armaGeral = arcoSimples;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarArcoSimples() {
    arcoSimples.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = arcoSimples.val;
    addItemNome = arcoSimples.nome;
    funcaoEquip = equipArcoSimples;
}
/*-----*/
function removerArcoSimples() {
    arcoSimples.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = arcoSimples.val;
    removItemNome = arcoSimples.nome;
}
/*-----*/
function arcoSimplesComprar() {
    if (arcoSimples.obtido == false) {
        if (jogador.pecitas - arcoSimples.preco >= 0) {
            adicionarArcoSimples()
            adicionarItem()

            jogador.pecitas -= arcoSimples.preco;
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
function arcoSimplesVender() {
    if (arcoSimples.obtido == true) {
        if (ferreiro.pecitas - arcoSimples.preco >= 0) {
            removerArcoSimples()
            removerItem()

            jogador.pecitas += arcoSimples.preco;
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

/*-----*//*-----*//*-----*//*-----*//*-----*/
var arcoLongo =
{
    nome: 'Arco longo', val: 'arcoLongo', obtido: false, peso: 0, preco: 3,

    danoBase: 4, danoCombate: 4, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipArcoLongo() {
    armaGeral = arcoLongo;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarArcoLongo() {
    arcoLongo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = arcoLongo.val;
    addItemNome = arcoLongo.nome;
    funcaoEquip = equipArcoLongo;
}
/*-----*/
function removerArcoLongo() {
    arcoLongo.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = arcoLongo.val;
    removItemNome = arcoLongo.nome;
}
/*-----*/
function arcoLongoComprar() {
    if (arcoLongo.obtido == false) {
        if (jogador.pecitas - arcoLongo.preco >= 0) {
            adicionarArcoLongo()
            adicionarItem()

            jogador.pecitas -= arcoLongo.preco;
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
function arcoLongoVender() {
    if (arcoLongo.obtido == true) {
        if (ferreiro.pecitas - arcoLongo.preco >= 0) {
            removerArcoLongo()
            removerItem()

            jogador.pecitas += arcoLongo.preco;
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