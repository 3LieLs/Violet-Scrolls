/*-DRAGÃO HUD-*/
var dragao = {
    nome: 'Dragão',
    vida: 100, mana: 60,
    vidaCombate: 60, manaCombate: 40,

    danoBasico: 15, danoEspecial: 25,
    manaGastoBasico: 15, manaGastoEspecial: 30, manaRecuperacao: 0,
}
/*-----*/

/*-ATAQUE DRAGÃO-*/
function ataqueDragao() {

    if (dragao.vidaCombate > 0) {
        if (dragao.manaCombate > 0) {
            dragao.ataque = Math.round(Math.random() * (100 - 0) + 0);

            if (dragao.ataque <= 85 && dragao.manaCombate - dragao.manaGastoBasico >= 0) {
                legendaView.innerHTML = `Dragão utilizou ataque básico<br>Dano causado: ${dragao.danoBasico}<br>Mana usada: ${dragao.manaGastoBasico}`

                if (jogador.vidaCombate - dragao.danoBasico < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {
                    jogador.vidaCombate = jogador.vidaCombate - dragao.danoBasico

                    jogador.porcentagem = 100 - ((dragao.danoBasico / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    dragao.manaCombate = dragao.manaCombate - dragao.manaGastoBasico

                    inimigo.porcentagem = 100 - ((dragao.manaGastoBasico / dragao.mana) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.manaPorcentagem = inimigo.manaPorcentagem - inimigo.porcentagem
                }

                if (dragao.manaCombate < 0) {
                    dragao.manaCombate = 0
                    inimigo.manaPorcentagem = 0.1
                }

            } else {
                legendaView.innerHTML = `Dragão utilizou ataque especial<br>Dano causado: ${dragao.danoEspecial}<br>Mana usada: ${dragao.manaGastoEspecial}`
                if (jogador.vidaCombate - dragao.danoEspecial < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {

                    jogador.vidaCombate = jogador.vidaCombate - dragao.danoEspecial

                    jogador.porcentagem = 100 - ((dragao.danoEspecial / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    dragao.manaCombate = dragao.manaCombate - dragao.manaGastoEspecial

                    inimigo.porcentagem = 100 - ((dragao.manaGastoEspecial / dragao.mana) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.manaPorcentagem = inimigo.manaPorcentagem - inimigo.porcentagem
                }

                if (dragao.manaCombate < 0) {
                    dragao.manaCombate = 0
                    inimigo.manaPorcentagem = 0.1
                }
            }

        } else {
            dragao.manaRecuperacao = Math.round(Math.random() * (25 - 10) + 3);

            dragao.manaCombate = dragao.manaCombate + dragao.manaRecuperacao
            inimigo.porcentagem = 100 - ((dragao.manaRecuperacao / dragao.mana) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.manaPorcentagem = parseInt(inimigo.manaPorcentagem) + parseInt(inimigo.porcentagem)

            legendaView.innerHTML = `Dragão utilizou focar<br>Mana recuperada: ${dragao.manaRecuperacao}`
        }
    }
}
/*-----*/