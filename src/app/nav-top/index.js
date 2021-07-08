import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { NavTopSideBar } from "../nav-top-side-bar";
import "./index.css";
import { useFetch } from "./useFetch";
import { initFun } from "./initfun";
import { reducer } from "./reducer";

export const NavTop = ({ auth, user, appDispatch, sidebar }) => {
  const [state, dispatch] = useReducer(reducer, initFun);
  useFetch(state, { dispatch, appDispatch });

  return (
    <div className='nav-top'>
      <div
        className='nav-top-sidebar-icon'
        onClick={() => appDispatch({ type: "showSidebar" })}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='23'
          height='20'
          viewBox='0 0 23 20'>
          <path
            id='Menu'
            d='M-6160,20V17.142h14.376V20Zm0-8.571V8.571h23v2.858Zm0-8.571V0h23V2.858Z'
            transform='translate(6160)'
            fill='#fff'
          />
        </svg>
      </div>
      <div className='nav-top-logo'>
        <Link to='/'>NewsBird</Link>
      </div>
      {auth ? (
        <div className='nav-top-log-reg'>
          <Link to='/login'>Hi {user}</Link>
          <button onClick={() => dispatch({ type: "LOGGED_OUT_SUBMIT" })}>
            Logout
          </button>
        </div>
      ) : (
        <div className='nav-top-log-reg'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      )}

      <NavTopSideBar
        auth={auth}
        user={user}
        dispatch={dispatch}
        sidebar={sidebar}
      />
    </div>
  );
};
