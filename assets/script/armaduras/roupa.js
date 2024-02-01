var tunicaBasica =
{
    nome: 'Tunica básica', val: 'tunicaBasica', obtido: false, peso: 0, preco: 5, 
    defesa: 1, defesaCombate: 1, tipoDefesa: '', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 20, 
}
function equipTunicaBasica()
{
    armaduraGeral = tunicaBasica;

    menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraGeral.nome}`;
    menuDefesaVal.innerHTML = `Defesa: ${armaduraGeral.defesa}`;
    menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraGeral.energiaRecuperacao}`;
    menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraGeral.manaRecuperacao}`;
}



var tunicaEspecialista =
{
    nome: 'Tunica especialista', val: 'tunicaEspecialista', obtido: false, peso: 0, preco: 7,
    defesa: 3, defesaCombate: 3, tipoDefesa: '', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 25, 
}
function equipTunicaEspecialista()
{
    armaduraGeral = tunicaEspecialista;

    menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraGeral.nome}`;
    menuDefesaVal.innerHTML = `Defesa: ${armaduraGeral.defesa}`;
    menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraGeral.energiaRecuperacao}`;
    menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraGeral.manaRecuperacao}`;
}