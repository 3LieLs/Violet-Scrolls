/*-ATAQUE ESPECIAL-*/
var botaoAtaqueEspecial = window.document.querySelector('input#ataqueEspecial')

document.addEventListener(`keypress`, ataqueEspecialAtalho)
botaoAtaqueEspecial.addEventListener('click', botaoAtaqueEspecialClick)
botaoAtaqueEspecial.addEventListener('mouseover', botaoAtaqueEspecialHover)
botaoAtaqueEspecial.addEventListener('mouseout', botaoAtaqueEspecialOut)

function ataqueEspecialDano() {

    armaJogador.danoCombate = parseInt(armaJogador.dano + (armaJogador.dano / 2))

    if (jogador.click == 3) {
        armaJogador.danoCombate = parseInt(armaJogador.dano + (armaJogador.dano / 2))
        armaJogador.danoCombate = parseInt(armaJogador.danoCombate)
    }

    if (jogador.click < 3) {
        armaJogador.danoCombate = armaJogador.danoCombate / 2
        armaJogador.danoCombate = parseInt(armaJogador.danoCombate)
    }

    jogador.click = 0

    if (inimigo.vidaCombate - armaJogador.danoCombate < 0) {
        inimigo.vidaCombate = 0
        inimigo.vidaPorcentagem = 0.1

    } else {
        inimigo.vidaCombate = inimigo.vidaCombate - armaJogador.danoCombate

        inimigo.porcentagem = 100 - ((armaJogador.danoCombate / inimigo.vida) * 100)
        inimigo.porcentagem = 100 - inimigo.porcentagem
        inimigo.porcentagem = inimigo.porcentagem.toPrecision(2)

        inimigo.vidaPorcentagem = inimigo.vidaPorcentagem - inimigo.porcentagem

    }

    if (armaJogador.classe == 'Físico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Especial<br>Dano causado: ${armaJogador.danoCombate}<br>Energia gasta: ${parseInt(armaJogador.energiaCusto + (armaJogador.energiaCusto / 2))}`
        jogador.energiaCombate = jogador.energiaCombate - parseInt(armaJogador.energiaCusto + (armaJogador.energiaCusto / 2))

        jogador.porcentagem = 100 - ((parseInt(armaJogador.energiaCusto + (armaJogador.energiaCusto / 2)) / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0
        }
    }

    if (armaJogador.classe == 'Mágico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Especial<br>Dano causado: ${armaJogador.danoCombate}<br>Mana gasta: ${parseInt(armaJogador.manaCusto + (armaJogador.manaCusto / 2))}`

        jogador.manaCombate = jogador.manaCombate - parseInt(armaJogador.manaCusto + (armaJogador.manaCusto / 2))

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
        if (jogador.manaCombate > 0 && jogador.manaCombate - armaJogador.manaCusto >= 0 && jogador.energiaCombate > 0 && jogador.energiaCombate - armaJogador.energiaCusto >= 0) {
            vezUsuario = false

            jogador.minigame = 'ataqueEspecial'
            miniGameDisplay.style.display = 'contents'
            setTimeout(ataqueEspecialDano, 3000)
            setTimeout(acaoIntervalo, 5000)

            setTimeout(inimigoAtaque, 5000)
            setTimeout(usuarioCombateView, 5000)
            setTimeout(inimigoCombateView, 5000)
            setTimeout(inimigoDerrotado, 5000)
            setTimeout(jogadorDerrotado, 7000)

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

function minigameAtaqueEspecial() {
    jogador.click = jogador.click + 1

   
}
/*-----*/