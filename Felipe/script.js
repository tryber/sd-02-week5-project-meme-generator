const textoForm = document.querySelector('.caixaTexto');
const textoCaixa = document.querySelector('.textoNaImagem');

function colocaTextoCaixa() {
  textoCaixa.innerText = textoForm.value;
}

textoForm.addEventListener('keyup', colocaTextoCaixa);

const recebeFoto = document.querySelector('.imagemUnica');
const botaoFoto = document.querySelector('#botaoFoto');

function loadImage(event) {
  recebeFoto.src = window.URL.createObjectURL(event.target.files[0]);
}
botaoFoto.addEventListener('change', loadImage);
