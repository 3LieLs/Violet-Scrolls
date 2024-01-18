/*-GOLEM HUD-*/
var golem = {
    nome: 'Golem', classe: 'fisico',
    vida: 50, energia: 30,
    vidaCombate: 50, energiaCombate: 30,
    dano: 15, danoCombate: 15, energiaGasto: 10, energiaRecuperacao: 0,
}

/*-GOLEM COMBATE-*/
function iniciarGolemCombate() {
    taverna.style.display = 'none'

    fase = 'golem'
    inimigoHudImagem.src = 'assets/content/img/Golem.gif'
    inimigoHudImagem.style.width = '50%'

    mainInimigoHud.style.display = 'contents'

    mainHud.style.display = 'contents'

    definirEstatisticaGolem()
    definirEstatisticaGeral()

    jogadorCombateHud()
    inimigoCombateHud()

    definirMusica()
}
/*-----*/

function definirEstatisticaGolem() {
    inimigo.nome = golem.nome
    inimigo.classe = golem.classe

    inimigo.vida = golem.vida
    inimigo.energia = golem.energia

    inimigo.vidaCombate = golem.vidaCombate
    inimigo.energiaCombate = golem.energiaCombate

    inimigo.energiaGasto = golem.energiaGasto
    inimigo.energiaRecuperacao = golem.energiaRecuperacao

    inimigo.dano = golem.dano
    inimigo.danoCombate = golem.danoCombate
}
/*-----*/