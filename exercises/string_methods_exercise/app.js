function upperLowerString(arg) {
    let upperInput = arg.toUpperCase();
    let lowerInput = arg.toLowerCase();
    let output = upperInput.concat(lowerInput);
    console.log(output);
}

function findMiddleOfString(arg) {
    let middleOf = Math.floor(arg.length / 2);
    console.log(middleOf);
}
