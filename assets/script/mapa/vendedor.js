/*-FERREIRO VARIÁVEIS-*/
var vendedor = {
    nome: '', pecitas: 50,
},
    LojaVendedorAbertoFechado = false;

var botaoAbrirFecharLojaVendedor = window.document.querySelector('input#botaoAbrirFecharLojaVendedor');
botaoAbrirFecharLojaVendedor.addEventListener('click', botaoAbrirFecharLojaVendedorClick);


var botaoVoltarComprarVendedor = window.document.querySelector('input#botaoVoltarComprarVendedor');
botaoVoltarComprarVendedor.addEventListener('click', botaoVoltarComprarVendedorClick)

var botaoProximoComprarVendedor = window.document.querySelector('input#botaoProximoComprarVendedor');
botaoProximoComprarVendedor.addEventListener('click', botaoProximoComprarVendedorClick)

var botaoVoltarVenderVendedor = window.document.querySelector('input#botaoVoltarVenderVendedor');
botaoVoltarVenderVendedor.addEventListener('click', botaoVoltarVenderVendedorClick)

var botaoProximoVenderVendedor = window.document.querySelector('input#botaoProximoVenderVendedor');
botaoProximoVenderVendedor.addEventListener('click', botaoProximoVenderVendedorClick)
/*-----*/

/*-ABRIR/FECHAR FERREIRO LOJA-*/
function botaoAbrirFecharLojaVendedorClick() {
    if (LojaVendedorAbertoFechado == false) {
        LojaVendedorAbertoFechado = true

        lojaComprarVendedor.style.left = '15%';
        lojaComprarVendedor.style.opacity = '1';

        lojaVenderVendedor.style.right = '15%';
        lojaVenderVendedor.style.opacity = '1';

        botaoAbrirFecharLojaVendedor.value = 'Fechar loja';
    }
    else {
        LojaVendedorAbertoFechado = false

        lojaComprarVendedor.style.left = '-6%';
        lojaComprarVendedor.style.opacity = '0';

        lojaVenderVendedor.style.right = '-6%';
        lojaVenderVendedor.style.opacity = '0';

        botaoAbrirFecharLojaVendedor.value = 'Abrir loja';
    }

}
/*-----*/


/*-MUDAR ARMA/ARMADURA FERREIRO COMPRAR LOJA-*/
var mudarComprarArmaArmadura = 1;

function botaoVoltarComprarVendedorClick() {
    mudarComprarArmaArmadura--;
    if (mudarComprarArmaArmadura < 1) {
        mudarComprarArmaArmadura = 1;
    }
    mudarItensComprarVendedor();
}

function botaoProximoComprarVendedorClick() {
    mudarComprarArmaArmadura++;
    if (mudarComprarArmaArmadura > 2) {
        mudarComprarArmaArmadura = 2;
    }
    mudarItensComprarVendedor();
}

function mudarItensComprarVendedor() {
    if (mudarComprarArmaArmadura == 1) {
        arma_armadura_comprar.innerHTML = 'Arma';
        itemComprarArmaVendedorDisplay.style.display = 'contents';
        itemComprarArmaduraVendedorDisplay.style.display = 'none';
    }

    if (mudarComprarArmaArmadura == 2) {
        arma_armadura_comprar.innerHTML = 'Armadura';
        itemComprarArmaVendedorDisplay.style.display = 'none';
        itemComprarArmaduraVendedorDisplay.style.display = 'contents';
    }
}
/*-----*/

/*-MUDAR ARMA/ARMADURA FERREIRO VENDER LOJA-*/
var mudarVenderArmaArmadura = 1;

function botaoVoltarVenderVendedorClick() {
    mudarVenderArmaArmadura--;
    if (mudarVenderArmaArmadura < 1) {
        mudarVenderArmaArmadura = 1;
    }
    mudarItensVenderVendedor();
}

function botaoProximoVenderVendedorClick() {
    mudarVenderArmaArmadura++;
    if (mudarVenderArmaArmadura > 2) {
        mudarVenderArmaArmadura = 2;
    }
    mudarItensVenderVendedor();
}

function mudarItensVenderVendedor() {
    if (mudarVenderArmaArmadura == 1) {
        arma_armadura_vender.innerHTML = 'Arma';
        itemVenderArmaVendedorDisplay.style.display = 'contents';
        itemVenderArmaduraVendedorDisplay.style.display = 'none';
    }

    if (mudarVenderArmaArmadura == 2) {
        arma_armadura_vender.innerHTML = 'Armadura';
        itemVenderArmaVendedorDisplay.style.display = 'none';
        itemVenderArmaduraVendedorDisplay.style.display = 'contents';
    }
}
/*-----*/


/*-VARIÁVEIS ATUALIZAR LOJA FERREIRO-*/
var addItemVendedor =
{
    nome: '', preco: 0, informacao: '', obtido: '', val: '', peso: '', funcao: '',
}
var slotVendedor = 1, funcaoVendedor = '', addArmaVendedor = false, addArmaduraVendedor = false
/*-----*/

/*-ATUALIZAR ITENS DA LOJA COMPRAR FERREIRO-*/
attLojaComprarVendedor();

function attLojaComprarVendedor() {
    slotVendedor = 1;
}
/*-----*/

/*-----*/
function addItemLojaComprarVendedor() {
    let add = '';
    let Arma_Armadura = '';
    let Arma_Armadura_Display = '';
    /*-----*/
    if (addArmaVendedor == true) {
        Arma_Armadura = 'Arma';
        Arma_Armadura_Display = itemComprarArmaVendedorDisplay;
    }
    if (addArmaduraVendedor == true) {
        Arma_Armadura = 'Armadura';
        Arma_Armadura_Display = itemComprarArmaduraVendedorDisplay;
    }
    /*-----*/
    add = document.createElement("div");
    add.setAttribute("id", `itemComprar${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `itemComprarVendedor`);
    add.innerText = ``;
    Arma_Armadura_Display.appendChild(add);
    /*-----*/
    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemComprar${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `nomeItemComprarVendedor`);
    add.innerText = `${addItemVendedor.nome}`;
    document.getElementById(`itemComprar${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemComprar${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `informacaoItemComprarVendedor`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemComprar${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `precoItemComprar${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `precoItemComprarVendedor`);
    add.innerText = `Preço: ${addItemVendedor.preco}`;
    document.getElementById(`itemComprar${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    add = document.createElement("input");
    add.setAttribute("id", `comprarItem${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `comprarItemVendedor`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Comprar`);
    add.addEventListener('click', funcaoVendedor);
    document.getElementById(`itemComprar${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    slotVendedor++;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/


/*-ATUALIZAR ITENS DA LOJA VENDER FERREIRO-*/
attLojaVenderVendedor();

function attLojaVenderVendedor() {
    slotVendedor = 1;
}
/*-----*/

/*-----*/
function addItemLojaVenderVendedor() {
    let add = '';
    let Arma_Armadura = ''
    let Arma_Armadura_Display = ''
    /*-----*/
    if (addArmaVendedor == true) {
        Arma_Armadura = 'Arma'
        Arma_Armadura_Display = itemVenderArmaVendedorDisplay
    }
    if (addArmaduraVendedor == true) {
        Arma_Armadura = 'Armadura'
        Arma_Armadura_Display = itemVenderArmaduraVendedorDisplay
    }
    /*-----*/
    add = document.createElement("div");
    add.setAttribute("id", `itemVender${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `itemVenderVendedor`);
    add.innerText = ``;
    Arma_Armadura_Display.appendChild(add);
    /*-----*/
    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemVender${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `nomeItemVenderVendedor`);
    add.innerText = `${addItemVendedor.nome}`;
    document.getElementById(`itemVender${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemVender${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `informacaoItemVenderVendedor`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemVender${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    add = document.createElement("p");
    add.setAttribute("id", `precoItemVender${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `precoItemVenderVendedor`);
    add.innerText = `Preço: ${addItemVendedor.preco}`;
    document.getElementById(`itemVender${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    add = document.createElement("input");
    add.setAttribute("id", `venderItem${Arma_Armadura}Vendedor${slotVendedor}`);
    add.setAttribute("class", `venderItemVendedor`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Vender`);
    add.addEventListener('click', funcaoVendedor);
    document.getElementById(`itemVender${Arma_Armadura}Vendedor${slotVendedor}`).appendChild(add);
    /*-----*/
    slotVendedor++;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/