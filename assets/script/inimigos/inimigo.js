/*-STATUS INIMIGO VARIÁVEIS-*/
var inimigoGeral =
{
    nome: '', classe: '', experiencia: 0,

    vida: 0, mana: 0, energia: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,

    energiaGasto: 0, energiaRecuperacao: 0, manaGasto: 0, manaRecuperacao: 0,

    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,

    dano: 0, danoCombate: 0,
}

var inimigoHudNome = window.document.querySelector('p#inimigoHudNome');
var inimigoHudVida = window.document.querySelector('p#inimigoHudVida');
var inimigoHudEnergiaMana = window.document.querySelector('p#inimigoHudEnergiaMana');
var inimigoHudImagem = window.document.querySelector('img#inimigoHudImagem');

var mensagemInimigoDerrotadoVal = window.document.querySelector('div#mensagemInimigoDerrotado');
var experienciaGanhaVal = window.document.querySelector('p#experienciaGanha');
/*-----*/


/*-INIMIGO HUD-*/
function inimigoCombateHud()
{
    inimigoHudNome.innerHTML = `${inimigoGeral.nome}`;

    inimigoHudVida.innerHTML = `Vida: ${inimigoGeral.vidaCombate}`;
    inimigoHudVida.style.backgroundSize = `${inimigoGeral.vidaPorcentagem}% 100%`;

    if (inimigoGeral.classe == 'fisico')
    {
        inimigoHudEnergiaMana.innerHTML = `Energia: ${inimigoGeral.energiaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.energiaPorcentagem}% 100%`;
    }

    if (inimigoGeral.classe == 'magico')
    {
        inimigoHudEnergiaMana.innerHTML = `Mana: ${inimigoGeral.manaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.manaPorcentagem}% 100%`;
    }
}
/*-----*/


/*-INIMIGO ATAQUE-*/
function inimigoAtaque()
{
    if (inimigoGeral.classe == 'fisico')
    {
        if (inimigoGeral.vidaCombate > 0)
        {

            if (inimigoGeral.energiaCombate - inimigoGeral.energiaGasto >= 0)
            {
                calculoDefesa();

                if (jogador.vidaCombate - (inimigoGeral.danoCombate - parseInt(armaduraGeral.defesaCombate / 10)) < 0)
                {
                    jogador.vidaCombate = 0;
                    jogador.vidaPorcentagem = 0.1;
                    jogador.porcentagem = 0;
                } 
                else
                {

                    jogador.vidaCombate = jogador.vidaCombate - inimigoGeral.danoCombate;

                    jogador.porcentagem = 100 - ((inimigoGeral.danoCombate / jogador.vida) * 100);
                    jogador.porcentagem = 100 - jogador.porcentagem;
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2);

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;

                    inimigoGeral.energiaCombate = inimigoGeral.energiaCombate - inimigoGeral.energiaGasto;

                    inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaGasto / inimigoGeral.energia) * 100);
                    inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                    inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                    inimigoGeral.energiaPorcentagem = inimigoGeral.energiaPorcentagem - inimigoGeral.porcentagem;
                }

                if (inimigoGeral.energiaCombate < 0)
                {
                    inimigoGeral.energiaCombate = 0;
                    inimigoGeral.energiaPorcentagem = 0.1;
                }

                legendaView.insertAdjacentHTML('beforeend', `${inimigoGeral.nome} Atacou<br>Dano causado: ${inimigoGeral.danoCombate}<br>Energia usada: ${inimigoGeral.energiaGasto}<br><br>`);

            }
            else
            {
                inimigoGeral.energiaCombate = inimigoGeral.energiaCombate + inimigoGeral.energiaRecuperacao;
                inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaRecuperacao / inimigoGeral.energia) * 100);
                inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                inimigoGeral.energiaPorcentagem = parseInt(inimigoGeral.energiaPorcentagem) + parseInt(inimigoGeral.porcentagem);

                legendaView.insertAdjacentHTML('beforeend', `${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.energiaRecuperacao}<br><br>`);
            }
        }
    }

    if (inimigoGeral.classe == 'magico')
    {
        if (inimigoGeral.vidaCombate > 0)
        {

            if (inimigoGeral.manaCombate - inimigoGeral.manaGasto >= 0)
            {
                calculoDefesa();

                if (jogador.vidaCombate - inimigoGeral.danoCombate < 0)
                {
                    jogador.vidaCombate = 0;
                    jogador.vidaPorcentagem = 0.1;
                    jogador.porcentagem = 0;
                } 
                else
                {

                    jogador.vidaCombate = jogador.vidaCombate - inimigoGeral.danoCombate;

                    jogador.porcentagem = 100 - ((inimigoGeral.danoCombate / jogador.vida) * 100);
                    jogador.porcentagem = 100 - jogador.porcentagem;
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2);

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;

                    inimigoGeral.manaCombate = inimigoGeral.manaCombate - inimigoGeral.manaGasto;

                    inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaGasto / inimigoGeral.mana) * 100);
                    inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                    inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                    inimigoGeral.manaPorcentagem = inimigoGeral.manaPorcentagem - inimigoGeral.porcentagem;
                }

                if (inimigoGeral.manaCombate < 0)
                {
                    inimigoGeral.manaCombate = 0;
                    inimigoGeral.manaPorcentagem = 0.1;
                }

                legendaView.insertAdjacentHTML('beforeend', `${inimigoGeral.nome} Atacou<br>Dano causado: ${inimigoGeral.danoCombate}<br>Mana usada: ${inimigoGeral.manaGasto}<br><br>`);
            
            }
            else
            {
                inimigoGeral.manaCombate = inimigoGeral.manaCombate + inimigoGeral.manaRecuperacao;
                inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaRecuperacao / inimigoGeral.mana) * 100);
                inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                inimigoGeral.manaPorcentagem = parseInt(inimigoGeral.manaPorcentagem) + parseInt(inimigoGeral.porcentagem);

                legendaView.insertAdjacentHTML('beforeend', `${inimigoGeral.nome} focou<br>Mana recuperada: ${inimigoGeral.manaRecuperacao}<br><br>`);
            }
        }
    }
}
/*-----*/


/*-INIMIGO DERROTADO-*/
function inimigoDerrotado()
{
    if (inimigoGeral.vidaCombate <= 0)
    {
        rodada = 0;

        mainHud.style.display = 'none';
        mainInimigoHud.style.display = 'none';

        if (fase == 'goblin')
        {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 10;
            local = 'floresta';
        }

        if (fase == 'golem')
        {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 30;
            local = 'caverna';
        }

        if (fase == 'dragao')
        {
            jogadorNivel.experiencia = jogadorNivel.experiencia + 60;
            local = 'montanha';
        }

        missaoProgresso();
        experienciaGanha();
        setTimeout(definirEstatisticaGeral, 2000);
        setTimeout(definirMusica, 2000);
    }
}
/*-----*/


/*-INIMIGO EXPERIÊNCIA-*/
function experienciaGanha()
{
    mainInimigoDerrotado.style.display = 'contents';

    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100);
    jogador.porcentagem = jogador.porcentagem.toPrecision(3);

    jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem);

    if (jogadorNivel.experienciaPorcentagem > 100)
    {
        jogadorNivel.experienciaPorcentagem = 100;
    }

    mensagemInimigoDerrotadoVal.innerHTML = `${fase} derrotado`;
    experienciaGanhaVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;
    experienciaGanhaVal.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`;
}
/*-----*/


/*-INIMIGO MISSÃO-*/
function missaoProgresso()
{
    if (missao.ativo == true)
    {
        missao.inimigosDerrotados ++;

        if (missao.inimigosDerrotados >= missao.inimigosDerrotadosMax)
        {
            missao.ativo = false;
            jogador.pecitas += missao.recompensa;
            menuMissao.innerHTML = `Nenhuma missão iniciada`;
        }
    }
}
/*-----*/