/*-----*//*-----*//*-----*//*-----*//*-----*/
var magiaDanoGeral =
{
    nome: '', classe: '', obtido: false, val: '', preco: 0,
    danoBase: 0, danoCombate: 0, tipoDano: '',
    debuff: '', duracao: 0, chance: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var espinhoDeGelo =
{
    nome: 'Espinho de gelo', obtido: false, val: 'espinhoDeGelo', preco: 10,
    danoBase: 7, danoCombate: 7, tipoDano: 'Gelo',
    debuff: 'congelamento', duracao: 3, chance: 30,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 4, manaCustoCombate: 4,
}
/*-----*/
function equipEspinhoDeGelo() {
    if (magiaDanoGeral == 'Nenhuma') {
        magiaDanoGeral = espinhoDeGelo;
        equiparItemSlotespinhoDeGelo.value = 'Desequip'
        equiparItemSlotespinhoDeGelo.removeEventListener('click', equipEspinhoDeGelo)
        equiparItemSlotespinhoDeGelo.addEventListener('click', desequipEspinhoDeGelo)
    }

    if (mudarMagiasDano == true) {
        atualizarItensMagiasDano();
    }
}
function desequipEspinhoDeGelo() {
    magiaDanoGeral = 'Nenhuma';

    if (mudarMagiasDano == true) {
        atualizarItensMagiasDano();
    }

    equiparItemSlotespinhoDeGelo.value = 'Equip'
    equiparItemSlotespinhoDeGelo.removeEventListener('click', desequipEspinhoDeGelo)
    equiparItemSlotespinhoDeGelo.addEventListener('click', equipEspinhoDeGelo)
}
/*-----*/
function adicionarEspinhoDeGelo() {
    espinhoDeGelo.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeGelo.val;
    addItemNome = espinhoDeGelo.nome;
    funcaoEquip = equipEspinhoDeGelo;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var bolaDeFogo =
{
    nome: 'Bola de fogo', obtido: false, val: 'bolaDeFogo', preco: 15,
    danoBase: 8, danoCombate: 8, tipoDano: 'Fogo',
    debuff: 'chamas', duracao: 3, chance: 30,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 5, manaCustoCombate: 5,
}
/*-----*/
function equipBolaDeFogo() {
    if (magiaDanoGeral == 'Nenhuma') {
        magiaDanoGeral = bolaDeFogo;
        equiparItemSlotbolaDeFogo.value = 'Desequip'
        equiparItemSlotbolaDeFogo.removeEventListener('click', equipBolaDeFogo)
        equiparItemSlotbolaDeFogo.addEventListener('click', desequipBolaDeFogo)
    }

    if (mudarMagiasDano == true) {
        atualizarItensMagiasDano();
    }
}
function desequipBolaDeFogo() {
    magiaDanoGeral = 'Nenhuma';

    if (mudarMagiasDano == true) {
        atualizarItensMagiasDano();
    }

    equiparItemSlotbolaDeFogo.value = 'Equip'
    equiparItemSlotbolaDeFogo.removeEventListener('click', desequipBolaDeFogo)
    equiparItemSlotbolaDeFogo.addEventListener('click', equipBolaDeFogo)
}
/*-----*/
function adicionarBolaDeFogo() {
    bolaDeFogo.obtido = true;
    addItemTipo = 'magia';
    addItemVal = bolaDeFogo.val;
    addItemNome = bolaDeFogo.nome;
    funcaoEquip = equipBolaDeFogo;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/