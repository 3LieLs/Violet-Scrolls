/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDeFerro =
{
    nome: 'Armadura de ferro', val: 'armaduraDeFerro', obtido: false, peso: 0, preco: 0,
    defesaBase: 5, defesaCombate: 5, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 10, manaRecuperacao: 5,
}
/*-----*/
function equipArmaduraDeFerro() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = armaduraDeFerro;
        equiparItemSlotarmaduraDeFerro.value = 'Desequip'
        equiparItemSlotarmaduraDeFerro.removeEventListener('click', equipArmaduraDeFerro)
        equiparItemSlotarmaduraDeFerro.addEventListener('click', desequipArmaduraDeFerro)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipArmaduraDeFerro() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlotarmaduraDeFerro.value = 'Equip'
    equiparItemSlotarmaduraDeFerro.removeEventListener('click', desequipArmaduraDeFerro)
    equiparItemSlotarmaduraDeFerro.addEventListener('click', equipArmaduraDeFerro)
}
/*-----*/
function adicionarArmaduraDeFerro() {
    armaduraDeFerro.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDeFerro.val;
    addItemNome = armaduraDeFerro.nome;
    funcaoEquip = equipArmaduraDeFerro;
}
/*-----*/
function removerArmaduraDeFerro() {
    armaduraDeFerro.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = armaduraDeFerro.val;
    removItemNome = armaduraDeFerro.nome;
}
/*-----*/
function armaduraDeFerroComprar() {
    geralObtido = armaduraDeFerro.obtido
    geralPreco = armaduraDeFerro.preco
    geralAdicionar = adicionarArmaduraDeFerro

    geralComprar()
}
/*-----*/
function armaduraDeFerroVender() {
    geralObtido = armaduraDeFerro.obtido
    geralPreco = armaduraDeFerro.preco
    geralRemover = removerArmaduraDeFerro

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDeAco =
{
    nome: 'Armadura de aço', val: 'armaduraDeAco', obtido: false, peso: 0, preco: 0,
    defesaBase: 3, defesaCombate: 3, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 8, manaRecuperacao: 3,
}
/*-----*/
function equipArmaduraDeAco() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = armaduraDeAco;
        equiparItemSlotarmaduraDeAco.value = 'Desequip'
        equiparItemSlotarmaduraDeAco.removeEventListener('click', equipArmaduraDeAco)
        equiparItemSlotarmaduraDeAco.addEventListener('click', desequipArmaduraDeAco)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipArmaduraDeAco() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlotarmaduraDeAco.value = 'Equip'
    equiparItemSlotarmaduraDeAco.removeEventListener('click', desequipArmaduraDeAco)
    equiparItemSlotarmaduraDeAco.addEventListener('click', equipArmaduraDeAco)
}
/*-----*/
function adicionarArmaduraDeAco() {
    armaduraDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDeAco.val;
    addItemNome = armaduraDeAco.nome;
    funcaoEquip = equipArmaduraDeAco;
}
/*-----*/
function removerArmaduraDeAco() {
    armaduraDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = armaduraDeAco.val;
    removItemNome = armaduraDeAco.nome;
}
/*-----*/
function armaduraDeAcoComprar() {
    geralObtido = armaduraDeAco.obtido
    geralPreco = armaduraDeAco.preco
    geralAdicionar = adicionarArmaduraDeAco

    geralComprar()
}
/*-----*/
function armaduraDeAcoVender() {
    geralObtido = armaduraDeAco.obtido
    geralPreco = armaduraDeAco.preco
    geralRemover = removerArmaduraDeAco

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/