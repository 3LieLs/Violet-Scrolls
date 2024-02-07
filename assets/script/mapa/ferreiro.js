/*-FERREIRO VARIÁVEIS-*/
var ferreiroPecitas

var botaoAbrirFecharLojaFerreiro = window.document.querySelector('input#botaoAbrirFecharLojaFerreiro');
botaoAbrirFecharLojaFerreiro.addEventListener('click', botaoAbrirFecharLojaFerreiroClick);

var LojaFerreiroAbertoFechado = false;

var lojaComprarFerreiroMensagem = window.document.querySelector('p#lojaComprarFerreiroMensagem');

var nomeItemComprarFerreiro1 = window.document.querySelector('h1#nomeItemComprarFerreiro1');
var informacaoComprarItemFerreiro1 = window.document.querySelector('p#informacaoItemComprarFerreiro1');
var custoItemComprarFerreiro1 = window.document.querySelector('p#custoItemComprarFerreiro1');
var comprarItemFerreiro1 = window.document.querySelector('input#comprarItemFerreiro1');




var nomeItemVenderFerreiro1 = window.document.querySelector('h1#nomeItemVenderFerreiro1');
var informacaoVenderItemFerreiro1 = window.document.querySelector('p#informacaoItemVenderFerreiro1');
var custoItemVenderFerreiro1 = window.document.querySelector('p#custoItemVenderFerreiro1');
var venderItemFerreiro1 = window.document.querySelector('input#venderItemFerreiro1');
venderItemFerreiro1.addEventListener('click', venderItemFerreiro1Click);

var nomeItemVenderFerreiro2 = window.document.querySelector('h1#nomeItemVenderFerreiro2');
var informacaoVenderItemFerreiro2 = window.document.querySelector('p#informacaoItemVenderFerreiro2');
var custoItemVenderFerreiro2 = window.document.querySelector('p#custoItemVenderFerreiro2');
var venderItemFerreiro2 = window.document.querySelector('input#venderItemFerreiro2');
venderItemFerreiro2.addEventListener('click', venderItemFerreiro2Click);

var nomeItemVenderFerreiro3 = window.document.querySelector('h1#nomeItemVenderFerreiro3');
var informacaoVenderItemFerreiro3 = window.document.querySelector('p#informacaoItemVenderFerreiro3');
var custoItemVenderFerreiro3 = window.document.querySelector('p#custoItemVenderFerreiro3');
var venderItemFerreiro3 = window.document.querySelector('input#venderItemFerreiro3');
venderItemFerreiro3.addEventListener('click', venderItemFerreiro3Click);

var nomeItemVenderFerreiro4 = window.document.querySelector('h1#nomeItemVenderFerreiro4');
var informacaoVenderItemFerreiro4 = window.document.querySelector('p#informacaoItemVenderFerreiro4');
var custoItemVenderFerreiro4 = window.document.querySelector('p#custoItemVenderFerreiro4');
var venderItemFerreiro4 = window.document.querySelector('input#venderItemFerreiro4');
venderItemFerreiro4.addEventListener('click', venderItemFerreiro4Click);

var nomeItemVenderFerreiro5 = window.document.querySelector('h1#nomeItemVenderFerreiro5');
var informacaoVenderItemFerreiro5 = window.document.querySelector('p#informacaoItemVenderFerreiro5');
var custoItemVenderFerreiro5 = window.document.querySelector('p#custoItemVenderFerreiro5');
var venderItemFerreiro5 = window.document.querySelector('input#venderItemFerreiro5');
venderItemFerreiro5.addEventListener('click', venderItemFerreiro5Click);

var nomeItemVenderFerreiro6 = window.document.querySelector('h1#nomeItemVenderFerreiro6');
var informacaoVenderItemFerreiro6 = window.document.querySelector('p#informacaoItemVenderFerreiro6');
var custoItemVenderFerreiro6 = window.document.querySelector('p#custoItemVenderFerreiro6');
var venderItemFerreiro6 = window.document.querySelector('input#venderItemFerreiro6');
venderItemFerreiro6.addEventListener('click', venderItemFerreiro6Click);
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



/*-----*/
attLojaComprarArmaFerreiro();

var addItemFerreiro =
{
    nome: '', preco: 0, informacao: '', obtido: '', val: '', peso: '',
}
var slotFerreiro = 1, attLoja = true

function attLojaComprarArmaFerreiro() {
    lojaComprarFerreiroMensagem.innerHTML = 'Pode comprar o que quiser, desde que tenha pecitas, claro'

    let adagaRepetido = false;
    let chicoteDeAcoRepetido = false;
    let espadaDeAcoRepetido = false;
    let arcoSimplesRepetido = false;
    let arcoLongoRepetido = false;

    for (let x = 0; x < 1; x++) {
        let randomFerreiro = Math.floor(Math.random() * 5) + 1;

        if (adagaRepetido == false) {
            addItemFerreiro = adaga
            adagaRepetido = true

            addItemLojaFerreiro()
        }

        if (chicoteDeAcoRepetido == false) {
            addItemFerreiro = chicoteDeAco
            chicoteDeAcoRepetidoRepetido = true

            addItemLojaFerreiro()
        }

        if (espadaDeAcoRepetido == false) {
            addItemFerreiro = espadaDeAco
            espadaDeAcoRepetido = true

            addItemLojaFerreiro()
        }

        if (arcoSimplesRepetido == false) {
            addItemFerreiro = arcoSimples
            arcoSimplesRepetido = true

            addItemLojaFerreiro()
        }

        if (arcoLongoRepetido == false) {
            addItemFerreiro = arcoLongo
            arcoLongoRepetidoRepetido = true

            addItemLojaFerreiro()
        }
    }

    slotFerreiro = 1;
}
/*-----*/

function addItemLojaFerreiro() {
    let add = '';

    add = document.createElement("div");
    add.setAttribute("id", `itemComprarFerreiro${slotFerreiro}`);
    add.setAttribute("class", `itemComprarFerreiro`);
    add.innerText = ``;
    lojaComprarFerreiro.appendChild(add);

    add = document.createElement("h1");
    add.setAttribute("id", `nomeItemComprarFerreiro${slotFerreiro}`);
    add.setAttribute("class", `nomeItemComprarFerreiro`);
    add.innerText = `${addItemFerreiro.nome}`;
    document.getElementById(`itemComprarFerreiro${slotFerreiro}`).appendChild(add);


    add = document.createElement("p");
    add.setAttribute("id", `informacaoItemComprarFerreiro${slotFerreiro}`);
    add.setAttribute("class", `informacaoItemComprarFerreiro`);
    add.innerText = `teste teste teste teste teste teste`;
    document.getElementById(`itemComprarFerreiro${slotFerreiro}`).appendChild(add);

    add = document.createElement("p");
    add.setAttribute("id", `precoItemComprarFerreiro${slotFerreiro}`);
    add.setAttribute("class", `precoItemComprarFerreiro`);
    add.innerText = `Preço: ${addItemFerreiro.preco}`;
    document.getElementById(`itemComprarFerreiro${slotFerreiro}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `comprarItemFerreiro${slotFerreiro}`);
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


    document.getElementById(`itemComprarFerreiro${slotFerreiro}`).appendChild(add);

    slotFerreiro++;
}

/*-----*/
function comprarItemFerreiroClick(clicked_id) {

    alert("O botao que foi clicado é: " + clicked_id);

    /*if (espadaDeAco.obtido == false) {
        if (jogador.pecitas - espadaDeAco.preco >= 0) {
            adicionarEspadaDeAco()
            adicionarItem();

            jogador.pecitas -= espadaDeAco.preco;
        }
        else {
            alert('Dinheiro insuficiente');
        }
    }
    else {
        alert('Você já possui este item');
    }*/
}
/*-----*/



/*-----*/
attLojaVenderFerreiro();

function attLojaVenderFerreiro() {
    ferreiroPecitas = 20

    nomeItemVenderFerreiro1.innerHTML = `${espadaDeAco.nome}`;
    informacaoItemVenderFerreiro1.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro1.innerHTML = `Preço: ${espadaDeAco.preco} Pecitas`;

    nomeItemVenderFerreiro2.innerHTML = `${arcoLongo.nome}`;
    informacaoItemVenderFerreiro2.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro2.innerHTML = `Preço: ${arcoLongo.preco} Pecitas`;

    nomeItemVenderFerreiro3.innerHTML = `${armaduraDeAco.nome}`;
    informacaoItemVenderFerreiro3.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro3.innerHTML = `Preço: ${armaduraDeAco.preco} Pecitas`;

    nomeItemVenderFerreiro4.innerHTML = `${armaduraDeEscamas.nome}`;
    informacaoItemVenderFerreiro4.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro4.innerHTML = `Preço: ${armaduraDeEscamas.preco} Pecitas`;

    nomeItemVenderFerreiro5.innerHTML = `${chicoteDeAco.nome}`;
    informacaoItemVenderFerreiro5.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro5.innerHTML = `Preço: ${chicoteDeAco.preco} Pecitas`;

    nomeItemVenderFerreiro6.innerHTML = `${adaga.nome}`;
    informacaoItemVenderFerreiro6.innerHTML = `Teste Teste Teste Teste Teste`;
    custoItemVenderFerreiro6.innerHTML = `Preço: ${adaga.preco} Pecitas`;
}
/*-----*/

/*-----*/
function venderItemFerreiro1Click() {
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
}

function venderItemFerreiro2Click() {
    if (arcoLongo.obtido == true) {
        if (ferreiroPecitas - arcoLongo.preco >= 0) {
            removerEspadaDeAco();
            removerItem();

            jogador.pecitas += arcoLongo.preco;
            ferreiroPecitas -= arcoLongo.preco;
        }
        else {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro3Click() {
    if (armaduraDeAco.obtido == true) {
        if (ferreiroPecitas - armaduraDeAco.preco >= 0) {
            removerEspadaDeAco();
            removerItem();

            jogador.pecitas += armaduraDeAco.preco;
            ferreiroPecitas -= armaduraDeAco.preco;
        }
        else {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro4Click() {
    if (armaduraDeEscamas.obtido == false) {
        if (jogador.pecitas - armaduraDeEscamas.preco >= 0) {
            adicionarEspadaDeAco()
            adicionarItem();

            jogador.pecitas -= armaduraDeEscamas.preco;
        }
        else {
            alert('Dinheiro insuficiente');
        }
    }
    else {
        alert('Você já possui este item');
    }
}

function venderItemFerreiro5Click() {
    if (chicoteDeAco.obtido == true) {
        if (ferreiroPecitas - chicoteDeAco.preco >= 0) {
            removerEspadaDeAco();
            removerItem();

            jogador.pecitas += chicoteDeAco.preco;
            ferreiroPecitas -= chicoteDeAco.preco;
        }
        else {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}

function venderItemFerreiro6Click() {
    if (adaga.obtido == true) {
        if (ferreiroPecitas - adaga.preco >= 0) {
            removerEspadaDeAco();
            removerItem();

            jogador.pecitas += adaga.preco;
            ferreiroPecitas -= adaga.preco;
        }
        else {
            alert('O ferreiro não possui pecitas o suficiente');
        }
    }
    else {
        alert('Você não possui este item');
    }
}
/*-----*/