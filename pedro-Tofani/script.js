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
let corLetra = document.getElementById('corTexto');
let selecionarTexto = document.getElementsByClassName('escrito')
let clickLetraCima = document.getElementById('letraCima')
let clickLetraBaixo = document.getElementById('letraBaixo')
selecionarTexto[0].style.fontSize = '30px';
selecionarTexto[1].style.fontSize = '30px';

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

corLetra.addEventListener('change', trocarCorLetra);
function trocarCorLetra() {
    selecionarTexto[0].style.color = this.value;
    selecionarTexto[1].style.color = this.value;
}

clickLetraBaixo.addEventListener('click', tamanhoLetra);
clickLetraCima.addEventListener('click', tamanhoLetra);
function tamanhoLetra() {
    if (this.id == 'letraCima') {
        if (selecionarTexto[0].offsetHeight < 300 && selecionarTexto[1].offsetHeight < 300) {
            selecionarTexto[0].style.fontSize = (parseInt(selecionarTexto[0].style.fontSize) + 10 + 'px');
            selecionarTexto[1].style.fontSize = (parseInt(selecionarTexto[1].style.fontSize) + 10 + 'px');
        }
    };
    if (this.id == 'letraBaixo') {
        selecionarTexto[0].style.fontSize = (parseInt(selecionarTexto[0].style.fontSize) - 10 + 'px');
        selecionarTexto[1].style.fontSize = (parseInt(selecionarTexto[1].style.fontSize) - 10 + 'px');
    }
}

imagem.addEventListener('change', adicionarImagem);
function adicionarImagem(event) {
    imgMeme.src = URL.createObjectURL(event.target.files[0]);
}

textoCima.addEventListener('input', parteCima);
function parteCima() {
    let selecionarTextoNoMeme = document.getElementById('escritoCima')
    selecionarTextoNoMeme.innerHTML = textoCima.value
    if (selecionarTextoNoMeme.innerHTML.length > 100) {
        alert('Você não está escrevendo uma bíblia!');
        let cortado = selecionarTextoNoMeme.innerHTML.slice(0, -1);
        textoCima.value = cortado;
    }
}

textoBaixo.addEventListener('input', parteBaixo)
function parteBaixo() {
    let selecionarTextoNoMeme = document.getElementById('escritoBaixo')
    selecionarTextoNoMeme.innerHTML = textoBaixo.value
    if (selecionarTextoNoMeme.innerHTML.length > 100) {
        alert('Você não está escrevendo uma bíblia!')
        let cortado = selecionarTextoNoMeme.innerHTML.slice(0, -1);
        textoBaixo.value = cortado;
    }
}
