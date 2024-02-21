/*-MÚSICA VARIÁVEIS-*/
var musica = window.document.querySelector('audio#musica');
/*-----*/


/*-MÚSICA-*/
musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';

function definirMusica() {
    if (inimigoCombatendo == 'goblin') {
        musica.src = 'assets/content/audio/MúsicaCombate/Combate1.mp3';
    }

    if (inimigoCombatendo == 'golem') {
        musica.src = 'assets/content/audio/MúsicaCombate/Combate2.mp3';
    }

    if (inimigoCombatendo == 'dragao') {
        musica.src = 'assets/content/audio/MúsicaCombate/CombateBoss1.mp3';
    }



    if (localMapa == 'taverna') {
        taverna.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'floresta') {
        florestaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'caverna') {
        cavernaDisplay.style.display = 'contents'
        mainBotaoMenu.style.display = 'contents'
        botaoMapaDisplay.style.display = 'contents'
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4'
    }

    if (localMapa == 'montanha') {
        montanhaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
}
/*-----*/