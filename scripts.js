document.addEventListener('DOMContentLoaded', function(){
    var element = document.getElementById("text1");
    element.style.color = 'red';
    
});

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
}

function checkAge(){
    var age = prompt('What is your age?');
    if(age < 23){
        alert('less that 23');
    }else{
         alert('more or equal 23'); 
    }
}

function add(op1, op2) {
    return op1 + op2;

}
function subtract(op1, op2) {
    return op1 - op2;
  
}
function multiply(op1, op2) {
    return op1 * op2;

}
function divide(op1, op2) {
    if(op2==0){
        alert('no 0 please');
    }
    return op1 / op2;

}

function calculate(operation){
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    var result = 0;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    switch (operation) {
        case 'add':
             result = add(op1,op2);
            break;
        case 'subtract':
             result = subtract(op1,op2);
            break;
       case 'multiply':
             result = multiply(op1,op2);
            break;
        case 'divide':
             result = divide(op1,op2);
            break;
    }
    alert('Result ' +result);
    console.log('The result is ' +result);
}

function addParagraph(){
    var par = document.createElement('p');
    var text = document.createTextNode(new Date().toString());
    par.appendChild(text);
    par.className = 'my-para';
    document.body.appendChild(par);
}
