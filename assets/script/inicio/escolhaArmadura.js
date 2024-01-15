/*-ESCOLHA ARMADURA-*/
var escolhaArmadura = window.document.querySelector('p#mensagemArmadura')
var armaduraLeve = window.document.querySelector('input#armaduraLeve'), armaduraMedia = window.document.querySelector('input#armaduraMedia'), armaduraPesada = window.document.querySelector('input#armaduraPesada')
var caracteristicaArmaduraLeve = window.document.querySelector('p#caracteristicaArmaduraLeve'), caracteristicaArmaduraMedia = window.document.querySelector('p#caracteristicaArmaduraMedia'), caracteristicaArmaduraPesada = window.document.querySelector('p#caracteristicaArmaduraPesada')
var statsArmaduraLeve = window.document.querySelector('p#statsArmaduraLeve'), statsArmaduraMedia = window.document.querySelector('p#statsArmaduraMedia'), statsArmaduraPesada = window.document.querySelector('p#statsArmaduraPesada')

var botaoVoltarArmadura = window.document.querySelector('input#voltarArmadura')
botaoVoltarArmadura.addEventListener('click', voltarArmaduraClick)
document.addEventListener('keypress', voltarArmaduraAtalho)

function voltarArmaduraClick() {
    arma.style.display = 'contents'
    armadura.style.display = 'none'
    armaDisplay = true
    armaduraDisplay = false
}
function voltarArmaduraAtalho(atalho) {
    if (armaduraDisplay == true) {
        if (atalho.key == 'b') {
            botaoVoltarArmadura.click()
        }
    }
}
function sairArmadura() {
    armadura.style.display = 'none'
    mainBotaoMenu.style.display = 'contents'
    mainSafeZone.style.display = 'contents'
    armaduraDisplay = false
    safeZone = true
}
/*-----*/

/*-ARMADURA LEVE GUERREIRO-*/
function Armadura() {
    armaDisplay = false
    armaduraDisplay = true
    if (jogador.classe == 'Guerreiro') {
        escolhaArmadura.innerHTML = `Escolha a sua armadura.`

        var botaoArmaduraLeve = window.document.querySelector('input#armaduraLeve')
        botaoArmaduraLeve.addEventListener('click', botaoArmaduraLeveClick)
        botaoArmaduraLeve.addEventListener('mouseover', botaoArmaduraLeveHover)
        botaoArmaduraLeve.addEventListener('mouseout', botaoArmaduraLeveOut)
        armaduraLeve.value = `Armadura de bronze`
        caracteristicaArmaduraLeve.innerHTML = `Armadura de bronze fornece uma defesa baixa, porém uma alta recuperação de energia.`
        statsArmaduraLeve.innerHTML = `Defesa: 3 / Energia recuperação: 17`

        function botaoArmaduraLeveClick() {
            armaduraJogador.nome = 'Armadura de bronze'
            armaduraJogador.defesa = 3
            armaduraJogador.energiaRecuperacao = 17
            armaduraJogador.manaRecuperacao = 5
            sairArmadura()
        }

        function botaoArmaduraLeveHover() {
            armaduraLeve.style.cursor = 'pointer'
            armaduraLeve.style.background = 'green'
            armaduraLeve.style.transition = '0.5s'
        }

        function botaoArmaduraLeveOut() {
            armaduraLeve.style.background = 'black'
        }
        /*-----*/

        /*-ARMADURA MEDIA GUERREIRO-*/
        var botaoArmaduraMedia = window.document.querySelector('input#armaduraMedia')
        botaoArmaduraMedia.addEventListener('click', botaoArmaduraMediaClick)
        botaoArmaduraMedia.addEventListener('mouseover', botaoArmaduraMediaHover)
        botaoArmaduraMedia.addEventListener('mouseout', botaoArmaduraMediaOut)
        armaduraMedia.value = `Armadura de ferro`
        caracteristicaArmaduraMedia.innerHTML = `Armadura de ferro fornece uma defesa e recuperação de energia média.`
        statsArmaduraMedia.innerHTML = `Defesa: 5 / Energia recuperação: 14`

        function botaoArmaduraMediaClick() {
            armaduraJogador.nome = 'Armadura de ferro'
            armaduraJogador.defesa = 5
            armaduraJogador.energiaRecuperacao = 14
            armaduraJogador.manaRecuperacao = 5
            sairArmadura()
        }

        function botaoArmaduraMediaHover() {
            armaduraMedia.style.cursor = 'pointer'
            armaduraMedia.style.background = 'yellow'
            armaduraMedia.style.transition = '0.5s'
        }

        function botaoArmaduraMediaOut() {
            armaduraMedia.style.background = 'black'
        }
        /*-----*/

        /*-ARMADURA PESADA GUERREIRO-*/
        var botaoArmaduraPesada = window.document.querySelector('input#armaduraPesada')
        botaoArmaduraPesada.addEventListener('click', botaoArmaduraPesadaClick)
        botaoArmaduraPesada.addEventListener('mouseover', botaoArmaduraPesadaHover)
        botaoArmaduraPesada.addEventListener('mouseout', botaoArmaduraPesadaOut)
        armaduraPesada.value = `Armadura de Aço`
        caracteristicaArmaduraPesada.innerHTML = `Armadura de Aço fornece uma defesa alta, porém uma baixa recuperação de energia `
        statsArmaduraPesada.innerHTML = `Defesa: 7 / Energia recuperação: 11`

        function botaoArmaduraPesadaClick() {
            armaduraJogador.nome = 'Armadura de aço'
            armaduraJogador.defesa = 7
            armaduraJogador.energiaRecuperacao = 11
            armaduraJogador.manaRecuperacao = 5
            sairArmadura()
        }

        function botaoArmaduraPesadaHover() {
            armaduraPesada.style.cursor = 'pointer'
            armaduraPesada.style.background = 'red'
            armaduraPesada.style.transition = '0.5s'
        }

        function botaoArmaduraPesadaOut() {
            armaduraPesada.style.background = 'black'
        }
    }
    /*-----*/

    /*-ARMADURA LEVE MAGO-*/
    if (jogador.classe == 'Mago') {
        escolhaArmadura.innerHTML = `Escolha a sua Túnica.`

        var botaoArmaduraLeve = window.document.querySelector('input#armaduraLeve')
        botaoArmaduraLeve.addEventListener('click', botaoArmaduraLeveClick)
        botaoArmaduraLeve.addEventListener('mouseover', botaoArmaduraLeveHover)
        botaoArmaduraLeve.addEventListener('mouseout', botaoArmaduraLeveOut)
        armaduraLeve.value = `Túnica leve`
        caracteristicaArmaduraLeve.innerHTML = `Túnica leve fornece uma defesa baixa, porém uma alta recuperação de mana.`
        statsArmaduraLeve.innerHTML = `Defesa: 2 / Mana recuperação: 17`

        function botaoArmaduraLeveClick() {
            armaduraJogador.nome = 'Túnica leve'
            armaduraJogador.defesa = 2
            armaduraJogador.energiaRecuperacao = 10
            armaduraJogador.manaRecuperacao = 17
            sairArmadura()
        }

        function botaoArmaduraLeveHover() {
            armaduraLeve.style.cursor = 'pointer'
            armaduraLeve.style.background = 'green'
            armaduraLeve.style.transition = '0.5s'
        }

        function botaoArmaduraLeveOut() {
            armaduraLeve.style.background = 'black'
        }
        /*-----*/

        /*-ARMADURA MEDIA MAGO-*/
        var botaoArmaduraMedia = window.document.querySelector('input#armaduraMedia')
        botaoArmaduraMedia.addEventListener('click', botaoArmaduraMediaClick)
        botaoArmaduraMedia.addEventListener('mouseover', botaoArmaduraMediaHover)
        botaoArmaduraMedia.addEventListener('mouseout', botaoArmaduraMediaOut)
        armaduraMedia.value = `Túnica média`
        caracteristicaArmaduraMedia.innerHTML = `Túnica média fornece uma defesa e recuperação de mana média.`
        statsArmaduraMedia.innerHTML = `Defesa: 3 / Mana recuperação: 15`

        function botaoArmaduraMediaClick() {
            armaduraJogador.nome = 'Túnica média'
            armaduraJogador.defesa = 3
            armaduraJogador.energiaRecuperacao = 10
            armaduraJogador.manaRecuperacao = 15
            sairArmadura()
        }

        function botaoArmaduraMediaHover() {
            armaduraMedia.style.cursor = 'pointer'
            armaduraMedia.style.background = 'yellow'
            armaduraMedia.style.transition = '0.5s'
        }

        function botaoArmaduraMediaOut() {
            armaduraMedia.style.background = 'black'
        }
        /*-----*/

        /*-ARMADURA PESADA MAGO-*/
        var botaoArmaduraPesada = window.document.querySelector('input#armaduraPesada')
        botaoArmaduraPesada.addEventListener('click', botaoArmaduraPesadaClick)
        botaoArmaduraPesada.addEventListener('mouseover', botaoArmaduraPesadaHover)
        botaoArmaduraPesada.addEventListener('mouseout', botaoArmaduraPesadaOut)
        armaduraPesada.value = `Túnica pesada`
        caracteristicaArmaduraPesada.innerHTML = `Túnica pesada fornece uma defesa alta, porém uma baixa recuperação de mana `
        statsArmaduraPesada.innerHTML = `Defesa: 4 / Mana recuperação: 13`

        function botaoArmaduraPesadaClick() {
            armaduraJogador.nome = 'Túnica pesada'
            armaduraJogador.defesa = 4
            armaduraJogador.energiaRecuperacao = 10
            armaduraJogador.manaRecuperacao = 13
            sairArmadura()
        }

        function botaoArmaduraPesadaHover() {
            armaduraPesada.style.cursor = 'pointer'
            armaduraPesada.style.background = 'red'
            armaduraPesada.style.transition = '0.5s'
        }

        function botaoArmaduraPesadaOut() {
            armaduraPesada.style.background = 'black'
        }
    }
    /*-----*/

    /*-ARMADURA LEVE ARQUEIRO-*/
    if (jogador.classe == 'Arqueiro') {
        escolhaArmadura.innerHTML = `Escolha a sua armadura.`

        var botaoArmaduraLeve = window.document.querySelector('input#armaduraLeve')
        botaoArmaduraLeve.addEventListener('click', botaoArmaduraLeveClick)
        botaoArmaduraLeve.addEventListener('mouseover', botaoArmaduraLeveHover)
        botaoArmaduraLeve.addEventListener('mouseout', botaoArmaduraLeveOut)
        armaduraLeve.value = `Armadura de couro`
        caracteristicaArmaduraLeve.innerHTML = `Armadura de couro fornece uma defesa baixa, porém uma alta recuperação de energia.`
        statsArmaduraLeve.innerHTML = `Defesa: 2 / Energia recuperação: 18`

        function botaoArmaduraLeveClick() {
            armaduraJogador.nome = 'Armadura de couro'
            armaduraJogador.defesa = 2
            armaduraJogador.energiaRecuperacao = 18
            armaduraJogador.manaRecuperacao = 7
            sairArmadura()
        }

        function botaoArmaduraLeveHover() {
            armaduraLeve.style.cursor = 'pointer'
            armaduraLeve.style.background = 'green'
            armaduraLeve.style.transition = '0.5s'
        }

        function botaoArmaduraLeveOut() {
            armaduraLeve.style.background = 'black'
        }
        /*-----*/

        /*-ARMADURA MEDIA ARQUEIRO-*/
        var botaoArmaduraMedia = window.document.querySelector('input#armaduraMedia')
        botaoArmaduraMedia.addEventListener('click', botaoArmaduraMediaClick)
        botaoArmaduraMedia.addEventListener('mouseover', botaoArmaduraMediaHover)
        botaoArmaduraMedia.addEventListener('mouseout', botaoArmaduraMediaOut)
        armaduraMedia.value = `Armadura de escamas`
        caracteristicaArmaduraMedia.innerHTML = `Armadura de escamas fornece uma defesa e recuperação de energia média.`
        statsArmaduraMedia.innerHTML = `Defesa: 3 / Energia recuperação: 16`

        function botaoArmaduraMediaClick() {
            armaduraJogador.nome = 'Armadura de escamas'
            armaduraJogador.defesa = 3
            armaduraJogador.energiaRecuperacao = 16
            armaduraJogador.manaRecuperacao = 7
            sairArmadura()
        }

        function botaoArmaduraMediaHover() {
            armaduraMedia.style.cursor = 'pointer'
            armaduraMedia.style.background = 'yellow'
            armaduraMedia.style.transition = '0.5s'
        }

        function botaoArmaduraMediaOut() {
            armaduraMedia.style.background = 'black'
        }
        /*-----*/

        /*-ARMADURA PESADA ARQUEIRO-*/
        var botaoArmaduraPesada = window.document.querySelector('input#armaduraPesada')
        botaoArmaduraPesada.addEventListener('click', botaoArmaduraPesadaClick)
        botaoArmaduraPesada.addEventListener('mouseover', botaoArmaduraPesadaHover)
        botaoArmaduraPesada.addEventListener('mouseout', botaoArmaduraPesadaOut)
        armaduraPesada.value = `Armadura de escamas de aço`
        caracteristicaArmaduraPesada.innerHTML = `Armadura de escamas de aço fornece uma defesa alta, porém uma baixa recuperação de energia `
        statsArmaduraPesada.innerHTML = `Defesa: 5 / Energia recuperação: 13`

        function botaoArmaduraPesadaClick() {
            armaduraJogador.nome = 'Armadura de escamas de aço'
            armaduraJogador.defesa = 5
            armaduraJogador.energiaRecuperacao = 13
            armaduraJogador.manaRecuperacao = 7
            sairArmadura()
        }

        function botaoArmaduraPesadaHover() {
            armaduraPesada.style.cursor = 'pointer'
            armaduraPesada.style.background = 'red'
            armaduraPesada.style.transition = '0.5s'
        }

        function botaoArmaduraPesadaOut() {
            armaduraPesada.style.background = 'black'
        }
    }
}
/*-----*/