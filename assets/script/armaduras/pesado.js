/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDeFerro =
{
    nome: 'Armadura de ferro', val: 'armaduraDeFerro', obtido: false, peso: 0, preco: 0,
    defesa: 5, defesaCombate: 5, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 10, manaRecuperacao: 5,
}
/*-----*/
function equipArmaduraDeFerro() {
    armaduraGeral = armaduraDeFerro;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
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
    if (armaduraDeFerro.obtido == false) {
        if (jogador.pecitas - armaduraDeFerro.preco >= 0) {
            adicionarArmaduraDeFerro()
            adicionarItem()

            jogador.pecitas -= armaduraDeFerro.preco;
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
function armaduraDeFerroVender() {
    if (armaduraDeFerro.obtido == true) {
        if (ferreiro.pecitas - armaduraDeFerro.preco >= 0) {
            removerArmaduraDeFerro()
            removerItem()

            jogador.pecitas += armaduraDeFerro.preco;
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
var armaduraDeAco =
{
    nome: 'Armadura de aço', val: 'armaduraDeAco', obtido: false, peso: 0, preco: 0,
    defesa: 3, defesaCombate: 3, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 8, manaRecuperacao: 3,
}
/*-----*/
function equipArmaduraDeAco() {
    armaduraGeral = armaduraDeAco;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
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
    if (armaduraDeAco.obtido == false) {
        if (jogador.pecitas - armaduraDeAco.preco >= 0) {
            adicionarArmaduraDeAco()
            adicionarItem()

            jogador.pecitas -= armaduraDeAco.preco;
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
function armaduraDeAcoVender() {
    if (armaduraDeAco.obtido == true) {
        if (ferreiro.pecitas - armaduraDeAco.preco >= 0) {
            removerArmaduraDeAco()
            removerItem()

            jogador.pecitas += armaduraDeAco.preco;
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