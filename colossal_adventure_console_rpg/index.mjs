// Global Variables
import readline from 'readline-sync'
let isAlive = true;
let inBattle = false;
let enemyAlive = false;
let enemy;

class Character {
    constructor(name, hp, ap, weapon = false, artifact = false) {
        this.name = name;
        this.hitPoints = hp;
        this.actionPoints = ap;
        this.hasWeapon = weapon;
        this.hasArtifact = artifact;
        this.inventory = ["health potion"];
    }
}

class Enemy {
    constructor(name, hp, ap, weapon = false){
        this.name = name;
        this.hitPoints = hp;
        this.actionPoints = ap;
        this.hasWeapon = weapon;
    }
}
const boar = new Enemy("Wild Boar", 25, 10);
const wolf = new Enemy("Viscious Wolf", 20, 25);
const goblin = new Enemy("Goblin Scout", 35, 20);
const orc = new Enemy("Raider Orc", 50, 25, true);
const troll = new Enemy("Forest Troll", 75, 50, true);
const enemies = [boar, wolf, goblin, orc, troll];

// Main Game
console.log("Welcome to the Needle Stack. A few decades ago, the forest west of Trellim was sealed off by a wall that wraps around it and off into the mountains to protect the surrounding lands from some creatures within. Many adventurers travel within the walls in search of special items, artifacts, and magic that can further their life, wealth, and status. Some, well, are simply mad and do it for the thrill. You have made your way to the closest entry point and the guard approaches.", '\n', "Greetings, and welcome to the Needle Stack. Before I can allow you in, I need to log your visit.", '\n', "");

const name = readline.question('What is your name, Adventurer? ');
const player = new Character(name, 100, 50);

console.log('\n', "Well, " + player.name + " I hope your adventure is fulfilling. A word of warning though! You might want to stay clear of the larger ones unless you've got a weapon.", '\n', '\n', "The guard turns and walks over to the gate, opening it and allowing you to enter the Needle Stack.", '\n')

while(isAlive === true) {

    const action = readline.keyIn("Would you like to [w] Walk, [p] Print Inventory/Vitals, [r] Rest, or [q] Quit?", {limit: 'wqrp'});
    
    if (action === "w") {
        walk();
    }else if (action === "p") {
        printInventory();
    }else if (action === "r") {
        rest();
    }else if (action === "q") {
        isAlive = false;
        console.log('\n', "Goodbye for now. Thanks for playing!", '\n');
    }

    while(inBattle === true) {
        isGameOver();
    
        const fight = readline.keyIn("Would you like to [a] Attack, [p] Print Inventory/Vitals, or [r] Run?", {limit: "apr"});
    
        if (fight === "a") {
            fightEnemy();
        } else if (fight === "p") {
            printInventory();
        } else if (fight === "r") {
            fleeFromEnemy();
        }
    }
}

// Functions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function itemUse() {
    const items = player.inventory;
    const index = readline.keyInSelect(items, "What would you like to use?");

    if (items[index] === "health potion") {
        console.log('\n', "Glug, glug, glug.", '\n');
        player.hitPoints = player.hitPoints + 30;
        items.splice(items[index]);
    }
}
function walk() {
    const random = Math.random();
    if(random < 0.33){
        enemyEncounter();
    } else if (random < 0.38) {
        console.log('\n', 'As you are walking through the forest, you come across a clearing. In the middle of the clearing you find a box. As you approach the box a voice speaks into your mind saying, "Take this artifact from its home and know despair, but harness the power of the Gods!". Of course, you open the box finding an amulet which you are compelled to pick up and wear.', '\n', 'As you place it around your neck power floods into you and the voice begins to whisper incessantly within your mind.')
        player.hasArtifact = true;
    } else {
        console.log('\n', "You make your way deeper into the forest without encountering much trouble.", '\n');
    }
}
function printInventory() {
    console.log("Health: " + player.hitPoints);
    console.log("Action Points: " + player.actionPoints);
    console.log("Inventory: " + player.inventory, '\n');

    if (readline.keyInYN("Would you like to use an item? ")) {
        itemUse();
    } else {
        console.log('\n', "Maybe next time.", '\n');
    }
}
function rest() {
    console.log('\n', "You find a calm spot nearby and rest.", '\n');
    let encounterChance = Math.floor(Math.random() * 4);

    if (encounterChance === 0) {
        console.log("You hear a rustling in some nearby bushes.", '\n');
        enemyEncounter();
    } else {
        console.log("You doze off for an hour or so and wake feeling a little rejuvinated.", '\n');
        player.hitPoints = player.hitPoints + 10;
        player.actionPoints = player.actionPoints + 10;
    }
}
function enemyEncounter(){
    const random = Math.floor(Math.random() * enemies.length);
    enemy = enemies[random];
    console.log('\n', "You've encountered a " + enemy.name + ". Fight!", '\n')
    inBattle = true;
    enemyAlive = true;
 
}
function fightEnemy() {
    // Player attack
    if (player.hasArtifact === true) {
        console.log("You smite the " + enemy.name + " with the power of the sun!")
        enemy.hitPoints = 0;
    } else if (player.hasWeapon === false) {
        console.log('\n', "You punch the " + enemy.name + ", bruising it lightly.", '\n');
        enemy.hitPoints = enemy.hitPoints - getRandomInt(1, 10);
        player.actionPoints = player.actionPoints - 1;
    } else if (player.hasWeapon === true) {
        console.log('\n', "You swing your sword at the " + enemy.name + ", slicing open a deep wound.", '\n');
        enemy.hitPoints = enemy.hitPoints - getRandomInt(10, 20);
        player.actionPoints = player.actionPoints - 1;
    }
    // Enemy Alive Status
    if(enemy.hitPoints <= 0) {
        console.log("The " + enemy.name + " died.")
        enemyAlive = false;
        inBattle = false;
        lootRandomizer();
    }
    // Enemy attack
    if(enemy.hasWeapon === true && enemyAlive === true) {
        console.log('\n', "The " + enemy.name + " agressively attacks you with their weapon, slicing open a wound.", '\n')
        player.hitPoints = player.hitPoints - getRandomInt(10, 20);
    } else if (enemy.hasWeapon === false && enemyAlive === true) {
        console.log('\n', "The " + enemy.name + " charges at you, pounding into your side.", '\n');
        player.hitPoints = player.hitPoints - getRandomInt(1, 10);
    }
}
function fleeFromEnemy() {
    const chance = Math.random();
    if (chance < 0.75) {
        console.log('\n', "You have successfully fled from the " + enemy.name + ". Whew! That was a close one.", '\n');
        player.actionPoints = player.actionPoints - 10;
        inBattle = false;
    } else {
        console.log('\n', "You failed in escaping and the " + enemy.name + " got a free and clean hit in during your attempt.", '\n');
        player.actionPoints = player.actionPoints - 10;
        
        if(enemy.hasWeapon === true) {
            player.hitPoints = player.hitPoints - getRandomInt(10, 20);
        } else if (enemy.hasWeapon === false) {
            player.hitPoints = player.hitPoints - getRandomInt(1, 10);
        }
    }
}
function isGameOver() {
    if (player.hitPoints <= 0) {
        console.log('\n', "You've died. Not to worry though. Your remains will be put to good use as compost for the trees to grow taller!", '\n');
        const replay = readline.keyInYN("Would you like you play again? ");
            if (replay === "y") {
                Program.restart()
            } else {
                console.log('\n', "Goodbye for now! Hope you had fun.", '\n');
                inBattle = false;
                isAlive = false;
            }
    }
}
function lootRandomizer() {
    let lootChance = Math.random();
    console.log('\n', "You've won! Rummaging through the corpse you find: ")

    if (lootChance < 0.5) {
        console.log("Nothing of interest. Better luck next time.", '\n');
    } else if (lootChance < 0.7) {
        console.log("A weapon that looks usable. Moar damage!", '\n');
        player.weapon = true;
    } else {
        console.log("A health potion! You might need this for later.", '\n');
        player.inventory.push("health potion");
    }
}
