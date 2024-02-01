var tunicaBasica =
{
    nome: 'Tunica básica', val: 'tunicaBasica', obtido: false, peso: 0, preco: 5, 
    defesa: 1, defesaCombate: 1, tipoDefesa: 'Mágico', buff: '',
    energiaRecuperacao: 15, manaRecuperacao: 20, 
}
function equipTunicaBasica()
{
    armaduraGeral = tunicaBasica;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}



var tunicaEspecialista =
{
    nome: 'Tunica especialista', val: 'tunicaEspecialista', obtido: false, peso: 0, preco: 7,
    defesa: 3, defesaCombate: 3, tipoDefesa: 'Mágico', buff: '',
    energiaRecuperacao: 20, manaRecuperacao: 25, 
}
function equipTunicaEspecialista()
{
    armaduraGeral = tunicaEspecialista;

    if (mudarEquipamentosArmaduraVal == true) {
        atualizarItensEquipamentosArmadura();
    }
}