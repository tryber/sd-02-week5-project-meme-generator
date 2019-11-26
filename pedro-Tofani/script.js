let areaFigura = document.getElementById('boxConteudo');
let imagem = document.getElementById('arquivo');
let textoCima = document.getElementById('textoCima');
let textoBaixo = document.getElementById('textoBaixo');
let img1 = document.getElementsByClassName('imgPequenas')[0];
let img2 = document.getElementsByClassName('imgPequenas')[1];
let img3 = document.getElementsByClassName('imgPequenas')[2];
let letraCima = document.getElementById('letraCima');
let letraBaixo = document.getElementById('letraBaixo');
let corBorda = document.getElementById('corBorda');
let bordaSelecionar = document.getElementById('boxConteudo');
let imgMeme = document.getElementById('imgMeme');


img1.addEventListener('click', setImgMeme);
img2.addEventListener('click', setImgMeme);
img3.addEventListener('click', setImgMeme);
function setImgMeme() {
    imgMeme.src = this.src
}

corBorda.addEventListener('change', colorirBorda);
function colorirBorda() {
    bordaSelecionar.style.borderColor = this.value;
}