/*-INIMIGO HUD-*/
function inimigoCombateHud() {
    inimigoHudNome.innerHTML = `${inimigoGeral.nome}`;

    inimigoHudVida.innerHTML = `Vida: ${inimigoGeral.vidaCombate}`;
    inimigoHudVida.style.backgroundSize = `${inimigoGeral.vidaPorcentagem}% 100%`;

    if (inimigoGeral.classe == 'fisico') {
        inimigoHudEnergiaMana.innerHTML = `Energia: ${inimigoGeral.energiaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.energiaPorcentagem}% 100%`;
    }

    if (inimigoGeral.classe == 'magico') {
        inimigoHudEnergiaMana.innerHTML = `Mana: ${inimigoGeral.manaCombate}`;
        inimigoHudEnergiaMana.style.backgroundSize = `${inimigoGeral.manaPorcentagem}% 100%`;
    }
}
/*-----*/



/*-INIMIGO ATAQUE-*/
function inimigoAtaque() {
    if (inimigoGeral.classe == 'fisico') {
        if (inimigoGeral.vidaCombate > 0) {

            if (inimigoGeral.energiaCombate - inimigoGeral.energiaGasto >= 0) {

                if (jogador.vidaCombate - (inimigoGeral.danoCombate - parseInt(armaduraGeral.defesaCombate / 10)) < 0) {
                    jogador.vidaCombate = 0;
                    jogador.vidaPorcentagem = 0.1;
                    jogador.porcentagem = 0;
                }
                else {

                    jogador.vidaCombate = jogador.vidaCombate - inimigoGeral.danoCombate;

                    jogador.porcentagem = 100 - ((inimigoGeral.danoCombate / jogador.vida) * 100);
                    jogador.porcentagem = 100 - jogador.porcentagem;
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2);

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;

                    inimigoGeral.energiaCombate = inimigoGeral.energiaCombate - inimigoGeral.energiaGasto;

                    inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaGasto / inimigoGeral.energia) * 100);
                    inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                    inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                    inimigoGeral.energiaPorcentagem = inimigoGeral.energiaPorcentagem - inimigoGeral.porcentagem;
                }

                if (inimigoGeral.energiaCombate < 0) {
                    inimigoGeral.energiaCombate = 0;
                    inimigoGeral.energiaPorcentagem = 0.1;
                }

                legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou<br>Dano causado: ${inimigoGeral.danoCombate}<br>Energia usada: ${inimigoGeral.energiaGasto}`);

            }
            else {
                inimigoGeral.energiaCombate = inimigoGeral.energiaCombate + inimigoGeral.energiaRecuperacao;
                inimigoGeral.porcentagem = 100 - ((inimigoGeral.energiaRecuperacao / inimigoGeral.energia) * 100);
                inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                inimigoGeral.energiaPorcentagem = parseInt(inimigoGeral.energiaPorcentagem) + parseInt(inimigoGeral.porcentagem);

                legendaView.insertAdjacentHTML('beforeend', `<br>${inimigoGeral.nome} descansou<br>Energia recuperada: ${inimigoGeral.energiaRecuperacao}`);
            }
        }
    }

    if (inimigoGeral.classe == 'magico') {
        if (inimigoGeral.vidaCombate > 0) {

            if (inimigoGeral.manaCombate - inimigoGeral.manaGasto >= 0) {

                if (jogador.vidaCombate - inimigoGeral.danoCombate < 0) {
                    jogador.vidaCombate = 0;
                    jogador.vidaPorcentagem = 0.1;
                    jogador.porcentagem = 0;
                }
                else {

                    jogador.vidaCombate = jogador.vidaCombate - inimigoGeral.danoCombate;

                    jogador.porcentagem = 100 - ((inimigoGeral.danoCombate / jogador.vida) * 100);
                    jogador.porcentagem = 100 - jogador.porcentagem;
                    jogador.porcentagem = jogador.porcentagem.toPrecision(2);

                    jogador.vidaPorcentagem = jogador.vidaPorcentagem - jogador.porcentagem;

                    inimigoGeral.manaCombate = inimigoGeral.manaCombate - inimigoGeral.manaGasto;

                    inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaGasto / inimigoGeral.mana) * 100);
                    inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                    inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                    inimigoGeral.manaPorcentagem = inimigoGeral.manaPorcentagem - inimigoGeral.porcentagem;
                }

                if (inimigoGeral.manaCombate < 0) {
                    inimigoGeral.manaCombate = 0;
                    inimigoGeral.manaPorcentagem = 0.1;
                }

                legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoGeral.nome} Atacou<br>Dano causado: ${inimigoGeral.danoCombate}<br>Mana usada: ${inimigoGeral.manaGasto}`);

            }
            else {
                inimigoGeral.manaCombate = inimigoGeral.manaCombate + inimigoGeral.manaRecuperacao;
                inimigoGeral.porcentagem = 100 - ((inimigoGeral.manaRecuperacao / inimigoGeral.mana) * 100);
                inimigoGeral.porcentagem = 100 - inimigoGeral.porcentagem;
                inimigoGeral.porcentagem = inimigoGeral.porcentagem.toPrecision(2);

                inimigoGeral.manaPorcentagem = parseInt(inimigoGeral.manaPorcentagem) + parseInt(inimigoGeral.porcentagem);

                legendaView.insertAdjacentHTML('beforeend', `<br>${inimigoGeral.nome} focou<br>Mana recuperada: ${inimigoGeral.manaRecuperacao}`);
            }
        }
    }
}
/*-----*/