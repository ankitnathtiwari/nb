import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useRouteMatch } from "react-router";
import { useFetch } from "./useFetch";
import "./index.css";
import { PostView } from "../post-view";
import { Button } from "../../shared/components/button";

export const AllPost = () => {
  const [state, dispatch] = useReducer(reducer, initFun);
  useFetch(state, dispatch);

  if (state.posts.length === 0) {
    if (state.loading || state.initLoading) {
      return <h2>Loading..</h2>;
    } else {
      return <h3>No Post to Show</h3>;
    }
  } else {
    return (
      <div>
        {state.posts.map((post) => {
          return (
            //      <div className='allpost_view'>
            <PostView post={post} key={post._id} />
            //     </div>
          );
        })}
        <div className='all-post-button'>
          <Button onClick={() => dispatch({ type: "LOAD_MORE" })}>
            Load More
          </Button>
        </div>
      </div>
    );
  }
};
