var chicoteDeAco =
{
    nome: 'Chicote de aço', classe: 'Físico', obtido: false, val: 'chicoteDeAco', peso: 0, preco: 3,
    danoBase: 6, danoCombate: 6, tipoDano: '',
    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
function equipChicoteDeAco()
{
    armaGeral = chicoteDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarChicoteDeAco()
{
    chicoteDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = chicoteDeAco.val;
    addItemNome = chicoteDeAco.nome;
    funcaoEquip = equipChicoteDeAco;
}



var espadaDeAco =
{
    nome: 'Espada de aço', classe: 'Físico', obtido: false, val: 'espadaDeAco', peso: 0, preco: 5,
    danoBase: 8, danoCombate: 8, tipoDano: '',
    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}
function equipEspadaDeAco() {
    armaGeral = espadaDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarEspadaDeAco()
{
    espadaDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = espadaDeAco.val;
    addItemNome = espadaDeAco.nome;
    funcaoEquip = equipEspadaDeAco;
}

function removerEspadaDeAco()
{
    espadaDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = espadaDeAco.val;
    removItemNome = espadaDeAco.nome;
   
}
