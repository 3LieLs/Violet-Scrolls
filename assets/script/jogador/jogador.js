/*-STATUS JOGADOR VARIÁVEIS-*/
var jogador =
{
    nome: '', genero: '', raca: '',
    pecitas: 0, peso: 0, pesoMax: 20,
    vida: 0, mana: 0, energia: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,
    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,
}

var legendaView = window.document.querySelector('p#mensagemLegenda');

var estatisticaVida = window.document.querySelector('p#estatisticaVida');
var estatisticaEnergia = window.document.querySelector('p#estatisticaEnergia');
var estatisticaMana = window.document.querySelector('p#estatisticaMana');

var mensagemInimigoJogadorVal = window.document.querySelector('div#mensagemJogadorDerrotado');
/*-----*/


/*-JOGADOR HUD-*/
function jogadorCombateHud()
{
    estatisticaVida.innerHTML = `Vida: ${jogador.vidaCombate}`;
    estatisticaVida.style.backgroundSize = `${jogador.vidaPorcentagem}% 100%`;
    
    estatisticaEnergia.innerHTML = `Energia: ${jogador.energiaCombate}`;
    estatisticaEnergia.style.backgroundSize = `${jogador.energiaPorcentagem}% 100%`;

    estatisticaMana.innerHTML = `Mana: ${jogador.manaCombate}`;
    estatisticaMana.style.backgroundSize = `${jogador.manaPorcentagem}% 100%`;
}
/*-----*/


/*-JOGADOR DERROTADO-*/
function jogadorDerrotado()
{
    if (jogador.vidaCombate <= 0)
    {
        rodada = 0;
        local = 'taverna';

        mainHud.style.display = 'none';
        mainInimigoHud.style.display = 'none';
        florestaDisplay.style.display = 'none';
        cavernaDisplay.style.display = 'none';
        montanhaDisplay.style.display = 'none';

        definirEstatisticaGeral();
        definirMusica();
    }
}

function derrota()
{
    mainJogadorDerrotado.style.display = 'contents';
    mensagemJogadorDerrotadoVal.innerHTML = `${jogador.nome} foi derrotado`;
    fase = 'taverna';
}
/*-----*/



/*-NÍVEL DE JOGADOR VARIÁVEIS-*/
var jogadorNivel =
{
    nivel: 1, experiencia: 0, experienciaPorcentagem: 0, proximoNivel: 20,
}

var botaoSubirNivel = window.document.querySelector('input#subirNivel');
botaoSubirNivel.addEventListener('click', mostrarStats);

var botaoSubirVida = window.document.querySelector('input#subirVida');
var botaoSubirEnergia = window.document.querySelector('input#subirEnergia');
var botaoSubirMana = window.document.querySelector('input#subirMana');

botaoSubirVida.addEventListener('click', upVida);
botaoSubirEnergia.addEventListener('click', upEnergia);
botaoSubirMana.addEventListener('click', upMana);
/*-----*/


/*-EXPERIÊNCIA / SUBIR NÍVEL-*/
function mostrarStats() 
{
    subirNivel.style.display = 'none';
    upStatus.style.display = 'contents';
}

function upVida()
{
    jogador.vida = jogador.vida + 5
    jogadorNivel.nivel = jogadorNivel.nivel + 1
    jogadorNivel.experiencia = jogadorNivel.experiencia - jogadorNivel.proximoNivel;
    jogadorNivel.proximoNivel = parseInt(jogadorNivel.proximoNivel) + parseInt(jogadorNivel.proximoNivel);

    barraExperiencia()
    jogadorNivel.experienciaPorcentagem = 0;

    menuVidaVal.innerHTML = `Vida: ${jogador.vida}`;
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`;
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;
    
    upStatus.style.display = 'none';
}

function upEnergia()
{
    jogador.energia = jogador.energia + 5;
    jogador.pesoMax += 5
    jogadorNivel.nivel = jogadorNivel.nivel + 1;
    jogadorNivel.experiencia = jogadorNivel.experiencia - jogadorNivel.proximoNivel;
    jogadorNivel.proximoNivel = parseInt(jogadorNivel.proximoNivel) + parseInt(jogadorNivel.proximoNivel);

    barraExperiencia();
    jogadorNivel.experienciaPorcentagem = 0;

    menuEnergiaVal.innerHTML = `Energia: ${jogador.energia}`;
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`;
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;

    upStatus.style.display = 'none';
}

function upMana()
{
    jogador.mana = jogador.mana + 5;
    jogadorNivel.nivel = jogadorNivel.nivel + 1;
    jogadorNivel.experiencia = jogadorNivel.experiencia - jogadorNivel.proximoNivel;
    jogadorNivel.proximoNivel = parseInt(jogadorNivel.proximoNivel) + parseInt(jogadorNivel.proximoNivel);

    barraExperiencia();
    jogadorNivel.experienciaPorcentagem = 0;
    
    menuManaVal.innerHTML = `Mana: ${jogador.mana}`;
    nivelAtualVal.innerHTML = `Nível: ${jogadorNivel.nivel}`;
    experienciaAtualVal.innerHTML = `Experiência: ${jogadorNivel.experiencia}`;

    upStatus.style.display = 'none';
}

function barraExperiencia()
{
    jogador.porcentagem = ((jogadorNivel.experiencia / jogadorNivel.proximoNivel) * 100);
        jogador.porcentagem = jogador.porcentagem.toPrecision(3);

        jogadorNivel.experienciaPorcentagem = parseInt(jogador.porcentagem);

        if (jogadorNivel.experienciaPorcentagem > 100)
        {
            jogadorNivel.experienciaPorcentagem = 100;
        }

        experienciaAtualVal.style.backgroundSize = `${jogadorNivel.experienciaPorcentagem}% 100%`;
}
/*-----*/