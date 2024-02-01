/*-MENU VARIÁVEIS-*/
/*-----*/
var menuNome = window.document.querySelector(`p#menuNome`);
var menuGenero = window.document.querySelector(`p#menuGenero`);
var menuRaca = window.document.querySelector(`p#menuRaca`);
var menuPecitas = window.document.querySelector(`p#menuPecitas`);


var menuVida = window.document.querySelector(`p#menuVida`);
var menuEnergia = window.document.querySelector(`p#menuEnergia`);
var menuMana = window.document.querySelector(`p#menuMana`);
var menuPeso = window.document.querySelector(`p#menuPeso`);
/*-----*/

/*-----*/
var mudarItens = 1, mudarEquipamentos = 1, mudarMagias = 1;
var mudarEquipamentosArmaVal = true, mudarEquipamentosArmaduraVal = false, mudarMagiasDano = true, mudarMagiasRecuperacao = false, mudarMagiasBuff = false;


var menuEquipamentosInfo1 = window.document.querySelector(`p#menuEquipamentosInfo1`);
var menuEquipamentosInfo2 = window.document.querySelector(`p#menuEquipamentosInfo2`);
var menuEquipamentosInfo3 = window.document.querySelector(`p#menuEquipamentosInfo3`);
var menuEquipamentosInfo4 = window.document.querySelector(`p#menuEquipamentosInfo4`);
var menuEquipamentosInfo5 = window.document.querySelector(`p#menuEquipamentosInfo5`);
var menuEquipamentosInfo6 = window.document.querySelector(`p#menuEquipamentosInfo6`);

var menuMagiasInfo1 = window.document.querySelector(`p#menuMagiasInfo1`);
var menuMagiasInfo2 = window.document.querySelector(`p#menuMagiasInfo2`);
var menuMagiasInfo3 = window.document.querySelector(`p#menuMagiasInfo3`);
var menuMagiasInfo4 = window.document.querySelector(`p#menuMagiasInfo4`);
var menuMagiasInfo5 = window.document.querySelector(`p#menuMagiasInfo5`);
var menuMagiasInfo6 = window.document.querySelector(`p#menuMagiasInfo6`);



var voltarItens = window.document.querySelector('input#voltarItens');
voltarItens.addEventListener('click', voltarItensClick);

var proximoItens = window.document.querySelector('input#proximoItens');
proximoItens.addEventListener('click', proximoItensClick);


var voltarEquipamentos = window.document.querySelector('input#voltarEquipamentos');
voltarEquipamentos.addEventListener('click', voltarEquipamentosClick);

var proximoEquipamentos = window.document.querySelector('input#proximoEquipamentos');
proximoEquipamentos.addEventListener('click', proximoEquipamentosClick);


var voltarMagias = window.document.querySelector('input#voltarMagias');
voltarMagias.addEventListener('click', voltarMagiasClick);

var proximoMagias = window.document.querySelector('input#proximoMagias');
proximoMagias.addEventListener('click', proximoMagiasClick);
/*-----*/

/*-----*/
var experienciaAtualVal = window.document.querySelector('p#experienciaAtual');
var nivelAtualVal = window.document.querySelector('p#nivelAtual');


var menuMissao = window.document.querySelector('div#menuMissao');


var menuBotaoVal = window.document.querySelector(`input#botaoMenu`);
menuBotaoVal.addEventListener('click', menuDisplay);
/*-----*/

/*-ABRIR/FECHAR MENU-*/
function menuDisplay()
{
    if (menuAbertoFechado == false)
    {
        setTimeout(menuAnimacaoAbrir, 100);
        setTimeout(menuDisplayAbrir, 0);

        menuNome.innerHTML = `Nome: ${jogador.nome}`;
        menuGenero.innerHTML = `Gênero: ${jogador.genero}`;
        menuRaca.innerHTML = `Raça: ${racaGeral.nome}`;
        menuPecitas.innerHTML = `Pecitas: ${jogador.pecitas}`;


        menuVida.innerHTML = `Vida: ${jogador.vida}`;
        menuEnergia.innerHTML = `Energia: ${jogador.energia}`;
        menuMana.innerHTML = `Mana: ${jogador.mana}`;


        atualizarItensEquipamentosArma()
        atualizarItensMagiasDano()


        menuPeso.innerHTML = `Peso: ${jogador.peso} / ${jogador.pesoMax}`


        nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`;
        experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;
        

        barraExperiencia();

        if (jogadorNivel.experiencia >= jogadorNivel.proximoNivel)
        {
            upStatus.style.display = 'contents';
        }

        
        if (missao.ativo == true) 
        {
            menuMissao.innerHTML = `${missao.inimigoDerrotar}:<br> ${missao.inimigosDerrotados}/${missao.inimigosDerrotadosMax}`;
        }
        else  
        {
            menuMissao.innerHTML = `Nenhuma missão iniciada`;
        }
    } 
    else
    {
        setTimeout(menuAnimacaoFechar, 100);
        setTimeout(menuDisplayFechar, 500);
    }
}

function menuDisplayAbrir()
{
    menu.style.display = 'contents';
    
    if (local == 'taverna') 
    {
        taverna.style.display = 'none';
    }

    if (local == 'vendedor') 
    {
        vendedorDisplay.style.display = 'none';
    }

    if (local == 'ferreiro') 
    {
        ferreiroDisplay.style.display = 'none';
      
    }

    if (local == 'feiticeiro') 
    {
        feiticeiroDisplay.style.display = 'none';
       
    }

    if (local == 'floresta') 
    {
        florestaDisplay.style.display = 'none';
    }

    if (local == 'caverna') 
    {
        cavernaDisplay.style.display = 'none';
    }

    if (local == 'montanha') 
    {
        montanhaDisplay.style.display = 'none';
    }

    botaoMapaDisplay.style.display = 'none';
    menuAbertoFechado = true;
}

function menuDisplayFechar() 
{
    menu.style.display = 'none';
    if (local == 'taverna') 
    {
        taverna.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'vendedor') 
    {
        vendedorDisplay.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'ferreiro') 
    {
        ferreiroDisplay.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'feiticeiro') 
    {
        feiticeiroDisplay.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'floresta') 
    {
        florestaDisplay.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'caverna') 
    {
        cavernaDisplay.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }

    if (local == 'montanha') 
    {
        montanhaDisplay.style.display = 'contents';
        botaoMapaDisplay.style.display = 'contents';
    }
    
    menuAbertoFechado = false;
}

function menuAnimacaoAbrir() 
{
    nivel.style.opacity = '1';
    nivel.style.top = '5%';

    menuNomeGeneroRaca.style.opacity = '1';
    menuNomeGeneroRaca.style.left = '1%';

    menuStats.style.opacity = '1';
    menuStats.style.left = '1%';

    menuEquipamentos.style.opacity = '1';
    menuEquipamentos.style.right = '1%';

    menuMagias.style.opacity = '1';
    menuMagias.style.right = '1%';

    menuItens.style.opacity = '1';

    menuMissao.style.opacity = '1';
    menuMissao.style.bottom = '3%';

}

function menuAnimacaoFechar()
{
    nivel.style.opacity = '0';
    nivel.style.top = '-15%';

    menuNomeGeneroRaca.style.opacity = '0';
    menuNomeGeneroRaca.style.left = '-5%';

    menuStats.style.opacity = '0';
    menuStats.style.left = '-5%';

    menuEquipamentos.style.opacity = '0';
    menuEquipamentos.style.right = '-5%';

    menuMagias.style.opacity = '0';
    menuMagias.style.right = '-5%';

    menuItens.style.opacity = '0';

    menuMissao.style.opacity = '0';
    menuMissao.style.bottom = '-5%';

}
/*-----*/

/*-ADICIONAR/REMOVER ITEM NA MOCHILA-*/
var addItemTipo, addItemVal, addItemNome, funcaoEquip;

function adicionarItem()
{
    let add = '';

    if (addItemTipo == 'equipamento')
    {
    add = document.createElement("section");
    add.setAttribute("id", `slot${addItemVal}`);
    add.innerText = ``;
    menuItensEquipamentosDisplay.appendChild(add);

    add = document.createElement("p");
    add.setAttribute("id", `nomeSlot${addItemVal}`);
    add.innerText = `${addItemNome}`;
    document.getElementById(`slot${addItemVal}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `informacaoItemSlot${addItemVal}`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Sobre`);
    document.getElementById(`slot${addItemVal}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `equiparItemSlot${addItemVal}`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Equipar`);
    add.addEventListener('click', funcaoEquip)
    document.getElementById(`slot${addItemVal}`).appendChild(add);
    }

    if (addItemTipo == 'magia')
    {
    add = document.createElement("section");
    add.setAttribute("id", `slot${addItemVal}`);
    add.innerText = ``;
    menuItensMagiasDisplay.appendChild(add);

    add = document.createElement("p");
    add.setAttribute("id", `nomeSlot${addItemVal}`);
    add.innerText = `${addItemNome}`;
    document.getElementById(`slot${addItemVal}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `informacaoItemSlot${addItemVal}`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Sobre`);
    document.getElementById(`slot${addItemVal}`).appendChild(add);

    add = document.createElement("input");
    add.setAttribute("id", `equiparItemSlot${addItemVal}`);
    add.setAttribute("type", `button`);
    add.setAttribute("value", `Equipar`);
    add.addEventListener('click', funcaoEquip)
    document.getElementById(`slot${addItemVal}`).appendChild(add);
    }
}
/*-----*/


/*-BOTAO VOLTAR / PRÓXIMO ITENS-*/
function voltarItensClick()
{
    mudarItens --;

    if (mudarItens < 1)
    {
        mudarItens = 1;
    }

    mudarTipoItens();
}

function proximoItensClick()
{
    mudarItens ++;

    if (mudarItens > 3)
    {
        mudarItens = 3;
    }

    mudarTipoItens();
}

function mudarTipoItens()
{
    if (mudarItens == 1)
    {
        itensTipo.innerHTML = 'Equipamentos';
        itensTipo.style.color = 'red';

        menuItensEquipamentosDisplay.style.display = 'contents';
        menuItensMagiasDisplay.style.display = 'none';
        menuItensPocoesDisplay.style.display = 'none';
    }

    if (mudarItens == 2)
    {
        itensTipo.innerHTML = 'Magias';
        itensTipo.style.color = 'blue';

        menuItensEquipamentosDisplay.style.display = 'none';
        menuItensMagiasDisplay.style.display = 'contents';
        menuItensPocoesDisplay.style.display = 'none';
    }

    if (mudarItens == 3)
    {
        itensTipo.innerHTML = 'Poções';
        itensTipo.style.color = 'gray';

        menuItensEquipamentosDisplay.style.display = 'none';
        menuItensMagiasDisplay.style.display = 'none';
        menuItensPocoesDisplay.style.display = 'contents';
    }
}
/*-----*/


/*-BOTÃO VOLTAR / PRÓXIMO EQUIPAMENTOS-*/
function voltarEquipamentosClick()
{
    mudarEquipamentos --;

    if (mudarEquipamentos < 1)
    {
        mudarEquipamentos = 1;
    }

    mudarTipoEquipamentos();
}

function proximoEquipamentosClick()
{
    mudarEquipamentos ++;

    if (mudarEquipamentos > 2)
    {
        mudarEquipamentos = 2;
    }

    mudarTipoEquipamentos();
}


function mudarTipoEquipamentos()
{
    if (mudarEquipamentos == 1)
    {
        mudarEquipamentosArmaVal = true
        mudarEquipamentosArmaduraVal = false

        menuEquipamentosTipo.innerHTML = 'Arma';
        menuEquipamentosTipo.style.color = 'red';

        atualizarItensEquipamentosArma()
    }

    if (mudarEquipamentos == 2)
    {
        mudarEquipamentosArmaVal = true
        mudarEquipamentosArmaduraVal = true

        menuEquipamentosTipo.innerHTML = 'Armadura';
        menuEquipamentosTipo.style.color = 'blue';

        atualizarItensEquipamentosArmadura()
    }
}
/*-----*/

/*-ATUALIZAR EQUIPAMENTOS-*/
function atualizarItensEquipamentosArma()
{
    menuEquipamentosInfo1.innerHTML = `Item equipado:<br>${armaGeral.nome}`;
    menuEquipamentosInfo2.innerHTML = `Dano:<br>${armaGeral.dano}`;
    menuEquipamentosInfo3.innerHTML = `Energia:<br>${armaGeral.energiaCusto}`;
    menuEquipamentosInfo4.innerHTML = `Mana:<br>${armaGeral.manaCusto}`;
    menuEquipamentosInfo5.innerHTML = `Tipo:<br>${armaGeral.classe}`;
    menuEquipamentosInfo6.innerHTML = `Peso:<br>${armaGeral.peso}`;
}

function atualizarItensEquipamentosArmadura()
{
    menuEquipamentosInfo1.innerHTML = `Item equipado:<br>${armaduraGeral.nome}`;
    menuEquipamentosInfo2.innerHTML = `Defesa:<br>${armaduraGeral.defesa}`;
    menuEquipamentosInfo3.innerHTML = `Energia:<br>${armaduraGeral.energiaRecuperacao}`;
    menuEquipamentosInfo4.innerHTML = `Mana:<br>${armaduraGeral.manaRecuperacao}`;
    menuEquipamentosInfo5.innerHTML = `Tipo:<br>${armaduraGeral.tipoDefesa}`;
    menuEquipamentosInfo6.innerHTML = `Peso:<br>${armaduraGeral.peso}`;
}
/*-----*/


/*-BOTÃO VOLTAR / PRÓXIMO MAGIAS-*/
function voltarMagiasClick()
{
    mudarMagias --;

    if (mudarMagias < 1)
    {
        mudarMagias = 1;
    }

    mudarTipoMagias();
}

function proximoMagiasClick()
{
    mudarMagias ++;

    if (mudarMagias > 3)
    {
        mudarMagias = 3;
    }

    mudarTipoMagias();
}

function mudarTipoMagias()
{
    if (mudarMagias == 1)
    {
        mudarMagiasDano = true;
        mudarMagiasRecuperacao = false;
        mudarMagiasBuff = false;

        menuMagiasTipo.innerHTML = 'Dano';
        menuMagiasTipo.style.color = 'red';

        atualizarItensMagiasDano();
    }

    if (mudarMagias == 2)
    {
        mudarMagiasDano = false;
        mudarMagiasRecuperacao = true;
        mudarMagiasBuff = false;

        menuMagiasTipo.innerHTML = 'Recuperação';
        menuMagiasTipo.style.color = 'blue';

        atualizarItensMagiasRecuperacao();
    }

    if (mudarMagias == 3)
    {
        mudarMagiasDano = false;
        mudarMagiasRecuperacao = false;
        mudarMagiasBuff = true;

        menuMagiasTipo.innerHTML = 'Buff';
        menuMagiasTipo.style.color = 'purple';

        atualizarItensMagiasBuff();
    }
}
/*-----*/

/*-ATUALIZAR MAGIAS-*/
function atualizarItensMagiasDano()
{
    menuMagiasInfo1.innerHTML = `Magia equipado:<br>${magiaDanoGeral.nome}`;
    menuMagiasInfo2.innerHTML = `Dano:<br>${magiaDanoGeral.dano}`;
    menuMagiasInfo3.innerHTML = `Energia:<br>${magiaDanoGeral.energiaCusto}`;
    menuMagiasInfo4.innerHTML = `Mana:<br>${magiaDanoGeral.manaCusto}`;
    menuMagiasInfo5.innerHTML = `Tipo:<br>${magiaDanoGeral.tipoDano}`;
    menuMagiasInfo6.innerHTML = `Classe:<br>${magiaDanoGeral.classe}`;
}

function atualizarItensMagiasRecuperacao()
{
    menuMagiasInfo1.innerHTML = `Magia equipado:<br>${magiaRecuperacaoGeral.nome}`;
    menuMagiasInfo2.innerHTML = `Vida:<br>${magiaRecuperacaoGeral.vidaRecuperacao}`;
    menuMagiasInfo3.innerHTML = `Energia:<br>${magiaRecuperacaoGeral.energiaRecuperacao}`;
    menuMagiasInfo4.innerHTML = `Mana:<br>${magiaRecuperacaoGeral.manaRecuperacao}`;
    menuMagiasInfo5.innerHTML = `Tipo:<br>${magiaRecuperacaoGeral.tipo}`;
    menuMagiasInfo6.innerHTML = `Recuperação:<br>${magiaRecuperacaoGeral.classe}`;
}

function atualizarItensMagiasBuff()
{
    menuMagiasInfo1.innerHTML = `Magia equipado:<br>${magiaBuffGeral.nome}`;
    menuMagiasInfo2.innerHTML = `Classe:<br>${magiaBuffGeral.classe}`;
    menuMagiasInfo3.innerHTML = `Energia:<br>${magiaBuffGeral.energiaCusto}`;
    menuMagiasInfo4.innerHTML = `Mana:<br>${magiaBuffGeral.manaCusto}`;
    menuMagiasInfo5.innerHTML = `Tipo:<br>${magiaBuffGeral.buff}`;
    menuMagiasInfo6.innerHTML = `Duração:<br>${magiaBuffGeral.duracao}`;
}
/*-----*/