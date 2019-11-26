function carregaImagem(event) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.alt = "gerador de memes";
};