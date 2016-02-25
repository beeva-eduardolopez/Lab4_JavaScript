function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
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
