var arcoSimples =
{
    nome: 'Arco simples', classe: 'Físico', obtido: false, val: 'arcoSimples', peso: 0, preco: 4,
    dano: 6, danoCombate: 6, tipoDano: '',
    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
function equipArcoSimples()
{
    armaGeral = arcoSimples;

    menuArmaVal.innerHTML = `Arma:<br>${armaGeral.nome}`;
    menuDanoVal.innerHTML = `Dano: ${armaGeral.dano}`;
    menuEnergiaCustoVal.innerHTML = `E custo: ${armaGeral.energiaCusto}`;
    menuManaCustoVal.innerHTML = `M custo: ${armaGeral.manaCusto}`;
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

    menuArmaVal.innerHTML = `Arma:<br>${armaGeral.nome}`;
    menuDanoVal.innerHTML = `Dano: ${armaGeral.dano}`;
    menuEnergiaCustoVal.innerHTML = `E custo: ${armaGeral.energiaCusto}`;
    menuManaCustoVal.innerHTML = `M custo: ${armaGeral.manaCusto}`;
}