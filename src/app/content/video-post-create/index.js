import React, { useReducer } from "react";
import { useLocation, useRouteMatch } from "react-router";
import { Form } from "../../shared/components/form/index";

import "./index.css";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useFetch } from "./useFetch";

export const VideoPostCreate = () => {
  const [state, dispatch] = useReducer(reducer, initFun);

  useFetch(state, dispatch);

  return (
    <div className="post-create">
      <Form
        formItems={state.formItems}
        btnVal="Submit"
        dispatch={dispatch}
        submitDispatch={dispatch}
      />
      <h3>{state.message}</h3>
    </div>
  );
};
