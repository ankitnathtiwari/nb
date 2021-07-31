import React from "react";

import "./index.css";

export const PostView = ({ post, style }) => {
  return (
    <div className='post-view' style={style}>
      <img src={post.image} alt='post image' />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
