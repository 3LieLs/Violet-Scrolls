/*-----*//*-----*//*-----*//*-----*//*-----*/
var cajadoDeFogo =
{
    nome: 'Cajado de fogo', val: 'cajadoDeFogo', obtido: false, peso: 0, preco: 8,

    danoBase: 6, danoCombate: 6, tipoDano: 'Fogo', somAtaque: '/assets/content/audio/EfeitoSonoroAtaque/MissileBlast.mp3',
    debuff: 'chamas', chance: 25, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 3, manaCustoCombate: 3,
}
/*-----*/
function equipCajadoDeFogo() {
    if (armaGeral == soco) {
        armaGeral = cajadoDeFogo;
        equiparItemSlotcajadoDeFogo.value = 'Desequip';
        equiparItemSlotcajadoDeFogo.removeEventListener('click', equipCajadoDeFogo);
        equiparItemSlotcajadoDeFogo.addEventListener('click', desequipCajadoDeFogo);
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipCajadoDeFogo() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotcajadoDeFogo.value = 'Equip'
    equiparItemSlotcajadoDeFogo.removeEventListener('click', desequipCajadoDeFogo)
    equiparItemSlotcajadoDeFogo.addEventListener('click', equipCajadoDeFogo)
}
/*-----*/
function adicionarCajadoDeFogo() {
    cajadoDeFogo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoDeFogo.val;
    addItemNome = cajadoDeFogo.nome;
    funcaoEquip = equipCajadoDeFogo;
}
function removerCajadoDeFogo() {
    cajadoDeFogo.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = cajadoDeFogo.val;
    removItemNome = cajadoDeFogo.nome;
}
/*-----*/
function cajadoDeFogoComprar() {
    geralObtido = cajadoDeFogo.obtido
    geralPreco = cajadoDeFogo.preco
    geralAdicionar = adicionarCajadoDeFogo

    geralComprar()
}
function cajadoDeFogoVender() {
    geralObtido = cajadoDeFogo.obtido
    geralPreco = cajadoDeFogo.preco
    geralRemover = removerCajadoDeFogo

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var cajadoDeGelo =
{
    nome: 'Cajado de gelo', val: 'cajadoDeGelo', obtido: false, peso: 0, preco: 8,

    danoBase: 8, danoCombate: 8, tipoDano: 'Gelo', somAtaque: '/assets/content/audio/EfeitoSonoroAtaque/MissileBlast.mp3',
    debuff: 'congelamento', chance: 25, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 4, manaCustoCombate: 4,
}
/*-----*/
function equipCajadoDeGelo() {
    if (armaGeral == soco) {
        armaGeral = cajadoDeGelo;
        equiparItemSlotcajadoDeGelo.value = 'Desequip'
        equiparItemSlotcajadoDeGelo.removeEventListener('click', equipCajadoDeGelo)
        equiparItemSlotcajadoDeGelo.addEventListener('click', desequipCajadoDeGelo)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipCajadoDeGelo() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotcajadoDeGelo.value = 'Equip'
    equiparItemSlotcajadoDeGelo.removeEventListener('click', desequipCajadoDeGelo)
    equiparItemSlotcajadoDeGelo.addEventListener('click', equipCajadoDeGelo)
}
/*-----*/
function adicionarCajadoDeGelo() {
    cajadoDeGelo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoDeGelo.val;
    addItemNome = cajadoDeGelo.nome;
    funcaoEquip = equipCajadoDeGelo;
}
function removerCajadoDeGelo() {
    cajadoDeGelo.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = cajadoDeGelo.val;
    removItemNome = cajadoDeGelo.nome;
}
/*-----*/
function cajadoDeGeloComprar() {
    geralObtido = cajadoDeGelo.obtido
    geralPreco = cajadoDeGelo.preco
    geralAdicionar = adicionarCajadoDeGelo

    geralComprar()
}
function cajadoDeGeloVender() {
    geralObtido = cajadoDeGelo.obtido
    geralPreco = cajadoDeGelo.preco
    geralRemover = removerCajadoDeGelo

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var cajadoEletrico =
{
    nome: 'Cajado elétrico', val: 'cajadoEletrico', obtido: false, peso: 0, preco: 10,

    danoBase: 10, danoCombate: 10, tipoDano: 'Elétrico', somAtaque: '/assets/content/audio/EfeitoSonoroAtaque/MissileBlast.mp3',
    debuff: 'eletricidade', chance: 25, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 6, manaCustoCombate: 6,
}
/*-----*/
function equipCajadoEletrico() {
    if (armaGeral == soco) {
        armaGeral = cajadoEletrico;
        equiparItemSlotcajadoEletrico.value = 'Desequip'
        equiparItemSlotcajadoEletrico.removeEventListener('click', equipCajadoEletrico)
        equiparItemSlotcajadoEletrico.addEventListener('click', desequipCajadoEletrico)
    }

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
function desequipCajadoEletrico() {
    armaGeral = soco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }

    equiparItemSlotcajadoEletrico.value = 'Equip'
    equiparItemSlotcajadoEletrico.removeEventListener('click', desequipCajadoEletrico)
    equiparItemSlotcajadoEletrico.addEventListener('click', equipCajadoEletrico)
}
/*-----*/
function adicionarCajadoEletrico() {
    cajadoEletrico.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoEletrico.val;
    addItemNome = cajadoEletrico.nome;
    funcaoEquip = equipCajadoEletrico;
}
function removerCajadoEletrico() {
    cajadoEletrico.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = cajadoEletrico.val;
    removItemNome = cajadoEletrico.nome;
}
/*-----*/
function cajadoEletricoComprar() {
    geralObtido = cajadoEletrico.obtido
    geralPreco = cajadoEletrico.preco
    geralAdicionar = adicionarCajadoEletrico

    geralComprar()
}
function cajadoEletricoVender() {
    geralObtido = cajadoEletrico.obtido
    geralPreco = cajadoEletrico.preco
    geralRemover = removerCajadoEletrico

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/