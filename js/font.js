var inputBox = document.getElementById('textInput');
var textDisplay = document.getElementById('textDisplay');

inputBox.onkeyup = function(){
     textDisplay.innerHTML = inputBox.value;
}

