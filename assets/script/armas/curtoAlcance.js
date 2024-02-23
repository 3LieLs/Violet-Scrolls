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
    armaGeral = chicoteDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarChicoteDeAco() {
    chicoteDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = chicoteDeAco.val;
    addItemNome = chicoteDeAco.nome;
    funcaoEquip = equipChicoteDeAco;
}
/*-----*/
function removerChicoteDeAco() {
    chicoteDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = chicoteDeAco.val;
    removItemNome = chicoteDeAco.nome;
}
/*-----*/
function chicoteDeAcoComprar() {
    if (chicoteDeAco.obtido == false) {
        if (jogador.pecitas - chicoteDeAco.preco >= 0) {
            adicionarChicoteDeAco()
            adicionarItem()

            jogador.pecitas -= chicoteDeAco.preco;
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
function chicoteDeAcoVender() {
    if (chicoteDeAco.obtido == true) {
        if (ferreiro.pecitas - chicoteDeAco.preco >= 0) {
            removerChicoteDeAco()
            removerItem()

            jogador.pecitas += chicoteDeAco.preco;
        }
        else {
            alert('O ferreiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
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
    armaGeral = espadaDeAco;

    if (mudarEquipamentosArmaVal == true) {
        atualizarItensEquipamentosArma();
    }
}
/*-----*/
function adicionarEspadaDeAco() {
    espadaDeAco.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = espadaDeAco.val;
    addItemNome = espadaDeAco.nome;
    funcaoEquip = equipEspadaDeAco;
}
/*-----*/
function removerEspadaDeAco() {
    espadaDeAco.obtido = false;
    removItemTipo = 'equipamento';
    removItemVal = espadaDeAco.val;
    removItemNome = espadaDeAco.nome;
}
/*-----*/
function espadaDeAcoComprar() {
    if (espadaDeAco.obtido == false) {
        if (jogador.pecitas - espadaDeAco.preco >= 0) {
            adicionarEspadaDeAco()
            adicionarItem()

            jogador.pecitas -= espadaDeAco.preco;
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
function espadaDeAcoVender() {
    if (espadaDeAco.obtido == true) {
        if (ferreiro.pecitas - espadaDeAco.preco >= 0) {
            removerEspadaDeAco()
            removerItem()

            jogador.pecitas += espadaDeAco.preco;
        }
        else {
            alert('O ferreiro não possui dinheiro insuficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
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
}
/*-----*/
function adicionarLancaEnvenenada() {
    lancaEnvenenada.obtido = true;
    addItemTipo = 'equipamento';
    addItemVal = lancaEnvenenada.val;
    addItemNome = lancaEnvenenada.nome;
    funcaoEquip = equipEspadaDeAco;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/