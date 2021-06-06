import React from "react";
import Information from "../resources/Information"
import BlogPost from "./BlogPost"

function BlogList() {
    const PostList = Information.map(post => <BlogPost key={post.id} info={post}/>)

    return (
        <div className="content-container">
           {PostList}
        </div>
    )
}

export default BlogList;