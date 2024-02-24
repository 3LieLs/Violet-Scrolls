/*-----*//*-----*//*-----*//*-----*//*-----*/
var cajadoDeFogo =
{
    nome: 'Cajado de fogo', val: 'cajadoDeFogo', obtido: false, peso: 0, preco: 8,

    danoBase: 8, danoCombate: 8, tipoDano: 'Fogo',
    debuff: 'chamas', chance: 20, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 5, manaCustoCombate: 5,
}
/*-----*/
function equipCajadoDeFogo() {
    armaGeral = cajadoDeFogo;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarCajadoDeFogo() {
    cajadoDeFogo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoDeFogo.val;
    addItemNome = cajadoDeFogo.nome;
    funcaoEquip = equipCajadoDeFogo;
}
/*-----*/
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
/*-----*/
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

    danoBase: 8, danoCombate: 8, tipoDano: 'Gelo',
    debuff: 'congelado', chance: 20, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 5, manaCustoCombate: 5,
}
/*-----*/
function equipCajadoDeGelo() {
    armaGeral = cajadoDeGelo;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarCajadoDeGelo() {
    cajadoDeGelo.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoDeGelo.val;
    addItemNome = cajadoDeGelo.nome;
    funcaoEquip = equipCajadoDeGelo;
}
/*-----*/
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
/*-----*/
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

    danoBase: 10, danoCombate: 10, tipoDano: 'Elétrico',
    debuff: 'eletricidade', chance: 20, duracao: 3,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 7, manaCustoCombate: 7,
}
/*-----*/
function equipCajadoEletrico() {
    armaGeral = cajadoEletrico;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarCajadoEletrico() {
    cajadoEletrico.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = cajadoEletrico.val;
    addItemNome = cajadoEletrico.nome;
    funcaoEquip = equipCajadoEletrico;
}
/*-----*/
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
/*-----*/
function cajadoEletricoVender() {
    geralObtido = cajadoEletrico.obtido
    geralPreco = cajadoEletrico.preco
    geralRemover = removerCajadoEletrico

    geralVender()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/