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
    geralObtido = arcoSimples.obtido
    geralPreco = arcoSimples.preco
    geralAdicionar = adicionarArcoSimples

    geralComprar()
}
/*-----*/
function arcoSimplesVender() {
    geralObtido = arcoSimples.obtido
    geralPreco = arcoSimples.preco
    geralRemover = removerArcoSimples

    geralVender()
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
    geralObtido = arcoLongo.obtido
    geralPreco = arcoLongo.preco
    geralAdicionar = adicionarArcoLongo

    geralComprar()
}
/*-----*/
function arcoLongoVender() {
    geralObtido = arcoLongo.obtido
    geralPreco = arcoLongo.preco
    geralRemover = removerArcoLongo

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/