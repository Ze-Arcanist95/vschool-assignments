const readline = require("readline-sync");

function add(num1,num2){
    return console.log(Number(num1) + Number(num2));
}
function sub(num1,num2){
    return console.log(Number(num1) - Number(num2));
}
function mul(num1,num2){
    return console.log(Number(num1) * Number(num2));
}
function div(num1,num2){
    return console.log(Number(num1) / Number(num2));
}

let num1 = readlineSync.question("Please enter your first number.");
let num2 = readlineSync.question("Please enter your second number.");
let operand = readlineSync.question("Please enter the operation to perform: add, sub, mul, div");

if (operand === "add") {
    add();
}
else if (operand === "sub") {
    sub();
}
else if (operand === "mul") {
    mul();
}
else if (operand === "div") {
    div();
}