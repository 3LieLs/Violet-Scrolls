var botaoMapa = window.document.querySelector('input#botaoMapa')
botaoMapa.addEventListener('click', botaoMapaClick)

function botaoMapaClick() {
    local = 'mapa'
    mapaDisplay.style.display = 'contents'

    taverna.style.display = 'none'
    vendedorDisplay.style.display = 'none'
    ferreiroDisplay.style.display = 'none'
    feiticeiroDisplay.style.display = 'none'
}



var mapaTaverna = window.document.querySelector('input#mapaTaverna')
mapaTaverna.addEventListener('click', mapaTavernaClick)

function mapaTavernaClick() {
    mapaDisplay.style.display = 'none'
    local = 'taverna'
    taverna.style.display = 'contents'
}



var mapaVendedor = window.document.querySelector('input#mapaVendedor')
mapaVendedor.addEventListener('click', mapaVendedorClick)

function mapaVendedorClick() {
    mapaDisplay.style.display = 'none'
    local = 'vendedor'
    vendedorDisplay.style.display = 'contents'
}



var mapaFerreiro = window.document.querySelector('input#mapaFerreiro')
mapaFerreiro.addEventListener('click', mapaFerreiroClick)

function mapaFerreiroClick() {
    mapaDisplay.style.display = 'none'
    local = 'ferreiro'
    ferreiroDisplay.style.display = 'contents'
}



var mapaFeiticeiro = window.document.querySelector('input#mapaFeiticeiro')
mapaFeiticeiro.addEventListener('click', mapaFeiticeiroClick)

function mapaFeiticeiroClick() {
    mapaDisplay.style.display = 'none'
    local = 'feiticeiro'
    feiticeiroDisplay.style.display = 'contents'
}



var mapaFloresta = window.document.querySelector('input#mapaFloresta')
mapaFloresta.addEventListener('click', mapaFlorestaClick)

function mapaFlorestaClick() {
    mapaDisplay.style.display = 'none'
    local = 'floresta'
    florestaDisplay.style.display = 'contents'
}



var mapaCaverna = window.document.querySelector('input#mapaCaverna')
mapaCaverna.addEventListener('click', mapaCavernaClick)

function mapaCavernaClick() {
    mapaDisplay.style.display = 'none'
    local = 'caverna'
    cavernaDisplay.style.display = 'contents'
}
