function critico() {
    let chance = Math.floor(Math.random() * 100) + 0;

    if (chance <= 10) {
        armaJogador.danoCombate = armaJogador.danoCombate * 2

        goblin.danoBasico = goblin.danoBasico * 2
        goblin.danoEspecial = goblin.danoEspecial * 2

        golem.danoBasico = golem.danoBasico * 2
        golem.danoEspecial = golem.danoEspecial * 2

        dragao.danoBasico = dragao.danoBasico * 2
        dragao.danoEspecial = dragao.danoEspecial * 2
    }
}