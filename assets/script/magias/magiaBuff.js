/*-----*/
var
    rodadaBuffDanoMax = { jogador: 0, inimigo: 0, },
    rodadaBuffVidaRegenMax = { jogador: 0, inimigo: 0, },
    rodadaBuffDefesaMax = { jogador: 0, inimigo: 0, },
    rodadaBuffVidaMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffSangramentoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffVenenoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffChamasMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffCongeladoMax = { jogador: 0, inimigo: 0, },
    rodadaDebuffEletricidadeMax = { jogador: 0, inimigo: 0, }

var
    buffVidaRegen = { jogador: false, inimigo: false, },
    buffDano = { jogador: false, inimigo: false, },
    debuffSangramento = { jogador: false, inimigo: false, },
    debuffVeneno = { jogador: false, inimigo: false, },
    debuffChamas = { jogador: false, inimigo: false, },
    debuffCongelado = { jogador: false, inimigo: false, },
    debuffEletricidade = { jogador: false, inimigo: false, }
/*-----*/

var magiaBuffGeral =
{
    nome: '', ativo: false, obtido: false, val: '', preco: 0,

    buff: '', duracao: 0,
    danoBuff: 0, vidaBuff: 0, defesaBuff: 0,
    vidaRegen: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}



var furiaDeTouro =
{
    nome: 'Furia de Touro', obtido: false, val: 'furiaDeTouro', preco: 7,

    buff: 'dano', duracao: 3,
    danoBuff: 0.10,

    manaCusto: 15, manaCustoCombate: 15,
}
function equipFuriaDeTouro() {
    magiaBuffGeral = furiaDeTouro;

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }
}
function adicionarFuriaDeTouro() {
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
}


var esferasDaVida =
{
    nome: 'Esferas da vida', obtido: false, val: 'esferasDaVida', preco: 7,

    buff: 'vidaRegen', duracao: 5,
    vidaRegenBuff: 0.15,

    manaCusto: 15, manaCustoCombate: 15,
}
function equipEsferasDaVida() {
    magiaBuffGeral = esferasDaVida;

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }
}
function adicionarEsferasDaVida() {
    esferasDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = esferasDaVida.val;
    addItemNome = esferasDaVida.nome;
    funcaoEquip = equipEsferasDaVida;
}