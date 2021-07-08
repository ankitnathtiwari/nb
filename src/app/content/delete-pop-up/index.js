import React, { useState, useEffect, useReducer } from "react";
import { useRouteMatch } from "react-router";
import { Button } from "../../shared/components/button";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useFetch } from "./useFetch";
import "./index.css";

export const DeletePopup = (props) => {
  const [state, dispatch] = useReducer(reducer, { ...props }, initFun);

  useFetch(state, props.myPostListDispatch);

  return state.loading ? (
    <div className='delete-pop-up'>
      <h2>Deleting</h2>
    </div>
  ) : (
    <div className='delete-pop-up'>
      <h2>Delete Post ?</h2>
      <p>
        This can’t be undone and it will be removed from the post list
        completely.
      </p>
      <div className='delete-pop-up-buttons'>
        <Button onClick={() => dispatch({ type: "DELETE_YES" })}>Yes</Button>
        <Button
          onClick={() => props.myPostDispatch({ type: "DELETE_POP_UP_NO" })}>
          No
        </Button>
      </div>
    </div>
  );
};
