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

  const getContent = () => {
    if (state.err) {
      return <h1>Some Error Occured...</h1>;
    }

    if (state.initLoading) {
      return <h1>Loading...</h1>;
    }

    if (state.auth) {
      return (
        <Route path='/'>
          <Content onClick={() => dispatch({ type: "hideSidebar" })} />
        </Route>
      );
    }

    return (
      <Route path='/'>
        <Auth
          loginDispatch={dispatch}
          onClick={() => dispatch({ type: "hideSidebar" })}
        />
      </Route>
    );
  };

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

        {getContent()}
      </div>
    </Router>
  );
};
