/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-SELEÇÃO DE GÊNERO ESCOLHA-*/
botaoMasculino.addEventListener('click', () => {
    jogador.genero = 'Homem';
    escolhaGenero.style.display = 'none';
    escolhaNome.style.display = 'contents';
});

botaoFeminino.addEventListener('click', () => {
    jogador.genero = 'Mulher';
    escolhaGenero.style.display = 'none';
    escolhaNome.style.display = 'contents';
});
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-SELEÇÃO DE NOME ESCOLHA-*/
enviarNomeJogador.addEventListener('click', () => {
    jogador.nome = String(window.document.querySelector('input#nomeJogador').value);
    escolhaNome.style.display = 'none';
    escolhaRaca.style.display = 'contents';
});
/*-----*//*-----*//*-----*//*-----*//*-----*/
