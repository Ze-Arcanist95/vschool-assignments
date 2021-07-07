import React from "react";

function Square(props) {
    return(
        <div>
            <div style={{backgroundColor: props.color, padding: "100px", border: "2.5px solid black"}}>
            </div>
        </div>
    )
}

export default Square;