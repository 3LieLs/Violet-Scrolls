/*-DRAGÃO HUD-*/
var dragao = {
    nome: 'Dragão', classe: 'magico',
    vida: 80, mana: 50,
    vidaCombate: 80, manaCombate: 50,
    dano: 25, danoCombate: 25, manaGasto: 15, manaRecuperacao: 0,
}

/*-DRAGÃO COMBATE-*/
function iniciarDragaoCombate() {
    taverna.style.display = 'none'

    fase = 'dragao'
    inimigoHudImagem.src = 'assets/content/img/Dragão.gif'
    inimigoHudImagem.style.width = '50%'

    mainInimigoHud.style.display = 'contents'

    mainHud.style.display = 'contents'

    definirEstatisticaDragao()
    definirEstatisticaGeral()

    jogadorCombateHud()
    inimigoCombateHud()

    definirMusica()
}

function definirEstatisticaDragao() {
    inimigo.nome = dragao.nome
    inimigo.classe = dragao.classe

    inimigo.vida = dragao.vida
    inimigo.mana = dragao.mana

    inimigo.vidaCombate = dragao.vidaCombate
    inimigo.manaCombate = dragao.manaCombate

    inimigo.manaGasto = dragao.manaGasto
    inimigo.manaRecuperacao = dragao.manaRecuperacao

    inimigo.dano = dragao.dano
    inimigo.danoCombate = dragao.danoCombate
}
/*-----*/