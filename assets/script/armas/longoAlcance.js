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
    if (armaGeral == soco) {
        armaGeral = arcoSimples;
        equiparItemSlotarcoSimples.value = 'Desequip'
        equiparItemSlotarcoSimples.removeEventListener('click', equipArcoSimples)
        equiparItemSlotarcoSimples.addEventListener('click', desequipArcoSimples)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipArcoSimples() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotarcoSimples.value = 'Equip'
    equiparItemSlotarcoSimples.removeEventListener('click', desequipArcoSimples)
    equiparItemSlotarcoSimples.addEventListener('click', equipArcoSimples)
}
/*-----*/
function adicionarArcoSimples() {
    arcoSimples.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = arcoSimples.val;
    addItemNome = arcoSimples.nome;
    funcaoEquip = equipArcoSimples;
}
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

    danoBase: 8, danoCombate: 8, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 4, energiaCustoCombate: 4, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipArcoLongo() {
    if (armaGeral == soco) {
        armaGeral = arcoLongo;
        equiparItemSlotarcoLongo.value = 'Desequip'
        equiparItemSlotarcoLongo.removeEventListener('click', equipArcoLongo)
        equiparItemSlotarcoLongo.addEventListener('click', desequipArcoLongo)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipArcoLongo() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotarcoLongo.value = 'Equip'
    equiparItemSlotarcoLongo.removeEventListener('click', desequipArcoLongo)
    equiparItemSlotarcoLongo.addEventListener('click', equipArcoLongo)
}
/*-----*/
function adicionarArcoLongo() {
    arcoLongo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = arcoLongo.val;
    addItemNome = arcoLongo.nome;
    funcaoEquip = equipArcoLongo;
}
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
function arcoLongoVender() {
    geralObtido = arcoLongo.obtido
    geralPreco = arcoLongo.preco
    geralRemover = removerArcoLongo

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/