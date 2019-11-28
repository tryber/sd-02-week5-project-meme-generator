// let inputSelecaoImagem = document.querySelector("imagem");
// inputSelecaoImagem.style.opacity = 0;
// inputSelecaoImagem.addEventListener("change", updateImageDisplay);

const imagemEscolhida = document.getElementById('imagem');
imagemEscolhida.addEventListener('change', function (event) {
  const imagemUpload = document.getElementById('imagemSelecionada');
  imagemUpload.src = URL.createObjectURL(event.target.files[0]);
});

const textoSuperior = document.getElementsByClassName('inputTexto')[0];
textoSuperior.addEventListener('keyup', function () {
  const imprimirTexto = document.getElementById('textoCima');
  imprimirTexto.innerHTML = textoSuperior.value;
});

const textoInferior = document.getElementsByClassName('inputTexto')[1];
textoInferior.addEventListener('keyup', function () {
  const imprimirTexto = document.getElementById('textoBaixo');
  imprimirTexto.innerHTML = textoInferior.value;
});
