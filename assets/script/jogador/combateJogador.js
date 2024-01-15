function acaoIntervalo() {
    vezUsuario = true
}

/*-ATAQUE BÁSICO-*/
var botaoAtaqueBasico = window.document.querySelector('input#ataqueBasico')

document.addEventListener(`keypress`, ataqueBasicoAtalho)
botaoAtaqueBasico.addEventListener('click', botaoAtaqueBasicoClick)
botaoAtaqueBasico.addEventListener('mouseover', botaoAtaqueBasicoHover)
botaoAtaqueBasico.addEventListener('mouseout', botaoAtaqueBasicoOut)

function ataqueBasicoTempo() {
    if (fase == 'goblin') {
        if (goblin.vidaCombate - armaJogador.dano < 0) {
            goblin.vidaCombate = 0
            inimigo.vidaPorcentagem = 0.1

        } else {
            goblin.vidaCombate = goblin.vidaCombate - armaJogador.dano

            inimigo.porcentagem = 100 - ((armaJogador.dano / goblin.vida) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem

        }
    }

    if (fase == 'golem') {
        if (golem.vidaCombate - armaJogador.dano < 0) {
            golem.vidaCombate = 0
            inimigo.vidaPorcentagem = 0.1

        } else {
            golem.vidaCombate = golem.vidaCombate - armaJogador.dano

            inimigo.porcentagem = 100 - ((armaJogador.dano / golem.vida) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem
        }
    }

    if (fase == 'dragao') {
        if (dragao.vidaCombate - armaJogador.dano < 0) {
            dragao.vidaCombate = 0
            inimigo.vidaPorcentagem = 0.1

        } else {
            dragao.vidaCombate = dragao.vidaCombate - armaJogador.dano

            inimigo.porcentagem = 100 - ((armaJogador.dano / dragao.vida) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem
        }
    }

    if (armaJogador.classe == 'Físico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Básico<br>Dano causado: ${armaJogador.dano}<br>Energia gasta: ${armaJogador.energiaCusto}`
        jogador.energiaCombate = jogador.energiaCombate - armaJogador.energiaCusto

        jogador.porcentagem = 100 - ((armaJogador.energiaCusto / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0
        }
    }

    if (armaJogador.classe == 'Mágico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Básico<br>Dano causado: ${armaJogador.dano}<br>Mana gasta: ${armaJogador.manaCusto}`
        jogador.manaCombate = jogador.manaCombate - armaJogador.manaCusto

        jogador.porcentagem = 100 - ((armaJogador.manaCusto / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
        }
    }

    usuarioCombateView()
    inimigoCombateView()
}

function ataqueBasicoAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '1') {
            console.log("Ataque Básico usado");
            botaoAtaqueBasico.click()
        }
    }
}

function botaoAtaqueBasicoClick() {
    if (vezUsuario == true) {
        if (jogador.manaCombate > 0 && jogador.manaCombate - armaJogador.manaCusto >= 0 && jogador.energiaCombate > 0 && jogador.energiaCombate - armaJogador.energiaCusto >= 0) {
            vezUsuario = false
            setTimeout(ataqueBasicoTempo, 500)
            setTimeout(acaoIntervalo, 2500)

            if (fase == 'goblin') {
                setTimeout(ataqueGoblin, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
                setTimeout(jogadorDerrotado, 3500)
            }

            if (fase == 'golem') {
                setTimeout(ataqueGolem, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
                setTimeout(jogadorDerrotado, 3500)
            }

            if (fase == 'dragao') {
                setTimeout(ataqueDragao, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
                setTimeout(jogadorDerrotado, 3500)
            }
        }

        if (jogador.manaCombate <= 0 || jogador.manaCombate - armaJogador.manaCusto <= 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        }
        if (jogador.energiaCombate <= 0 || jogador.energiaCombate - armaJogador.energiaCusto <= 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoAtaqueBasicoHover() {
    if (vezUsuario == true) {
        ataqueBasico.style.cursor = 'pointer'
        ataqueBasico.style.background = 'purple'
        ataqueBasico.style.transition = '0.5s'
    } else {
        ataqueBasico.style.cursor = 'not-allowed'
    }
}

function botaoAtaqueBasicoOut() {
    ataqueBasico.style.background = 'gray'
}
/*-----*/

/*-ATAQUE ESPECIAL-*/
var botaoAtaqueEspecial = window.document.querySelector('input#ataqueEspecial')

document.addEventListener(`keypress`, ataqueEspecialAtalho)
botaoAtaqueEspecial.addEventListener('click', botaoAtaqueEspecialClick)
botaoAtaqueEspecial.addEventListener('mouseover', botaoAtaqueEspecialHover)
botaoAtaqueEspecial.addEventListener('mouseout', botaoAtaqueEspecialOut)

function ataqueEspecialTempo() {

    if (fase == 'goblin') {

        if (goblin.vidaCombate - parseInt((armaJogador.dano + (armaJogador.dano / 2))) < 0) {
            goblin.vidaCombate = 0
            inimigo.vidaPorcentagem = 0.1

        } else {
            goblin.vidaCombate = goblin.vidaCombate - parseInt((armaJogador.dano + (armaJogador.dano / 2)))

            inimigo.porcentagem = 100 - ((parseInt((armaJogador.dano + (armaJogador.dano / 2))) / goblin.vida) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem
        }
    }

    if (fase == 'golem') {

        if (golem.vidaCombate - parseInt((armaJogador.dano + (armaJogador.dano / 2))) < 0) {
            golem.vidaCombate = 0
            inimigo.vidaPorcentagem = 0.1

        } else {
            golem.vidaCombate = golem.vidaCombate - parseInt((armaJogador.dano + (armaJogador.dano / 2)))

            inimigo.porcentagem = 100 - ((parseInt((armaJogador.dano + (armaJogador.dano / 2))) / golem.vida) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem
        }
    }


    if (fase == 'dragao') {
        if (dragao.vidaCombate - parseInt((armaJogador.dano + (armaJogador.dano / 2))) < 0) {
            dragao.vidaCombate = 0
            inimigo.vidaPorcentagem = 0.1

        } else {
            dragao.vidaCombate = dragao.vidaCombate - parseInt((armaJogador.dano + (armaJogador.dano / 2)))

            inimigo.porcentagem = 100 - ((parseInt((armaJogador.dano + (armaJogador.dano / 2))) / dragao.vida) * 100)
            inimigo.porcentagem = 100 - inimigo.porcentagem
            inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

            inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem
        }
    }

    if (armaJogador.classe == 'Físico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Especial<br>Dano causado: ${parseInt(armaJogador.dano + (armaJogador.dano / 2))}<br>Energia gasta: ${parseInt(armaJogador.energiaCusto + (armaJogador.energiaCusto / 2))}`
        jogador.energiaCombate = jogador.energiaCombate - parseInt((armaJogador.energiaCusto + (armaJogador.energiaCusto / 2)))

        jogador.porcentagem = 100 - ((parseInt((armaJogador.energiaCusto + (armaJogador.energiaCusto / 2))) / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0
        }
    }

    if (armaJogador.classe == 'Mágico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Especial<br>Dano causado: ${parseInt(armaJogador.dano + (armaJogador.dano / 2))}<br>Mana gasta: ${parseInt(armaJogador.manaCusto + (armaJogador.manaCusto / 2))}`
        jogador.manaCombate = jogador.manaCombate - parseInt((armaJogador.manaCusto + (armaJogador.manaCusto / 2)))

        jogador.porcentagem = 100 - ((parseInt((armaJogador.manaCusto + (armaJogador.manaCusto / 2))) / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
        }
    }

    usuarioCombateView()
    inimigoCombateView()
}

function ataqueEspecialAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '2') {
            console.log("Ataque Especial usado");
            botaoAtaqueEspecial.click()
        }
    }
}

function botaoAtaqueEspecialClick() {
    if (vezUsuario == true) {

        if (jogador.manaCombate > 0 && jogador.manaCombate - armaJogador.manaCusto > 0 && jogador.energiaCombate > 0 && jogador.energiaCombate - armaJogador.energiaCusto > 0) {
            vezUsuario = false
            setTimeout(ataqueEspecialTempo, 500)
            setTimeout(acaoIntervalo, 2500)
            if (fase == 'goblin') {
                setTimeout(ataqueGoblin, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
                setTimeout(jogadorDerrotado, 3500)
            }
            if (fase == 'golem') {
                setTimeout(ataqueGolem, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
                setTimeout(jogadorDerrotado, 3500)
            }
            if (fase == 'dragao') {
                setTimeout(ataqueDragao, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
                setTimeout(jogadorDerrotado, 3500)
            }
        }

        if (jogador.energiaCombate <= 0 || jogador.energiaCombate - parseInt((armaJogador.energiaCusto + (armaJogador.energiaCusto / 2))) < 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        if (jogador.manaCombate <= 0 || jogador.manaCombate - parseInt((armaJogador.manaCusto + (armaJogador.manaCusto / 2))) < 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        }

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoAtaqueEspecialHover() {
    if (vezUsuario == true) {
        ataqueEspecial.style.cursor = 'pointer'
        ataqueEspecial.style.background = 'purple'
        ataqueEspecial.style.transition = '0.5s'
    } else {
        ataqueEspecial.style.cursor = 'not-allowed'
    }
}

function botaoAtaqueEspecialOut() {
    ataqueEspecial.style.background = 'gray'
}
/*-----*/

/*-DEFENDER-*/
var botaoDefesa = window.document.querySelector('input#defesa')

document.addEventListener(`keypress`, defesaAtalho)
botaoDefesa.addEventListener('click', botaoDefesaClick)
botaoDefesa.addEventListener('mouseover', botaoDefesaHover)
botaoDefesa.addEventListener('mouseout', botaoDefesaOut)

function defesaTempo() {
    legendaView.innerHTML = `${jogador.nome} utilizou Defesa<br> Defesa aumentou para ${parseInt(armaduraJogador.defesa + (armaduraJogador.defesa / 2))}`
}

function defesaAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '3') {
            console.log("Defesa usado");
            botaoDefesa.click()
        }
    }
}

function botaoDefesaClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(defesaTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (fase == 'goblin') {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'golem') {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'dragao') {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoDefesaHover() {
    if (vezUsuario == true) {
        defesa.style.cursor = 'pointer'
        defesa.style.background = 'purple'
        defesa.style.transition = '0.5s'
    } else {
        defesa.style.cursor = 'not-allowed'
    }
}

function botaoDefesaOut() {
    defesa.style.background = 'gray'
}
/*-----*/

/*-DESCANSAR-*/
var botaoDescansar = window.document.querySelector('input#descansar')

document.addEventListener(`keypress`, descansarAtalho)
botaoDescansar.addEventListener('click', botaoDescansarClick)
botaoDescansar.addEventListener('mouseover', botaoDescansarHover)
botaoDescansar.addEventListener('mouseout', botaoDescansarOut)

function descansarTempo() {
    if (jogador.energiaCombate + armaduraJogador.energiaRecuperacao > jogador.energia) {
        jogador.energiaCombate = jogador.energia
        jogador.energiaPorcentagem = 100

    } else {
        jogador.energiaCombate = jogador.energiaCombate + armaduraJogador.energiaRecuperacao

        jogador.porcentagem = 100 - ((armaduraJogador.energiaRecuperacao / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = parseInt(jogador.energiaPorcentagem) + parseInt(jogador.porcentagem)
    }
    legendaView.innerHTML = `${jogador.nome} utilizou Descanso<br>Energia recuperado: ${armaduraJogador.energiaRecuperacao}}`
    usuarioCombateView()
    inimigoCombateView()
}

function descansarAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '4') {
            console.log("Descanso usado");
            botaoDescansar.click()
        }
    }
}

function botaoDescansarClick() {
    if (vezUsuario == true) {
        vezUsuario = false

        setTimeout(descansarTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (fase == 'goblin') {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'golem') {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'dragao') {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoDescansarHover() {
    if (vezUsuario == true) {
        descansar.style.cursor = 'pointer'
        descansar.style.background = 'purple'
        descansar.style.transition = '0.5s'
    } else {
        descansar.style.cursor = 'not-allowed'
    }
}

function botaoDescansarOut() {
    descansar.style.background = 'gray'
}
/*-----*/

/*-FOCAR-*/
var botaoFocar = window.document.querySelector('input#focar')

document.addEventListener(`keypress`, focarAtalho)
botaoFocar.addEventListener('click', botaoFocarClick)
botaoFocar.addEventListener('mouseover', botaoFocarHover)
botaoFocar.addEventListener('mouseout', botaoFocarOut)

function focarTempo() {
    if (jogador.manaCombate + armaduraJogador.manaRecuperacao > jogador.mana) {
        jogador.manaCombate = jogador.mana
        jogador.manaPorcentagem = 100

    } else {
        jogador.manaCombate = jogador.manaCombate + armaduraJogador.manaRecuperacao

        jogador.porcentagem = 100 - ((armaduraJogador.manaRecuperacao / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = parseInt(jogador.manaPorcentagem) + parseInt(jogador.porcentagem)
    }
    legendaView.innerHTML = `${jogador.nome} utilizou Focar<br>Mana recuperado: ${armaduraJogador.manaRecuperacao}`
    usuarioCombateView()
    inimigoCombateView()
}

function focarAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '5') {
            console.log("Foco usado");
            botaoFocar.click()
        }
    }
}

function botaoFocarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(focarTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (fase == 'goblin') {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'golem') {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
        if (fase == 'dragao') {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
            setTimeout(jogadorDerrotado, 3500)
        }
    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function botaoFocarHover() {
    if (vezUsuario == true) {
        focar.style.cursor = 'pointer'
        focar.style.background = 'purple'
        focar.style.transition = '0.5s'
    } else {
        focar.style.cursor = 'not-allowed'
    }
}

function botaoFocarOut() {
    focar.style.background = 'gray'
}
/*-----*/
