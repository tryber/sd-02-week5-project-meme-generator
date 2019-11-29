/* Insere texto do formulário na imagem */

const textoForm = document.querySelector('.caixaTexto');
const textoCaixa = document.querySelector('.textoNaImagem');

textoForm.addEventListener('keyup', function colocaTextoCaixa() {
  textoCaixa.innerText = textoForm.value;
});


/* Insere imagem no img */

const recebeFoto = document.querySelector('.imagemUnica');
const botaoFoto = document.querySelector('#botaoFoto');

function loadImage(event) {
  recebeFoto.src = window.URL.createObjectURL(event.target.files[0]);
}

botaoFoto.addEventListener('change', loadImage);
