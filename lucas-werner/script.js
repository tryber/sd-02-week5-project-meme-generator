let selecionarImagem = document.getElementById("pick-img");
selecionarImagem.addEventListener ('change', function() {
    criarImagem () })

function criarImagem () {
    
    let imgEscolhida = document.getElementById("print-img");
        imgEscolhida.src = URL.createObjectURL(event.target.files[0]);
        imgEscolhida.style.width = "450px";
        imgEscolhida.style.height = "450px";
         
    }


let selecionarTexto = document.getElementById("insert-txt");
   
selecionarTexto.addEventListener ('input', function() {
    criarTexto() })

function criarTexto () {
    
   document.getElementById("upper-txt").innerHTML = selecionarTexto.value

}
