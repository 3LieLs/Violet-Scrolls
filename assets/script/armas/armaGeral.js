armaGeral = soco;

var armaGeral =
{
    nome: '', classe: '', obtido: false, peso: 0, val: '', preco: 0,
    danoBase: 0, danoCombate: 0, tipoDano: '',
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}

var soco =
{
    nome: 'Soco', classe: 'Físico', obtido: false, peso: 0, val: 'soco', preco: 0,
    danoBase: 1, danoCombate: 1, tipoDano: '',
    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0, 
}



var adaga =
{
    nome: 'Adaga', classe: 'Físico', obtido: false,  peso: 0, val: 'adaga', preco: 3,
    danoBase: 3, danoCombate: 3, tipoDano: '',
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