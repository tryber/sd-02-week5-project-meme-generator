let selecaoImagem = document.getElementById("input-para-imagem");
let imagemMeme = document.getElementById("imagem-do-meme");
selecaoImagem.addEventListener('change', function(event){
    imagemMeme.src = URL.createObjectURL(event.target.files[0]);
});
let caixaTexto = document.getElementById("input-para-texto");
let textoMeme = document.getElementById("texto-do-meme");
caixaTexto.addEventListener('keyup', function() {
    textoMeme.innerText = this.value;
});