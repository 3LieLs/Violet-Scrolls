var localMapa = '';

/*-MAPA VARIÁVEIS-*/
var botaoMapa = window.document.querySelector('input#botaoMapa');
botaoMapa.addEventListener('click', botaoMapaClick);

var mapaTaverna = window.document.querySelector('input#mapaTaverna');
mapaTaverna.addEventListener('click', mapaTavernaClick);

var mapaVendedor = window.document.querySelector('input#mapaVendedor');
mapaVendedor.addEventListener('click', mapaVendedorClick);

var mapaFerreiro = window.document.querySelector('input#mapaFerreiro');
mapaFerreiro.addEventListener('click', mapaFerreiroClick);

var mapaFeiticeiro = window.document.querySelector('input#mapaFeiticeiro');
mapaFeiticeiro.addEventListener('click', mapaFeiticeiroClick);

var mapaFloresta = window.document.querySelector('input#mapaFloresta');
mapaFloresta.addEventListener('click', mapaFlorestaClick);

var mapaCaverna = window.document.querySelector('input#mapaCaverna');
mapaCaverna.addEventListener('click', mapaCavernaClick);

var mapaMontanha = window.document.querySelector('input#mapaMontanha');
mapaMontanha.addEventListener('click', mapaMontanhaClick);
/*-----*/


/*-MAPA BOTÕES-*/
function mapaEscolhido() {
    mapaDisplay.style.display = 'none';
    botaoMapaDisplay.style.display = 'contents';
    mainBotaoMenu.style.display = 'contents';
}

function botaoMapaClick() {
    localMapa = 'mapa';
    mapaDisplay.style.display = 'contents';
    botaoMapaDisplay.style.display = 'none';
    mainBotaoMenu.style.display = 'none';

    taverna.style.display = 'none';
    vendedorDisplay.style.display = 'none';
    ferreiroDisplay.style.display = 'none';
    feiticeiroDisplay.style.display = 'none';
    florestaDisplay.style.display = 'none';
    cavernaDisplay.style.display = 'none';
    montanhaDisplay.style.display = 'none';
}


function mapaTavernaClick() {
    mapaEscolhido();
    localMapa = 'taverna';
    taverna.style.display = 'contents';
}

function mapaVendedorClick() {
    mapaEscolhido();
    localMapa = 'vendedor';
    vendedorDisplay.style.display = 'contents';
}

function mapaFerreiroClick() {
    mapaEscolhido();
    localMapa = 'ferreiro';
    ferreiroDisplay.style.display = 'contents';
}

function mapaFeiticeiroClick() {
    mapaEscolhido();
    localMapa = 'feiticeiro';
    feiticeiroDisplay.style.display = 'contents';
}

function mapaFlorestaClick() {
    mapaEscolhido();
    localMapa = 'floresta';
    florestaDisplay.style.display = 'contents';

}

function mapaCavernaClick() {
    mapaEscolhido();
    localMapa = 'caverna';
    cavernaDisplay.style.display = 'contents';
}

function mapaMontanhaClick() {
    mapaEscolhido();
    localMapa = 'montanha';
    montanhaDisplay.style.display = 'contents';
}
/*-----*/