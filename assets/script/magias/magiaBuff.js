var magiaBuffGeral =
{
    nome: '', classe: '', obtido: false, val: '', preco: 0,
    danoBuff: 0, vidaBuff: 0, defesaBuff: 0, buff: '', duracao: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}



var furiaDeTouro =
{
    nome: 'Furia de Touro', classe: 'Mágico', obtido: false, val: 'furiaDeTouro', preco: 7,
    danoBuff: 1.5, vidaBuff: 0, defesaBuff: 1.5, buff: '', duracao: 2,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15, 
}
function equipFuriaDeTouro()
{
    magiaBuffGeral = furiaDeTouro;

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }
}
function adicionarFuriaDeTouro()
{
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
}


var esferasDaVida =
{
    nome: 'Esferas da vida', classe: 'Mágico', obtido: false, val: 'esferasDaVida', preco: 7,
    danoBuff: 1.5, vidaBuff: 0, defesaBuff: 1.5, buff: '', duracao: 3,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15, 
}
function equipEsferasDaVida()
{
    magiaBuffGeral = esferasDaVida;

    if (mudarMagiasBuff == true) {
        atualizarItensMagiasBuff();
    }
}
function adicionarEsferasDaVida()
{
    esferasDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = esferasDaVida.val;
    addItemNome = esferasDaVida.nome;
    funcaoEquip = equipEsferasDaVida;
}