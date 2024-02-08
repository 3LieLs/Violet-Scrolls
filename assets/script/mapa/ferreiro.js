/*-FERREIRO VARIÁVEIS-*/
var ferreiroPecitas = 20, LojaFerreiroAbertoFechado = false;

var botaoAbrirFecharLojaFerreiro = window.document.querySelector('input#botaoAbrirFecharLojaFerreiro');
botaoAbrirFecharLojaFerreiro.addEventListener('click', botaoAbrirFecharLojaFerreiroClick);


var botaoVoltarComprarFerreiro = window.document.querySelector('input#botaoVoltarComprarFerreiro');
botaoVoltarComprarFerreiro.addEventListener('click', botaoVoltarComprarFerreiroClick)

var botaoProximoComprarFerreiro = window.document.querySelector('input#botaoProximoComprarFerreiro');
botaoProximoComprarFerreiro.addEventListener('click', botaoProximoComprarFerreiroClick)

var botaoVoltarVenderFerreiro = window.document.querySelector('input#botaoVoltarVenderFerreiro');
botaoVoltarVenderFerreiro.addEventListener('click', botaoVoltarVenderFerreiroClick)

var botaoProximoVenderFerreiro = window.document.querySelector('input#botaoProximoVenderFerreiro');
botaoProximoVenderFerreiro.addEventListener('click', botaoProximoVenderFerreiroClick)
/*-----*/

/*-ABRIR/FECHAR FERREIRO LOJA-*/
function botaoAbrirFecharLojaFerreiroClick() {
    if (LojaFerreiroAbertoFechado == false) {
        LojaFerreiroAbertoFechado = true

        lojaComprarFerreiro.style.left = '15%';
        lojaComprarFerreiro.style.opacity = '1';

        lojaVenderFerreiro.style.right = '15%';
        lojaVenderFerreiro.style.opacity = '1';

        botaoAbrirFecharLojaFerreiro.value = 'Fechar loja';
    }
    else {
        LojaFerreiroAbertoFechado = false

        lojaComprarFerreiro.style.left = '-6%';
        lojaComprarFerreiro.style.opacity = '0';

        lojaVenderFerreiro.style.right = '-6%';
        lojaVenderFerreiro.style.opacity = '0';

        botaoAbrirFecharLojaFerreiro.value = 'Abrir loja';
    }

}
/*-----*/


/*-MUDAR ARMA/ARMADURA FERREIRO COMPRAR LOJA-*/
var mudarComprarArmaArmadura = 1;

function botaoVoltarComprarFerreiroClick() {
    mudarComprarArmaArmadura--;

    if (mudarComprarArmaArmadura < 1) {
        mudarComprarArmaArmadura = 1;
    }

    mudarItensComprarFerreiro();
}

function botaoProximoComprarFerreiroClick() {
    mudarComprarArmaArmadura++;

    if (mudarComprarArmaArmadura > 2) {
        mudarComprarArmaArmadura = 2;
    }

    mudarItensComprarFerreiro();
}

function mudarItensComprarFerreiro() {
    if (mudarComprarArmaArmadura == 1) {
        arma_armadura_comprar.innerHTML = 'Arma';

        itemComprarArmaFerreiroDisplay.style.display = 'contents';
        itemComprarArmaduraFerreiroDisplay.style.display = 'none';
    }

    if (mudarComprarArmaArmadura == 2) {
        arma_armadura_comprar.innerHTML = 'Armadura';

        itemComprarArmaFerreiroDisplay.style.display = 'none';
        itemComprarArmaduraFerreiroDisplay.style.display = 'contents';
    }
}
/*-----*/

/*-MUDAR ARMA/ARMADURA FERREIRO VENDER LOJA-*/
var mudarVenderArmaArmadura = 1;

function botaoVoltarVenderFerreiroClick() {
    mudarVenderArmaArmadura--;

    if (mudarVenderArmaArmadura < 1) {
        mudarVenderArmaArmadura = 1;
    }

    mudarItensVenderFerreiro();
}

function botaoProximoVenderFerreiroClick() {
    mudarVenderArmaArmadura++;

    if (mudarVenderArmaArmadura > 2) {
        mudarVenderArmaArmadura = 2;
    }

    mudarItensVenderFerreiro();
}

function mudarItensVenderFerreiro() {
    if (mudarVenderArmaArmadura == 1) {
        arma_armadura_vender.innerHTML = 'Arma';

        itemVenderArmaFerreiroDisplay.style.display = 'contents';
        itemVenderArmaduraFerreiroDisplay.style.display = 'none';
    }

    if (mudarVenderArmaArmadura == 2) {
        arma_armadura_vender.innerHTML = 'Armadura';

        itemVenderArmaFerreiroDisplay.style.display = 'none';
        itemVenderArmaduraFerreiroDisplay.style.display = 'contents';
    }
}
/*-----*/



/*-VARIÁVEIS ATUALIZAR LOJA FERREIRO-*/
var addItemFerreiro =
{
    nome: '', preco: 0, informacao: '', obtido: '', val: '', peso: '',
}
var slotFerreiro = 1, addArmaFerreiro = false, addArmaduraFerreiro = false
/*-----*/


/*-ATUALIZAR ITENS DA LOJA COMPRAR FERREIRO-*/
attLojaComprarFerreiro();

function attLojaComprarFerreiro() {

    let adagaRepetido = false;
    let chicoteDeAcoRepetido = false;
    let espadaDeAcoRepetido = false;
    let arcoSimplesRepetido = false;
    let arcoLongoRepetido = false;

    let armaduraDePeleRepetido = false;
    let armaduraDeCouroRepetido = false;
    let armaduraDeEscamasRepetido = false;
    let armaduraDeFerroRepetido = false;
    let armaduraDeAcoRepetido = false;

    for (let x = 0; x < 1; x++) {
        addArmaFerreiro = true;
        addArmaduraFerreiro = false;

        if (adagaRepetido == false) {
            addItemFerreiro = adaga
            adagaRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (chicoteDeAcoRepetido == false) {
            addItemFerreiro = chicoteDeAco
            chicoteDeAcoRepetidoRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (espadaDeAcoRepetido == false) {
            addItemFerreiro = espadaDeAco
            espadaDeAcoRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (arcoSimplesRepetido == false) {
            addItemFerreiro = arcoSimples
            arcoSimplesRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (arcoLongoRepetido == false) {
            addItemFerreiro = arcoLongo
            arcoLongoRepetidoRepetido = true

            addItemLojaComprarFerreiro()
        }
    }



    for (let x = 0; x < 1; x++) {
        addArmaFerreiro = false;
        addArmaduraFerreiro = true;

        if (armaduraDePeleRepetido == false) {
            addItemFerreiro = armaduraDePele
            armaduraDePeleRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (armaduraDeCouroRepetido == false) {
            addItemFerreiro = armaduraDeCouro
            armaduraDeCouroRepetidoRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (armaduraDeEscamasRepetido == false) {
            addItemFerreiro = armaduraDeEscamas
            armaduraDeEscamasRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (armaduraDeFerroRepetido == false) {
            addItemFerreiro = armaduraDeFerro
            armaduraDeFerroRepetido = true

            addItemLojaComprarFerreiro()
        }

        if (armaduraDeAcoRepetido == false) {
            addItemFerreiro = armaduraDeAco
            armaduraDeAcoRepetidoRepetido = true

            addItemLojaComprarFerreiro()
        }
    }

    slotFerreiro = 1;
}
/*-----*/

/*-----*/
function addItemLojaComprarFerreiro() {
    let add = '';
    let Arma_Armadura = ''
    let Arma_Armadura_Display = ''

    if (addArmaFerreiro == true) {
        Arma_Armadura = 'Arma'
        Arma_Armadura_Display = itemComprarArmaFerreiroDisplay
    }

    if (addArmaduraFerreiro == true) {
        Arma_Armadura = 'Armadura'
        Arma_Armadura_Display = itemComprarArmaduraFerreiroDisplay
    }

    add = document.createElement("div");
    add.setAttribute("id", `itemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `itemComprarFerreiro`);
    add.innerText = ``;
    Arma_Armadura_Display.appendChild(add);

    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `nomeItemComprarFerreiro`);
    add.innerText = `${addItemFerreiro.nome}`;
    document.getElementById(`itemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);


    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `informacaoItemComprarFerreiro`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);

    add = document.createElement("p");
    add.setAttribute("id", `precoItemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `precoItemComprarFerreiro`);
    add.innerText = `Preço: ${addItemFerreiro.preco}`;
    document.getElementById(`itemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `comprarItem${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `comprarItemFerreiro`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Comprar`);


    add.addEventListener('click', function (slotFerreiro) {
        if (addItemFerreiro.obtido == false) {
            if (jogador.pecitas - addItemFerreiro.preco >= 0) {

                jogador.peso += addItemFerreiro.peso
                addItemFerreiro.obtido = true;
                addItemTipo = 'equipamento';
                addItemVal = addItemFerreiro.val;
                addItemNome = addItemFerreiro.nome;
                funcaoEquip = `equip${addItemFerreiro.nome}`;
                alert(addItemFerreiro.nome)

                adicionarItem();

                jogador.pecitas -= addItemFerreiro.preco;
            }
            else {
                alert('Dinheiro insuficiente');
            }
        }
        else {
            alert('Você já possui este item');
        }
    });


    document.getElementById(`itemComprar${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);

    slotFerreiro++;
}
/*-----*/



/*-ATUALIZAR ITENS DA LOJA VENDER FERREIRO-*/
attLojaVenderFerreiro();

function attLojaVenderFerreiro() {

    let adagaRepetido = false;
    let chicoteDeAcoRepetido = false;
    let espadaDeAcoRepetido = false;
    let arcoSimplesRepetido = false;
    let arcoLongoRepetido = false;

    let armaduraDePeleRepetido = false;
    let armaduraDeCouroRepetido = false;
    let armaduraDeEscamasRepetido = false;
    let armaduraDeFerroRepetido = false;
    let armaduraDeAcoRepetido = false;

    for (let x = 0; x < 1; x++) {
        addArmaFerreiro = true;
        addArmaduraFerreiro = false;

        let randomFerreiro = Math.floor(Math.random() * 5) + 1;

        if (adagaRepetido == false) {
            addItemFerreiro = adaga
            adagaRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (chicoteDeAcoRepetido == false) {
            addItemFerreiro = chicoteDeAco
            chicoteDeAcoRepetidoRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (espadaDeAcoRepetido == false) {
            addItemFerreiro = espadaDeAco
            espadaDeAcoRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (arcoSimplesRepetido == false) {
            addItemFerreiro = arcoSimples
            arcoSimplesRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (arcoLongoRepetido == false) {
            addItemFerreiro = arcoLongo
            arcoLongoRepetidoRepetido = true

            addItemLojaVenderFerreiro()
        }
    }



    for (let x = 0; x < 1; x++) {
        addArmaFerreiro = false;
        addArmaduraFerreiro = true;

        let randomFerreiro = Math.floor(Math.random() * 5) + 1;

        if (armaduraDePeleRepetido == false) {
            addItemFerreiro = armaduraDePele
            armaduraDePeleRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (armaduraDeCouroRepetido == false) {
            addItemFerreiro = armaduraDeCouro
            armaduraDeCouroRepetidoRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (armaduraDeEscamasRepetido == false) {
            addItemFerreiro = armaduraDeEscamas
            armaduraDeEscamasRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (armaduraDeFerroRepetido == false) {
            addItemFerreiro = armaduraDeFerro
            armaduraDeFerroRepetido = true

            addItemLojaVenderFerreiro()
        }

        if (armaduraDeAcoRepetido == false) {
            addItemFerreiro = armaduraDeAco
            armaduraDeAcoRepetidoRepetido = true

            addItemLojaVenderFerreiro()
        }
    }

    slotFerreiro = 1;
}
/*-----*/

/*-----*/
function addItemLojaVenderFerreiro() {
    let add = '';
    let Arma_Armadura = ''
    let Arma_Armadura_Display = ''

    if (addArmaFerreiro == true) {
        Arma_Armadura = 'Arma'
        Arma_Armadura_Display = itemVenderArmaFerreiroDisplay
    }

    if (addArmaduraFerreiro == true) {
        Arma_Armadura = 'Armadura'
        Arma_Armadura_Display = itemVenderArmaduraFerreiroDisplay
    }

    add = document.createElement("div");
    add.setAttribute("id", `itemVender${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `itemVenderFerreiro`);
    add.innerText = ``;
    Arma_Armadura_Display.appendChild(add);

    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemVender${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `nomeItemVenderFerreiro`);
    add.innerText = `${addItemFerreiro.nome}`;
    document.getElementById(`itemVender${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);


    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemVender${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `informacaoItemVenderFerreiro`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemVender${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);

    add = document.createElement("p");
    add.setAttribute("id", `precoItemVender${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `precoItemVenderFerreiro`);
    add.innerText = `Preço: ${addItemFerreiro.preco}`;
    document.getElementById(`itemVender${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `venderItem${Arma_Armadura}Ferreiro${slotFerreiro}`);
    add.setAttribute("class", `venderItemFerreiro`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Vender`);


    add.addEventListener('click', function (slotFerreiro) {
        if (espadaDeAco.obtido == true) {
            if (ferreiroPecitas - espadaDeAco.preco >= 0) {
                removerEspadaDeAco();
                removerItem();

                jogador.pecitas += espadaDeAco.preco;
                ferreiroPecitas -= espadaDeAco.preco;
            }
            else {
                alert('O ferreiro não possui pecitas o suficiente');
            }
        }
        else {
            alert('Você não possui este item');
        }
    });

    document.getElementById(`itemVender${Arma_Armadura}Ferreiro${slotFerreiro}`).appendChild(add);

    slotFerreiro++;
}
/*-----*/