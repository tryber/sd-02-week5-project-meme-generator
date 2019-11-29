//Funções
printar();

//Variáveis
let resultado = document.querySelector("#output")
let imguser = document.querySelector("#file")
let textoSuperior = document.getElementById("textocima")
let textoInferior = document.getElementById("textobaixo")
let textoSuperiorFinal = document.getElementById("textofinalcima")
let textoInferiorFinal = document.getElementById("textofinalbaixo")

//Se o usuário upar uma imagem do computador
imguser.addEventListener('change', function (event){
    resultado.src = URL.createObjectURL(event.target.files[0]);
});

//Se o usuário escolher uma das imagens ofertadas na página
function printar() {
    let img = document.getElementsByClassName("imgcarregadas");
    console.log(img)
    for(let click of img) 
    click.addEventListener('click', function (event) {
        console.log(event)
        console.log(event.target)
        resultado.src = event.target.src
    
    })
}

//Usuário inserindo texto sobre a imagem
textoSuperior.addEventListener('keyup', function () {
   textoSuperiorFinal.innerHTML = textoSuperior.value;
})

textoInferior.addEventListener('keyup', function () {
    textoInferiorFinal.innerHTML = textoInferior.value;
})