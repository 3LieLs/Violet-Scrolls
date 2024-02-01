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

    magiaDanoGeral = espinhoDeFogo;
    adaga.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeFogo.val;
    addItemNome = espinhoDeFogo.nome;
    funcaoEquip = equipEspinhoDeFogo;
    adicionarItem();

    magiaRecuperacaoGeral = luzDaVida;
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
    adicionarItem();

    magiaBuffGeral = furiaDeTouro;
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
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

    magiaDanoGeral = espinhoDeFogo;
    adaga.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeFogo.val;
    addItemNome = espinhoDeFogo.nome;
    funcaoEquip = equipEspinhoDeFogo;
    adicionarItem();

    magiaRecuperacaoGeral = luzDaVida;
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
    adicionarItem();

    magiaBuffGeral = furiaDeTouro;
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
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

    magiaDanoGeral = espinhoDeFogo;
    adaga.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeFogo.val;
    addItemNome = espinhoDeFogo.nome;
    funcaoEquip = equipEspinhoDeFogo;
    adicionarItem();

    magiaRecuperacaoGeral = luzDaVida;
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
    adicionarItem();

    magiaBuffGeral = furiaDeTouro;
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
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

    magiaDanoGeral = espinhoDeFogo;
    adaga.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeFogo.val;
    addItemNome = espinhoDeFogo.nome;
    funcaoEquip = equipEspinhoDeFogo;
    adicionarItem();

    magiaRecuperacaoGeral = luzDaVida;
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
    adicionarItem();

    magiaBuffGeral = furiaDeTouro;
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
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

    magiaDanoGeral = espinhoDeFogo;
    adaga.obtido = true;
    addItemTipo = 'magia';
    addItemVal = espinhoDeFogo.val;
    addItemNome = espinhoDeFogo.nome;
    funcaoEquip = equipEspinhoDeFogo;
    adicionarItem();

    magiaRecuperacaoGeral = luzDaVida;
    luzDaVida.obtido = true;
    addItemTipo = 'magia';
    addItemVal = luzDaVida.val;
    addItemNome = luzDaVida.nome;
    funcaoEquip = equipLuzDaVida;
    adicionarItem();

    magiaBuffGeral = furiaDeTouro;
    furiaDeTouro.obtido = true;
    addItemTipo = 'magia';
    addItemVal = furiaDeTouro.val;
    addItemNome = furiaDeTouro.nome;
    funcaoEquip = equipFuriaDeTouro;
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
    mainBauInicial.style.display = 'contents';
}