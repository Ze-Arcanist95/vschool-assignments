import React from "react";
import Square from "./Square";
import "./App.css";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: ["white", "white", "white", "white"],
            play: false
        };
        this.shuffle = this.shuffle.bind(this);
        this.colorChange = this.colorChange.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    shuffle(str) {
        return str.split('').sort(() => {return 0.5-Math.random()}).join('');
    };
    colorChange(buttonNum) {
        this.setState((prevState) => {

            if(buttonNum === 1 && this.state.color[0] === "white") {
                return {
                    color: ["black", "black", "black", "black"]
                };
            } else if (buttonNum === 1 && this.state.color[0] === "black") {
                return {
                    color: ["white", "white", "white", "white"]
                };
            } else if (buttonNum === 1) {
                return {
                    color: ["white", "white", "white", "white"]
                };
            } else if (buttonNum === 2) {
                return {
                    color: ["purple", "purple", prevState.color[2], prevState.color[3]]
                };
            } else if (buttonNum === 3) {
                return {
                    color: [prevState.color[0], prevState.color[1], "blue", prevState.color[3]]
                };
            } else if (buttonNum === 4) {
                return {
                    color: [prevState.color[0], prevState.color[1], prevState.color[2], "blue"]
                };
            } else if (buttonNum === 5) {
                return {
                    color: [prevState.color[2], prevState.color[1], prevState.color[3], prevState.color[0]]
                };
            } else if (buttonNum === 6) {
                return {
                    color: [prevState.color[0], prevState.color[3], prevState.color[1], prevState.color[2]]
                };
            } else if (buttonNum === 7) {
                return {
                    color: [prevState.color[1], prevState.color[2], prevState.color[0], prevState.color[3]]
                };
            } else if (buttonNum === 8) {
                return {
                    color: [prevState.color[3], prevState.color[0], prevState.color[2], prevState.color[1]]
                };
            }
        });
        return console.log("Clicked!")
    };
    playSound() {
        return console.log("This song is fire!");
    };
    
    render() {
        const colorGrid = this.state.color.map(currColor => <Square key={() => this.shuffle(currColor)} color={currColor} />);
        
        return (
            <div>
                <div className="grid-container">
                    {colorGrid}
                </div>
                <div className="button-container">
                    <button onClick={() => {
                    this.colorChange(1)
                    return this.playSound()
                    }}> All Black/White </button>
                    <button onClick={() => {
                        this.colorChange(2)
                        return this.playSound()
                    }}> Top Purple </button>
                    <button onClick={() => {
                        this.colorChange(3)
                        return this.playSound()
                    }}> Left Blue </button>
                    <button onClick={() => {
                        this.colorChange(4)
                        return this.playSound()
                    }}> Right Blue </button>
                    <button onClick={() => {
                        this.colorChange(5)
                        return this.playSound()
                    }}> Big Time One </button>
                    <button onClick={() => {
                        this.colorChange(6)
                        return this.playSound()
                    }}> Big Time Two </button>
                    <button onClick={() => {
                        this.colorChange(7)
                        return this.playSound()
                    }}> Big Time Three </button>
                    <button onClick={() => {
                        this.colorChange(8)
                        return this.playSound()
                    }}> Big Time Four </button>
                </div>
            </div>
        )
    };
};

export default App;