import React, { useState, useEffect, useReducer } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { MyVideos } from "../my-videos";
import { AllVideos } from "../allvideos";
import { MyVideoList } from "../my-video-list";

export const VideoPostlist = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Switch>
        <Route exact path="/post">
          <Redirect to={`${match.url}/mypost`} />
        </Route>
        <Route exact path={`${match.url}/mypost`}>
          <MyVideoList />
        </Route>
        <Route exact path={`${match.url}/allpost`}>
          <AllVideos />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};
