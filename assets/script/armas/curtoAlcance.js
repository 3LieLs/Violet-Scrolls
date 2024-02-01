var chicoteDeAco =
{
    nome: 'Chicote de aço', classe: 'Físico', obtido: false, val: 'chicoteDeAco', peso: 0, preco: 3,
    dano: 6, danoCombate: 6, tipoDano: '',
    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
function equipChicoteDeAco()
{
    armaGeral = chicoteDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}



var espadaDeAco =
{
    nome: 'Espada de aço', classe: 'Físico', obtido: false, val: 'espadaDeAco', peso: 0, preco: 5,
    dano: 8, danoCombate: 8, tipoDano: '',
    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}
function equipEspadaDeAco() {
    armaGeral = espadaDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}