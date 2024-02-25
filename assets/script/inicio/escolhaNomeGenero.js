/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-SELEÇÃO DE GÊNERO VARIÁVEIS-*/
var botaoMasculino = window.document.querySelector('input#botaoMasculino');
botaoMasculino.addEventListener('click', botaoMasculinoClick);

var botaoFeminino = window.document.querySelector('input#botaoFeminino');
botaoFeminino.addEventListener('click', botaoFemininoClick);
/*-SELEÇÃO DE GÊNERO ESCOLHA-*/
function botaoMasculinoClick() {
    jogador.genero = 'Homem';
    armaGeral = soco;
    escolhaGenero.style.display = 'none';
    escolhaNome.style.display = 'contents';
}

function botaoFemininoClick() {
    jogador.genero = 'Mulher';
    armaGeral = soco;
    escolhaGenero.style.display = 'none';
    escolhaNome.style.display = 'contents';
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-SELEÇÃO DE NOME VARIÁVEIS-*/
var enviarNomeJogador = window.document.querySelector('input#enviarNomeJogador');
enviarNomeJogador.addEventListener('click', enviarNomeJogadorClick);
/*-SELEÇÃO DE NOME ESCOLHA-*/
function enviarNomeJogadorClick() {
    jogadorNome = window.document.querySelector('input#nomeJogador');
    jogador.nome = String(jogadorNome.value);
    escolhaNome.style.display = 'none';
    escolhaRaca.style.display = 'contents';
    jogadorNome.value = ''
}

/*-----*//*-----*//*-----*//*-----*//*-----*/
