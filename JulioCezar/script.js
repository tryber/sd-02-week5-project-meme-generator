/* global window . */

window.onload = function() {

  const inputDown = document.getElementById('input_textDown');
  inputDown.addEventListener('keyup', updateTextDown);
  const inputUp = document.getElementById('input_textUp');
  inputUp.addEventListener('keyup', updateTextUp);
  const imagem = document.getElementById('input_img');
  imagem.addEventListener('change', adicionarImagem);

}

function updateTextDown() {

  const inputText = document.getElementById('input_textDown').value;
  document.getElementById('span_meme_text_down').innerHTML = inputText;
  
}

function updateTextUp() {

  const inputText = document.getElementById('input_textUp').value;
  document.getElementById('span_meme_text_up').innerHTML = inputText;
  
}

function adicionarImagem(event) {
  
  const imagem = document.getElementById('imagem');
  imagem.src = URL.createObjectURL(event.target.files[0]);

}
