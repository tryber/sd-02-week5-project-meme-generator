window.onload = function () {

  let input = document.getElementById('input_text');
  input.addEventListener('keyup', updateText);
  let imagem = document.getElementById('input_img');
  imagem.addEventListener('change', adicionarImagem);
  
    
    

   







}

function updateText () {

  let inputText = document.getElementById('input_text').value;
  document.getElementById('span_meme_text').innerHTML = inputText;
  
}

function adicionarImagem(event){
  
  let imagem = document.getElementById('imagem');
  imagem.src = URL.createObjectURL(event.target.files[0]);

}