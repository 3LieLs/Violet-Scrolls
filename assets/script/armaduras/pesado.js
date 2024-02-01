var armaduraDeFerro =
{
    nome: 'Armadura de ferro', val: 'armaduraDeFerro', obtido: false, peso: 0, preco: 0, 
    defesa: 5, defesaCombate: 5, tipoDefesa: '', buff: '',
    energiaRecuperacao: 10, manaRecuperacao: 5, 
}
function equipArmaduraDeFerro()
{
    armaduraGeral = armaduraDeFerro;

    menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraGeral.nome}`;
    menuDefesaVal.innerHTML = `Defesa: ${armaduraGeral.defesa}`;
    menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraGeral.energiaRecuperacao}`;
    menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraGeral.manaRecuperacao}`;
}



var armaduraDeAco =
{
    nome: 'Armadura de aço', val: 'armaduraDeAco', obtido: false, peso: 0, preco: 0,
    defesa: 3, defesaCombate: 3, tipoDefesa: '', buff: '',
    energiaRecuperacao: 8, manaRecuperacao: 3, 
}
function equipArmaduraDeAco()
{
    armaduraGeral = armaduraDeAco;

    menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraGeral.nome}`;
    menuDefesaVal.innerHTML = `Defesa: ${armaduraGeral.defesa}`;
    menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraGeral.energiaRecuperacao}`;
    menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraGeral.manaRecuperacao}`;
}