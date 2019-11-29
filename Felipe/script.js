/* Insere texto do formulário na imagem */

let textoForm = document.querySelector(".caixaTexto")
let textoCaixa = document.querySelector(".textoNaImagem")

textoForm.addEventListener('keyup', function() {
    textoCaixa.innerText = textoForm.value;
})


/* Insere imagem no img */


let caminhoImgForm = document.getElementById('#botaoFoto')
let imagemFInal =