import React from "react";
import Information from "../resources/Information"
import Friend from "./Friend";

function FriendList() {
    const friendList = Information.map(index => <Friend key={index.name} info={index} />);
    console.log(friendList)

    return (
        <div>
            {friendList}
        </div>
    )
}

export default FriendList;