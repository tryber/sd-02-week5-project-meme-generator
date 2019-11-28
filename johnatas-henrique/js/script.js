const divTextoBaixo = document.querySelector('.texto-baixo');
const carregarTexto = document.querySelector('.caixa-texto-input');
const recebeTexto = document.createElement('p');
recebeTexto.classList += 'texto-meme-baixo';
divTextoBaixo.appendChild(recebeTexto);

function loadText() {
  recebeTexto.innerHTML = carregarTexto.value;
}

carregarTexto.addEventListener('keyup', loadText);

const recebeFoto = document.getElementById('img-foto');
const botaoFoto = document.getElementById('botao-foto');

function loadImage(event) {
  recebeFoto.src = URL.createObjectURL(event.target.files[0]);
}

botaoFoto.addEventListener('change', loadImage);
