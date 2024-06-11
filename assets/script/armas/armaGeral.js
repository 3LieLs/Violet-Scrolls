/*-----*//*-----*//*-----*//*-----*//*-----*/
var armaGeral =
{
    nome: '', val: '', obtido: false, peso: 0, preco: 0,

    danoBase: 0, danoCombate: 0, tipoDano: '', somAtaque: '',
    debuff: '', chance: 0, duracao: 0,

    energiaCusto: 0, energiaCustoCombate: 0, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var soco =
{
    nome: 'Soco', val: 'soco', obtido: false, peso: 0, preco: 0,

    danoBase: 1, danoCombate: 1, tipoDano: 'Físico', somAtaque: '/assets/content/audio/EfeitoSonoroAtaque/Punch.mp3',
    debuff: 'Nenhum', chance: 0, duracao: 0,

    energiaCusto: 1, energiaCustoCombate: 1, manaCusto: 0, manaCustoCombate: 0,
}
/*-----*//*-----*//*-----*//*-----*//*-----*/

/*-----*//*-----*//*-----*//*-----*//*-----*/
var geralObtido, geralPreco, geralRemover, geralAdicionar, lojistaPecitas, lojista

function geralComprar() {
    if (geralObtido == false) {
        if (localMapa == 'vendedor') {
            lojista = `${vendedor.nome}`
            lojistaPecitas = `${vendedor.pecitas}`
        }
        if (localMapa == 'ferreiro') {
            lojista = `${ferreiro.nome}`
            lojistaPecitas = `${ferreiro.pecitas}`
        }
        if (localMapa == 'feiticeiro') {
            lojista = `${feiticeiro.nome}`
            lojistaPecitas = `${feiticeiro.pecitas}`
        }

        if (jogador.pecitas - geralPreco >= 0) {
            geralAdicionar()
            adicionarItem()

            jogador.pecitas -= geralPreco;
            lojistaPecitas += geralPreco

            if (localMapa == 'vendedor') {
                vendedor.pecitas = lojistaPecitas
            }
            if (localMapa == 'ferreiro') {
                ferreiro.pecitas = lojistaPecitas
            }
            if (localMapa == 'feiticeiro') {
                feiticeiro.pecitas = lojistaPecitas
            }
        }
        else {
            alert(`Você não possui pecitas suficiente`);
        }
    }
    else {
        alert('Você já possui este item');
    }
}
/*-----*/
function geralVender() {
    if (geralObtido == true) {
        if (localMapa == 'vendedor') {
            lojista = `${vendedor.nome}`
            lojistaPecitas = `${vendedor.pecitas}`
        }
        if (localMapa == 'ferreiro') {
            lojista = `${ferreiro.nome}`
            lojistaPecitas = `${ferreiro.pecitas}`
        }
        if (localMapa == 'feiticeiro') {
            lojista = `${feiticeiro.nome}`
            lojistaPecitas = `${feiticeiro.pecitas}`
        }

        if (lojistaPecitas - geralPreco >= 0) {
            geralRemover()
            removerItem()

            jogador.pecitas += geralPreco;
            lojistaPecitas -= geralPreco

            if (localMapa == 'vendedor') {
                vendedor.pecitas = lojistaPecitas
            }
            if (localMapa == 'ferreiro') {
                ferreiro.pecitas = lojistaPecitas
            }
            if (localMapa == 'feiticeiro') {
                feiticeiro.pecitas = lojistaPecitas
            }
        }
        else {
            alert(`${lojista} não possui pecitas suficiente`);
        }
    }
    else {
        alert('Você não possui este item');
    }
}
/*-----*//*-----*//*-----*//*-----*//*-----*/