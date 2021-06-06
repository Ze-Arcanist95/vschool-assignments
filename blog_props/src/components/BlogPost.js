import React from "react";

function BlogPost(props) {
    return (
        <div className="post-container">
            <h2>{props.info.title}</h2>
            <h3>{props.info.subTitle}</h3>
            <p className="post-signature">Posted by {props.info.author} on {props.info.date}</p>
        </div>
    )
}

export default BlogPost