import React from "react";

function Square(props) {
   return (
        <div>
            {props.index % 2 === 0 ? 
                <div>
                    <div style={{
                        display: "flex",
                        alignItems: "right",
                        backgroundColor: props.color, 
                        padding: "100px", 
                        border: "0.5px solid black", 
                        margin: "5px",
                    }}>
                    </div>
                </div>
            :
                <div>
                    <div style={{
                        display: "flex",
                        backgroundColor: props.color, 
                        padding: "100px", 
                        border: "0.5px solid black", 
                        margin: "5px",
                    }}>
                    </div>
                </div>
            }
        </div>
   )
            
    
}

export default Square;