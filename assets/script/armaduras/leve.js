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
    if (armaduraDeCouro.obtido == false) {
        if (jogador.pecitas - armaduraDeCouro.preco >= 0) {
            adicionarArmaduraDeCouro()
            adicionarItem()

            jogador.pecitas -= armaduraDeCouro.preco;
        }
        else {
            alert('Dinheiro insuficiente');
        }
    }
    else {
        alert('Você já possui este item');
    }
}
/*-----*/
function armaduraDeCouroVender() {
    if (armaduraDeCouro.obtido == true) {
        if (ferreiro.pecitas - armaduraDeCouro.preco >= 0) {
            removerArmaduraDeCouro()
            removerItem()

            jogador.pecitas += armaduraDeCouro.preco;
        }
        else {
            alert('O ferreiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
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
    if (armaduraDeEscamas.obtido == false) {
        if (jogador.pecitas - armaduraDeEscamas.preco >= 0) {
            adicionarArmaduraDeEscamas()
            adicionarItem()

            jogador.pecitas -= armaduraDeEscamas.preco;
        }
        else {
            alert('Dinheiro insuficiente');
        }
    }
    else {
        alert('Você já possui este item');
    }
}
/*-----*/
function armaduraDeEscamasVender() {
    if (armaduraDeEscamas.obtido == true) {
        if (ferreiro.pecitas - armaduraDeEscamas.preco >= 0) {
            removerArmaduraDeEscamas()
            removerItem()

            jogador.pecitas += armaduraDeEscamas.preco;
        }
        else {
            alert('O ferreiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/