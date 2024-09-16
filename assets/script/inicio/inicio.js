/*-----*//*-----*//*-----*//*-----*//*-----*/
/*-INICIO-*/
botaoInicio.addEventListener('click', () => {
    inicio.style.display = 'none';
    escolhaGenero.style.display = 'contents';
});

botaoInicio.addEventListener('mouseover', () => {
    botaoInicio.style.animation = 'botaoAnimacao 2s 0ms infinite running';
    botaoInicio.style.background = 'gray';
});
botaoInicio.addEventListener('mouseout', () => {
    botaoInicio.style.background = 'black';
    botaoInicio.style.transform = 'scale(1.0)';
    botaoInicio.style.animation = 'paused';
});
/*-----*//*-----*//*-----*//*-----*//*-----*/
