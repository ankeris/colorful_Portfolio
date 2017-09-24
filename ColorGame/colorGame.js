var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = randomColors(); 
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === pickedColor){
			changeColors(pickedColor);
			message.textContent = "Yesss! Eagle eyes";
		} else{
			this.style.display = "none";
			message.textContent = "Ahhh, nope, try again"
		}
	})
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomColors(){
	var random = colors[Math.floor(Math.random()*colors.length)];
	return random;
}

function generateRandomColors(num){
	var myList = [];
for (var i = 0; i < num; i++) {
	myList.push(randomColor());
}
	return myList;
}

function randomColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	var color = "rgb("+red+", "+green+", "+blue+")";
	return color;
}
