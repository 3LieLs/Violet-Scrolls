/*-VOLTAR RAÇA-*/
var botaoVoltarRaca = window.document.querySelector('input#voltarRaca');
botaoVoltarRaca.addEventListener('click', voltarRacaClick);

function voltarRacaClick()
{
    escolhaNome.style.display = 'contents';
    escolhaRaca.style.display = 'none';
}
/*-----*/

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
/*-----*/

/*-HUMANO-*/
function botaoHumanoClick()
{
    racaGeral = racaHumano;

    adicionarChicoteDeAco();
    adicionarItem();

    adicionarArmaduraDeCouro();
    adicionarItem();
    

    adicionarEspinhoDeFogo();
    adicionarItem();

    adicionarLuzDaVida();
    adicionarItem();

    adicionarFuriaDeTouro();
    adicionarItem();

    jogador.vida = racaGeral.vida;
    jogador.energia = racaGeral.energia;
    jogador.mana = racaGeral.mana;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-----*/

/*-Elfo-*/
function botaoElfoClick()
{
    racaGeral = racaElfo;

    adicionarAdaga();
    adicionarItem();

    adicionarTunicaBasica();
    adicionarItem();

    adicionarBolaDeFogo();
    adicionarItem();

    adicionarRaiosRevigorantes();
    adicionarItem();

    adicionarEsferasDaVida();
    adicionarItem();

    jogador.vida = racaGeral.vida;
    jogador.energia = racaGeral.energia;
    jogador.mana = racaGeral.mana;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-----*/

/*-orc-*/
function botaoOrcClick()
{
    racaGeral = racaOrc;

    adicionarEspadaDeAco()
    adicionarItem()

    adicionarArmaduraDeFerro()
    adicionarItem()

    adicionarEspinhoDeFogo();
    adicionarItem();

    adicionarLuzDaVida();
    adicionarItem();

    adicionarFuriaDeTouro();
    adicionarItem();

    jogador.vida = racaGeral.vida;
    jogador.energia = racaGeral.energia;
    jogador.mana = racaGeral.mana;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-----*/

/*-Draconato-*/
function botaoDraconatoClick()
{
    racaGeral = racaDraconato;

    adicionarEspadaDeAco()
    adicionarItem()

    adicionarArmaduraDeEscamas()
    adicionarItem()

    adicionarEspinhoDeFogo();
    adicionarItem();

    adicionarRaiosRevigorantes();
    adicionarItem();

    adicionarFuriaDeTouro();
    adicionarItem();

    jogador.vida = racaGeral.vida;
    jogador.energia = racaGeral.energia;
    jogador.mana = racaGeral.mana;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-----*/

/*-VAMPIRO-*/
function botaoVampiroClick()
{
    racaGeral = racaVampiro;

    adicionarArcoSimples()
    adicionarItem()

    adicionarArmaduraDeCouro()
    adicionarItem()

    adicionarBolaDeFogo();
    adicionarItem();

    adicionarLuzDaVida();
    adicionarItem();

    adicionarEsferasDaVida();
    adicionarItem();

    jogador.vida = racaGeral.vida;
    jogador.energia = racaGeral.energia;
    jogador.mana = racaGeral.mana;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    racaEscolhida();
}
/*-----*/

function racaEscolhida()
{
    escolhaRaca.style.display = 'none';

    taverna.style.display = 'contents';
    local = 'taverna';

    mainBotaoMenu.style.display = 'contents';
    botaoMapaDisplay.style.display = 'contents';
}