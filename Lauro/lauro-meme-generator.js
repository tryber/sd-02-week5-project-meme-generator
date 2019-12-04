
let abreArquivo = function(event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let caminhoImagem = reader.result;
      let imagemCarregada = document.getElementById('base-meme');
      imagemCarregada.src = caminhoImagem;
    };
    reader.readAsDataURL(input.files[0]);
};
 
let textoInserido = document.querySelector('#insere-texto-cima');

let textoMeme = document.querySelector('#texto-meme');

textoInserido.addEventListener('keyup', function() {
 	textoMeme.innerHTML = this.value;
})
