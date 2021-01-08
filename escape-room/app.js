let gameOver = false;
let keyFound = false;
let doorOpen = false;

const rl = require("readline-sync");
const name = rl.question("What is your name? ");
    console.log("You awake on the floor of a small room, dimly lit by a single flourescent bulb above your head. The room is sparsely furnished with a dresser, a bed, and a chair. There is only one door leaving the room, but it would appear that the handle was installed backwards with the keyhole on the inside of the room. There is also a hole in the wall beside the door and a speaker mounted above it.",'\n',"A few moments pass and the small speaker begins to rattle as a voice speaks.",'\n',"Hello, " + name + " and welcome to the Escape Room. Many enter, but only a few leave. The key is somewhere within this room. This is the first and only communication you will receive. Will you be one of those who can succeed?");
    escapeRoom();

function escapeRoom() {
    console.log("Choices: ",'\n',"1. Open the door.",'\n',"2. Search the hole by the door.",'\n',"3. Search the room.");
    
    let answer = rl.question("What do you do? (Choose by number):");

    if (answer = "1") {
        if (keyFound === true){
            doorOpen = true;
            console.log("You open the door and escape. Good game.");
        } else {
            console.log("The door is locked.");
            escapeRoom();
        }
    } else if (answer = "2") {
        gameOver = true;
        console.log("While examining the hole, you stick your hand inside. Something sharp separates your hand from your body and you pass out from shock",'\n',"You have bled out and died.");
        gameReset();
    } else if (answer = "3") {
        let luck = Math.random() < 0.5;
            if (luck <= 0.5) {
                let keyFound = false;
                console.log("You search for hours with no luck.");
                escapeRoom();
            } else if (luck >= 0.5) {
                let keyFound = true;
                console.log("You found the key! Even though it took the whole day...")
                escapeRoom();
            }
    }
}
function gameReset() {
    let rAnswer = rl.question("Try again?");
        if (rAnswer === "yes") {
            gameOver = false;
            keyFound = false;
            doorOpen = false;
            escapeRoom();
        } else {
            console.log("Bye, then!")  
        }
}