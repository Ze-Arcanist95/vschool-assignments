import React from "react";
import Information from "../resources/Information"
import Friend from "./Friend";

function FriendList() {
    const friendList = Information.map(index => <Friend key={index.name} info={index} />);

    return (
        <div className="friendList-container">
            {friendList}
        </div>
    )
}

export default FriendList;