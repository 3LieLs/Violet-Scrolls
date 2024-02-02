var arcoSimples =
{
    nome: 'Arco simples', classe: 'Físico', obtido: false, val: 'arcoSimples', peso: 0, preco: 4,
    dano: 6, danoCombate: 6, tipoDano: '',
    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
function equipArcoSimples()
{
    armaGeral = arcoSimples;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarArcoSimples()
{
    arcoSimples.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = arcoSimples.val;
    addItemNome = arcoSimples.nome;
    funcaoEquip = equipArcoSimples;
}



var arcoLongo =
{
    nome: 'Arco longo', classe: 'Físico', obtido: false, val: '', peso: 0, preco: 3,
    dano: 4, danoCombate: 4, tipoDano: '',
    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0,
}
function equipArcoLongo()
{
    armaGeral = arcoLongo;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarArcoLongo()
{
    arcoLongo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = arcoLongo.val;
    addItemNome = arcoLongo.nome;
    funcaoEquip = equipArcoLongo;
}