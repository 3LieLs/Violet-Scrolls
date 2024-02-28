/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-VOLTAR RAÇA-*/
var botaoVoltarRaca = window.document.querySelector('input#voltarRaca');
botaoVoltarRaca.addEventListener('click', voltarRacaClick);

function voltarRacaClick() {
    escolhaNome.style.display = 'contents';
    escolhaRaca.style.display = 'none';
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-ESCOLHA RAÇA VARIÁVEIS-*/
var botaoHumano = window.document.querySelector('input#humano');
botaoHumano.addEventListener('click', botaoHumanoClick);

var botaoElfo = window.document.querySelector('input#elfo');
botaoElfo.addEventListener('click', botaoElfoClick);

var botaoOrc = window.document.querySelector('input#orc');
botaoOrc.addEventListener('click', botaoOrcClick);

var botaoDraconato = window.document.querySelector('input#draconato');
botaoDraconato.addEventListener('click', botaoDraconatoClick);

var botaoVampiro = window.document.querySelector('input#vampiro');
botaoVampiro.addEventListener('click', botaoVampiroClick);
/*-HUMANO-*/
function botaoHumanoClick() {
    racaGeral = racaHumano;

    adicionarChicoteDeAco();
    adicionarItem();

    adicionarArmaduraDeCouro();
    adicionarItem();


    adicionarEspinhoDeGelo();
    adicionarItem();

    adicionarLuzDaVida();
    adicionarItem();

    adicionarFuriaDeTouro();
    adicionarItem();

    poderUso = poderHumanoClick;

    jogador.vidaBase = racaGeral.vidaBase;
    jogador.energiaBase = racaGeral.energiaBase;
    jogador.manaBase = racaGeral.manaBase;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-Elfo-*/
function botaoElfoClick() {
    racaGeral = racaElfo;

    adicionarAdaga();
    adicionarItem();

    adicionarTunicaBasica();
    adicionarItem();

    adicionarBolaDeFogo();
    adicionarItem();

    adicionarPurificacaoAstral()
    adicionarItem();

    adicionarEsferasDaVida();
    adicionarItem();

    poderUso = poderElfoClick;

    jogador.vidaBase = racaGeral.vidaBase;
    jogador.energiaBase = racaGeral.energiaBase;
    jogador.manaBase = racaGeral.manaBase;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-ORC-*/
function botaoOrcClick() {
    racaGeral = racaOrc;

    adicionarEspadaDeAco();
    adicionarItem();

    adicionarArmaduraDeFerro();
    adicionarItem();

    adicionarEspinhoDeGelo();
    adicionarItem();

    adicionarLuzDaVida();
    adicionarItem();

    adicionarFuriaDeTouro();
    adicionarItem();

    poderUso = poderOrcClick;

    jogador.vidaBase = racaGeral.vidaBase;
    jogador.energiaBase = racaGeral.energiaBase;
    jogador.manaBase = racaGeral.manaBase;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-DRACONATO-*/
function botaoDraconatoClick() {
    racaGeral = racaDraconato;

    adicionarEspadaDeAco();
    adicionarItem();

    adicionarArmaduraDeEscamas();
    adicionarItem();

    adicionarEspinhoDeGelo();
    adicionarItem();

    adicionarPurificacaoAstral();
    adicionarItem();

    adicionarFuriaDeTouro();
    adicionarItem();

    poderUso = poderDraconatoClick;

    jogador.vidaBase = racaGeral.vidaBase;
    jogador.energiaBase = racaGeral.energiaBase;
    jogador.manaBase = racaGeral.manaBase;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-VAMPIRO-*/
function botaoVampiroClick() {
    racaGeral = racaVampiro;

    adicionarArcoSimples();
    adicionarItem();

    adicionarArmaduraDeCouro();
    adicionarItem();

    adicionarBolaDeFogo();
    adicionarItem();

    adicionarLuzDaVida();
    adicionarItem();

    adicionarEsferasDaVida();
    adicionarItem();

    poderUso = poderVampiroClick;

    jogador.vidaBase = racaGeral.vidaBase;
    jogador.energiaBase = racaGeral.energiaBase;
    jogador.manaBase = racaGeral.manaBase;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
function racaEscolhida() {
    armaGeral = soco;
    armaduraGeral = trajeSimples;
    magiaDanoGeral = 'Nenhuma'
    magiaRecuperacaoGeral = 'Nenhuma'
    magiaBuffGeral = 'Nenhuma'

    escolhaRaca.style.display = 'none';

    localMapa = 'taverna';
    definirMusica()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/