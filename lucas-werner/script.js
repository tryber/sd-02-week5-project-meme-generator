let selecionarImagem = document.getElementById("pick-img")

console.log(selecionarImagem)

selecionarImagem.addEventListener ('change', function() {
    criarImagem () })

function criarImagem () {
    
    let imgEscolhida = document.getElementById("print-img");
        imgEscolhida.src = URL.createObjectURL(event.target.files[0]);
        imgEscolhida.style.width = "300px"
        imgEscolhida.style.height = "400px"
         
    }

 