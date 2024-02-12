/*-SELEÇÃO DE GÊNERO VARIÁVEIS-*/
var botaoMasculino = window.document.querySelector('input#botaoMasculino');
botaoMasculino.addEventListener('click', botaoMasculinoClick);

var botaoFeminino = window.document.querySelector('input#botaoFeminino');
botaoFeminino.addEventListener('click', botaoFemininoClick);
/*-----*/

/*-SELEÇÃO DE GÊNERO ESCOLHA-*/
function botaoMasculinoClick()
{
    jogador.genero = 'Homem';
    armaGeral = soco;
    escolhaGenero.style.display = 'none';
    escolhaNome.style.display = 'contents';
}

function botaoFemininoClick()
{
    jogador.genero = 'Mulher';
    armaGeral = soco;
    escolhaGenero.style.display = 'none';
    escolhaNome.style.display = 'contents';
}
/*-----*/



/*-SELEÇÃO DE NOME VARIÁVEIS-*/
var enviarNomeJogador = window.document.querySelector('input#enviarNomeJogador');
enviarNomeJogador.addEventListener('click', enviarNomeJogadorClick);
enviarNomeJogador.addEventListener('mouseover', enviarNomeJogadorHover);
enviarNomeJogador.addEventListener('mouseout', enviarNomeJogadorOut);
/*-----*/

/*-SELEÇÃO DE NOME ESCOLHA-*/
function enviarNomeJogadorClick()
{
    jogadorNome = window.document.querySelector('input#nomeJogador');
    jogador.nome = String(jogadorNome.value);
    escolhaNome.style.display = 'none';
    escolhaRaca.style.display = 'contents';
}
function enviarNomeJogadorHover()
{
    enviarNomeJogador.style.cursor = 'pointer';
    enviarNomeJogador.style.animation = 'botaoAnimacao 2s 0ms infinite running';
    enviarNomeJogador.style.background = 'gray';
}
function enviarNomeJogadorOut()
{
    enviarNomeJogador.style.background = 'black';
    enviarNomeJogador.style.transform = 'scale(1.0)';
    enviarNomeJogador.style.animation = 'paused';
}
/*-----*/
