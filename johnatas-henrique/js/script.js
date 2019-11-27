divTextoBaixo = document.querySelector('.texto-baixo');
carregaTexto = document.querySelector('.caixa-texto-input');
recebeTexto = document.createElement('p');
recebeTexto.classList += 'texto-meme-baixo';

divTextoBaixo.appendChild(recebeTexto);

carregaTexto.addEventListener('keyup', function() {
    recebeTexto.innerHTML = carregaTexto.value;
    return recebeTexto.innerHTML;
});