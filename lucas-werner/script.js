let selecionarImagem = document.getElementById("pick-img");
selecionarImagem.addEventListener ('change', criarImagem);

function criarImagem () {
    
    let imgEscolhida = document.getElementById("print-img");
        console.log(event.target.files[0]);
        imgEscolhida.src = URL.createObjectURL(event.target.files[0]);
        imgEscolhida.style.width = "450px";
        imgEscolhida.style.height = "450px";
         
    }


let selecionarTextoCima = document.getElementById("insert-upper-txt");
   
selecionarTextoCima.addEventListener ('input', function() {
    criarTextoCima() })

function criarTextoCima () {
    
   document.getElementById("upper-txt").innerHTML = selecionarTextoCima.value

}

let selecionarTextoBaixo = document.getElementById("insert-lower-txt");
   
selecionarTextoBaixo.addEventListener ('input', function() {
    criarTextoBaixo() })

function criarTextoBaixo () {
    
   document.getElementById("lower-txt").innerHTML = selecionarTextoBaixo.value

}
