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
	var item = document.getElementsByClassName('square');
	square.id = item.length;
	square.innerHTML = "<p class='hidden-p' id='para'"+square.id+">"+square.id +"</p>" ;
	
	square.ondblclick = function deleteSquare(){
		var idItem = parseInt(square.id);
        function isOdd(idItem) {
             return idItem % 2;
        }
        if(isOdd(idItem)){
            if(document.getElementById(idItem).nextElementSibling===null){
                 alert('that the element does not exist');
            }else{
                document.getElementById(idItem).nextSibling.remove();
            }
        }else{
            if(document.getElementById(idItem).previousElementSibling===null){
                 alert('that the element does not exist') ;
            }else{
                var id = document.getElementById(idItem).previousElementSibling.id;
                if(id === null || id === ""){
                      alert('that the element does not exist') ;
                }else{
                     document.getElementById(idItem).previousElementSibling.remove();
                }
            }         
        }
	}
	square.style.display = 'inline-block';
	document.body.appendChild(square);
	
}