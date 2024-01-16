/*-GOBLIN HUD-*/
var goblin = {
    nome: 'Goblin', classe: 'fisico',
    vida: 25, energia: 15,
    vidaCombate: 25, energiaCombate: 15,
    dano: 3, danoCombate: 3, energiaGasto: 2, energiaRecuperacao: 0,
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

/*-ATAQUE GOBLIN-*/
function inimigoAtaque() {

    if (inimigo.vidaCombate > 0) {
        if (inimigo.energiaCombate > 0) {
            inimigo.ataque = Math.round(Math.random() * (100 - 0) + 0);

            if (inimigo.ataque <= 60 && inimigo.energiaCombate - inimigo.energiaGasto >= 0) {
                legendaView.innerHTML = `${inimigo.nome} utilizou ataque básico<br>Dano causado: ${inimigo.danoCombate}<br>Energia usada: ${inimigo.energiaGasto}`

                if (jogador.vidaCombate - inimigo.danoCombate < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {

                    jogador.vidaCombate = jogador.vidaCombate - inimigo.danoCombate

                    jogador.porcentagem = 100 - ((inimigo.danoCombate / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    inimigo.energiaCombate = inimigo.energiaCombate - inimigo.energiaGasto

                    inimigo.porcentagem = 100 - ((inimigo.energiaGasto / inimigo.energia) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.energiaPorcentagem = inimigo.energiaPorcentagem - inimigo.porcentagem
                }

                if (inimigo.energiaCombate < 0) {
                    inimigo.energiaCombate = 0
                    inimigo.energiaPorcentagem = 0.1
                }

            } else {
                legendaView.innerHTML = `${inimigo.nome} utilizou ataque especial<br>Dano causado: ${parseInt(inimigo.danoCombate + (inimigo.danoCombate / 2))}<br>Energia usada: ${parseInt(inimigo.energiaGasto + (inimigo.energiaGasto / 2))}`

                if (jogador.vidaCombate - parseInt(inimigo.danoCombate + (inimigo.danoCombate / 2)) < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {

                    jogador.vidaCombate = jogador.vidaCombate - parseInt(inimigo.danoCombate + (inimigo.danoCombate / 2))

                    jogador.porcentagem = 100 - ((parseInt(inimigo.danoCombate + (inimigo.danoCombate / 2)) / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    inimigo.energiaCombate = inimigo.energiaCombate - parseInt(inimigo.energiaGasto + (inimigo.energiaGasto / 2))

                    inimigo.porcentagem = 100 - ((parseInt(inimigo.energiaGasto + (inimigo.energiaGasto / 2)) / inimigo.energia) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.energiaPorcentagem = inimigo.energiaPorcentagem - inimigo.porcentagem
                }

                if (inimigo.energiaCombate < 0) {
                    inimigo.energiaCombate = 0
                    inimigo.energiaPorcentagem = 0.1
                }
            }

        } else {
            inimigo.energiaRecuperacao = Math.round(Math.random() * (6 - 3) + 3);

            inimigo.energiaCombate = inimigo.energiaCombate + inimigo.energiaRecuperacao
            inimigo.porcentagem = 100 - ((inimigo.energiaRecuperacao / inimigo.energia) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.energiaPorcentagem = parseInt(inimigo.energiaPorcentagem) + parseInt(inimigo.porcentagem)

            legendaView.innerHTML = `${inimigo.nome} utilizou descanso<br>Energia recuperada: ${inimigo.energiaRecuperacao}`
        }
    }
}
/*-----*/