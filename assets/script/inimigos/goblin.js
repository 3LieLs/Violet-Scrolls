/*-GOBLIN HUD-*/
var goblinVidaView = window.document.querySelector('p#goblinVida')
var goblinEnergiaView = window.document.querySelector('p#goblinEnergia')

var goblin = {
    nome: 'Goblin',
    vida: 25, energia: 15,
    vidaCombate: 25, energiaCombate: 15,

    danoBasico: 2, danoEspecial: 5,
    energiaGastoBasico: 2, energiaGastoEspecial: 4, energiaRecuperacao: 0,
}
/*-----*/

/*-ATAQUE GOBLIN-*/
function ataqueGoblin() {

    if (goblin.vidaCombate > 0) {
        if (goblin.energiaCombate > 0) {
            goblin.ataque = Math.round(Math.random() * (100 - 0) + 0);

            if (goblin.ataque <= 60 && goblin.energiaCombate - goblin.energiaGastoBasico >= 0) {
                legendaView.innerHTML = `Goblin utilizou ataque básico<br>Dano causado: ${goblin.danoBasico}<br>Energia usada: ${goblin.energiaGastoBasico}`

                if (jogador.vidaCombate - goblin.danoBasico < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {

                    jogador.vidaCombate = jogador.vidaCombate - goblin.danoBasico

                    jogador.porcentagem = 100 - ((goblin.danoBasico / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    goblin.energiaCombate = goblin.energiaCombate - goblin.energiaGastoBasico

                    inimigo.porcentagem = 100 - ((goblin.energiaGastoBasico / goblin.energia) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.energiaPorcentagem = inimigo.energiaPorcentagem - inimigo.porcentagem
                }

                if (goblin.energiaCombate < 0) {
                    goblin.energiaCombate = 0
                    inimigo.energiaPorcentagem = 0.1
                }

            } else {
                legendaView.innerHTML = `Goblin utilizou ataque especial<br>Dano causado: ${goblin.danoEspecial}<br>Energia usada: ${goblin.energiaGastoEspecial}`

                if (jogador.vidaCombate - goblin.danoEspecial < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {

                    jogador.vidaCombate = jogador.vidaCombate - goblin.danoEspecial

                    jogador.porcentagem = 100 - ((goblin.danoEspecial / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    goblin.energiaCombate = goblin.energiaCombate - goblin.energiaGastoEspecial

                    inimigo.porcentagem = 100 - ((goblin.energiaGastoEspecial / goblin.energia) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.energiaPorcentagem = inimigo.energiaPorcentagem - inimigo.porcentagem
                }

                if (goblin.energiaCombate < 0) {
                    goblin.energiaCombate = 0
                    inimigo.energiaPorcentagem = 0.1
                }
            }

        } else {
            goblin.energiaRecuperacao = Math.round(Math.random() * (6 - 3) + 3);

            goblin.energiaCombate = goblin.energiaCombate + goblin.energiaRecuperacao
            inimigo.porcentagem = 100 - ((goblin.energiaRecuperacao / goblin.energia) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.energiaPorcentagem = parseInt(inimigo.energiaPorcentagem) + parseInt(inimigo.porcentagem)

            legendaView.innerHTML = `Goblin utilizou descanso<br>Energia recuperada: ${goblin.energiaRecuperacao}`
        }
    }
}
/*-----*/