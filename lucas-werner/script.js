let selecionarImagem = document.getElementById("pick-img");
selecionarImagem.addEventListener ('change', function() {
    criarImagem () })

function criarImagem () {
    
    let imgEscolhida = document.getElementById("print-img");
        imgEscolhida.src = URL.createObjectURL(event.target.files[0]);
        imgEscolhida.style.width = "600px";
        imgEscolhida.style.height = "600px";
         
    }


let selecionarTexto = document.getElementById("insert-txt");
   
selecionarTexto.addEventListener ('input', function() {
    criarTexto() })

function criarTexto () {
    
   document.getElementById("print-txt").innerHTML = selecionarTexto.value

}
