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