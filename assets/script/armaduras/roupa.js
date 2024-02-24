/*-----*//*-----*//*-----*//*-----*//*-----*/
var tunicaBasica =
{
    nome: 'Tunica básica', val: 'tunicaBasica', obtido: false, peso: 0, preco: 5,
    defesaBase: 1, defesaCombate: 1, tipoDefesa: 'Mágico', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 20,
}
/*-----*/
function equipTunicaBasica() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = tunicaBasica;
        equiparItemSlottunicaBasica.value = 'Desequip'
        equiparItemSlottunicaBasica.removeEventListener('click', equipTunicaBasica)
        equiparItemSlottunicaBasica.addEventListener('click', desequipTunicaBasica)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipTunicaBasica() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlottunicaBasica.value = 'Equip'
    equiparItemSlottunicaBasica.removeEventListener('click', desequipTunicaBasica)
    equiparItemSlottunicaBasica.addEventListener('click', equipTunicaBasica)
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
    geralObtido = tunicaBasica.obtido
    geralPreco = tunicaBasica.preco
    geralAdicionar = adicionarTunicaBasica

    geralComprar()
}
/*-----*/
function tunicaBasicaVender() {
    geralObtido = tunicaBasica.obtido
    geralPreco = tunicaBasica.preco
    geralRemover = removerTunicaBasica

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var tunicaEspecialista =
{
    nome: 'Tunica especialista', val: 'tunicaEspecialista', obtido: false, peso: 0, preco: 7,
    defesaBase: 3, defesaCombate: 3, tipoDefesa: 'Mágico', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 25,
}
/*-----*/
function equipTunicaEspecialista() {
    if (armaduraGeral == trajeSimples) {
        armaduraGeral = tunicaEspecialista;
        equiparItemSlottunicaEspecialista.value = 'Desequip'
        equiparItemSlottunicaEspecialista.removeEventListener('click', equipTunicaEspecialista)
        equiparItemSlottunicaEspecialista.addEventListener('click', desequipTunicaEspecialista)
    }

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}
function desequipTunicaEspecialista() {
    armaduraGeral = trajeSimples;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }

    equiparItemSlottunicaEspecialista.value = 'Equip'
    equiparItemSlottunicaEspecialista.removeEventListener('click', desequipTunicaEspecialista)
    equiparItemSlottunicaEspecialista.addEventListener('click', equipTunicaEspecialista)
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
    geralObtido = tunicaEspecialista.obtido
    geralPreco = tunicaEspecialista.preco
    geralAdicionar = adicionarTunicaEspecialista

    geralComprar()
}
/*-----*/
function tunicaEspecialistaVender() {
    geralObtido = tunicaEspecialista.obtido
    geralPreco = tunicaEspecialista.preco
    geralRemover = removerTunicaEspecialista

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/