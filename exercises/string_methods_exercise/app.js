function upperLowerString(arg) {
    let upperInput = arg.toUpperCase();
    let lowerInput = arg.toLowerCase();
    let output = upperInput.concat(lowerInput);

        return output;
};

function findMiddleOfString(arg) {
    let middleOf = Math.floor(arg.length / 2);

        return middleOf;
};

function returnFirstHalf(arg) {
    let middleOf = findMiddleOfString(arg);
    let firstHalf = arg.slice(0, middleOf);

        return firstHalf;
};

function upperLowerStringV2(arg) {
    let middleOf = findMiddleOfString(arg);
    let firstHalf = arg.slice(0, middleOf);
    let secondHalf = arg.slice(middleOf);
    let upCase = firstHalf.toUpperCase();
    let loCase = secondHalf.toLowerCase();
    let output = upCase.concat(loCase);

        return output;
};

function upperFirstLetter(arg) {
  let separated = arg.split(' ');
  let capitalizeMe = [];
    
  for(let i = 0; i < separated.length; i++) {
    capitalizeMe.push(separated[i].charAt(0).toUpperCase()+separated[i].slice(1));
  }

  let output = capitalizeMe.join(' ');

    return output;
};