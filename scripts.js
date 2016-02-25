document.addEventListener('DOMContentLoaded', function(){
    //var element = document.getElementById("text1");
   // element.style.color = 'red';
    
});

var squares = document.getElementsByClassName('square');

function randomColor() {

var randomRed = Math.floor(Math.random() * 255);
var randomGreen = Math.floor(Math.random() * 255);
var randomBlue = Math.floor(Math.random() * 255);
//create the string that is the ‘random color’
var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

return randomColor;
}

function createSquare(){
	
	var square = document.createElement('div');
	square.className = 'square';
	square.onclick = function changeColor(){
		this.style.backgroundColor = randomColor();
	}
	square.style.display = 'inline-block';
	document.body.appendChild(square);
	
}