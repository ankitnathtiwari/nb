import axios from "axios";
import React, { useReducer } from "react";
import { Redirect, useRouteMatch } from "react-router";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { Form } from "../../shared/components/form/index";
import { Button } from "../../shared/components/button";
import { useFetch } from "./useFetch";
import "./index.css";

export const PostEdit = ({ post, myPostDispatch, myPostListDispatch }) => {
  const [state, dispatch] = useReducer(reducer, { post: { ...post } }, initFun);

  useFetch(state, { myPostListDispatch, myPostDispatch });

  return state.loading ? (
    <div className="post-edit">
      <h2>Updating....</h2>
    </div>
  ) : (
    <div className="post-edit">
      <Form
        formItems={state.formItems}
        btnVal="Submit"
        dispatch={dispatch}
        submitDispatch={dispatch}
      />

      <Button onClick={() => myPostDispatch({ type: "EDIT_FALSE" })}>
        Cancel
      </Button>
      <h3>{state.message}</h3>
    </div>
  );
};
