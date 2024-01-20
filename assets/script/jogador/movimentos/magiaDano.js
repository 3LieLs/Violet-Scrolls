/*-ATAQUE FRACO-*/
function MagiaDanoUso() {
    
    if (inimigoGeral.vidaCombate - magiaDanoGeral.danoCombate < 0) {
        inimigoGeral.vidaCombate = 0
        inimigoGeral.vidaPorcentagem = 0.1

    } else {
        inimigoGeral.vidaCombate = inimigoGeral.vidaCombate - magiaDanoGeral.danoCombate

        inimigoGeral.porcentagem = 100 - ((magiaDanoGeral.danoCombate / inimigoGeral.vida) * 100)
        inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem
        inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2)

        inimigoGeral.vidaPorcentagem = inimigoGeral.vidaPorcentagem - inimigoGeral.porcentagem

    }

    if (magiaDanoGeral.classe == 'Mágico') {

        legendaView.innerHTML = `${jogador.nome} utilizou ${magiaDanoGeral.nome}<br>Dano causado: ${magiaDanoGeral.danoCombate}<br>Mana gasta: ${magiaDanoGeral.manaCusto}`

        jogador.manaCombate = jogador.manaCombate - magiaDanoGeral.manaCusto

        jogador.porcentagem = 100 - ((magiaDanoGeral.manaCusto / jogador.mana) * 100)
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

function botaoMagiaDanoClick() {
    if (vezUsuario == true) {
        if (magiaDanoGeral.classe == 'Físico' && jogador.energiaCombate > 0 && jogador.energiaCombate - magiaDanoGeral.energiaCusto >= 0 || magiaDanoGeral.classe == 'Mágico' && jogador.manaCombate > 0 && jogador.manaCombate - magiaDanoGeral.manaCusto >= 0) {
            vezUsuario = false

            setTimeout(MagiaDanoUso, 0)
            setTimeout(acaoIntervalo, 2000)

            setTimeout(inimigoAtaque, 2000)
            setTimeout(jogadorCombateHud, 2000)
            setTimeout(inimigoCombateHud, 2000)
            setTimeout(inimigoDerrotado, 2000)
            setTimeout(jogadorDerrotado, 3000)

        }

        if (magiaDanoGeral.classe == 'Mágico' && jogador.manaCombate <= 0 || jogador.manaCombate - magiaDanoGeral.manaCusto < 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        }
        if (magiaDanoGeral.classe == 'Físico' && jogador.energiaCombate <= 0 || jogador.energiaCombate - magiaDanoGeral.energiaCusto < 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }

    } else {
        console.log(`Calma ${jogador.nome}, espera a sua vez.`)
    }
}

function minigameMagiaDano() {
   
}
/*-----*/