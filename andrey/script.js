const inputUp = document.querySelector('.up textarea');
const textUp = document.querySelector('p.textUp');

const inputDown = document.querySelector('.down textarea');
const textDown = document.querySelector('p.textDown');

const image = document.querySelector('.meme img');
const opcoes = document.querySelector('.opcoes');

const dropArea = document.querySelector('.dropArea');

const btnReset = document.querySelector('button.reset');
const btnResetSpan = document.querySelector('button.reset span');
const btnResetIcon = document.querySelector('button.reset .material-icons');
const icones = document.querySelectorAll('.optionsText i');
const selecionado = [];

const moldura = document.querySelectorAll('.moldura .material-icons');

function condicionMoldura(condicao , border) {
  if(condicao) { image.className = ''; image.classList.add(border); }  
}

moldura.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    condicionMoldura(e.target.style.color == 'black', 'borderBlack');
    condicionMoldura(e.target.style.color == 'white', 'borderWhite');
    condicionMoldura(e.target.style.color == 'rgb(7, 39, 66)', 'borderLess');
  });
});

inputUp.addEventListener('input', (e) => {
  textUp.innerText = inputUp.value;
});

inputDown.addEventListener('input', (e) => {
  textDown.innerText = inputDown.value;
});

function condicaoTextUpDown(condicao, color) {
  if(condicao) {e.target.style.backgroundColor = color;}
}

;[textUp, textDown].forEach((elem) => {
  ;['mouseover','mouseleave','click'].forEach((eventName) => {
      elem.addEventListener(eventName, (e) => {
        condicaoTextUpDown(e.type == 'mouseover', 'black');
        condicaoTextUpDown(e.type == 'mouseleave', 'transparent');
        if(e.type == 'click') { selecionado.pop(); selecionado.push(e.target); }
    });
  });
});

icones.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if(selecionado[0] !== undefined){
      let size = selecionado[0].style.fontSize;
    switch(elem.innerText) {
      case 'exposure_neg_1':
        selecionado[0].style.fontSize = `${parseInt(size.slice(0, size.length-2)) - 1}px`;
        break;
      case 'exposure_plus_1':
        selecionado[0].style.fontSize = `${parseInt(size.slice(0, size.length-2)) + 1}px`;
        break;
      case 'format_bold':
        console.log(selecionado[0].style.fontWeight == 'normal')
        selecionado[0].style.fontWeight == 'normal' ? selecionado[0].style.fontWeight = 'bold' : selecionado[0].style.fontWeight = 'normal';
        break;  
      case 'format_align_center':
        selecionado[0].style.textAlign = 'center';
        break; 
      case 'format_align_left':
        selecionado[0].style.textAlign = 'left';
        break; 
      case 'format_align_right':
        selecionado[0].style.textAlign = 'right';
        break;    
      default:
        console.log();
      }
    }
});
});

opcoes.querySelectorAll('figure').forEach((item) => {
  item.addEventListener('click', (e) => {
    image.setAttribute('src', `${e.target.getAttribute('src')}`);
  });
});

function styelResetBtn( color1, color2) {
  btnReset.style.backgroundColor = color1;
  btnResetSpan.style.color = color2;
  btnResetIcon.style.color = color2;
}

btnReset.addEventListener('mouseleave', styelResetBtn('white', '#072742'));
btnReset.addEventListener('mouseover', styelResetBtn('#072742', 'white'));
      
function dropAreaAddEventListener(eventName, param){
  dropArea.addEventListener(eventName, param, false);
}

;['mouseover','dragenter', 'dragover'].forEach((eventName) => {
  dropAreaAddEventListener(eventName, highlight);
});

;['mouseleave','dragleave', 'drop'].forEach((eventName) => {
  dropAreaAddEventListener(eventName, unhighlight);
});


function highlight() {
  dropArea.classList.add('highlight');
}

function unhighlight() {
  dropArea.classList.remove('highlight');
}

function reset() {
  textUp.style.fontSize = '40px';
  textUp.style.fontWeight = 'normal';
  textUp.style.textAlign = 'center';
  textDown.style.fontSize = '40px';
  textDown.style.fontWeight = 'normal';
  textDown.style.textAlign = 'center';
}

function previewFile() {
  const preview = document.querySelector('.meme img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}
