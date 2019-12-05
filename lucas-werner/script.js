const selecionarImagem = document.getElementById('pick-img');
const selecionarTextoCima = document.getElementById('insert-upper-txt');
const selecionarTextoBaixo = document.getElementById("insert-lower-txt");
let selecionarTexto = document.getElementsByClassName('meme-txt');
let imgEscolhida = document.getElementById('print-img');
let clickUpsize = document.getElementById('upsize');
let clickDownsize = document.getElementById('downsize');
selecionarTexto[0].style.fontSize = '40px';
selecionarTexto[1].style.fontSize = '40px';
  
function criarImagem (){    
  imgEscolhida.src = URL.createObjectURL(event.target.files[0]);
  imgEscolhida.style.width = '450px';
  imgEscolhida.style.height = '450px';
};
function criarTextoCima () {
  document.getElementById('upper-txt').innerHTML = selecionarTextoCima.value;
};
function criarTextoBaixo () {
  document.getElementById('lower-txt').innerHTML = selecionarTextoBaixo.value;
};
function tamanhoLetra() {
  switch (this.id) {
    case 'upsize':
      selecionarTexto[0].style.fontSize = (parseInt(selecionarTexto[0].style.fontSize) + 5 + 'px');
      selecionarTexto[1].style.fontSize = (parseInt(selecionarTexto[1].style.fontSize) + 5 + 'px');
    break;
    case 'downsize':
      selecionarTexto[0].style.fontSize = (parseInt(selecionarTexto[0].style.fontSize) - 5 + 'px');
      selecionarTexto[1].style.fontSize = (parseInt(selecionarTexto[1].style.fontSize) - 5 + 'px');
    break;
  }
};
selecionarImagem.addEventListener('change', criarImagem); 
selecionarTextoCima.addEventListener('input', criarTextoCima);
selecionarTextoBaixo.addEventListener ('input', criarTextoBaixo);
clickDownsize.addEventListener('click', tamanhoLetra);
clickUpsize.addEventListener('click', tamanhoLetra);