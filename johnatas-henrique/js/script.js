const divTextoBaixo = document.querySelector('.texto-baixo');
const carregarTexto = document.querySelector('.caixa-texto-input');
const recebeTexto = document.createElement('p');
recebeTexto.classList += 'texto-meme-baixo';
divTextoBaixo.appendChild(recebeTexto);

carregarTexto.addEventListener('keyup', loadText);

function loadText() {
  recebeTexto.innerHTML = carregarTexto.value;
}

const recebeFoto = document.getElementById('img-foto');
const botaoFoto = document.getElementById('botao-foto');

botaoFoto.addEventListener('change', loadImage);

function loadImage(event) {
  recebeFoto.src = URL.createObjectURL(event.target.files[0]);
}
