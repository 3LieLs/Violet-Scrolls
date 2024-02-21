/*-INIMIGO HUD-*/
function inimigoCombateHud() {
    inimigoHudNome.innerHTML = `${inimigoGeral.nome}`;

    inimigoHudVida.innerHTML = `Vida: ${inimigoGeral.vidaCombate}`;
    inimigoHudVida.style.backgroundSize = `${inimigoGeral.vidaPorcentagem}% 100%`;

    if (inimigoGeral.energiaBase > 0) {
        inimigoHudEnergia.style.visibility = 'visible'
        inimigoHudEnergia.innerHTML = `Energia: ${inimigoGeral.energiaCombate}`;
        inimigoHudEnergia.style.background = `url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUXFRUVFxcXFxUVFRcXFRUXFxUVFxUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8PFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBv/EACMQAQEBAAECBQUAAAAAAAAAAAABEQIS8DFhcYGRIUFRsdH/xAAZAQEBAQADAAAAAAAAAAAAAAAAAQIDBAb/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARFBMf/aAAwDAQACEQMRAD8A8SGjoPMgi6gEgJARRRJQKCykVKgqBqi6srKiCiAqKlURqIVAqLCKqYaLARYiwD2VekEYICKAmINRKYYQAKBQqKLpaYYAixLAXiqRoExYiiETkQoEpQAotQURYgEWBGhRARA0SqCogCwQTUVAWwsTFihhCpgNUqRbAFQEUKkALRQTQBRUWCJASKosDQNBVGdEolFIYVkVIshATCmlAxcSrKBSEIolWiaClARbUwXASVUAAAVAADEFFkZjUUNE2KDIWgotRrGUQWBRAsQFUkAIShFApQBU1URBUxdDVEwAJTQFQFKlq1MAIGqCmgMKCVSKmqgRcRYlQotIIlAFCBGgqVpmgRSKlRFKgKkUUTEWqKlFoIiFQUxqJF4qGC7ATWCANCosZDFSLoi6gVMQKSLFogRQSlIgqxUlVUSCiCRRKouJVAQwKAi0FRYUii6AiMUBa0LIggGLoiBQBdEUARYoAASrExcSoAmEFEUEIYAVSiiJWmcFUiasUXfL9/0OkTUc7Rai1pQRBoIIgABVSrihiYsQFxUERSGqghIKozVAEC1cBC0wsUE1cZosVeLMaildOn0+RnPUGXOxNWoNqIqCgVEC0IClRQIYChhgVPAiooiiKCCognJC0iqupVgoVmNJYBixFijWhnlPiCYy5VUsWK2CWKgLqKIAsBFMAE1qIAUKiEWJF0AgAtZ5U0BIYIqtVAgLE0QF1ZEWKN75QXO/oJtYcSlFciKQQNVAF1bELRCUIkBVglBUxSAAmApBAVBAWAgNQTQAXQE1UqyqNB39hGWNRaitixFQSrEoBFRaBoi0QgkAUoAasSgAIC4FXQEXUAgGgAUCLGVUdfYZ6kNZxiqtRWiFSLWVQUESrogq2iUEDjU1YtVYCIBKSEAABVQEXWVioIaUUEAUb4sNRUrYnuDLHLxKC8aRYDKgoIyvJQGaAKy1ACkAQW+DILQnj3+GooJUq0ASLQSjMAVUoANNcQVKAA//2Q==);`;
        inimigoHudEnergia.style.backgroundSize = `${inimigoGeral.energiaPorcentagem}% 100%`;
    }

    if (inimigoGeral.manaBase > 0) {
        inimigoHudMana.style.visibility = 'visible'
        inimigoHudMana.innerHTML = `Mana: ${inimigoGeral.manaCombate}`;
        inimigoHudMana.style.background = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC);`;
        inimigoHudMana.style.backgroundSize = `${inimigoGeral.manaPorcentagem}% 100%`;
    }
}
/*-----*/


/*-----*/
var funcaoInimigoAtaque
/*-----*/


/*-----*/
var inimigoArmaGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*/


/*-INIMIGO ATAQUE-*/
function inimigoAtaque() {
    if (inimigoGeral.vidaCombate > 0) {
        funcaoInimigoAtaque()
    }
}
/*-----*/


/*-----*/
function aplicarFraquezaResistenciaJogador() {
    if (racaGeral.fraqueza == inimigoArmaGeral.tipoDano) {
        let aumentarDano = inimigoArmaGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        inimigoArmaGeral.danoCombate += aumentarDano
    }

    if (racaGeral.fraqueza == magiaDanoGeral.tipoDano) {
        let aumentarDano = magiaDanoGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        magiaDanoGeral.danoCombate += aumentarDano
    }


    if (racaGeral.resistencia == inimigoArmaGeral.tipoDano) {
        let aumentarDano = inimigoArmaGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        inimigoArmaGeral.danoCombate -= aumentarDano
    }

    if (racaGeral.resistencia == magiaDanoGeral.tipoDano) {
        let aumentarDano = magiaDanoGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        magiaDanoGeral.danoCombate -= aumentarDano
    }
}

function desaplicarFraquezaResistenciaJogador() {
    if (racaGeral.fraqueza == inimigoArmaGeral.tipoDano) {
        let aumentarDano = inimigoArmaGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        inimigoArmaGeral.danoCombate -= aumentarDano
    }

    if (racaGeral.fraqueza == magiaDanoGeral.tipoDano) {
        let aumentarDano = magiaDanoGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        magiaDanoGeral.danoCombate -= aumentarDano
    }


    if (racaGeral.resistencia == inimigoArmaGeral.tipoDano) {
        let aumentarDano = inimigoArmaGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        inimigoArmaGeral.danoCombate += aumentarDano
    }

    if (racaGeral.resistencia == magiaDanoGeral.tipoDano) {
        let aumentarDano = magiaDanoGeral.danoBase * 0.15
        aumentarDano = Math.round(aumentarDano)
        magiaDanoGeral.danoCombate += aumentarDano
    }
}
/*-----*/


/*-----*/
function verificarDebuffArmaInimigo() {
    if (inimigoArmaGeral.debuff == 'veneno') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffVeneno.jogador == false) {
            rodadaDebuffVenenoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffVeneno.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} envenenou ${jogador.nome}`);
        }
    }

    if (inimigoArmaGeral.debuff == 'chamas') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffChamas.jogador == false) {
            rodadaDebuffChamasMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffChamas.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} incendiou ${jogador.nome}`);
        }
    }

    if (inimigoArmaGeral.debuff == 'congelado') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffCongelado.jogador == false) {
            rodadaDebuffCongeladoMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffCongelado.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} congelou ${jogador.nome}`);
        }
    }

    if (inimigoArmaGeral.debuff == 'eletricidade') {
        let x = Math.floor(Math.random() * 100) + 0;

        if (x < inimigoArmaGeral.chance && debuffEletricidade.jogador == false) {
            rodadaDebuffEletricidadeMax.jogador = parseInt(rodada) + parseInt(inimigoArmaGeral.duracao)
            debuffEletricidade.jogador = true

            legendaView.insertAdjacentHTML('beforeend', `<br><br>${inimigoArmaGeral.nome} eletrizou ${jogador.nome}`);
        }
    }
}
/*-----*/