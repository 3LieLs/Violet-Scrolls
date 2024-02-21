var cajadoDeFogo =
{
    nome: 'Cajado de fogo', val: 'cajadoDeFogo', obtido: false, peso: 0, preco: 8,

    danoBase: 8, danoCombate: 8, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 20, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 5, manaCustoCombate: 5,
}
function equipCajadoDeFogo()
{
    armaGeral = cajadoDeFogo;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarCajadoDeFogo()
{
    cajadoDeFogo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoDeFogo.val;
    addItemNome = cajadoDeFogo.nome;
    funcaoEquip = equipCajadoDeFogo;
}



var cajadoEletrico =
{
    nome: 'Cajado elétrico', val: 'cajadoEletrico', obtido: false, peso: 0, preco: 10,

    danoBase: 10, danoCombate: 10, tipoDano: 'eletricidade',
    debuff: 'eletricidade', chance: 20, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 7, manaCustoCombate: 7,
}
function equipCajadoEletrico()
{
    armaGeral = cajadoEletrico;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarCajadoEletrico()
{
    cajadoEletrico.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoEletrico.val;
    addItemNome = cajadoEletrico.nome;
    funcaoEquip = equipCajadoEletrico;
}
