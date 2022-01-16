import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, useRouteMatch } from "react-router-dom";
import "./index.css";
export const NavTopSideBar = ({ auth, user, dispatch, sidebar }) => {
  return sidebar ? (
    auth ? (
      <div className="nav-top-side-bar">
        <div className="nav-top-side-bar-items">
          <Link to="/create">Hi {user}</Link>
        </div>

        <div className="nav-top-side-bar-items">
          <Link to="/create">Create Post</Link>
        </div>

        <div className="nav-top-side-bar-items">
          <Link to="/createVideo">Create Video Post</Link>
        </div>

        <div className="nav-top-side-bar-items">
          <Link to={{ pathname: "/post/allpost" }}>All Post</Link>
        </div>
        <div className="nav-top-side-bar-items">
          <Link to={{ pathname: "/post/mypost" }}>My Post</Link>
        </div>

        <div className="nav-top-side-bar-items">
          <Link to={{ pathname: "/video/allpost" }}>All Video</Link>
        </div>
        <div className="nav-top-side-bar-items">
          <Link to={{ pathname: "/video/mypost" }}>My Videos</Link>
        </div>
        <div className="nav-top-side-bar-items">
          <button onClick={() => dispatch({ type: "LOGGED_OUT_SUBMIT" })}>
            Logout
          </button>
        </div>
      </div>
    ) : (
      <div className="nav-top-side-bar">
        <div className="nav-top-side-bar-items">
          <Link to="/login">Login</Link>
        </div>
        <div className="nav-top-side-bar-items">
          <Link to="/register">Register</Link>
        </div>
      </div>
    )
  ) : null;
};
