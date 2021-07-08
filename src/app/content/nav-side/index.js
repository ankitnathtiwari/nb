import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const NavSide = () => {
  return (
    <div className='nav-side'>
      <Link to='/create'>Create Post</Link>
      <Link to={{ pathname: "/post/allpost", state: { updateData: false } }}>
        All Post
      </Link>
      <Link to={{ pathname: "/post/mypost", state: { updateData: false } }}>
        My Post
      </Link>
    </div>
  );
};
