function carregaImagem(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.alt = "gerador de memes";
};