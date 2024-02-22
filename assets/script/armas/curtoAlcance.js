var chicoteDeAco =
{
    nome: 'Chicote de aço', val: 'chicoteDeAco', obtido: false, peso: 0, preco: 3,

    danoBase: 50, danoCombate: 50, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
function equipChicoteDeAco() {
    armaGeral = chicoteDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarChicoteDeAco() {
    chicoteDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = chicoteDeAco.val;
    addItemNome = chicoteDeAco.nome;
    funcaoEquip = equipChicoteDeAco;
}



var lancaEnvenenada =
{
    nome: 'Lança envenenada', val: 'lancaEnvenenada', obtido: false, peso: 0, preco: 5,

    danoBase: 5, danoCombate: 5, tipoDano: 'Físico',
    debuff: 'veneno', chance: 20, duracao: 2,

    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}
function equipLancaEnvenenada() {
    armaGeral = lancaEnvenenada;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarLancaEnvenenada() {
    lancaEnvenenada.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = lancaEnvenenada.val;
    addItemNome = lancaEnvenenada.nome;
    funcaoEquip = equipEspadaDeAco;
}




var espadaDeAco =
{
    nome: 'Espada de aço', val: 'espadaDeAco', obtido: false, peso: 0, preco: 5,

    danoBase: 8, danoCombate: 8, tipoDano: 'Físico',
    debuff: 'sangramento', chance: 15, duracao: 2,

    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}
function equipEspadaDeAco() {
    armaGeral = espadaDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarEspadaDeAco() {
    espadaDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = espadaDeAco.val;
    addItemNome = espadaDeAco.nome;
    funcaoEquip = equipEspadaDeAco;
}

function removerEspadaDeAco() {
    espadaDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = espadaDeAco.val;
    removItemNome = espadaDeAco.nome;
}