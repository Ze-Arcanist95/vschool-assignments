const statusValues = ["Dead", "Small", "Large", "Powered Up"];
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.gameActive = true;
        this.status = statusValues[1];
        this.hasStar = false;
    }
    setName(namePicked){
        if (namePicked === "Mario"){
            this.name = "Mario";
        } else if (namePicked === "Luigi"){
            this.name = "Luigi";
        }
    }
    gotHit(){
        if (this.status === statusValues[3] && this.hasStar === true) {
            console.log("Your star protected you!")
            this.hasStar = false;
        } else if (this.status === statusValues[3]){
            this.status = statusValues[2];
        } else if (this.status === statusValues[2]){
            this.status = statusValues[1];
        } else if (this.status === statusValues[1]){
            this.status = statusValues[0];
            this.gameActive = false;
        }
    }
    gotPowerup(){
        if (this.status === statusValues[3]){
            console.log("Congratulations! You got a star!");
            this.hasStar = true;
        } else if (this.status === statusValues[2]){
            this.status = statusValues[3];
        } else if (this.status === statusValues[1]){
            this.status = statusValues[2];
        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        let starMsg;
        
        if(this.hasStar === true){
            starMsg = "You have a star"
        }

        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}
        ${starMsg}
        `)
    }
}
