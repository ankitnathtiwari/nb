import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, Redirect } from "react-router-dom";
import { NavSide } from "../nav-side";

import { PostCreate } from "../post-create";
import { Postlist } from "../post-list";
import "./index.css";
export const Content = ({ onClick }) => {
  return (
    <div className='content' onClick={onClick}>
      <NavSide />
      <Switch>
        <Route exact path='/login'>
          <Redirect to={{ pathname: "/post", state: { updateData: false } }} />
        </Route>
        <Route exact path='/register'>
          <Redirect to={{ pathname: "/post", state: { updateData: false } }} />
        </Route>
        <Route exact path='/create'>
          <PostCreate />
        </Route>
        <Route path='/post'>
          <Postlist />
        </Route>

        <Route exact path='/'>
          <Redirect to={{ pathname: "/post", state: { updateData: false } }} />
        </Route>
      </Switch>
    </div>
  );
};
