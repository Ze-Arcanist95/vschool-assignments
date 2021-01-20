/*
// Preliminaries
// Write a for loop that prints to the console the numbers 0 through 9.
    for(i = 0; i < 10; i++){
        console.log(i);
    };

// Write a for loop that prints to the console 9 through 0.
    for(i = 10; i > 0; i--){
        console.log(i);
    };
// Write a for loop that prints these fruits to the console.
    var fruit = ["banana", "orange", "apple", "kiwi"]
    for(i = 0; i < fruit.length; i++){
        console.log(fruit[i]);
    };

*/
/*
// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
    let numArr = [];
    for(i = 0; i < 10; i++){
        numArr.push(i);
        console.log(numArr);
    };

// Write a for loop that prints to the console only even numbers 0 through 100.
    for(i = 0; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        };
    };

// Write a for loop that will push every other fruit to an array.
    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
    var fruit2 = [];
    for(i = 0; i < fruit.length; i++){
        if(i % 2 !== 0){
            fruit2.push(fruit[i])
            console.log(fruit2)
        }
    }
*/

// Silver Medal

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

// Write a loop that will print out all the names of the people of the people array
/*
    for(i = 0; i < peopleArray.length; i++){
        console.log(peopleArray[i].name);
    };
*/
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
/*
    let nameArray = [];
    let occupationArray = [];
    for(i = 0; i < peopleArray.length; i++){
        nameArray.push(peopleArray[i].name);
        occupationArray.push(peopleArray[i].occupation);
    };
*/
// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
/*
    let namesArray = [];
    let occupationsArray = [];
    for(i = 0; i < peopleArray.length; i++){
        if(i % 2 === 0){
            namesArray.push(peopleArray[i].name);
        } else {
            occupationsArray.push(peopleArray[i].occupation);
        }
    };
*/

// Gold Medal
// Create an array that mimics a grid like the following using nested for loops:
/*  
    [[0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]]

    let grid = [
        [],
        [],
        []
    ];
    for (i = 0; i < grid.length; i++){
        for (i2 = 0; i2 < 3; i2++){
            grid[i][i2] = 0;
        }    
    }
*/
/*
    [[0, 0, 0], 
    [1, 1, 1], 
    [2, 2, 2]]

    let grid = [
        [],
        [],
        []
    ];
    for(i = 0; i < grid.length; i++){
        for(i2 = 0; i2 < grid.length; i2++){
            grid[i][i2] = i;
        };
    };
*/
/*
    [[0, 1, 2], 
    [0, 1, 2], 
    [0, 1, 2]]
*/
    let grid = [
        [],
        [],
        []
    ];
    for(i = 0; i < grid.length; i++){
        for(i2 = 0; i2 < grid.length; i++){
            
        } 
    }