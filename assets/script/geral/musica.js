/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-MÚSICA VARIÁVEIS-*/
var musica = window.document.querySelector('audio#musica');
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
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
    

    if (localMapa == 'mapa') {
        rpgGeral.style.backgroundColor = 'black';
        mapaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'none';
        botaoMapaDisplay.style.display = 'none';

        taverna.style.display = 'none';
        vendedorDisplay.style.display = 'none';
        ferreiroDisplay.style.display = 'none';
        feiticeiroDisplay.style.display = 'none';
        florestaDisplay.style.display = 'none';
        cavernaDisplay.style.display = 'none';
        montanhaDisplay.style.display = 'none';
    }

    if (localMapa == 'taverna') {
        rpgGeral.style.backgroundColor = 'brown';
        taverna.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'vendedor') {
        rpgGeral.style.backgroundColor = 'brown';
        vendedorDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'ferreiro') {
        rpgGeral.style.backgroundColor = 'brown';
        ferreiroDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'feiticeiro') {
        rpgGeral.style.backgroundColor = 'brown';
        feiticeiroDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'floresta') {
        rpgGeral.style.backgroundColor = 'gray';
        florestaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if (localMapa == 'caverna') {
        rpgGeral.style.backgroundColor = 'gray';
        cavernaDisplay.style.display = 'contents'
        mainBotaoMenu.style.display = 'contents'
        botaoMapaDisplay.style.display = 'contents'
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4'
    }

    if (localMapa == 'montanha') {
        rpgGeral.style.backgroundColor = 'gray';
        montanhaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/