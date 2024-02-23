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
    if (cajadoDeFogo.obtido == false) {
        if (jogador.pecitas - cajadoDeFogo.preco >= 0) {
            adicionarCajadoDeFogo()
            adicionarItem()

            jogador.pecitas -= cajadoDeFogo.preco;
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
function cajadoDeFogoVender() {
    if (cajadoDeFogo.obtido == true) {
        if (feiticeiro.pecitas - cajadoDeFogo.preco >= 0) {
            removerCajadoDeFogo()
            removerItem()

            jogador.pecitas += cajadoDeFogo.preco;
        }
        else {
            alert('O feiticeiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
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
    if (cajadoDeGelo.obtido == false) {
        if (jogador.pecitas - cajadoDeGelo.preco >= 0) {
            adicionarCajadoDeGelo()
            adicionarItem()

            jogador.pecitas -= cajadoDeGelo.preco;
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
function cajadoDeGeloVender() {
    if (cajadoDeGelo.obtido == true) {
        if (feiticeiro.pecitas - cajadoDeGelo.preco >= 0) {
            removerCajadoDeGelo()
            removerItem()

            jogador.pecitas += cajadoDeGelo.preco;
        }
        else {
            alert('O feiticeiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var cajadoEletrico =
{
    nome: 'Cajado elétrico', val: 'cajadoEletrico', obtido: false, peso: 0, preco: 10,

    danoBase: 10, danoCombate: 10, tipoDano: 'eletricidade',
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
    if (cajadoEletrico.obtido == false) {
        if (jogador.pecitas - cajadoEletrico.preco >= 0) {
            adicionarCajadoEletrico()
            adicionarItem()

            jogador.pecitas -= cajadoEletrico.preco;
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
function cajadoEletricoVender() {
    if (cajadoEletrico.obtido == true) {
        if (feiticeiro.pecitas - cajadoEletrico.preco >= 0) {
            removerCajadoEletrico()
            removerItem()

            jogador.pecitas += cajadoEletrico.preco;
        }
        else {
            alert('O feiticeiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/