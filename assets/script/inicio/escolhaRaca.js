/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-VOLTAR RAÇA-*/
botaoVoltarRaca.addEventListener('click', () => {
    escolhaNome.style.display = 'contents';
    escolhaRaca.style.display = 'none';
});
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-ESCOLHA RAÇA VARIÁVEIS-*/
/*-HUMANO-*/
botaoHumano.addEventListener('click', () => {
    racaGeral = racaHumano;
    poderUso = poderHumanoClick;

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

    racaEscolhida();
});

/*-ELFO-*/
botaoElfo.addEventListener('click', () => {
    racaGeral = racaElfo;
    poderUso = poderElfoClick;

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

    racaEscolhida();
});

/*-ORC-*/
botaoOrc.addEventListener('click', () => {
    racaGeral = racaOrc;
    poderUso = poderOrcClick;

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

    racaEscolhida();
});

/*-DRACONATO-*/
botaoDraconato.addEventListener('click', () => {
    racaGeral = racaDraconato;
    poderUso = poderDraconatoClick;

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

    racaEscolhida();
});

/*-VAMPIRO-*/
botaoVampiro.addEventListener('click', () => {
    racaGeral = racaVampiro;
    poderUso = poderVampiroClick;

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

    racaEscolhida();
});
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
function racaEscolhida() {
    armaGeral = soco;
    armaduraGeral = trajeSimples;
    magiaDanoGeral = 'Nenhuma'
    magiaRecuperacaoGeral = 'Nenhuma'
    magiaBuffGeral = 'Nenhuma'

    jogador.vidaBase = racaGeral.vidaBase;
    jogador.energiaBase = racaGeral.energiaBase;
    jogador.manaBase = racaGeral.manaBase;

    jogador.vidaCombate = racaGeral.vidaCombate;
    jogador.energiaCombate = racaGeral.energiaCombate;
    jogador.manaCombate = racaGeral.manaCombate;

    escolhaRaca.style.display = 'none';

    localMapa = 'taverna';
    definirMusica()
}
/*-----*//*-----*//*-----*//*-----*//*-----*/