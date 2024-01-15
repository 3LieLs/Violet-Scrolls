/*-GOLEM HUD-*/
var golemVidaView = window.document.querySelector('p#golemVida')
var golemEnergiaView = window.document.querySelector('p#golemEnergia')

var golem = {
    nome: 'Golem',
    vida: 60, energia: 45,
    vidaCombate: 40, energiaCombate: 25,

    danoBasico: 10, danoEspecial: 20,
    energiaGastoBasico: 15, energiaGastoEspecial: 25, energiaRecuperacao: 0,
}
/*-----*/

/*-ATAQUE GOLEM-*/
function ataqueGolem() {

    if (golem.vidaCombate > 0) {
        if (golem.energiaCombate > 0) {
            golem.ataque = Math.round(Math.random() * (100 - 0) + 0);

            if (golem.ataque <= 75 && golem.energiaCombate - golem.energiaGastoBasico >= 0) {
                legendaView.innerHTML = `Golem utilizou ataque básico<br>Dano causado: ${golem.danoBasico}<br>Energia usada: ${golem.energiaGastoBasico}`

                if (jogador.vidaCombate - golem.danoBasico < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                }
                else {
                    jogador.vidaCombate = jogador.vidaCombate - golem.danoBasico

                    jogador.porcentagem = 100 - ((golem.danoBasico / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    golem.energiaCombate = golem.energiaCombate - golem.energiaGastoBasico

                    inimigo.porcentagem = 100 - ((golem.energiaGastoBasico / golem.energia) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.energiaPorcentagem = inimigo.energiaPorcentagem - inimigo.porcentagem
                }

                if (golem.energiaCombate < 0) {
                    golem.energiaCombate = 0
                    inimigo.energiaPorcentagem = 0.1
                }

            } else {
                legendaView.innerHTML = `Golem utilizou ataque especial<br>Dano causado: ${golem.danoEspecial}<br>Energia usada: ${golem.energiaGastoEspecial}`

                if (jogador.vidaCombate - golem.danoEspecial < 0) {
                    jogador.vidaCombate = 0
                    jogador.vidaPorcentagem = 0.1
                    jogador.porcentagem = 0
                } else {
                    jogador.vidaCombate = jogador.vidaCombate - golem.danoEspecial

                    jogador.porcentagem = 100 - ((golem.danoEspecial / jogador.vida) * 100)
                    jogador.porcentagem = 100 - jogador.porcentagem
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2)

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem

                    golem.energiaCombate = golem.energiaCombate - golem.energiaGastoEspecial

                    inimigo.porcentagem = 100 - ((golem.energiaGastoEspecial / golem.energia) * 100)
                    inimigo.porcentagem = 100 - inimigo.porcentagem
                    inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                    inimigo.energiaPorcentagem = inimigo.energiaPorcentagem - inimigo.porcentagem
                }

                if (golem.energiaCombate < 0) {
                    golem.energiaCombate = 0
                    inimigo.energiaPorcentagem = 0.1
                }
            }

        } else {
            golem.energiaRecuperacao = Math.round(Math.random() * (15 - 3) + 3);

            golem.energiaCombate = golem.energiaCombate + golem.energiaRecuperacao
            inimigo.porcentagem = 100 - ((golem.energiaRecuperacao / golem.energia) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.energiaPorcentagem = parseInt(inimigo.energiaPorcentagem) + parseInt(inimigo.porcentagem)

            legendaView.innerHTML = `Golem utilizou descanso<br>Energia recuperada: ${golem.energiaRecuperacao}`
        }
    }
}
/*-----*/