import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../shared/components/form/index";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useRouteMatch } from "react-router";
import { useFetch } from "./useFetch";

export const PasswordChange = () => {
  const [state, dispatch] = useReducer(reducer, initFun);
  useFetch(state, dispatch);

  return (
    <div>
      <h3>New Password</h3>
      <Form
        formItems={state.formItems}
        btnVal='Change Password'
        dispatch={dispatch}
        submitDispatch={dispatch}
      />
      <p>{state.message}</p>
    </div>
  );
};
