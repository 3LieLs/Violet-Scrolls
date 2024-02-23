/*-----*//*-----*//*-----*//*-----*//*-----*/
var tunicaBasica =
{
    nome: 'Tunica básica', val: 'tunicaBasica', obtido: false, peso: 0, preco: 5,
    defesa: 1, defesaCombate: 1, tipoDefesa: 'Mágico', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 20,
}
/*-----*/
function equipTunicaBasica() {
    armaduraGeral = tunicaBasica;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
/*-----*/
function adicionarTunicaBasica() {
    tunicaBasica.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = tunicaBasica.val;
    addItemNome = tunicaBasica.nome;
    funcaoEquip = equipTunicaBasica;
}
/*-----*/
function removerTunicaBasica() {
    tunicaBasica.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = tunicaBasica.val;
    removItemNome = tunicaBasica.nome;
}
/*-----*/
function tunicaBasicaComprar() {
    if (tunicaBasica.obtido == false) {
        if (jogador.pecitas - tunicaBasica.preco >= 0) {
            adicionarTunicaBasica()
            adicionarItem()

            jogador.pecitas -= tunicaBasica.preco;
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
function tunicaBasicaVender() {
    if (tunicaBasica.obtido == true) {
        if (ferreiro.pecitas - tunicaBasica.preco >= 0) {
            removerTunicaBasica()
            removerItem()

            jogador.pecitas += tunicaBasica.preco;
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
var tunicaEspecialista =
{
    nome: 'Tunica especialista', val: 'tunicaEspecialista', obtido: false, peso: 0, preco: 7,
    defesa: 3, defesaCombate: 3, tipoDefesa: 'Mágico', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 25,
}
/*-----*/
function equipTunicaEspecialista() {
    armaduraGeral = tunicaEspecialista;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
/*-----*/
function adicionarTunicaEspecialista() {
    tunicaEspecialista.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = tunicaEspecialista.val;
    addItemNome = tunicaEspecialista.nome;
    funcaoEquip = equipTunicaEspecialista;
}
/*-----*/
function removerTunicaEspecialista() {
    tunicaEspecialista.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = tunicaEspecialista.val;
    removItemNome = tunicaEspecialista.nome;
}
/*-----*/
function tunicaEspecialistaComprar() {
    if (tunicaEspecialista.obtido == false) {
        if (jogador.pecitas - tunicaEspecialista.preco >= 0) {
            adicionarTunicaEspecialista()
            adicionarItem()

            jogador.pecitas -= tunicaEspecialista.preco;
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
function tunicaEspecialistaVender() {
    if (tunicaEspecialista.obtido == true) {
        if (ferreiro.pecitas - tunicaEspecialista.preco >= 0) {
            removerTunicaEspecialista()
            removerItem()

            jogador.pecitas += tunicaEspecialista.preco;
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