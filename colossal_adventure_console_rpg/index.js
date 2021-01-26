// Initiate User interaction in console with readline sync and create global function/variable(s)
import { question, keyIn } from 'readline-sync';
let isAlive = true;
let enemyAlive = false;
let inBattle = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Greet the player and introduce them to the game
console.log("Welcome to the Needle Stack. A few decades ago, the forest west of Trellim was sealed off by a wall that wraps around it and off into the mountains to protect the surrounding lands from some creatures within. Many adventurers travel within the walls in search of special items, artifacts, and magic that can further their life, wealth, and status. Some, well, are simply mad and do it for the thrill. You have made your way to the closest entry point and the guard approaches." <br> "Greetings, and welcome to the Needle Stack. Before I can allow you in, I need to log your visit." <br> "");

// Request player name and store it as a part of their character sheet.
const name = question('What is your name, Adventurer? ');
const player = new character(name, 100, 50);

// Create character sheet
class character {
    constructor(name, hp, ap, weapon = false) {
        this.name = name;
        this.hitPoints = hp;
        this.actionPoints = ap;
        this.hasWeapon = weapon;
        this.inventory = ["health potion"];
    }
}

// Provide players with options to traverse and interact with (Use a while loop to control this flow)
while(isAlive === true) {
    const action = keyIn("Would you like to [w] Walk, [p] Print Inventory, or [q] Quit?", {limit: 'wqp'});
    
    if (action === "w") {
        walk();
    }else if (action === "p") {
        printInventory();
    }else if (action === "q") {
       isAlive = false;
       console.log("Goodbye for now. Thanks for playing!");
    }
}

// Create functions to carry out actions
function walk() {
    const random = Math.floor(Math.random()*3);
    if(random === 0){
        enemyEncounter();
    } else {
        console.log("You make your way deeper into the forest without encountering much trouble.");
    }
}
function printInventory() {
    console.log(player.inventory);
    const inventoryUse = keyInSelect(player.inventory, "Would you like to use anything?");
        if(inventoryUse === "health potion") {
            player.hitPoints = player.hitPoints + 30;
        }
}
function enemyEncounter(){
    const random = Math.floor(Math.random() * enemies.length);
    const enemy = enemies[random];
    inBattle = true; 
}

// Create enemy encounter
class enemy {
    constructor(name, hp, ap, weapon = false){
        this.name = name;
        this.hitPoints = hp;
        this.actionPoints = ap;
        this.hasWeapon = weapon;
    }
}
const boar = new enemy("Wild Boar", 25, 10);
const wolf = new enemy("Viscious Wolf", 20, 25);
const goblin = new enemy("Goblin Scout", 35, 20);
const orc = new enemy("Raider Orc", 50, 25, true);
const troll = new enemy("Forest Troll", 75, 50, true);
const enemies = [boar, wolf, goblin, orc, troll];

while(isAlive === true && inBattle === true) {
    const fight = keyIn("Would you like to [f] Fight, [p] Use an item from inventory, or [r] Run?", {limit: "fpr"});

    if (fight === "f") {
        fightEnemy();
    } else if (fight === "p") {
        printInventory();
    } else if (fight === "r") {
        fleeFromEnemy();
    }
}

// Create battle functions
function fightEnemy() {
    // Player attack
    if(player.hasWeapon === true) {
        console.log("You swing your sword at the " + enemy + " slicing open a deep wound.");
        enemy.hitPoints - getRandomInt(10, 20);
    } else if (player.hasWeapon === false) {
        console.log("You punch the " + enemy + " bruising it lightly.");
        enemy.hitPoints - getRandomInt(1, 10);
    }

    // Enemy attack
    if(enemy.hasWeapon === true) {
        console.log("The " + enemy + " agressively attacks you their weapon, slicing open a wound.")
        player.hitPoints - getRandomInt(10, 20);
    } else if (enemy.hasWeapon === false) {
        console.log("The " + enemy + " charges at you, pounding into your side.");
        player.hitPoints - getRandomInt(1, 10);
    }
}
function fleeFromEnemy() {
    const chance = Math.random();

    if (chance < 0.5) {
        console.log("You have successfully fled from the " + enemy + ". Whew! That was a close one.");
        inBattle = false;
    } else if (chance > 0.5) {
        console.log("You failed in escaping and the " + enemy + " got a free and clean hit in during your attempt.");
        
        if(enemy.hasWeapon === true) {
            player.hitPoints - getRandomInt(10, 20);
        } else if (enemy.hasWeapon === false) {
            player.hitPoints - getRandomInt(1, 10);
        }
    }
}

