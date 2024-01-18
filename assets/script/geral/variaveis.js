/*-VARIÁVEIS-*/
var escolhaInimigo = 0 ,fase = '', vezUsuario = true, mainHudDisplay = false
var menuAbertoFechado = false

/*-----*/

/*-STATUS JOGADOR-*/
var jogador = {
    nome: '', genero: '', raca: '',
    moeda: 0, moedaGanha: 0,
    peso: 15, click: 0, minigame: '', tamanho: 1,
    vida: 0, mana: 0, energia: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,
    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,
}
/*-----*/

/*-NÍVEL DE JOGADOR-*/
var jogadorNivel = {
    nivel: 1, experiencia: 0, experienciaPorcentagem: 0, proximoNivel: 20,
}
/*-----*/

/*-INIMIGO-*/

/*-----*/