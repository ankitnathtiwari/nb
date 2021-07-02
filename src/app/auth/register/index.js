import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../shared/components/form/index";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { reducer } from "./reducer.js";
import { initFun } from "./initfun.js";
import { useFetch } from "./useFetch";

export const Register = () => {
  const [state, dispatch] = useReducer(reducer, initFun);
  useFetch(state, dispatch);

  return (
    <div>
      <Form
        formItems={state.formItems}
        btnVal='Register'
        dispatch={dispatch}
        submitDispatch={dispatch}
      />
      <div className='login_links'>
        <Link to='/login'>Login</Link>
      </div>
      <h3>{state.message}</h3>
    </div>
  );
};
