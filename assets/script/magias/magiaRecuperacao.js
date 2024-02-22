var magiaRecuperacaoGeral =
{
    nome: '', val: '', obtido: false, preco: 0,
    
    tipo: '',
    vidaRecuperacao: 0,
    
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}



var luzDaVida =
{
    nome: 'Luz da vida', val: 'luzDaVida', obtido: false, preco: 10,
    
    tipo: 'Vida',
    vidaRecuperacao: 10,
    
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
function equipLuzDaVida()
{
    magiaRecuperacaoGeral = luzDaVida;

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function adicionarLuzDaVida()
{
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
}



var purificacaoAstral =
{
    nome: 'Purificacao astral', val: 'purificacaoAstral', obtido: false, preco: 15,
    
    tipo: 'Elementares',
    vidaRecuperacao: 0,
    
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
function equipPurificacaoAstral()
{
    magiaRecuperacaoGeral = purificacaoAstral;

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function adicionarPurificacaoAstral()
{
    purificacaoAstral.obtido = true;
    addItemTipo = 'magia';
    addItemVal = purificacaoAstral.val;
    addItemNome = purificacaoAstral.nome;
    funcaoEquip = equipPurificacaoAstral;
}



var purificacaoCarnal =
{
    nome: 'Purificacao carnal', val: 'purificacaoCarnal', obtido: false, preco: 15,
    
    tipo: 'Físico',
    vidaRecuperacao: 0,
    
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
function equipPurificacaoCarnal()
{
    magiaRecuperacaoGeral = purificacaoCarnal;

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function adicionarPurificacaoCarnal()
{
    purificacaoCarnal.obtido = true;
    addItemTipo = 'magia';
    addItemVal = purificacaoCarnal.val;
    addItemNome = purificacaoCarnal.nome;
    funcaoEquip = equipPurificacaoCarnal;
}