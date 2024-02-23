armaduraGeral = panoSujo;
/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,
    defesa: 0, defesaCombate: 0, tipoDefesa: '',
    buff: '',
    manaRecuperacao: 0, energiaRecuperacao: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var panoSujo =
{
    nome: 'Pano sujo', val: 'panoSujo', obtido: false, peso: 0, preco: 0,
    defesa: 0, defesaCombate: 0, tipoDefesa: 'Físico',
    buff: '',
    manaRecuperacao: 20, energiaRecuperacao: 20,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaduraDePele =
{
    nome: 'Armadura de pele', val: 'armaduraDePele', obtido: false, peso: 0, preco: 3,
    defesa: 1, defesaCombate: 1, tipoDefesa: 'Físico', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 15,
}
/*-----*/
function equipArmaduraDePele() {
    armaduraGeral = armaduraDePele;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
/*-----*/
function adicionarArmaduraDePele() {
    armaduraDePele.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = armaduraDePele.val;
    addItemNome = armaduraDePele.nome;
    funcaoEquip = equipArmaduraDePele;
}
/*-----*/
function removerArmaduraDePele() {
    armaduraDePele.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = armaduraDePele.val;
    removItemNome = armaduraDePele.nome;
}
/*-----*/
function armaduraDePeleComprar() {
    if (armaduraDePele.obtido == false) {
        if (jogador.pecitas - armaduraDePele.preco >= 0) {
            adicionarArmaduraDePele()
            adicionarItem()

            jogador.pecitas -= armaduraDePele.preco;
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
function armaduraDePeleVender() {
    if (armaduraDePele.obtido == true) {
        if (ferreiro.pecitas - armaduraDePele.preco >= 0) {
            removerArmaduraDePele()
            removerItem()

            jogador.pecitas += armaduraDePele.preco;
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