import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation, useRouteMatch } from "react-router";
import { PostView } from "../post-view";
import "./index.css";

export const Post = ({ post }) => {
  //based on url show allpost or mypost.

  const match = useRouteMatch();
  console.log("post  rendered");
  return (
    <Switch>
      <Route path={`${match.url}/mypost`}>
        <div>
          <h1>mypost</h1>
        </div>
      </Route>
      <Route path={`${match.url}/allpost`}>
        <div className='post'>
          <PostView post={post} />
        </div>
      </Route>
    </Switch>
  );

  //mypostview contains buttons edit and delete.
  //allpost view does not contain edit and delete buttons.
  // On click of edit show Post edit component.
  // On Click of delete post show deletePop up component
};
