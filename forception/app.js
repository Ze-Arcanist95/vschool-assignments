let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people,alphabet){
    let funcOutput = []
    for(i = 0; i < arguments[0].length; i++){
        people.shift(funcOutput);
        for(i2 = 0; i2 < arguments[1].length; i++){
            alphabet.toUpperCase();
            let newAlpha = alphabet.split("");
            funcOutput.concat(newAlpha);
        };
    };
    console.log(funcOutput);
};
forception(people, alphabet);