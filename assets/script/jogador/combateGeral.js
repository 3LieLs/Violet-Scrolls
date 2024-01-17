var minigameVal = window.document.querySelector('input#minigame')
minigameVal.addEventListener('click', minigameMove)

function critico() {
    let chance = Math.floor(Math.random() * 100) + 0;

    if (chance <= 10) {
        armaJogador.danoCombate = armaJogador.danoCombate * 2

        inimigo.danoCombate = inimigo.danoCombate * 2
    }
}

function minigameMove() {
    
    if (jogador.minigame == 'ataqueBasico') {
        minigameVal.addEventListener('click', minigameAtaqueBasico)
    }

    if (jogador.minigame == 'ataqueEspecial') {
       
    }

    if (jogador.minigame == 'defesa') {
        minigameVal.addEventListener('click', minigameDefesa)
    }

    if (jogador.minigame == 'descanso') {
        
    }

    if (jogador.minigame == 'foco') {
       
    }
   
}