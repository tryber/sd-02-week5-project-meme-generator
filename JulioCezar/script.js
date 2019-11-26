window.onload = function () {


    var input = document.getElementById("input_text");    
    input.addEventListener('keydown', updateTempo);  
    
    

   







}
function updateTempo(){
    var setIntervalId = setInterval(updateText(setIntervalId), 500);
}

function updateText (processo){

    var inputText = document.getElementById("input_text").value;
    document.getElementById("paragraph_text").innerHTML = inputText;
    clearInterval (processo);

}