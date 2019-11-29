// Primeiro eu clico na imagem

//Funções
printar()

//Variáveis
let resultado = document.querySelector("#output")

//Clico na imagem e coloco ela na moldura
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


function adicionandoImagem() {
    var img = document.getElementById("file")
}

function selecionaPopulares(){
    var populares = document.querySelector(".imgcarregadas")
    
}