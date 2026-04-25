'use client'

import React from "react";

const SingleProfilePost = (props) => {
    const user = React.use(props.params)
    console.log(user);

    return (
        <h1>user :  {user.username}, postid : {user.postid}</h1>
    )

}

export default SingleProfilePost;