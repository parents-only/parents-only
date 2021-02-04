import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Post.css";


function Post({ profilePic, username, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar 
                    src={profilePic}
                    className="post_avatar" 
                />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Post;
