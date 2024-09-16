/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-MÚSICA-*/
musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';

function definirMusica(local) {
    if (local == 'Goblin' || local == 'Besouro gigante') {
        musica.src = 'assets/content/audio/MúsicaCombate/Combate1.mp3';
    }
    if (local == 'Golem de pedra' || local == 'Golem de gelo' || local == 'Golem de fogo') {
        musica.src = 'assets/content/audio/MúsicaCombate/Combate2.mp3';
    }
    if (local == 'Dragão') {
        musica.src = 'assets/content/audio/MúsicaCombate/CombateBoss1.mp3';
    }

    if (local == 'taverna') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
    if (local == 'vendedor') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
    if (local == 'ferreiro') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
    if (local == 'feiticeiro') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
    if (local == 'floresta') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
    if (local == 'caverna') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4'
    }
    if (local == 'montanha') {
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

var somBotao = window.document.querySelector('audio#somBotao');
var somAtaque = window.document.querySelector('audio#somAtaque');
var somGeral = window.document.querySelector('audio#somGeral');