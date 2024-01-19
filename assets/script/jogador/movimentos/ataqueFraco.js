/*-ATAQUE FRACO-*/
function ataqueFracoDano() {
    
    if (inimigoGeral.vidaCombate - armaGeral.danoCombate < 0) {
        inimigoGeral.vidaCombate = 0
        inimigoGeral.vidaPorcentagem = 0.1

    } else {
        inimigoGeral.vidaCombate = inimigoGeral.vidaCombate - armaGeral.danoCombate

        inimigoGeral.porcentagem = 100 - ((armaGeral.danoCombate / inimigoGeral.vida) * 100)
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

        inimigoGeral.vidaPorcentagem = inimigoGeral.vidaPorcentagem - inimigoGeral.porcentagem

    }

    if (armaGeral.classe == 'Físico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Básico<br>Dano causado: ${armaGeral.danoCombate}<br>Energia gasta: ${armaGeral.energiaCusto}`
        jogador.energiaCombate = jogador.energiaCombate - armaGeral.energiaCusto

        jogador.porcentagem = 100 - ((armaGeral.energiaCusto / jogador.energia) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.energiaPorcentagem = jogador.energiaPorcentagem - jogador.porcentagem

        if (jogador.energiaCombate < 0) {
            jogador.energiaCombate = 0
        }
    }

    if (armaGeral.classe == 'Mágico') {
        legendaView.innerHTML = `${jogador.nome} utilizou Ataque Básico<br>Dano causado: ${armaGeral.danoCombate}<br>Mana gasta: ${armaGeral.manaCusto}`
        jogador.manaCombate = jogador.manaCombate - armaGeral.manaCusto

        jogador.porcentagem = 100 - ((armaGeral.manaCusto / jogador.mana) * 100)
        jogador.porcentagem = 100 - jogador.porcentagem
        jogador.porcentagem = jogador.porcentagem.toPrecision(2)

        jogador.manaPorcentagem = jogador.manaPorcentagem - jogador.porcentagem

        if (jogador.manaCombate < 0) {
            jogador.manaCombate = 0
        }
    }

    jogadorCombateHud()
    inimigoCombateHud()
}

function botaoAtaqueFracoClick() {
    if (vezUsuario == true) {
        if (jogador.manaCombate > 0 && jogador.manaCombate - armaGeral.manaCusto >= 0 && jogador.energiaCombate > 0 && jogador.energiaCombate - armaGeral.energiaCusto >= 0) {
            vezUsuario = false

            setTimeout(ataqueFracoDano, 0)
            setTimeout(acaoIntervalo, 2000)

            setTimeout(inimigoAtaque, 2000)
            setTimeout(jogadorCombateHud, 2000)
            setTimeout(inimigoCombateHud, 2000)
            setTimeout(inimigoDerrotado, 2000)
            setTimeout(jogadorDerrotado, 3000)

        }

        if (jogador.manaCombate <= 0 || jogador.manaCombate - armaGeral.manaCusto <= 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        }
        if (jogador.energiaCombate <= 0 || jogador.energiaCombate - armaGeral.energiaCusto <= 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function minigameAtaqueBasico() {
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

        minigameVal.style.top = `${num1}%`
        minigameVal.style.left = `${num2}%`
    }
}
/*-----*/