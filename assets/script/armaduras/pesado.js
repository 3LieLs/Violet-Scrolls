var armaduraDeFerro =
{
    nome: 'Armadura de ferro', val: 'armaduraDeFerro', obtido: false, peso: 0, preco: 0, 
    defesa: 5, defesaCombate: 5, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 10, manaRecuperacao: 5, 
}
function equipArmaduraDeFerro()
{
    armaduraGeral = armaduraDeFerro;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}



var armaduraDeAco =
{
    nome: 'Armadura de aço', val: 'armaduraDeAco', obtido: false, peso: 0, preco: 0,
    defesa: 3, defesaCombate: 3, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 8, manaRecuperacao: 3, 
}
function equipArmaduraDeAco()
{
    armaduraGeral = armaduraDeAco;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}