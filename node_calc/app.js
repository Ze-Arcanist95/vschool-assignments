const readlineSync = require("readline-sync")

let num1 = readlineSync.question("Please enter your first number: ")
let num2 = readlineSync.question("Please enter your second number: ");
let operand = readlineSync.question("Please enter the operation to perform: add, sub, mul, div: ");

function add(num1, num2){
    console.log(Number(num1) + Number(num2));
}
function sub(num1, num2){
    console.log(Number(num1) - Number(num2));
}
function mul(num1,num2){
    console.log(Number(num1) * Number(num2));
}
function div(num1,num2){
    console.log(Number(num1) / Number(num2));
}

if (operand === "add") {
    add(num1, num2);
}
else if (operand === "sub") {
    sub(num1, num2);
}
else if (operand === "mul") {
    mul(num1, num2);
}
else if (operand === "div") {
    div(num1, num2);
}


