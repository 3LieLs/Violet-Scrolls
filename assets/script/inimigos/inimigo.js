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

/*-DRAGÃO HUD-*/
var dragaoVidaView = window.document.querySelector('p#dragaoVida')
var dragaoManaView = window.document.querySelector('p#dragaoMana')

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

/*-INIMIGO HUD-*/
function inimigoCombateView() {
    if (fase == 'goblin') {
        goblinVidaView.innerHTML = `Vida: ${goblin.vidaCombate}`
        goblinVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        goblinEnergiaView.innerHTML = `Energia: ${goblin.energiaCombate}`
        goblinEnergiaView.style.backgroundSize = `${inimigo.energiaPorcentagem}% 100%`
    }

    if (fase == 'golem') {
        golemVidaView.innerHTML = `Vida: ${golem.vidaCombate}`
        golemVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        golemEnergiaView.innerHTML = `Energia: ${golem.energiaCombate}`
        golemEnergiaView.style.backgroundSize = `${inimigo.energiaPorcentagem}% 100%`
    }

    if (fase == 'dragao') {
        dragaoVidaView.innerHTML = `Vida: ${dragao.vidaCombate}`
        dragaoVidaView.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        dragaoManaView.innerHTML = `Mana: ${dragao.manaCombate}`
        dragaoManaView.style.backgroundSize = `${inimigo.manaPorcentagem}% 100%`
    }
}
/*-----*/

/*-INIMIGO DERROTADO-*/
function inimigoDerrotado() {
    if (fase == 'goblin' && goblin.vidaCombate <= 0) {
        fase = 'safezone'
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGoblin.style.display = 'none'
        mainSafeZone.style.display = 'contents'

        jogadorNivel.experiencia = jogadorNivel.experiencia + 10

        definirEstatisticaGeral()
        definirMusica()
    }

    if (fase == 'golem' && golem.vidaCombate <= 0) {
        fase = 'safezone'
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGolem.style.display = 'none'
        mainSafeZone.style.display = 'contents'
        definirEstatisticaGeral()
        definirMusica()
    }
    
    if (fase == 'dragao' && dragao.vidaCombate <= 0) {
        fase = 'safezone'
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseDragao.style.display = 'none'
        mainSafeZone.style.display = 'contents'
        definirEstatisticaGeral()
        definirMusica()
    }
}
/*-----*/
