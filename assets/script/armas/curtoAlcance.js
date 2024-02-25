/*-----*//*-----*//*-----*//*-----*//*-----*/
var adaga =
{
    nome: 'Adaga', val: 'adaga', obtido: false, peso: 0, preco: 3,

    danoBase: 3, danoCombate: 3, tipoDano: 'Físico',
    debuff: 'sangramento', chance: 5, duracao: 2,

    energiaCusto: 2, energiaCustoCombate: 2, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipAdaga() {
    if (armaGeral == soco) {
        armaGeral = adaga;
        equiparItemSlotadaga.value = 'Desequip'
        equiparItemSlotadaga.removeEventListener('click', equipAdaga)
        equiparItemSlotadaga.addEventListener('click', desequipAdaga)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipAdaga() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotadaga.value = 'Equip'
    equiparItemSlotadaga.removeEventListener('click', desequipAdaga)
    equiparItemSlotadaga.addEventListener('click', equipAdaga)
}
/*-----*/
function adicionarAdaga() {
    jogador.peso += adaga.peso
    adaga.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = adaga.val;
    addItemNome = adaga.nome;
    funcaoEquip = equipAdaga;
}
function removerAdaga() {
    adaga.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = adaga.val;
    removItemNome = adaga.nome;
}
/*-----*/
function adagaComprar() {
    geralObtido = adaga.obtido
    geralPreco = adaga.preco
    geralAdicionar = adicionarAdaga

    geralComprar()
}
function adagaVender() {
    geralObtido = adaga.obtido
    geralPreco = adaga.preco
    geralRemover = removerAdaga

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var chicoteDeAco =
{
    nome: 'Chicote de aço', val: 'chicoteDeAco', obtido: false, peso: 0, preco: 3,

    danoBase: 50, danoCombate: 50, tipoDano: 'Físico',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 3, energiaCustoCombate: 3, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipChicoteDeAco() {
    if (armaGeral == soco) {
        armaGeral = chicoteDeAco;
        equiparItemSlotchicoteDeAco.value = 'Desequip'
        equiparItemSlotchicoteDeAco.removeEventListener('click', equipChicoteDeAco)
        equiparItemSlotchicoteDeAco.addEventListener('click', desequipChicoteDeAco)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipChicoteDeAco() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotchicoteDeAco.value = 'Equip'
    equiparItemSlotchicoteDeAco.removeEventListener('click', desequipChicoteDeAco)
    equiparItemSlotchicoteDeAco.addEventListener('click', equipChicoteDeAco)
}
/*-----*/
function adicionarChicoteDeAco() {
    chicoteDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = chicoteDeAco.val;
    addItemNome = chicoteDeAco.nome;
    funcaoEquip = equipChicoteDeAco;
}
function removerChicoteDeAco() {
    chicoteDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = chicoteDeAco.val;
    removItemNome = chicoteDeAco.nome;
}
/*-----*/
function chicoteDeAcoComprar() {
    geralObtido = chicoteDeAco.obtido
    geralPreco = chicoteDeAco.preco
    geralAdicionar = adicionarChicoteDeAco

    geralComprar()
}
function chicoteDeAcoVender() {
    geralObtido = chicoteDeAco.obtido
    geralPreco = chicoteDeAco.preco
    geralRemover = removerChicoteDeAco

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var espadaDeAco =
{
    nome: 'Espada de aço', val: 'espadaDeAco', obtido: false, peso: 0, preco: 5,

    danoBase: 8, danoCombate: 8, tipoDano: 'Físico',
    debuff: 'sangramento', chance: 15, duracao: 2,

    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipEspadaDeAco() {
    if (armaGeral == soco) {
        armaGeral = espadaDeAco;
        equiparItemSlotespadaDeAco.value = 'Desequip'
        equiparItemSlotespadaDeAco.removeEventListener('click', equipEspadaDeAco)
        equiparItemSlotespadaDeAco.addEventListener('click', desequipEspadaDeAco)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipEspadaDeAco() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotespadaDeAco.value = 'Equip'
    equiparItemSlotespadaDeAco.removeEventListener('click', desequipEspadaDeAco)
    equiparItemSlotespadaDeAco.addEventListener('click', equipEspadaDeAco)
}
/*-----*/
function adicionarEspadaDeAco() {
    espadaDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = espadaDeAco.val;
    addItemNome = espadaDeAco.nome;
    funcaoEquip = equipEspadaDeAco;
}
function removerEspadaDeAco() {
    espadaDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = espadaDeAco.val;
    removItemNome = espadaDeAco.nome;
}
/*-----*/
function espadaDeAcoComprar() {
    geralObtido = espadaDeAco.obtido
    geralPreco = espadaDeAco.preco
    geralAdicionar = adicionarEspadaDeAco

    geralComprar()
}
function espadaDeAcoVender() {
    geralObtido = espadaDeAco.obtido
    geralPreco = espadaDeAco.preco
    geralRemover = removerEspadaDeAco

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var lancaEnvenenada =
{
    nome: 'Lança envenenada', val: 'lancaEnvenenada', obtido: false, peso: 0, preco: 5,

    danoBase: 5, danoCombate: 5, tipoDano: 'Físico',
    debuff: 'veneno', chance: 20, duracao: 2,

    energiaCusto: 5, energiaCustoCombate: 5, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/
function equipLancaEnvenenada() {
    armaGeral = lancaEnvenenada;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotlancaEnvenenada.value = 'Desequip'
    equiparItemSlotlancaEnvenenada.removeEventListener('click', equipLancaEnvenenada)
    equiparItemSlotlancaEnvenenada.addEventListener('click', desequipLancaEnvenenada)
}
function desequipLancaEnvenenada() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotlancaEnvenenada.value = 'Equip'
    equiparItemSlotlancaEnvenenada.removeEventListener('click', desequipLancaEnvenenada)
    equiparItemSlotlancaEnvenenada.addEventListener('click', equipLancaEnvenenada)
}
/*-----*/
function adicionarLancaEnvenenada() {
    lancaEnvenenada.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = lancaEnvenenada.val;
    addItemNome = lancaEnvenenada.nome;
    funcaoEquip = equipEspadaDeAco;
}
function removerLancaEnvenenada() {
    lancaEnvenenada.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = lancaEnvenenada.val;
    removItemNome = lancaEnvenenada.nome;
}
/*-----*/
function lancaEnvenenadaComprar() {
    geralObtido = lancaEnvenenada.obtido
    geralPreco = lancaEnvenenada.preco
    geralAdicionar = adicionarLancaEnvenenada

    geralComprar()
}
function lancaEnvenenadaVender() {
    geralObtido = lancaEnvenenada.obtido
    geralPreco = lancaEnvenenada.preco
    geralRemover = removerLancaEnvenenada

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/