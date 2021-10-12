import React from "react";
import { baseUrl } from "../../base-url/index";
import "./index.css";

export const PostView = ({ post, style }) => {
  return (
    <div className='post-view' style={style}>
      <img src={`${baseUrl}/compressed-images${post.image}`} alt='post image' />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
