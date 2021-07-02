import React, { useEffect, useReducer } from "react";
import { Form } from "../../shared/components/form/index";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import "./index.css";
import { reducer } from "./reducer";
import { initValue } from "./initfun";
import { useFetch } from "./useFetch";

export const PasswordForgot = () => {
  const [state, dispatch] = useReducer(reducer, initValue);
  useFetch(state, dispatch);

  return (
    <div className='password-forgot'>
      <Form
        formItems={state.formItems}
        btnVal='Change Password'
        dispatch={dispatch}
        submitDispatch={dispatch}
      />

      <p className='password-forgot-message'>{state.message}</p>
      <div className='password-forgot-links'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};
