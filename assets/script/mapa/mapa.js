var localMapa = ''

/*-MAPA BOTÕES-*/
botaoMapa.addEventListener('click', () => {
    definirLocal('mapa')
    definirMusica('mapa');
});

mapaTaverna.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'taverna'
    definirLocal('taverna')
    definirMusica('taverna');
});

mapaVendedor.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'vendedor'
    definirLocal('vendedor')
    definirMusica('vendedor');
});

mapaFerreiro.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'ferreiro'
    definirLocal('ferreiro')
    definirMusica('ferreiro');
});

mapaFeiticeiro.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'feiticeiro'
    definirLocal('feiticeiro')
    definirMusica('feiticeiro');
});

mapaFloresta.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'floresta'
    definirLocal('floresta')
    definirMusica('floresta');
});

mapaCaverna.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'caverna'
    definirLocal('caverna')
    definirMusica('caverna');
});

mapaMontanha.addEventListener('click', () => {
    mapaEscolhido();
    localMapa = 'montanha'
    definirLocal('montanha')
    definirMusica('montanha');
});

/*-----*/
function mapaEscolhido() {
    mapaDisplay.style.display = 'none';
}
/*-----*/

function definirLocal(local) {
    if (local == 'mapa') {
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

    if (local == 'taverna') {
        rpgGeral.style.backgroundColor = 'brown';
        taverna.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'vendedor') {
        rpgGeral.style.backgroundColor = 'brown';
        vendedorDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'ferreiro') {
        rpgGeral.style.backgroundColor = 'brown';
        ferreiroDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'feiticeiro') {
        rpgGeral.style.backgroundColor = 'brown';
        feiticeiroDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'floresta') {
        rpgGeral.style.backgroundColor = 'gray';
        florestaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'caverna') {
        rpgGeral.style.backgroundColor = 'gray';
        cavernaDisplay.style.display = 'contents'
        mainBotaoMenu.style.display = 'contents'
        botaoMapaDisplay.style.display = 'contents'
    }

    if (local == 'montanha') {
        rpgGeral.style.backgroundColor = 'gray';
        montanhaDisplay.style.display = 'contents';
        mainBotaoMenu.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }
}