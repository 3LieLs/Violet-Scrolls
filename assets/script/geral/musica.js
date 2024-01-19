/*-MÚSICA-*/
var musica = window.document.querySelector('audio#musica')

musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4'

function definirMusica() {
    if(fase == 'goblin'){
        musica.src = 'assets/content/audio/MúsicaCombate/Combate1.mp3'
    }

    if(fase == 'golem'){
        musica.src = 'assets/content/audio/MúsicaCombate/Combate2.mp3'
    }

    if(fase == 'dragao'){
        musica.src = 'assets/content/audio/MúsicaCombate/CombateBoss1.mp3'
    }

    if(fase == 'taverna'){
        taverna.style.display = 'contents'
        mainBotaoMenu.style.display = 'contents'
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4'
    }
}
/*-----*/