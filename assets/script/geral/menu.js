/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-MENU VARIÁVEIS-*/
var mudarItens = 1, mudarEquipamentos = 1, mudarMagias = 1, menuAbertoFechado = false;
var mudarEquipamentosArmaVal = true, mudarEquipamentosArmaduraVal = false, mudarMagiasDano = true, mudarMagiasRecuperacao = false, mudarMagiasBuff = false;

var experienciaAtualVal = window.document.querySelector('p#experienciaAtual');
var nivelAtualVal = window.document.querySelector('p#nivelAtual');

var menuMissao = window.document.querySelector('div#menuMissao');

var horario = window.document.querySelector('div#horario');
var horarioHora = 12, horarioMinuto = 0
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-ABRIR/FECHAR MENU-*/
botaoMenu.addEventListener('click', () => {
    if (menuAbertoFechado == false) {
        setTimeout(() => {
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

            horario.style.opacity = '1';
            horario.style.bottom = '3%';
        }, 100);

        setTimeout(() => {
            menu.style.display = 'contents';
            rpgGeral.style.backgroundColor = 'darkgray';
            botaoMapaDisplay.style.display = 'none';

            taverna.style.display = 'none';
            vendedorDisplay.style.display = 'none';
            ferreiroDisplay.style.display = 'none';
            feiticeiroDisplay.style.display = 'none';
            florestaDisplay.style.display = 'none';
            cavernaDisplay.style.display = 'none';
            montanhaDisplay.style.display = 'none';

            menuAbertoFechado = true;
        }, 0);

        menuNome.innerHTML = `Nome: ${jogador.nome}`;
        menuGenero.innerHTML = `Gênero: ${jogador.genero}`;
        menuRaca.innerHTML = `Raça: ${racaGeral.nome}`;
        menuPecitas.innerHTML = `Pecitas: ${jogador.pecitas}`;

        menuVida.innerHTML = `Vida: ${jogador.vidaBase}`;
        menuEnergia.innerHTML = `Energia: ${jogador.energiaBase}`;
        menuMana.innerHTML = `Mana: ${jogador.manaBase}`;

        atualizarItensEquipamentosArma()
        atualizarItensMagiasDano()

        menuPeso.innerHTML = `Peso: ${jogador.peso} / ${jogador.pesoMax}`

        nivelAtual.innerHTML = `Nível: ${jogadorNivel.nivel}`;
        experienciaAtual.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;

        barraExperiencia();

        if (jogadorNivel.experiencia >= jogadorNivel.proximoNivel) {
            subirNivelDisplay.style.display = 'contents';
        }

        if (missao.ativo == true) {
            menuMissao.innerHTML = `${missao.inimigoDerrotar}:<br> ${missao.inimigosDerrotados}/${missao.inimigosDerrotadosMax}`;
        }
        else {
            menuMissao.innerHTML = `Nenhuma missão iniciada`;
        }
    }
    else {
        setTimeout(() => {
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

            horario.style.opacity = '0';
            horario.style.bottom = '-5%';
        }, 100);

        setTimeout(() => {
            menu.style.display = 'none';
            definirLocal(localMapa)
            definirMusica(localMapa)
            menuAbertoFechado = false;
        }, 500);
    }
});
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-ADICIONAR ITEM NA MOCHILA-*/
var addItemTipo, addItemVal, addItemNome, funcaoEquip;

function adicionarItem() {
    let add = '';
    let menuItensDisplay

    if (addItemTipo == 'equipamento') {
        menuItensDisplay = menuItensEquipamentosDisplay
    }
    if (addItemTipo == 'magia') {
        menuItensDisplay = menuItensMagiasDisplay
    }

    add = document.createElement("section");
    add.setAttribute("id", `slot${addItemVal}`);
    add.innerText = ``;
    menuItensDisplay.appendChild(add);

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
/*-----*/

/*-REMOVER ITEM NA MOCHILA-*/
var removItemTipo, removItemVal, addItemNome, funcaoEquip;

function removerItem() {
    let remov = '';
    if (removItemTipo == 'equipamento') {
        remov = document.getElementById(`slot${removItemVal}`).remove();
    }
    if (removItemTipo == 'magia') {
        remov = document.getElementById(`slot${removItemVal}`).remove();
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-BOTAO VOLTAR / PRÓXIMO ITENS-*/
voltarItens.addEventListener('click', () => {
    mudarItens--;
    if (mudarItens < 1) {
        mudarItens = 1;
    }
    mudarTipoItens();
});

proximoItens.addEventListener('click', () => {
    mudarItens++;
    if (mudarItens > 3) {
        mudarItens = 3;
    }
    mudarTipoItens();
});

function mudarTipoItens() {
    if (mudarItens == 1) {
        itensTipo.innerHTML = 'Equipamentos';
        itensTipo.style.color = 'red';
        menuItensEquipamentosDisplay.style.display = 'contents';
        menuItensMagiasDisplay.style.display = 'none';
        menuItensPocoesDisplay.style.display = 'none';
    }

    if (mudarItens == 2) {
        itensTipo.innerHTML = 'Magias';
        itensTipo.style.color = 'blue';
        menuItensEquipamentosDisplay.style.display = 'none';
        menuItensMagiasDisplay.style.display = 'contents';
        menuItensPocoesDisplay.style.display = 'none';
    }

    if (mudarItens == 3) {
        itensTipo.innerHTML = 'Poções';
        itensTipo.style.color = 'gray';
        menuItensEquipamentosDisplay.style.display = 'none';
        menuItensMagiasDisplay.style.display = 'none';
        menuItensPocoesDisplay.style.display = 'contents';
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-BOTÃO VOLTAR / PRÓXIMO EQUIPAMENTOS-*/
voltarEquipamentos.addEventListener('click', () => {
    mudarEquipamentos--;
    if (mudarEquipamentos < 1) {
        mudarEquipamentos = 1;
    }
    mudarTipoEquipamentos();
});

proximoEquipamentos.addEventListener('click', () => {
    mudarEquipamentos++;
    if (mudarEquipamentos > 2) {
        mudarEquipamentos = 2;
    }
    mudarTipoEquipamentos();
});

function mudarTipoEquipamentos() {
    if (mudarEquipamentos == 1) {
        mudarEquipamentosArmaVal = true
        mudarEquipamentosArmaduraVal = false
        menuEquipamentosCategoria.innerHTML = 'Arma';
        menuEquipamentosCategoria.style.color = 'red';
        atualizarItensEquipamentosArma()
    }

    if (mudarEquipamentos == 2) {
        mudarEquipamentosArmaVal = false
        mudarEquipamentosArmaduraVal = true
        menuEquipamentosCategoria.innerHTML = 'Armadura';
        menuEquipamentosCategoria.style.color = 'blue';
        atualizarItensEquipamentosArmadura()
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-ATUALIZAR EQUIPAMENTOS-*/
function atualizarItensEquipamentosArma() {
    menuEquipamentosNome.innerHTML = `Item equipado:<br>${armaGeral.nome}`;
    menuEquipamentosDanoDefesa.innerHTML = `Dano:<br>${armaGeral.danoBase}`;
    menuEquipamentosEnergia.innerHTML = `Energia:<br>-${armaGeral.energiaCusto}`;
    menuEquipamentosMana.innerHTML = `Mana:<br>-${armaGeral.manaCusto}`;
    menuEquipamentosTipo.innerHTML = `Tipo de dano:<br>${armaGeral.tipoDano}`;
    menuEquipamentosPeso.innerHTML = `Peso:<br>${armaGeral.peso}`;
}

function atualizarItensEquipamentosArmadura() {
    menuEquipamentosNome.innerHTML = `Item equipado:<br>${armaduraGeral.nome}`;
    menuEquipamentosDanoDefesa.innerHTML = `Defesa:<br>${armaduraGeral.defesaBase.toFixed(2)}%`;
    menuEquipamentosEnergia.innerHTML = `Energia:<br>+${armaduraGeral.energiaRecuperacao.toFixed(2)}%`;
    menuEquipamentosMana.innerHTML = `Mana:<br>+${armaduraGeral.manaRecuperacao.toFixed(2)}%`;
    menuEquipamentosTipo.innerHTML = `Tipo de defesa:<br>${armaduraGeral.tipoDefesa}`;
    menuEquipamentosPeso.innerHTML = `Peso:<br>${armaduraGeral.peso}`;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-BOTÃO VOLTAR / PRÓXIMO MAGIAS-*/
voltarMagias.addEventListener('click', () => {
    mudarMagias--;
    if (mudarMagias < 1) {
        mudarMagias = 1;
    }
    mudarTipoMagias();
});

proximoMagias.addEventListener('click', () => {
    mudarMagias++;
    if (mudarMagias > 3) {
        mudarMagias = 3;
    }
    mudarTipoMagias();
});

function mudarTipoMagias() {
    if (mudarMagias == 1) {
        mudarMagiasDano = true;
        mudarMagiasRecuperacao = false;
        mudarMagiasBuff = false;
        menuMagiasCategoria.innerHTML = 'Dano';
        menuMagiasCategoria.style.color = 'red';
        atualizarItensMagiasDano();
    }

    if (mudarMagias == 2) {
        mudarMagiasDano = false;
        mudarMagiasRecuperacao = true;
        mudarMagiasBuff = false;
        menuMagiasCategoria.innerHTML = 'Recuperação';
        menuMagiasCategoria.style.color = 'blue';
        atualizarItensMagiasRecuperacao();
    }

    if (mudarMagias == 3) {
        mudarMagiasDano = false;
        mudarMagiasRecuperacao = false;
        mudarMagiasBuff = true;
        menuMagiasCategoria.innerHTML = 'Buff';
        menuMagiasCategoria.style.color = 'purple';
        atualizarItensMagiasBuff();
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-ATUALIZAR MAGIAS-*/
function atualizarItensMagiasDano() {
    menuMagiasNome.innerHTML = `Magia equipado:<br>${magiaDanoGeral.nome}`;
    menuMagiasDanoRecuperacaoBuff.innerHTML = `Dano:<br>${magiaDanoGeral.danoBase}`;
    menuMagiasEnergia.innerHTML = `Energia:<br>-${magiaDanoGeral.energiaCusto}`;
    menuMagiasMana.innerHTML = `Mana:<br>-${magiaDanoGeral.manaCusto}`;
    menuMagiasTipo.innerHTML = `Tipo de dano:<br>${magiaDanoGeral.tipoDano}`;
}

function atualizarItensMagiasRecuperacao() {
    menuMagiasNome.innerHTML = `Magia equipado:<br>${magiaRecuperacaoGeral.nome}`;
    menuMagiasDanoRecuperacaoBuff.innerHTML = `Vida:<br>+${magiaRecuperacaoGeral.vidaRecuperacao}`;
    menuMagiasEnergia.innerHTML = `Energia:<br>-${magiaRecuperacaoGeral.energiaCusto}`;
    menuMagiasMana.innerHTML = `Mana:<br>-${magiaRecuperacaoGeral.manaCusto}`;
    menuMagiasTipo.innerHTML = `Tipo de regen:<br>${magiaRecuperacaoGeral.tipo}`;
}

function atualizarItensMagiasBuff() {
    menuMagiasNome.innerHTML = `Magia equipado:<br>${magiaBuffGeral.nome}`;
    menuMagiasDanoRecuperacaoBuff.innerHTML = `Duração:<br>${magiaBuffGeral.duracao}`;
    menuMagiasEnergia.innerHTML = `Energia:<br>-${magiaBuffGeral.energiaCusto}`;
    menuMagiasMana.innerHTML = `Mana:<br>-${magiaBuffGeral.manaCusto}`;
    menuMagiasTipo.innerHTML = `Tipo de buff:<br>${magiaBuffGeral.buff}`;
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-HORÁRIO-*/
setInterval(() => {
    horario.innerHTML = `Horário<br>${horarioHora}:${horarioMinuto}`;
    horarioMinuto++;

    if (horarioMinuto >= 60) {
        horarioMinuto = 0;
        horarioHora++;
    }
    if (horarioHora >= 23) {
        horarioHora = 0;
    }
}, 500)
/*-----*//*-----*//*-----*//*-----*//*-----*/