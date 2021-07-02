import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../shared/components/form/index";
import { Route, Switch, NavLink, Link, useRouteMatch } from "react-router-dom";
import "./index.css";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useFetch } from "./useFetch";

export const Login = ({ loginDispatch }) => {
  const [state, dispatch] = useReducer(reducer, initFun);

  useFetch(state, { dispatch, loginDispatch });

  return (
    <div className='login'>
      <Form
        formItems={state.formItems}
        btnVal='Login'
        dispatch={dispatch}
        submitDispatch={dispatch}
      />
      <p>{state.message}</p>
      <div className='login_links'>
        <Link to='/password_forgot'>Forgot Password</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};
