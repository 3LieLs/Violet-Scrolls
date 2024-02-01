var armaduraDeCouro =
{
    nome: 'Armadura de couro', val: 'armaduraDeCouro', obtido: false, peso: 0, preco: 5,
    defesa: 7, defesaCombate: 7, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 10, 
}
function equipArmaduraDeCouro()
{
    armaduraGeral = armaduraDeCouro;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}



var armaduraDeEscamas =
{
    nome: 'Armadura de escamas', val: 'armaduraDeEscamas', obtido: false, peso: 0, preco: 7, 
    defesa: 2, defesaCombate: 2, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 13, manaRecuperacao: 8, 
}
function equipArmaduraDeEscamas()
{
    armaduraGeral = armaduraDeEscamas;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}