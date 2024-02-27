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
}

function botaoMapaClick() {
    localMapa = 'mapa';
    definirMusica();
}


function mapaTavernaClick() {
    mapaEscolhido();
    localMapa = 'taverna';
    definirMusica();
}

function mapaVendedorClick() {
    mapaEscolhido();
    localMapa = 'vendedor';
    definirMusica();
}

function mapaFerreiroClick() {
    mapaEscolhido();
    localMapa = 'ferreiro';
    definirMusica();
}

function mapaFeiticeiroClick() {
    mapaEscolhido();
    localMapa = 'feiticeiro';
    definirMusica();
}

function mapaFlorestaClick() {
    mapaEscolhido();
    localMapa = 'floresta';
    definirMusica();

}

function mapaCavernaClick() {
    mapaEscolhido();
    localMapa = 'caverna';
    definirMusica();
}

function mapaMontanhaClick() {
    mapaEscolhido();
    localMapa = 'montanha';
    definirMusica();
}
/*-----*/