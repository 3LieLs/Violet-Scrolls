/*-ESCOLHA DA ARMA-*/
var escolhaArma = window.document.querySelector('p#mensagemArma')
var armaLeve = window.document.querySelector('input#armaLeve'), armaMedia = window.document.querySelector('input#armaMedia'), armaPesada = window.document.querySelector('input#armaPesada')
var caracteristicaArmaLeve = window.document.querySelector('p#caracteristicaArmaLeve'), caracteristicaArmaMedia = window.document.querySelector('p#caracteristicaArmaMedia'), caracteristicaArmaPesada = window.document.querySelector('p#caracteristicaArmaPesada')
var statsArmaLeve = window.document.querySelector('p#statsArmaLeve'), statsArmaMedia = window.document.querySelector('p#statsArmaMedia'), statsArmaPesada = window.document.querySelector('p#statsArmaPesada')

var botaoVoltarArma = window.document.querySelector('input#voltarArma')
botaoVoltarArma.addEventListener('click', voltarArmaClick)
document.addEventListener('keypress', voltarArmaAtalho)

function voltarArmaClick() {
    classe.style.display = 'contents'
    arma.style.display = 'none'
    classeDisplay = true
    armaDisplay = false
}

function voltarArmaAtalho(atalho) {
    if (armaDisplay == true) {
        if (atalho.key == 'b') {
            botaoVoltarArma.click()
        }
    }
}
/*-----*/

/*-ARMA LEVE GUERREIRO-*/
function Arma() {
    classeDisplay = false
    armaDisplay = true

    if (jogador.classe == 'Guerreiro') {
        escolhaArma.innerHTML = `Escolha a sua arma de curto alcance.`

        var botaoArmaLeve = window.document.querySelector('input#armaLeve')
        botaoArmaLeve.addEventListener('click', botaoArmaLeveClick)
        botaoArmaLeve.addEventListener('mouseover', botaoArmaLeveHover)
        botaoArmaLeve.addEventListener('mouseout', botaoArmaLeveOut)
        armaLeve.value = `Chicote`
        caracteristicaArmaLeve.innerHTML = `Chicotes são armas com um custo baixo de energia e baixo dano ao inimigo.`
        statsArmaLeve.innerHTML = `Dano: 3 / Energia custo: 4 / Mana Custo: 0`

        function botaoArmaLeveClick() {
            armaJogador.dano = 3
            armaJogador.energiaCusto = 4
            armaJogador.manaCusto = 0
            armaJogador.nome = 'Chicote'
            armaJogador.classe = 'Físico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaLeveHover() {
            armaLeve.style.cursor = 'pointer'
            armaLeve.style.background = 'green'
            armaLeve.style.transition = '0.5s'
        }

        function botaoArmaLeveOut() {
            armaLeve.style.background = 'black'
        }
        /*-----*/
        
        /*-ARMA MEDIA GUERREIRO-*/
        var botaoArmaMedia = window.document.querySelector('input#armaMedia')
        botaoArmaMedia.addEventListener('click', botaoArmaMediaClick)
        botaoArmaMedia.addEventListener('mouseover', botaoArmaMediaHover)
        botaoArmaMedia.addEventListener('mouseout', botaoArmaMediaOut)
        armaMedia.value = `Machado`
        caracteristicaArmaMedia.innerHTML = `Machados são armas de uma mão com um custo médio de energia e médio dano ao inimigo.`
        statsArmaMedia.innerHTML = `Dano: 4 / Energia custo: 6 / Mana Custo: 0`

        function botaoArmaMediaClick() {
            armaJogador.dano = 4
            armaJogador.energiaCusto = 6
            armaJogador.manaCusto = 0
            armaJogador.nome = 'Machado'
            armaJogador.classe = 'Físico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaMediaHover() {
            armaMedia.style.cursor = 'pointer'
            armaMedia.style.background = 'yellow'
            armaMedia.style.transition = '0.5s'
        }

        function botaoArmaMediaOut() {
            armaMedia.style.background = 'black'
        }
        /*-----*/

        /*-ARMA PESADA GUERREIRO-*/
        var botaoArmaPesada = window.document.querySelector('input#armaPesada')
        botaoArmaPesada.addEventListener('click', botaoArmaPesadaClick)
        botaoArmaPesada.addEventListener('mouseover', botaoArmaPesadaHover)
        botaoArmaPesada.addEventListener('mouseout', botaoArmaPesadaOut)
        armaPesada.value = `Lança`
        caracteristicaArmaPesada.innerHTML = `Lanças são armas de duas mãos com um custo alto de energia e alto dano ao inimigo.`
        statsArmaPesada.innerHTML = `Dano: 5 / Energia custo: 8 / Mana Custo: 0`

        function botaoArmaPesadaClick() {
            armaJogador.dano = 5
            armaJogador.energiaCusto = 8
            armaJogador.manaCusto = 0
            armaJogador.nome = 'Lança'
            armaJogador.classe = 'Físico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaPesadaHover() {
            armaPesada.style.cursor = 'pointer'
            armaPesada.style.background = 'red'
            armaPesada.style.transition = '0.5s'
        }

        function botaoArmaPesadaOut() {
            armaPesada.style.background = 'black'
        }
    }
    /*-----*/

    /*-ARMA LEVE MAGO-*/
    if (jogador.classe == 'Mago') {
        escolhaArma.innerHTML = `Escolha a sua arma mágica.`

        var botaoArmaLeve = window.document.querySelector('input#armaLeve')
        botaoArmaLeve.addEventListener('click', botaoArmaLeveClick)
        botaoArmaLeve.addEventListener('mouseover', botaoArmaLeveHover)
        botaoArmaLeve.addEventListener('mouseout', botaoArmaLeveOut)
        armaLeve.value = `Luvas mágicas`
        caracteristicaArmaLeve.innerHTML = `Luvas mágicas são armas mágicas com um custo baixa de mana e baixo dano ao inimigo.`
        statsArmaLeve.innerHTML = `Dano: 6 / Energia custo: 0 / Mana Custo: 5`

        function botaoArmaLeveClick() {
            armaJogador.dano = 6
            armaJogador.energiaCusto = 0
            armaJogador.manaCusto = 5
            armaJogador.nome = 'Luvas mágicas'
            armaJogador.classe = 'Mágico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaLeveHover() {
            armaLeve.style.cursor = 'pointer'
            armaLeve.style.background = 'green'
            armaLeve.style.transition = '0.5s'
        }

        function botaoArmaLeveOut() {
            armaLeve.style.background = 'black'
        }
        /*-----*/

        /*-ARMA MEDIA MAGO-*/
        var botaoArmaMedia = window.document.querySelector('input#armaMedia')
        botaoArmaMedia.addEventListener('click', botaoArmaMediaClick)
        botaoArmaMedia.addEventListener('mouseover', botaoArmaMediaHover)
        botaoArmaMedia.addEventListener('mouseout', botaoArmaMediaOut)
        armaMedia.value = `Varinha mágica`
        caracteristicaArmaMedia.innerHTML = `Varinha mágica são armas mágicas com um custo médio de mana e médio dano ao inimigo.`
        statsArmaMedia.innerHTML = `Dano: 8 / Energia custo: 0 / Mana Custo: 7`

        function botaoArmaMediaClick() {
            armaJogador.dano = 8
            armaJogador.energiaCusto = 0
            armaJogador.manaCusto = 7
            armaJogador.nome = 'Varinha mágica'
            armaJogador.classe = 'Mágico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaMediaHover() {
            armaMedia.style.cursor = 'pointer'
            armaMedia.style.background = 'yellow'
            armaMedia.style.transition = '0.5s'
        }

        function botaoArmaMediaOut() {
            armaMedia.style.background = 'black'
        }
        /*-----*/

        /*-ARMA PESADA MAGO-*/
        var botaoArmaPesada = window.document.querySelector('input#armaPesada')
        botaoArmaPesada.addEventListener('click', botaoArmaPesadaClick)
        botaoArmaPesada.addEventListener('mouseover', botaoArmaPesadaHover)
        botaoArmaPesada.addEventListener('mouseout', botaoArmaPesadaOut)
        armaPesada.value = `Cajado mágico`
        caracteristicaArmaPesada.innerHTML = `Cajado mágico são armas mágicas com um custo alto de energia e alto dano ao inimigo.`
        statsArmaPesada.innerHTML = `Dano: 10 / Energia custo: 0 / Mana Custo: 9`

        function botaoArmaPesadaClick() {
            armaJogador.dano = 10
            armaJogador.energiaCusto = 0
            armaJogador.manaCusto = 9
            armaJogador.nome = 'Cajado mágico'
            armaJogador.classe = 'Mágico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaPesadaHover() {
            armaPesada.style.cursor = 'pointer'
            armaPesada.style.background = 'red'
            armaPesada.style.transition = '0.5s'
        }

        function botaoArmaPesadaOut() {
            armaPesada.style.background = 'black'
        }
    }
    /*-----*/

    /*-ARMA LEVE ARQUEIRO-*/
    if (jogador.classe == 'Arqueiro') {
        escolhaArma.innerHTML = `Escolha a sua arma de longo alcance.`

        var botaoArmaLeve = window.document.querySelector('input#armaLeve')
        botaoArmaLeve.addEventListener('click', botaoArmaLeveClick)
        botaoArmaLeve.addEventListener('mouseover', botaoArmaLeveHover)
        botaoArmaLeve.addEventListener('mouseout', botaoArmaLeveOut)
        armaLeve.value = `Besta leve`
        caracteristicaArmaLeve.innerHTML = `Besta leve é uma arma com um custo baixo de energia e baixo dano ao inimigo.`
        statsArmaLeve.innerHTML = `Dano: 4 / Energia custo: 3 / Mana Custo: 0`

        function botaoArmaLeveClick() {
            armaJogador.dano = 4
            armaJogador.energiaCusto = 3
            armaJogador.manaCusto = 0
            armaJogador.nome = 'Besta leve'
            armaJogador.classe = 'Físico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaLeveHover() {
            armaLeve.style.cursor = 'pointer'
            armaLeve.style.background = 'green'
            armaLeve.style.transition = '0.5s'
        }

        function botaoArmaLeveOut() {
            armaLeve.style.background = 'black'
        }
        /*-----*/

        /*-ARMA MEDIA ARQUEIRO-*/
        var botaoArmaMedia = window.document.querySelector('input#armaMedia')
        botaoArmaMedia.addEventListener('click', botaoArmaMediaClick)
        botaoArmaMedia.addEventListener('mouseover', botaoArmaMediaHover)
        botaoArmaMedia.addEventListener('mouseout', botaoArmaMediaOut)
        armaMedia.value = `Arco Curvo`
        caracteristicaArmaMedia.innerHTML = `Arco Curvo é uma arma com um custo médio de energia e médio dano ao inimigo.`
        statsArmaMedia.innerHTML = `Dano: 6 / Energia custo: 5 / Mana Custo: 0`

        function botaoArmaMediaClick() {
            armaJogador.dano = 6
            armaJogador.energiaCusto = 5
            armaJogador.manaCusto = 0
            armaJogador.nome = 'Arco curvo'
            armaJogador.classe = 'Físico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaMediaHover() {
            armaMedia.style.cursor = 'pointer'
            armaMedia.style.background = 'yellow'
            armaMedia.style.transition = '0.5s'
        }

        function botaoArmaMediaOut() {
            armaMedia.style.background = 'black'
        }
        /*-----*/

        /*-ARMA PESADA ARQUEIRO-*/
        var botaoArmaPesada = window.document.querySelector('input#armaPesada')
        botaoArmaPesada.addEventListener('click', botaoArmaPesadaClick)
        botaoArmaPesada.addEventListener('mouseover', botaoArmaPesadaHover)
        botaoArmaPesada.addEventListener('mouseout', botaoArmaPesadaOut)
        armaPesada.value = `Besta pesada`
        caracteristicaArmaPesada.innerHTML = `Besta pesada é uma arma com um custo alto de energia e alto dano ao inimigo.`
        statsArmaPesada.innerHTML = `Dano: 8 / Energia custo: 7 / Mana Custo: 0`

        function botaoArmaPesadaClick() {
            armaJogador.dano = 8
            armaJogador.energiaCusto = 7
            armaJogador.manaCusto = 0
            armaJogador.nome = 'Besta pesada'
            armaJogador.classe = 'Físico'

            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }

        function botaoArmaPesadaHover() {
            armaPesada.style.cursor = 'pointer'
            armaPesada.style.background = 'red'
            armaPesada.style.transition = '0.5s'
        }

        function botaoArmaPesadaOut() {
            armaPesada.style.background = 'black'
        }
    }
}
/*-----*/
