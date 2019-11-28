divTextoBaixo = document.querySelector('.texto-baixo');
carregarTexto = document.querySelector('.caixa-texto-input');
recebeTexto = document.createElement('p');
recebeTexto.classList += 'texto-meme-baixo';
divTextoBaixo.appendChild(recebeTexto);

carregarTexto.addEventListener('keyup', function() {
    recebeTexto.innerHTML = carregarTexto.value;
});

recebeFoto = document.getElementById('img-foto');
botaoFoto = document.getElementById('botao-foto');

botaoFoto.addEventListener('change', function(event) {
    recebeFoto.src = URL.createObjectURL(event.target.files[0]);
});
