import { question, keyIn } from 'readline-sync';
let isAlive = true;
let inBattle = false;
const chance = Math.random();

class character {
    constructor(name, hp, ap, weapon = false) {
        this.name = name;
        this.hitPoints = hp;
        this.actionPoints = ap;
        this.hasWeapon = weapon;
        this.inventory = ["health potion"];
    }
}

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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function isGameOver() {
    if (player.health <= 0) {
        isAlive = false;
        console.log("You've died. Not to worry though. Your remains will be put to good use as compost for the trees to grow taller!");
        const replay = keyInYN("Would you like you play again? ");
            if (replay === "y") {
                isAlive = true;
                console.log("Sudden re-birth! Keep playing! ;)");
            } else {
                console.log("Goodbye for now! Hope you had fun.");
            }
    }
}
function isFightOver() {
    if (enemy.health <= 0) {
        inBattle = false;
        console.log("You've won! Rummaging through the corpse you find: ")

        if (chance < 0.5) {
            console.log("Broken bottles and gear. Better luck next time.");
        } else if (chance < 0.7) {
            console.log("A weapon that looks usable. Moar damage!");
            player.weapon = true;
        } else {
            console.log("A health potion! You might need this for later.");
            player.inventory.push("health potion");
        }
    }
}
function walk() {
    const random = Math.floor(Math.random()*3);
    if(random === 0){
        enemyEncounter();
    } else {
        console.log("You make your way deeper into the forest without encountering much trouble.");
    }
}
function printInventory() {
    console.log("Health: " + player.hitPoints);
    console.log("Action Points: " + player.actionPoints);
    console.log("Inventory: " + player.inventory);

}
function enemyEncounter(){
    const random = Math.floor(Math.random() * enemies.length);
    const enemy = enemies[random];
    inBattle = true; 
}
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

console.log("Welcome to the Needle Stack. A few decades ago, the forest west of Trellim was sealed off by a wall that wraps around it and off into the mountains to protect the surrounding lands from some creatures within. Many adventurers travel within the walls in search of special items, artifacts, and magic that can further their life, wealth, and status. Some, well, are simply mad and do it for the thrill. You have made your way to the closest entry point and the guard approaches.", '\n', "Greetings, and welcome to the Needle Stack. Before I can allow you in, I need to log your visit.", '\n', "");

const name = question('What is your name, Adventurer? ');
const player = new character(name, 100, 50);

while(isAlive === true) {
    isGameOver();

    const action = keyIn("Would you like to [w] Walk, [p] Print Inventory/Vitals, or [q] Quit?", {limit: 'wqp'});
    
    if (action === "w") {
        walk();
    }else if (action === "p") {
        printInventory();
    }else if (action === "q") {
       isAlive = false;
       console.log("Goodbye for now. Thanks for playing!");
    }
}
while(isAlive === true && inBattle === true) {
    isGameOver();
    isFightOver();

    const fight = keyIn("Would you like to [f] Fight, [p] Print Inventory/Vitals, or [r] Run?", {limit: "fpr"});

    if (fight === "f") {
        fightEnemy();
    } else if (fight === "p") {
        printInventory();
    } else if (fight === "r") {
        fleeFromEnemy();
    }
}