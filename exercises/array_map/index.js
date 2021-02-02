// First Exercise - Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3, 4, 5]));

// Second Exercise - Take an array of numbers and make them strings
function stringItUp(arr) {
    return arr.map(String);
}
  
console.log(stringItUp([2, 5, 100]));

// Third Exercise - Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map(index => {
        return index.charAt(0).toUpperCase() + index.slice(1).toLowerCase();
    });
}
  
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Fourth Exercise - Make an array of strings of the names
function namesOnly(arr){
    return arr.map(index => index.name);
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// Fifth Exercise - Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(index => {
        if(index.age >= 18) {
            return index.name + " can go to The Matrix";
        } else {
            return index.name + " is under age!!";
        }
    })
}
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
])); 

// Sixth Exercise - Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    return arr.map(index => prepObjectName(index) + prepObjectAge(index));
}
function prepObjectName(index) {
    return "<h1>" + index.name + "</h1>";
}
function prepObjectAge(index) {
    return "<h2>" + index.age + "</h2>";
}
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 