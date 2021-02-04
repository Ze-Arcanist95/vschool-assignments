var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function listReady(arr) {
    let adults = arr.filter(index => index.age >= 18);
    let sortedAdults = adults.sort((a, b) => a.firstName.localeCompare(b.firstName));
    return sortedAdults.map(index => "<li>" + index.firstName + " is " + index.age + "</li>")
}

console.log(listReady(peopleArray))