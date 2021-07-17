import React from "react";
import DiceBox from "./DiceBox"

function App() {
    return(
        <div>
            <DiceBox />
            <button onClick={() => {DiceBox.ReRoll()}}>Re-Roll</button>
        </div>
    )
}