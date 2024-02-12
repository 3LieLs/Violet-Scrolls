var armaGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '', debuff: '',

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}

var soco =
{
    nome: 'Soco', val: 'soco', obtido: false, peso: 0, preco: 0,

    danoBase: 1, danoCombate: 1, tipoDano: 'Físico', debuff: 'Nenhum',

    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0, 
}



var adaga =
{
    nome: 'Adaga', val: 'adaga', obtido: false,  peso: 0, preco: 3,

    danoBase: 3, danoCombate: 3, tipoDano: 'Físico', debuff: 'Nenhum',

    energiaCusto: 6, energiaCustoCombate: 6, manaCusto: 0, manaCustoCombate: 0, 
}
function equipAdaga()
{
    armaGeral = adaga;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function adicionarAdaga()
{
    jogador.peso += adaga.peso
    adaga.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = adaga.val;
    addItemNome = adaga.nome;
    funcaoEquip = equipAdaga;
}