/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDeCouro =
{
    nome: 'Armadura de couro', val: 'armaduraDeCouro', obtido: false, peso: 0, preco: 5,
    defesa: 7, defesaCombate: 7, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 10,
}
function equipArmaduraDeCouro() {
    armaduraGeral = armaduraDeCouro;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
/*-----*/
function adicionarArmaduraDeCouro() {
    armaduraDeCouro.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDeCouro.val;
    addItemNome = armaduraDeCouro.nome;
    funcaoEquip = equipArmaduraDeCouro;
}
/*-----*/
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
/*-----*/
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
    defesa: 2, defesaCombate: 2, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 13, manaRecuperacao: 8,
}
/*-----*/
function equipArmaduraDeEscamas() {
    armaduraGeral = armaduraDeEscamas;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
/*-----*/
function adicionarArmaduraDeEscamas() {
    armaduraDeEscamas.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDeEscamas.val;
    addItemNome = armaduraDeEscamas.nome;
    funcaoEquip = equipArmaduraDeEscamas;
}
/*-----*/
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
/*-----*/
function armaduraDeEscamasVender() {
    geralObtido = armaduraDeEscamas.obtido
    geralPreco = armaduraDeEscamas.preco
    geralRemover = removerArmaduraDeEscamas

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/