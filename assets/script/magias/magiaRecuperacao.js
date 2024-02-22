var magiaRecuperacaoGeral =
{
    nome: '', tipo: '', obtido: false, val: '', preco: 0,
    vidaRecuperacao: 0, energiaRecuperacao: 0, manaRecuperacao: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}



var luzDaVida =
{
    nome: 'Luz da vida', tipo: 'Vida', obtido: false, val: 'luzDaVida', preco: 10,
    vidaRecuperacao: 10, energiaRecuperacao: 0, manaRecuperacao: 0,
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



var raiosRevigorantes =
{
    nome: 'Raios revigorantes', tipo: 'Vida', obtido: false, val: 'raiosRevigorantes', preco: 15,
    vidaRecuperacao: 15, energiaRecuperacao: 0, manaRecuperacao: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15,
}
function equipRaiosRevigorantes()
{
    magiaRecuperacaoGeral = raiosRevigorantes;

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}
function adicionarRaiosRevigorantes()
{
    raiosRevigorantes.obtido = true;
    addItemTipo = 'magia';
    addItemVal = raiosRevigorantes.val;
    addItemNome = raiosRevigorantes.nome;
    funcaoEquip = equipRaiosRevigorantes;
}



var purificacaoAstral =
{
    nome: 'Purificacao astral', tipo: 'buff', obtido: false, val: 'purificacaoAstral', preco: 15,
    vidaRecuperacao: 15, energiaRecuperacao: 0, manaRecuperacao: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 15, manaCustoCombate: 15,
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