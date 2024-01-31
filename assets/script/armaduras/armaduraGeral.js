var armaduraGeral = {
    nome: '', peso: 0,
    defesa: 0, defesaCombate: 0, tipoDefesa: '',
    manaRecuperacao: 0, energiaRecuperacao: 0,
}

var panoSujo = {
    nome: 'Pano sujo', peso: 0,
    defesa: 0, defesaCombate: 0, tipoDefesa: '',
    manaRecuperacao: 20, energiaRecuperacao: 20,
}



var armaduraDePele = {
    nome: 'Armadura de pele', peso: 2, buff: '',
    defesa: 1, defesaCombate: 1, tipoDefesa: '',
    energiaRecuperacao: 20, manaRecuperacao: 15,
}
function equipArmaduraDePele() {
    armaduraGeral = armaduraDePele

    menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraGeral.nome}`
    menuDefesaVal.innerHTML = `Defesa: ${armaduraGeral.defesa}`
    menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${armaduraGeral.energiaRecuperacao}`
    menuManaRecuperacaoVal.innerHTML = `M recuperação: ${armaduraGeral.manaRecuperacao}`
}