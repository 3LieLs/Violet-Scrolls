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