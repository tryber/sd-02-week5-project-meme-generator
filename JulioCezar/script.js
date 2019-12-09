/* global window . */

window.onload = function() {

  const inputDown = document.getElementById('input_textDown');
  inputDown.addEventListener('keyup', updateTextDown);
  const inputUp = document.getElementById('input_textUp');
  inputUp.addEventListener('keyup', updateTextUp);
  const imagem = document.getElementById('input_img');
  imagem.addEventListener('change', adicionarImagem);
  const buttonUp1 = document.getElementById('button_up_1');
  buttonUp1.addEventListener('click', fontSizeUpDown1);
  const buttonDown1 = document.getElementById('button_down_1');
  buttonDown1.addEventListener('click', fontSizeUpDown1);
  const buttonUp2 = document.getElementById('button_up_2');
  buttonUp2.addEventListener('click', fontSizeUpDown2);
  const buttonDown2 = document.getElementById('button_down_2');
  buttonDown2.addEventListener('click', fontSizeUpDown2);
  const buttonBorder = document.getElementById('button_border');
  buttonBorder.addEventListener('click', mudaBorda);
  const imagemDiv = document.getElementById('imagem_div_famosos');
  imagemDiv.addEventListener('click', adicionarImagemDestacada);
}

function mudaBorda(event) {
  const buttonStyle = getComputedStyle(document.getElementById('id_imagem_div'));
  const buttonBorder = buttonStyle.borderStyle;
  if (buttonBorder === 'solid'){
    document.getElementById('id_imagem_div').style.borderStyle = 'double';
  } else if (buttonBorder === 'dashed') {
    document.getElementById('id_imagem_div').style.borderStyle = 'solid';
  } else if (buttonBorder === 'double') {
    document.getElementById('id_imagem_div').style.borderStyle = 'dashed';
  }
}

function fontSizeUpDown1(event) {
  if (document.getElementById('button_up_1') === event.target) {
    const text = document.querySelector('#span_meme_text_up');
    const style = getComputedStyle(document.querySelector('#span_meme_text_up'));
    let tamanhoFont = parseInt(style.fontSize);
    let teste = tamanhoFont + 5;    
    if (teste <= 100) {
    text.style.fontSize = teste + 'px';        
    } else {
      alert('texto nao aumenta mais que 100px');
    }
  } else {
    const text = document.querySelector('#span_meme_text_up');
    const style = getComputedStyle(document.querySelector('#span_meme_text_up'));
    let tamanhoFont = parseInt(style.fontSize);
    let teste = tamanhoFont - 5;    
    if (teste >= 20) {
      text.style.fontSize = teste + 'px';
    } else {
      alert ('texto nao diminui mais que 10px');
    }
  }
}

function fontSizeUpDown2() {
  if (document.getElementById('button_up_2') === event.target) {
    const text = document.querySelector('#span_meme_text_down');
    const style = getComputedStyle(document.querySelector('#span_meme_text_down'));
    let tamanhoFont = parseInt(style.fontSize);
    let teste = tamanhoFont + 5;    
    if (teste <= 100) {
    text.style.fontSize = teste + 'px';        
    } else {
      alert('texto nao aumenta mais que 100px');
    }
  } else {
    const text = document.querySelector('#span_meme_text_down');
    const style = getComputedStyle(document.querySelector('#span_meme_text_down'));
    let tamanhoFont = parseInt(style.fontSize);
    let teste = tamanhoFont - 5;    
    if (teste >= 20) {
      text.style.fontSize = teste + 'px';
    } else {
      alert ('texto nao diminui mais que 10px');
    }
  }
}

function updateTextDown() {

  const inputText = document.getElementById('input_textDown').value;
  document.getElementById('span_meme_text_down').innerHTML = inputText;
  
}

function updateTextUp() {

  const inputText = document.getElementById('input_textUp').value;
  document.getElementById('span_meme_text_up').innerHTML = inputText;
  
}

function adicionarImagemDestacada(event) {
  const imagem = event.target;
  document.getElementById('imagem').src = imagem.src;
}

function adicionarImagem(event) {
  
  const imagem = document.getElementById('imagem');
  imagem.src = URL.createObjectURL(event.target.files[0]);

}
