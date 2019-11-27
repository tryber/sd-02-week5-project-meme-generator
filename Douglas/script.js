window.onload = function() {
    let botao = document.getElementById('diretorio');
    let texto = document.getElementById("entrada");
    let escreve = document.getElementById("texto");
    let texto2 = document.getElementById("entrada2")
    let escreve2 = document.getElementById("texto1");
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    escreve.style.fontSize = '40px';
    escreve2.style.fontSize = '40px';

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


    texto.addEventListener('input', function() {
        if (texto.value.length > 100) {
            alert('É um meme e não a biblia');
        } else {
            escreve.innerHTML = texto.value;
        }
    })

    texto2.addEventListener('input', function() {
        if (texto2.value.length >= 90) {
            alert('É um meme e não a biblia');
        } else {
            escreve2.innerHTML = texto2.value;
        }
    })
    up.addEventListener('click', function() {

        if (parseInt(escreve.style.fontSize) >= 70) {
            alert('Pra que isso tudo de fonte');
        } else {
            escreve.style.fontSize = (parseInt(escreve.style.fontSize) + 10 + 'px');
            escreve2.style.fontSize = (parseInt(escreve2.style.fontSize) + 10 + 'px');
        }
    });
    down.addEventListener('click', function() {
        if (parseInt(escreve.style.fontSize) <= 20) {
            alert('Ai não vai dar nem pra ler');
        } else {
            escreve.style.fontSize = (parseInt(escreve.style.fontSize) - 10 + 'px');
            escreve2.style.fontSize = (parseInt(escreve2.style.fontSize) - 10 + 'px');
        }
    })

}