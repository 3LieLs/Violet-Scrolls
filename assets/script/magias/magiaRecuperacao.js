var magiaRecuperacaoGeral =
{
    nome: '', classe: '', obtido: false, val: '', preco: 0,
    vidaRecuperacao: 0, energiaRecuperacao: 0, manaRecuperacao: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0, 
}



var luzDaVida =
{
    nome: 'Luz da vida', classe: 'Mágico', tipo: 'Vida', obtido: false, val: 'luzDaVida', preco: 10,
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



var raiosRevigorantes =
{
    nome: 'Raios revigorantes', classe: 'Mágico', tipo: 'Vida', obtido: false, val: 'raiosRevigorantes', preco: 15,
    vidaRecuperacao: 15, energiaRecuperacao: 0, manaRecuperacao: 0,
    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 10, manaCustoCombate: 10,
}
function equipRaiosRevigorantes()
{
    magiaRecuperacaoGeral = raiosRevigorantes;

    if (mudarMagiasRecuperacao == true) {
        atualizarItensMagiasRecuperacao();
    }
}