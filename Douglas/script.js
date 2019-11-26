let botao = document.getElementById('diretorio');
botao.addEventListener('change', function() {
    let image = document.getElementById('pegarTag');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.alt = "gerador de memes";
    image.style.width = "900px";
    image.style.height = "500px";
});
let texto = document.getElementById("entrada");
texto.addEventListener('keydown', function() {
    let escreve = document.getElementById("texto");
    escreve.innerHTML = texto.value;
})