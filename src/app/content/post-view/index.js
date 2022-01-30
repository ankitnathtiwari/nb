import React from "react";
import { appConfig } from "../../app-config";
import "./index.css";

export const PostView = ({ post, style }) => {
  return (
    <div className="post-view" style={style}>
      <img
        src={`${appConfig.url.image}/${
          post.image[0] === "/" ? post.image.substr(1) : post.image
        }`}
        alt="post image"
      />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
