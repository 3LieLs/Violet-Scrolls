/*-----*//*-----*//*-----*//*-----*//*-----*/
var magiaRecuperacaoGeral =
{
    nome: '', val: '', obtido: false, preco: 0,

    tipo: '',
    vidaRecuperacao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var luzDaVida =
{
    nome: 'Luz da vida', val: 'luzDaVida', obtido: false, preco: 10,

    tipo: 'Vida',
    vidaRecuperacao: 10,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
/*-----*/
function equipLuzDaVida() {
    if (magiaRecuperacaoGeral == 'Nenhuma') {
        magiaRecuperacaoGeral = luzDaVida;
        equiparItemSlotluzDaVida.value = 'Desequip'
        equiparItemSlotluzDaVida.removeEventListener('click', equipLuzDaVida)
        equiparItemSlotluzDaVida.addEventListener('click', desequipLuzDaVida)
    }

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function desequipLuzDaVida() {
    magiaRecuperacaoGeral = 'Nenhuma';

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }

    equiparItemSlotluzDaVida.value = 'Equip'
    equiparItemSlotluzDaVida.removeEventListener('click', desequipLuzDaVida)
    equiparItemSlotluzDaVida.addEventListener('click', equipLuzDaVida)
}
/*-----*/
function adicionarLuzDaVida() {
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var purificacaoAstral =
{
    nome: 'Purificacao astral', val: 'purificacaoAstral', obtido: false, preco: 15,

    tipo: 'Elementares',
    vidaRecuperacao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
/*-----*/
function equipPurificacaoAstral() {
    if (magiaRecuperacaoGeral == 'Nenhuma') {
        magiaRecuperacaoGeral = purificacaoAstral;
        equiparItemSlotpurificacaoAstral.value = 'Desequip'
        equiparItemSlotpurificacaoAstral.removeEventListener('click', equipPurificacaoAstral)
        equiparItemSlotpurificacaoAstral.addEventListener('click', desequipPurificacaoAstral)
    }

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function desequipPurificacaoAstral() {
    magiaRecuperacaoGeral = 'Nenhuma';

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }

    equiparItemSlotpurificacaoAstral.value = 'Equip'
    equiparItemSlotpurificacaoAstral.removeEventListener('click', desequipPurificacaoAstral)
    equiparItemSlotpurificacaoAstral.addEventListener('click', equipPurificacaoAstral)
}
/*-----*/
function adicionarPurificacaoAstral() {
    purificacaoAstral.obtido = true;
    addItemTipo = 'magia';
    addItemVal = purificacaoAstral.val;
    addItemNome = purificacaoAstral.nome;
    funcaoEquip = equipPurificacaoAstral;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var purificacaoCarnal =
{
    nome: 'Purificacao carnal', val: 'purificacaoCarnal', obtido: false, preco: 15,

    tipo: 'Físico',
    vidaRecuperacao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
/*-----*/
function equipPurificacaoCarnal() {
    if (magiaRecuperacaoGeral == 'Nenhuma') {
        magiaRecuperacaoGeral = purificacaoCarnal;
        equiparItemSlotpurificacaoCarnal.value = 'Desequip'
        equiparItemSlotpurificacaoCarnal.removeEventListener('click', equipPurificacaoCarnal)
        equiparItemSlotpurificacaoCarnal.addEventListener('click', desequipPurificacaoCarnal)
    }

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function desequipPurificacaoCarnal() {
    magiaRecuperacaoGeral = 'Nenhuma';

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }

    equiparItemSlotpurificacaoCarnal.value = 'Equip'
    equiparItemSlotpurificacaoCarnal.removeEventListener('click', desequipPurificacaoCarnal)
    equiparItemSlotpurificacaoCarnal.addEventListener('click', equipPurificacaoCarnal)
}
/*-----*/
function adicionarPurificacaoCarnal() {
    purificacaoCarnal.obtido = true;
    addItemTipo = 'magia';
    addItemVal = purificacaoCarnal.val;
    addItemNome = purificacaoCarnal.nome;
    funcaoEquip = equipPurificacaoCarnal;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/