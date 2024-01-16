/*-GOLEM HUD-*/
var golem = {
    nome: 'Golem', classe: 'fisico',
    vida: 50, energia: 30,
    vidaCombate: 50, energiaCombate: 30,
    dano: 15, danoCombate: 15, energiaGasto: 10, energiaRecuperacao: 0,
}

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