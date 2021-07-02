import React, { useState, useEffect, useReducer } from "react";
import { Auth } from "../auth/auth";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { NavTop } from "../nav-top";
import { Content } from "../content/content";
import "./index.css";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useFetch } from "./useFetch";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initFun);
  useFetch(state, dispatch);

  //Whenever the app loads for the first time make ajax request
  // It checks for the auth status
  //if already authrized and session exists load content component else auth component
  return (
    <Router>
      <div className='app'>
        <NavTop
          auth={state.auth || false}
          user={state.user || false}
          appDispatch={dispatch}
          sidebar={state.sideNav}
        />

        {state.initLoading ? (
          <h1>Loading...</h1>
        ) : state.err ? (
          <h1>Some Error Occured...</h1>
        ) : state.auth ? (
          <Route path='/'>
            <Content onClick={() => dispatch({ type: "hideSidebar" })} />
          </Route>
        ) : (
          <Route path='/'>
            <Auth
              loginDispatch={dispatch}
              onClick={() => dispatch({ type: "hideSidebar" })}
            />
          </Route>
        )}
      </div>
    </Router>
  );
};
