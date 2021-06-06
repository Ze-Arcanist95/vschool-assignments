import React from "react";
import Pet from "./Pet";

function Friend(props) {
    const pets = props.info.pets.map(pet => <Pet key={pet.name} info={pet}/>)

    return (
        <div className= "friend">
            <h3>Name: {props.info.name}</h3>
            <h4>Age: {props.info.age}</h4>
            <br />
            <div>
                <h4>Pets</h4>
                <div>
                    {pets}
                </div>
            </div>
        </div>
    )
}

export default Friend;