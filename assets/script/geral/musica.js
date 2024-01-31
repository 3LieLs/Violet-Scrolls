/*-MÚSICA VARIÁVEIS-*/
var musica = window.document.querySelector('audio#musica');
/*-----*/


/*-MÚSICA-*/
musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';

function definirMusica()
{
    if(fase == 'goblin')
    {
        musica.src = 'assets/content/audio/MúsicaCombate/Combate1.mp3';
    }

    if(fase == 'golem')
    {
        musica.src = 'assets/content/audio/MúsicaCombate/Combate2.mp3';
    }

    if(fase == 'dragao')
    {
        musica.src = 'assets/content/audio/MúsicaCombate/CombateBoss1.mp3';
    }



    if(local == 'taverna')
    {
        taverna.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if(local == 'floresta')
    {
        florestaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }

    if(local == 'caverna')
    {
        cavernaDisplay.style.display = 'contents'
        mainBotaoMenu.style.display = 'contents'
        botaoMapaDisplay.style.display = 'contents'
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4'
    }

    if(local == 'montanha')
    {
        montanhaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
        musica.src = 'assets/content/audio/MúsicaPacífica/taverna.mp4';
    }
}
/*-----*/