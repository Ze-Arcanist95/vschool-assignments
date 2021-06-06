import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <a className="nav-title" href="sample.link">Start Bootstrap</a>
            <ul className="nav-list">
                <li><a href="sample.link">Home</a></li>
                <li><a href="sample.link">About</a></li>
                <li><a href="sample.link">Sample Post</a></li>
                <li><a href="sample.link">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;