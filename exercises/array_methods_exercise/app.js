var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethods(){
    vegetables.pop();
    fruit.shift();
    fruit.push(fruit.indexOf("orange"));
    vegetables.push(vegetables.length);
    let food = [];
        food = fruit.concat(vegetables);
        food.splice(4, 2);
        food.reverse();
    let x = food.toString();
        console.log(x);
}

arrayMethods()