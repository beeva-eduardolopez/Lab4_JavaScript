document.addEventListener('DOMContentLoaded', function(){
    var element = document.getElementById("text1");
    element.style.color = 'red';
    
});

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
}

function checkAge(){
    var age = prompt('What is your age?');
    if(age<23){
        alert('less that 23');
    }else{
         alert('more or equal 23'); 
    }
}

function add(op1, op2) {
    return op1 + op2;

}
function substract(op1, op2) {
    return op1 - op2;
  
}
function multiply(op1, op2) {
    return op1 * op2;

}
function divide(op1, op2) {
    return op1 / op2;

}


function addParagraph(){
    var par = document.createElement('p');
    var text = document.createTextNode(new Date().toString());
    par.appendChild(text);
    par.className = 'my-para';
    document.body.appendChild(par);
}
