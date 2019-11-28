// let inputSelecaoImagem = document.querySelector("imagem");
// inputSelecaoImagem.style.opacity = 0;
// inputSelecaoImagem.addEventListener("change", updateImageDisplay);

let imagemEscolhida = document.getElementById("imagem");
imagemEscolhida.addEventListener("change", function(event) {
    let imagemUpload = document.getElementById("imagemSelecionada");
    imagemUpload.src = URL.createObjectURL(event.target.files[0]);
})

let textoSuperior = document.getElementsByClassName("inputTexto")[0];
textoSuperior.addEventListener("keyup", function() {
    let imprimirTexto = document.getElementById("textoCima");
    imprimirTexto.innerHTML = textoSuperior.value;
}); 

let textoInferior = document.getElementsByClassName("inputTexto")[1];
textoInferior.addEventListener("keyup", function() {
    let imprimirTexto = document.getElementById("textoBaixo");
    imprimirTexto.innerHTML = textoInferior.value;
}); 

