import React, { useState, useEffect, useReducer } from "react";
import { AllPost } from "../allpost";
import { MyPostList } from "../my-post-list";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

export const Postlist = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Switch>
        <Route exact path='/post'>
          <Redirect to={`${match.url}/mypost`} />
        </Route>
        <Route exact path={`${match.url}/mypost`}>
          <MyPostList />
        </Route>
        <Route exact path={`${match.url}/allpost`}>
          <AllPost />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};
