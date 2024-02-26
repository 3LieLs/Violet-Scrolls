/*-FERREIRO VARIÁVEIS-*/
var feiticeiro = {
    nome: '', pecitas: 50,
},
    LojaFeiticeiroAbertoFechado = false;

var botaoAbrirFecharLojaFeiticeiro = window.document.querySelector('input#botaoAbrirFecharLojaFeiticeiro');
botaoAbrirFecharLojaFeiticeiro.addEventListener('click', botaoAbrirFecharLojaFeiticeiroClick);


var botaoVoltarComprarFeiticeiro = window.document.querySelector('input#botaoVoltarComprarFeiticeiro');
botaoVoltarComprarFeiticeiro.addEventListener('click', botaoVoltarComprarFeiticeiroClick)

var botaoProximoComprarFeiticeiro = window.document.querySelector('input#botaoProximoComprarFeiticeiro');
botaoProximoComprarFeiticeiro.addEventListener('click', botaoProximoComprarFeiticeiroClick)

var botaoVoltarVenderFeiticeiro = window.document.querySelector('input#botaoVoltarVenderFeiticeiro');
botaoVoltarVenderFeiticeiro.addEventListener('click', botaoVoltarVenderFeiticeiroClick)

var botaoProximoVenderFeiticeiro = window.document.querySelector('input#botaoProximoVenderFeiticeiro');
botaoProximoVenderFeiticeiro.addEventListener('click', botaoProximoVenderFeiticeiroClick)
/*-----*/

/*-ABRIR/FECHAR FERREIRO LOJA-*/
function botaoAbrirFecharLojaFeiticeiroClick() {
    if (LojaFeiticeiroAbertoFechado == false) {
        LojaFeiticeiroAbertoFechado = true

        lojaComprarFeiticeiro.style.left = '15%';
        lojaComprarFeiticeiro.style.opacity = '1';

        lojaVenderFeiticeiro.style.right = '15%';
        lojaVenderFeiticeiro.style.opacity = '1';

        botaoAbrirFecharLojaFeiticeiro.value = 'Fechar loja';
    }
    else {
        LojaFeiticeiroAbertoFechado = false

        lojaComprarFeiticeiro.style.left = '-6%';
        lojaComprarFeiticeiro.style.opacity = '0';

        lojaVenderFeiticeiro.style.right = '-6%';
        lojaVenderFeiticeiro.style.opacity = '0';
        
        botaoAbrirFecharLojaFeiticeiro.value = 'Abrir loja';
    }

}
/*-----*/


/*-MUDAR ARMA/ARMADURA FERREIRO COMPRAR LOJA-*/
var mudarComprarArmaArmadura = 1;

function botaoVoltarComprarFeiticeiroClick() {
    mudarComprarArmaArmadura--;
    if (mudarComprarArmaArmadura < 1) {
        mudarComprarArmaArmadura = 1;
    }
    mudarItensComprarFeiticeiro();
}

function botaoProximoComprarFeiticeiroClick() {
    mudarComprarArmaArmadura++;
    if (mudarComprarArmaArmadura > 2) {
        mudarComprarArmaArmadura = 2;
    }
    mudarItensComprarFeiticeiro();
}

function mudarItensComprarFeiticeiro() {
    if (mudarComprarArmaArmadura == 1) {
        comprarCategoriaFeiticeiro.innerHTML = 'Armas';
        itemComprarArmaFeiticeiroDisplay.style.display = 'contents';
        itemComprarArmaduraFeiticeiroDisplay.style.display = 'none';
    }

    if (mudarComprarArmaArmadura == 2) {
        comprarCategoriaFeiticeiro.innerHTML = 'Armaduras';
        itemComprarArmaFeiticeiroDisplay.style.display = 'none';
        itemComprarArmaduraFeiticeiroDisplay.style.display = 'contents';
    }
}
/*-----*/

/*-MUDAR ARMA/ARMADURA FERREIRO VENDER LOJA-*/
var mudarVenderArmaArmadura = 1;

function botaoVoltarVenderFeiticeiroClick() {
    mudarVenderArmaArmadura--;
    if (mudarVenderArmaArmadura < 1) {
        mudarVenderArmaArmadura = 1;
    }
    mudarItensVenderFeiticeiro();
}

function botaoProximoVenderFeiticeiroClick() {
    mudarVenderArmaArmadura++;
    if (mudarVenderArmaArmadura > 2) {
        mudarVenderArmaArmadura = 2;
    }
    mudarItensVenderFeiticeiro();
}

function mudarItensVenderFeiticeiro() {
    if (mudarVenderArmaArmadura == 1) {
        venderCategoriaFeiticeiro.innerHTML = 'Armas';
        itemVenderArmaFeiticeiroDisplay.style.display = 'contents';
        itemVenderArmaduraFeiticeiroDisplay.style.display = 'none';
    }

    if (mudarVenderArmaArmadura == 2) {
        venderCategoriaFeiticeiro.innerHTML = 'Armaduras';
        itemVenderArmaFeiticeiroDisplay.style.display = 'none';
        itemVenderArmaduraFeiticeiroDisplay.style.display = 'contents';
    }
}
/*-----*/


/*-VARIÁVEIS ATUALIZAR LOJA FERREIRO-*/
var addItemFeiticeiro =
{
    nome: '', preco: 0, informacao: '', obtido: '', val: '', peso: '', funcao: '',
}
var slotFeiticeiro = 1, funcaoFeiticeiro = '', addArmaFeiticeiro = false, addArmaduraFeiticeiro = false
/*-----*/

/*-ATUALIZAR ITENS DA LOJA COMPRAR FERREIRO-*/
attLojaComprarFeiticeiro();

function attLojaComprarFeiticeiro() {
    let cajadoDeFogoRepetido = false;
    let cajadoDeGeloRepetido = false;
    let cajadoEletricoRepetido = false;
    /*-----*/
    let tunicaBasicaRepetido = false;
    let tunicaEspecialistaRepetido = false;

    for (let x = 0; x < 1; x++) {
        addArmaFeiticeiro = true;
        addArmaduraFeiticeiro = false;
        /*-----*/
        if (cajadoDeFogoRepetido == false) {
            addItemFeiticeiro = cajadoDeFogo
            funcaoFeiticeiro = cajadoDeFogoComprar
            cajadoDeFogoRepetido = true
            addItemLojaComprarFeiticeiro()
        }
        /*-----*/
        if (cajadoDeGeloRepetido == false) {
            addItemFeiticeiro = cajadoDeGelo
            funcaoFeiticeiro = cajadoDeGeloComprar
            cajadoDeGeloRepetido = true
            addItemLojaComprarFeiticeiro()
        }
        /*-----*/
        if (cajadoEletricoRepetido == false) {
            addItemFeiticeiro = cajadoEletrico
            funcaoFeiticeiro = cajadoEletricoComprar
            cajadoEletricoRepetido = true
            addItemLojaComprarFeiticeiro()
        }
        /*-----*/
    }

    for (let x = 0; x < 1; x++) {
        addArmaFeiticeiro = false;
        addArmaduraFeiticeiro = true;
        /*-----*/
        if (tunicaBasicaRepetido == false) {
            addItemFeiticeiro = tunicaBasica
            funcaoFeiticeiro = tunicaBasicaComprar
            tunicaBasicaRepetido = true
            addItemLojaComprarFeiticeiro()
        }
        /*-----*/
        if (tunicaEspecialistaRepetido == false) {
            addItemFeiticeiro = tunicaEspecialista
            funcaoFeiticeiro = tunicaEspecialistaComprar
            tunicaEspecialistaRepetido = true
            addItemLojaComprarFeiticeiro()
        }
        /*-----*/
    }

    slotFeiticeiro = 1;
}
/*-----*/

/*-----*/
function addItemLojaComprarFeiticeiro() {
    let add = '';
    let Arma_Armadura = '';
    let Arma_Armadura_Display = '';
    /*-----*/
    if (addArmaFeiticeiro == true) {
        Arma_Armadura = 'Arma';
        Arma_Armadura_Display = itemComprarArmaFeiticeiroDisplay;
    }
    if (addArmaduraFeiticeiro == true) {
        Arma_Armadura = 'Armadura';
        Arma_Armadura_Display = itemComprarArmaduraFeiticeiroDisplay;
    }
    /*-----*/
    add = document.createElement("div");
    add.setAttribute("id", `itemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `itemComprarFeiticeiro`);
    add.innerText = ``;
    Arma_Armadura_Display.appendChild(add);
    /*-----*/
    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `nomeItemComprarFeiticeiro`);
    add.innerText = `${addItemFeiticeiro.nome}`;
    document.getElementById(`itemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `informacaoItemComprarFeiticeiro`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `precoItemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `precoItemComprarFeiticeiro`);
    add.innerText = `Preço: ${addItemFeiticeiro.preco}`;
    document.getElementById(`itemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    add = document.createElement("input");
    add.setAttribute("id", `comprarItem${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `comprarItemFeiticeiro`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Comprar`);
    add.addEventListener('click', funcaoFeiticeiro);
    document.getElementById(`itemComprar${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    slotFeiticeiro++;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/


/*-ATUALIZAR ITENS DA LOJA VENDER FERREIRO-*/
attLojaVenderFeiticeiro();

function attLojaVenderFeiticeiro() {
    let cajadoDeFogoRepetido = false;
    let cajadoDeGeloRepetido = false;
    let cajadoEletricoRepetido = false;
    /*-----*/
    let tunicaBasicaRepetido = false;
    let tunicaEspecialistaRepetido = false;

    for (let x = 0; x < 1; x++) {
        addArmaFeiticeiro = true;
        addArmaduraFeiticeiro = false;
        /*-----*/
        if (cajadoDeFogoRepetido == false) {
            addItemFeiticeiro = cajadoDeFogo
            funcaoFeiticeiro = cajadoDeFogoVender
            cajadoDeFogoRepetido = true
            addItemLojaVenderFeiticeiro()
        }
        /*-----*/
        if (cajadoDeGeloRepetido == false) {
            addItemFeiticeiro = cajadoDeGelo
            funcaoFeiticeiro = cajadoDeGeloVender
            cajadoDeGeloRepetido = true
            addItemLojaVenderFeiticeiro()
        }
        /*-----*/
        if (cajadoEletricoRepetido == false) {
            addItemFeiticeiro = cajadoEletrico
            funcaoFeiticeiro = cajadoEletricoVender
            cajadoEletricoRepetido = true
            addItemLojaVenderFeiticeiro()
        }
        /*-----*/
    }

    for (let x = 0; x < 1; x++) {
        addArmaFeiticeiro = false;
        addArmaduraFeiticeiro = true;
        /*-----*/
        if (tunicaBasicaRepetido == false) {
            addItemFeiticeiro = tunicaBasica
            funcaoFeiticeiro = tunicaBasicaVender
            tunicaBasicaRepetido = true
            addItemLojaVenderFeiticeiro()
        }
        /*-----*/
        if (tunicaEspecialistaRepetido == false) {
            addItemFeiticeiro = tunicaEspecialista
            funcaoFeiticeiro = tunicaEspecialistaVender
            tunicaEspecialistaRepetido = true
            addItemLojaVenderFeiticeiro()
        }
        /*-----*/
    }

    slotFeiticeiro = 1;
}
/*-----*/

/*-----*/
function addItemLojaVenderFeiticeiro() {
    let add = '';
    let Arma_Armadura = ''
    let Arma_Armadura_Display = ''
    /*-----*/
    if (addArmaFeiticeiro == true) {
        Arma_Armadura = 'Arma'
        Arma_Armadura_Display = itemVenderArmaFeiticeiroDisplay
    }
    if (addArmaduraFeiticeiro == true) {
        Arma_Armadura = 'Armadura'
        Arma_Armadura_Display = itemVenderArmaduraFeiticeiroDisplay
    }
    /*-----*/
    add = document.createElement("div");
    add.setAttribute("id", `itemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `itemVenderFeiticeiro`);
    add.innerText = ``;
    Arma_Armadura_Display.appendChild(add);
    /*-----*/
    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `nomeItemVenderFeiticeiro`);
    add.innerText = `${addItemFeiticeiro.nome}`;
    document.getElementById(`itemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `informacaoItemVenderFeiticeiro`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `precoItemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `precoItemVenderFeiticeiro`);
    add.innerText = `Preço: ${addItemFeiticeiro.preco}`;
    document.getElementById(`itemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    add = document.createElement("input");
    add.setAttribute("id", `venderItem${Arma_Armadura}Feiticeiro${slotFeiticeiro}`);
    add.setAttribute("class", `venderItemFeiticeiro`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Vender`);
    add.addEventListener('click', funcaoFeiticeiro);
    document.getElementById(`itemVender${Arma_Armadura}Feiticeiro${slotFeiticeiro}`).appendChild(add);
    /*-----*/
    slotFeiticeiro++;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/