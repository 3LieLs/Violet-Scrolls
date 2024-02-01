var cajadoDeFogo =
{
    nome: 'Cajado de fogo', classe: 'Mágico', obtido: false, val: 'cajadoDeFogo', peso: 0, preco: 8,
    dano: 8, danoCombate: 8, tipoDano: '',
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 5, manaCustoCombate: 5,
}
function equipCajadoDeFogo()
{
    armaGeral = cajadoDeFogo;

    menuArmaVal.innerHTML = `Arma:<br>${armaGeral.nome}`;
    menuDanoVal.innerHTML = `Dano: ${armaGeral.dano}`;
    menuEnergiaCustoVal.innerHTML = `E custo: ${armaGeral.energiaCusto}`;
    menuManaCustoVal.innerHTML = `M custo: ${armaGeral.manaCusto}`;
}



var cajadoEletrico =
{
    nome: 'Cajado elétrico', classe: 'Mágico', obtido: false, val: 'cajadoEletrico', peso: 0, preco: 10,
    dano: 10, danoCombate: 10, tipoDano: '',
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 7, manaCustoCombate: 7,
}
function equipCajadoEletrico()
{
    armaGeral = cajadoEletrico;

    menuArmaVal.innerHTML = `Arma:<br>${armaGeral.nome}`;
    menuDanoVal.innerHTML = `Dano: ${armaGeral.dano}`;
    menuEnergiaCustoVal.innerHTML = `E custo: ${armaGeral.energiaCusto}`;
    menuManaCustoVal.innerHTML = `M custo: ${armaGeral.manaCusto}`;
}