// Variáveis
const resultado = document.querySelector('#output');
const imguser = document.querySelector('#file');
const textoSuperior = document.getElementById('textocima');
const textoInferior = document.getElementById('textobaixo');
const textoSuperiorFinal = document.getElementById('textofinalcima');
const textoInferiorFinal = document.getElementById('textofinalbaixo');

// Se o usuário upar uma imagem do computador
imguser.addEventListener('change', function (event) {
    resultado.src = URL.createObjectURL(event.target.files[0]);
});

// Se o usuário escolher uma das imagens ofertadas na página
function printar() {
    const img = document.getElementsByClassName('imgcarregadas');
    for (const click of img){
        click.addEventListener('click', function (event) {
            resultado.src = event.target.src
        });
    }
}

// Usuário inserindo texto sobre a imagem
textoSuperior.addEventListener('keyup', function () {
    textoSuperiorFinal.innerHTML = textoSuperior.value;
});

textoInferior.addEventListener('keyup', function () {
    textoInferiorFinal.innerHTML = textoInferior.value;
});

// Funções
printar();
