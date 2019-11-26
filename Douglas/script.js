window.onload = function() {
    let botao = document.getElementById('diretorio');

    function criaImagem() {
        let image = document.getElementById('pegarTag');
        image.src = URL.createObjectURL(event.target.files[0]);
        image.alt = "gerador de memes";
        image.style.width = "900px";
        image.style.height = "500px";
    }

    botao.addEventListener('change', function() {
        criaImagem();
    });

    let texto = document.getElementById("entrada");

    texto.addEventListener('input', function() {
        let escreve = document.getElementById("texto");
        escreve.innerHTML = texto.value;

    })
    let texto2 = document.getElementById("entrada2")
    texto2.addEventListener('input', function() {
        let escreve = document.getElementById("texto1");
        escreve.innerHTML = texto2.value;
    })
}