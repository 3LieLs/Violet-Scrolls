/*-ATAQUE BÁSICO-*/
var miniGameVal = window.document.querySelector('input#miniGame')
miniGameVal.addEventListener('click', miniGameAtaqueBasico)

var botaoAtaqueBasico = window.document.querySelector('input#ataqueBasico')

document.addEventListener(`keypress`, ataqueBasicoAtalho)
botaoAtaqueBasico.addEventListener('click', botaoAtaqueBasicoClick)
botaoAtaqueBasico.addEventListener('mouseover', botaoAtaqueBasicoHover)
botaoAtaqueBasico.addEventListener('mouseout', botaoAtaqueBasicoOut)

function ataqueBasicoDano() {
    miniGameDisplay.style.display = 'none'

    armaJogador.danoCombate = armaJogador.dano

    if (jogador.click == 3) {
        armaJogador.danoCombate = armaJogador.dano
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
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Básico<br>Dano causado: ${armaJogador.danoCombate}<br>Energia gasta: ${armaJogador.energiaCusto}`
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
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Básico<br>Dano causado: ${armaJogador.danoCombate}<br>Mana gasta: ${armaJogador.manaCusto}`
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

            miniGameDisplay.style.display = 'contents'
            setTimeout(ataqueBasicoDano, 3000)
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

function miniGameAtaqueBasico() {
    jogador.click = jogador.click + 1

    if (jogador.click == 3) {
        miniGameDisplay.style.display = 'none'
    }
    else {
        miniGameDisplay.style.display = 'contents'

        let num1 = 0
        let num2 = 0

        let cimaBaixo = Math.floor(Math.random() * 3) + 1;
        let esquerdaDireita = Math.floor(Math.random() * 2) + 1;

        if (cimaBaixo == 1) {
            num1 = 40
            if (esquerdaDireita == 1) {
                num2 = 35
            }

            if (esquerdaDireita == 2) {
                num2 = 65
            }
        }

        if (cimaBaixo == 2) {
            num1 = 60
            if (esquerdaDireita == 1) {
                num2 = 35
            }

            if (esquerdaDireita == 2) {
                num2 = 65
            }
        }

        if (cimaBaixo == 3) {
            num1 = 80
            if (esquerdaDireita == 1) {
                num2 = 35
            }

            if (esquerdaDireita == 2) {
                num2 = 65
            }
        }

        miniGameVal.style.top = `${num1}%`
        miniGameVal.style.left = `${num2}%`
    }
}
/*-----*/