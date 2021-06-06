import React from "react";

function Pet(props) {
    return (
        <div>
            <h5>Name: {props.info.name}</h5>
            <h6>Breed: {props.info.breed}</h6>
        </div>
    )
}

export default Pet;