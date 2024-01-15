/*-MÚSICA-*/
var musicaVal = window.document.querySelector('audio#musica')

musicaVal.src = 'assets/content/audio/MúsicaPacífica/SafeZone.mp4'

function definirMusica() {
    if(fase == 'goblin'){
        musicaVal.src = 'assets/content/audio/MúsicaCombate/Combate1.mp3'
    }
    if(fase == 'golem'){
        musicaVal.src = 'assets/content/audio/MúsicaCombate/Combate2.mp3'
    }
    if(fase == 'dragao'){
        musicaVal.src = 'assets/content/audio/MúsicaCombate/CombateBoss1.mp3'
    }
    if(fase == 'safezone'){
        musicaVal.src = 'assets/content/audio/MúsicaPacífica/SafeZone.mp4'
    }
}
/*-----*/