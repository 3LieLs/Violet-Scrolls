var inimigo = {
    nome: '', classe: '',

    vida: 0, mana: 0, energia: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,

    energiaCusto: 0, energiaRecuperacao: 0, manaCusto: 0, manaRecuperacao: 0,
    
    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,

    dano: 0, danoCombate: 0,
}


var inimigoHudNome = window.document.querySelector('p#inimigoHudNome')
var inimigoHudVida = window.document.querySelector('p#inimigoHudVida')
var inimigoHudEnergiaMana = window.document.querySelector('p#inimigoHudEnergiaMana')
var inimigoHudImagem = window.document.querySelector('img#inimigoHudImagem')

/*-INIMIGO HUD-*/
function inimigoCombateHud() {
    
        inimigoHudNome.innerHTML = `${inimigo.nome}`
        inimigoHudVida.innerHTML = `Vida: ${inimigo.vidaCombate}`
        inimigoHudVida.style.backgroundSize = `${inimigo.vidaPorcentagem}% 100%`

        inimigoHudEnergiaMana.innerHTML = `Energia: ${inimigo.energiaCombate}`
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigo.energiaPorcentagem}% 100%`

}
/*-----*/

/*-INIMIGO ATAQUE-*/
function inimigoAtaque() {

    if (inimigo.classe == 'fisico') {
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


    if (inimigo.classe == 'magico') {
        if (inimigo.vidaCombate > 0) {
            if (inimigo.manaCombate > 0) {
                inimigo.ataque = Math.round(Math.random() * (100 - 0) + 0);

                if (inimigo.ataque <= 60 && inimigo.manaCombate - inimigo.manaGasto >= 0) {
                    legendaView.innerHTML = `${inimigo.nome} utilizou ataque básico<br>Dano causado: ${inimigo.danoCombate}<br>Mana usada: ${inimigo.manaGasto}`

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

                        inimigo.manaCombate = inimigo.manaCombate - inimigo.manaGasto

                        inimigo.porcentagem = 100 - ((inimigo.manaGasto / inimigo.mana) * 100)
                        inimigo.porcentagem = 100 - inimigo.porcentagem
                        inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                        inimigo.manaPorcentagem = inimigo.manaPorcentagem - inimigo.porcentagem
                    }

                    if (inimigo.manaCombate < 0) {
                        inimigo.manaCombate = 0
                        inimigo.manaPorcentagem = 0.1
                    }

                } else {
                    legendaView.innerHTML = `${inimigo.nome} utilizou ataque especial<br>Dano causado: ${parseInt(inimigo.danoCombate + (inimigo.danoCombate / 2))}<br>Mana usada: ${parseInt(inimigo.manaGasto + (inimigo.manaGasto / 2))}`

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

                        inimigo.manaCombate = inimigo.manaCombate - parseInt(inimigo.manaGasto + (inimigo.manaGasto / 2))

                        inimigo.porcentagem = 100 - ((parseInt(inimigo.manaGasto + (inimigo.manaGasto / 2)) / inimigo.mana) * 100)
                        inimigo.porcentagem = 100 - inimigo.porcentagem
                        inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                        inimigo.manaPorcentagem = inimigo.manaPorcentagem - inimigo.porcentagem
                    }

                    if (inimigo.manaCombate < 0) {
                        inimigo.manaCombate = 0
                        inimigo.manaPorcentagem = 0.1
                    }
                }

            } else {
                inimigo.manaRecuperacao = Math.round(Math.random() * (6 - 3) + 3);

                inimigo.manaCombate = inimigo.manaCombate + inimigo.manaRecuperacao
                inimigo.porcentagem = 100 - ((inimigo.manaRecuperacao / inimigo.mana) * 100)
                inimigo.porcentagem = 100 - inimigo.porcentagem
                inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

                inimigo.manaPorcentagem = parseInt(inimigo.manaPorcentagem) + parseInt(inimigo.porcentagem)

                legendaView.innerHTML = `${inimigo.nome} utilizou foco<br>Mana recuperada: ${inimigo.manaRecuperacao}`
            }
        }
    }
}
/*-----*/

/*-INIMIGO DERROTADO-*/
var mensagemInimigoDerrotadoVal = window.document.querySelector('div#mensagemInimigoDerrotado')
var experienciaGanhaVal = window.document.querySelector('p#experienciaGanha')

function inimigoDerrotado() {
   
    if (inimigo.vidaCombate <= 0) {
        
        mainHudDisplay = false
        mainHud.style.display = 'none'

        mainInimigoHud.style.display = 'none'

        if (fase == 'goblin') {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 10
        }
        if (fase == 'golem') {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 30
        }
        if (fase == 'dragao') {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 60
        }

        experienciaGanha()
        setTimeout(definirEstatisticaGeral, 2000)
        setTimeout(definirMusica, 2000)
    }
    
}

function experienciaGanha() {
    mainInimigoDerrotado.style.display = 'contents'

    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100)
    jogador.porcentagem = jogador.porcentagem.toPrecision(3)

    jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem)

    if (jogadorNivel.experienciaPorcentagem > 100) {
        jogadorNivel.experienciaPorcentagem = 100
    }

    mensagemInimigoDerrotadoVal.innerHTML = `${fase} derrotado`
    experienciaGanhaVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`
    experienciaGanhaVal.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`

    fase = 'taverna'
}
/*-----*/