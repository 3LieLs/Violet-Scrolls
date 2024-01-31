var armaGeral = {
    nome: '', classe: '', peso: 0, val: '',
    dano: 0, danoCombate: 0, tipoDano: '',
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}

var soco = {
    nome: 'Soco', classe: '', peso: 0, val: '',
    dano: 1, danoCombate: 1, tipoDano: '',
    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0, 
}



var adaga = {
    nome: 'Adaga', classe: 'Físico',  peso: 1, val: 'adaga',
    dano: 3, danoCombate: 3, tipoDano: '',
    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0, 
}
function equipAdaga() {
    armaGeral = adaga

    menuArmaVal.innerHTML = `Arma:<br>${armaGeral.nome}`
    menuDanoVal.innerHTML = `Dano: ${armaGeral.dano}`
    menuEnergiaCustoVal.innerHTML = `E custo: ${armaGeral.energiaCusto}`
    menuManaCustoVal.innerHTML = `M custo: ${armaGeral.manaCusto}`
}