/*-DISPLAY-*/
inicio.style.display = 'contents'
selecao.style.display = 'none'
usuario.style.display = 'none'

classe.style.display = 'none'
arma.style.display = 'none'
armadura.style.display = 'none'

mainHud.style.display = 'none'
mainFaseGoblin.style.display = 'none'
mainFaseGolem.style.display = 'none'
mainFaseDragao.style.display = 'none'

mainSafeZone.style.display = 'none'
mainBotaoMenu.style.display = 'none'
menu.style.display = 'none'
subirNivel.style.display = 'none'
upStatus.style.display = 'none'
/*-----*/

/*-VARIÁVEIS-*/
var fase = '', vezUsuario = true, mainHudDisplay = false
var menuAbertoFechado = false, safeZone = false
/*-----*/

/*-STATUS JOGADOR-*/
var jogador = {
    nome: '', genero: '', classe: '',
    peso: 15,
    vida: 0, mana: 0, energia: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,
    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,
}
/*-----*/

/*-NÍVEL DE JOGADOR-*/
var jogadorNivel = {
    nivel: 1, experiencia: 0, proximoNivel: 20,
}
/*-----*/

/*-STATUS ARMA-*/
var armaJogador = {
    nome: '', classe: '', peso: 0,
    dano: 0, danoCombate: 0,
    manaCusto: 0, energiaCusto: 0,
}
/*-----*/

/*-NÍVEL ARMA-*/
var armaNivel = {
    dano: 0, energia: 0, mana: 0,
}
/*-----*/


/*-STATUS ARMADURA-*/
var armaduraJogador = {
    nome: '', peso: 0,
    defesa: 0,defesaCombateVal: 0,
    manaRecuperacao: 0, energiaRecuperacao: 0,
}
/*-----*/

/*-NÍVEL ARMADURA-*/
var armaduraNivel = {
    defesa: 0, energia: 0, mana: 0,
}
/*-----*/

/*-INIMIGO-*/
var inimigo = {
    nome: '', classe: '',
    vida: 0, mana: 0, energia: 0,
    vidaCombate: 0, manaCombate: 0, energiaCombate: 0,
    porcentagem: 0, vidaPorcentagem: 100, manaPorcentagem: 100, energiaPorcentagem: 100,
}
/*-----*/