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
const selecionado = {
  element: {},
  select() { this.element.style.borderStyle = 'dashed' },
  unselect() { this.element.style.borderStyle = 'none' }
          };

const unselect = document.createElement('p');
const moldura = document.querySelectorAll('.moldura .material-icons');

selecionado.element = unselect;

function condicionMoldura(condicao, border) {
  if (condicao) { image.className = ''; image.classList.add(border); }
}

moldura.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    condicionMoldura(e.target.style.color === 'black', 'borderBlack');
    condicionMoldura(e.target.style.color === 'white', 'borderWhite');
    condicionMoldura(e.target.style.color === 'rgb(7, 39, 66)', 'borderLess');
  });
});

inputUp.addEventListener('input', () => {
  textUp.innerText = inputUp.value;
});

inputDown.addEventListener('input', () => {
  textDown.innerText = inputDown.value;
});

function condicaoTextUpDown(condicao, e, color) {
  if (condicao) { e.target.style.backgroundColor = color; }
}


[textUp, textDown].forEach((elem) => {
  ['mouseover','mouseleave','click'].forEach((eventName) => {
      elem.addEventListener(eventName, (e) => {
        condicaoTextUpDown(e.type === 'mouseover', e, 'black');
        condicaoTextUpDown(e.type === 'mouseleave', e, 'transparent');
        if (e.type === 'click') { selecionado.unselect(); selecionado.element = elem; selecionado.select();}
    });
  });
});



icones.forEach((elem) => {
  elem.addEventListener('click', () => {
    console.log(selecionado.element.style)
    if (selecionado.element.style !== undefined) {
      const size = selecionado.element.style.fontSize;
      switch(elem.innerText) {
        case 'exposure_neg_1':
          selecionado.element.style.fontSize = `${parseInt(size.slice(0, size.length-2), 10) - 1}px`;
          sizeSwitchCase(-1);
          break;
        case 'exposure_plus_1':
          selecionado.element.style.fontSize = `${parseInt(size.slice(0, size.length-2), 10) + 1}px`;
          sizeSwitchCase(+1);
          break;
        case 'format_bold':
          selecionado.element.style.fontWeight == 'normal' ? selecionado.element.style.fontWeight = 'bold' : selecionado.element.style.fontWeight = 'normal';
          break;
        case 'format_align_center':
          selecionado.element.style.textAlign = 'center';
          break;
        case 'format_align_left':
          selecionado.element.style.textAlign = 'left';
          break;
        case 'format_align_right':
          selecionado.element.style.textAlign = 'right';
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

['mouseover','dragenter', 'dragover'].forEach((eventName) => {
  dropAreaAddEventListener(eventName, highlight);
});

['mouseleave','dragleave', 'drop'].forEach((eventName) => {
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
