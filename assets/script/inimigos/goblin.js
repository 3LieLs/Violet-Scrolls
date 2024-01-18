/*-GOBLIN HUD-*/
var goblin = {
    nome: 'Goblin', classe: 'fisico',
    vida: 25, energia: 15,
    vidaCombate: 25, energiaCombate: 15,
    dano: 3, danoCombate: 3, energiaGasto: 2, energiaRecuperacao: 0,
}

/*-GOBLIN COMBATE-*/
function iniciarGoblinCombate() {
    taverna.style.display = 'none'

    fase = 'goblin'
    inimigoHudImagem.src = 'assets/content/img/Goblin.gif'
    inimigoHudImagem.style.width = '50%'

    mainInimigoHud.style.display = 'contents'

    mainHud.style.display = 'contents'

    definirEstatisticaGoblin()
    definirEstatisticaGeral()

    jogadorCombateHud()
    inimigoCombateHud()

    definirMusica()
}

function definirEstatisticaGoblin() {
    inimigo.nome = goblin.nome
    inimigo.classe = goblin.classe

    inimigo.vida = goblin.vida
    inimigo.energia = goblin.energia

    inimigo.vidaCombate = goblin.vidaCombate
    inimigo.energiaCombate = goblin.energiaCombate

    inimigo.energiaGasto = goblin.energiaGasto
    inimigo.energiaRecuperacao = goblin.energiaRecuperacao

    inimigo.dano = goblin.dano
    inimigo.danoCombate = goblin.danoCombate
}
/*-----*/