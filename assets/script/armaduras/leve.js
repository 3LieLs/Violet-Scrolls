/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDePele =
{
    nome: 'Armadura de pele', val: 'armaduraDePele', obtido: false, peso: 0, preco: 3,
    defesaBase: 1, defesaCombate: 1, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 15,
}
/*-----*/
function equipArmaduraDePele() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = armaduraDePele;
        equiparItemSlotarmaduraDePele.value = 'Desequip'
        equiparItemSlotarmaduraDePele.removeEventListener('click', equipArmaduraDePele)
        equiparItemSlotarmaduraDePele.addEventListener('click', desequipArmaduraDePele)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipArmaduraDePele() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlotarmaduraDePele.value = 'Equip'
    equiparItemSlotarmaduraDePele.removeEventListener('click', desequipArmaduraDePele)
    equiparItemSlotarmaduraDePele.addEventListener('click', equipArmaduraDePele)
}
/*-----*/
function adicionarArmaduraDePele() {
    armaduraDePele.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDePele.val;
    addItemNome = armaduraDePele.nome;
    funcaoEquip = equipArmaduraDePele;
}
function removerArmaduraDePele() {
    armaduraDePele.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = armaduraDePele.val;
    removItemNome = armaduraDePele.nome;
}
/*-----*/
function armaduraDePeleComprar() {
    geralObtido = armaduraDePele.obtido
    geralPreco = armaduraDePele.preco
    geralAdicionar = adicionarArmaduraDePele

    geralComprar()
}
function armaduraDePeleVender() {
    geralObtido = armaduraDePele.obtido
    geralPreco = armaduraDePele.preco
    geralRemover = removerArmaduraDePele

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDeCouro =
{
    nome: 'Armadura de couro', val: 'armaduraDeCouro', obtido: false, peso: 0, preco: 5,
    defesaBase: 7, defesaCombate: 7, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 10,
}
/*-----*/
function equipArmaduraDeCouro() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = armaduraDeCouro;
        equiparItemSlotarmaduraDeCouro.value = 'Desequip'
        equiparItemSlotarmaduraDeCouro.removeEventListener('click', equipArmaduraDeCouro)
        equiparItemSlotarmaduraDeCouro.addEventListener('click', desequipArmaduraDeCouro)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipArmaduraDeCouro() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlotarmaduraDeCouro.value = 'Equip'
    equiparItemSlotarmaduraDeCouro.removeEventListener('click', desequipArmaduraDeCouro)
    equiparItemSlotarmaduraDeCouro.addEventListener('click', equipArmaduraDeCouro)
}
/*-----*/
function adicionarArmaduraDeCouro() {
    armaduraDeCouro.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDeCouro.val;
    addItemNome = armaduraDeCouro.nome;
    funcaoEquip = equipArmaduraDeCouro;
}
function removerArmaduraDeCouro() {
    armaduraDeCouro.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = armaduraDeCouro.val;
    removItemNome = armaduraDeCouro.nome;
}
/*-----*/
function armaduraDeCouroComprar() {
    geralObtido = armaduraDeCouro.obtido
    geralPreco = armaduraDeCouro.preco
    geralAdicionar = adicionarArmaduraDeCouro

    geralComprar()
}
function armaduraDeCouroVender() {
    geralObtido = armaduraDeCouro.obtido
    geralPreco = armaduraDeCouro.preco
    geralRemover = removerArmaduraDeCouro

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDeEscamas =
{
    nome: 'Armadura de escamas', val: 'armaduraDeEscamas', obtido: false, peso: 0, preco: 7,
    defesaBase: 2, defesaCombate: 2, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 13, manaRecuperacao: 8,
}
/*-----*/
function equipArmaduraDeEscamas() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = armaduraDeEscamas;
        equiparItemSlotarmaduraDeEscamas.value = 'Desequip'
        equiparItemSlotarmaduraDeEscamas.removeEventListener('click', equipArmaduraDeEscamas)
        equiparItemSlotarmaduraDeEscamas.addEventListener('click', desequipArmaduraDeEscamas)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipArmaduraDeEscamas() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlotarmaduraDeEscamas.value = 'Equip'
    equiparItemSlotarmaduraDeEscamas.removeEventListener('click', desequipArmaduraDeEscamas)
    equiparItemSlotarmaduraDeEscamas.addEventListener('click', equipArmaduraDeEscamas)
}
/*-----*/
function adicionarArmaduraDeEscamas() {
    armaduraDeEscamas.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDeEscamas.val;
    addItemNome = armaduraDeEscamas.nome;
    funcaoEquip = equipArmaduraDeEscamas;
}
function removerArmaduraDeEscamas() {
    armaduraDeEscamas.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = armaduraDeEscamas.val;
    removItemNome = armaduraDeEscamas.nome;
}
/*-----*/
function armaduraDeEscamasComprar() {
    geralObtido = armaduraDeEscamas.obtido
    geralPreco = armaduraDeEscamas.preco
    geralAdicionar = adicionarArmaduraDeEscamas

    geralComprar()
}
function armaduraDeEscamasVender() {
    geralObtido = armaduraDeEscamas.obtido
    geralPreco = armaduraDeEscamas.preco
    geralRemover = removerArmaduraDeEscamas

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/