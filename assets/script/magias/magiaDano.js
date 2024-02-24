var magiaDanoGeral =
{
    nome: '', classe: '', obtido: false, val: '', preco: 0,
    danoBase: 0, danoCombate: 0, tipoDano: '',
    debuff: '', duracao: 0, chance: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}



var espinhoDeFogo =
{
    nome: 'Espinho de fogo', obtido: false, val: 'espinhoDeFogo', preco: 10,
    danoBase: 5, danoCombate: 5, tipoDano: 'Fogo',
    debuff: 'chamas', duracao: 1, chance: 40,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 3, manaCustoCombate: 3,
}
function equipEspinhoDeFogo() {
    magiaDanoGeral = espinhoDeFogo;

    if (mudarMagiasDano == true) {
        atualizarItensMagiasDano();
    }
}
function adicionarEspinhoDeFogo() {
    espinhoDeFogo.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeFogo.val;
    addItemNome = espinhoDeFogo.nome;
    funcaoEquip = equipEspinhoDeFogo;
}



var bolaDeFogo =
{
    nome: 'Bola de fogo', obtido: false, val: 'bolaDeFogo', preco: 15,
    danoBase: 8, danoCombate: 8, tipoDano: 'Fogo',
    debuff: 'chamas', duracao: 3, chance: 25,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 5, manaCustoCombate: 5,
}
function equipBolaDeFogo() {
    magiaDanoGeral = bolaDeFogo;

    if (mudarMagiasDano == true) {
        atualizarItensMagiasDano();
    }
}
function adicionarBolaDeFogo() {
    bolaDeFogo.obtido = true;
    addItemTipo = 'magia';
    addItemVal = bolaDeFogo.val;
    addItemNome = bolaDeFogo.nome;
    funcaoEquip = equipBolaDeFogo;
}