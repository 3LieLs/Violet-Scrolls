/*-----*//*-----*//*-----*//*-----*//*-----*/
var
    rodadaBuffDanoMax = { jogador: 0, inimigo: 0, },
    rodadaBuffVidaRegenMax = { jogador: 0, inimigo: 0, },
    rodadaBuffDefesaMax = { jogador: 0, inimigo: 0, },
    rodadaBuffVidaMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffSangramentoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffVenenoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffChamasMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffCongelamentoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffEletricidadeMax = { jogador: 0, inimigo: 0, }

var
    buffVidaRegen = { jogador: false, inimigo: false, },
    buffDano = { jogador: false, inimigo: false, },
    debuffSangramento = { jogador: false, inimigo: false, },
    debuffVeneno = { jogador: false, inimigo: false, },
    debuffChamas = { jogador: false, inimigo: false, },
    debuffCongelamento = { jogador: false, inimigo: false, },
    debuffEletricidade = { jogador: false, inimigo: false, }
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var magiaBuffGeral =
{
    nome: '', ativo: false, obtido: false, val: '', preco: 0,

    buff: '', duracao: 0,
    danoBuff: 0, vidaBuff: 0, defesaBuff: 0,
    vidaRegen: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var furiaDeTouro =
{
    nome: 'Furia de Touro', obtido: false, val: 'furiaDeTouro', preco: 7,

    buff: 'dano', duracao: 3,
    danoBuff: 0.10,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15,
}
/*-----*/
function equipFuriaDeTouro() {
    if (magiaBuffGeral == 'Nenhuma') {
        magiaBuffGeral = furiaDeTouro;
        equiparItemSlotfuriaDeTouro.value = 'Desequip'
        equiparItemSlotfuriaDeTouro.removeEventListener('click', equipFuriaDeTouro)
        equiparItemSlotfuriaDeTouro.addEventListener('click', desequipFuriaDeTouro)
    }

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }
}
function desequipFuriaDeTouro() {
    magiaBuffGeral = 'Nenhuma';

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }

    equiparItemSlotfuriaDeTouro.value = 'Equip'
    equiparItemSlotfuriaDeTouro.removeEventListener('click', desequipFuriaDeTouro)
    equiparItemSlotfuriaDeTouro.addEventListener('click', equipFuriaDeTouro)
}
/*-----*/
function adicionarFuriaDeTouro() {
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var esferasDaVida =
{
    nome: 'Esferas da vida', obtido: false, val: 'esferasDaVida', preco: 7,

    buff: 'vidaRegen', duracao: 5,
    vidaRegenBuff: 0.15,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15,
}
/*-----*/
function equipEsferasDaVida() {
    if (magiaBuffGeral == 'Nenhuma') {
        magiaBuffGeral = esferasDaVida;
        equiparItemSlotesferasDaVida.value = 'Desequip'
        equiparItemSlotesferasDaVida.removeEventListener('click', equipEsferasDaVida)
        equiparItemSlotesferasDaVida.addEventListener('click', desequipEsferasDaVida)
    }

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }
}
function desequipEsferasDaVida() {
    magiaBuffGeral = 'Nenhuma';

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }

    equiparItemSlotesferasDaVida.value = 'Equip'
    equiparItemSlotesferasDaVida.removeEventListener('click', desequipEsferasDaVida)
    equiparItemSlotesferasDaVida.addEventListener('click', equipEsferasDaVida)
}
/*-----*/
function adicionarEsferasDaVida() {
    esferasDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = esferasDaVida.val;
    addItemNome = esferasDaVida.nome;
    funcaoEquip = equipEsferasDaVida;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/