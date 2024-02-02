armaduraGeral = panoSujo;

var armaduraGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0, 
    defesa: 0, defesaCombate: 0, tipoDefesa: '', buff: '',
    manaRecuperacao: 0, energiaRecuperacao: 0,
}

var panoSujo =
{
    nome: 'Pano sujo', val: 'panoSujo', obtido: false, peso: 0, preco: 0, 
    defesa: 0, defesaCombate: 0, tipoDefesa: 'Físico', buff: '',
    manaRecuperacao: 20, energiaRecuperacao: 20,
}



var armaduraDePele =
{
    nome: 'Armadura de pele', val: 'armaduraDePele', obtido: false, peso: 0, preco: 3, 
    defesa: 1, defesaCombate: 1, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 15,
}
function equipArmaduraDePele()
{
    armaduraGeral = armaduraDePele;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function adicionarArmaduraDePele()
{
    armaduraDePele.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDePele.val;
    addItemNome = armaduraDePele.nome;
    funcaoEquip = equipArmaduraDePele;
}