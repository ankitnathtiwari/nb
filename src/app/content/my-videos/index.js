import React, { useReducer } from "react";
import { PostEdit } from "../post-edit/index";
import { PostView } from "../post-view/index";
import { DeletePopup } from "../delete-pop-up/index";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useRouteMatch } from "react-router";
import { Button } from "../../shared/components/button";
import "./index.css";
import { VideoPostView } from "../video-post-view";
import { VideoPostEdit } from "../video-post-edit";
import { baseUrl } from "../../base-url";

const deleteUrl = `${baseUrl}/json_api/video/delete`;

export const MyVideos = ({ post, myPostListDispatch }) => {
  const [state, dispatch] = useReducer(reducer, initFun);

  return (
    <div className="mypost_view">
      <VideoPostView item={post} style={state.postViewStyle} />
      <div className="mypost_view_button">
        <Button
          disabled={state.btnDisable}
          onClick={() => dispatch({ type: "EDIT_TRUE" })}
        >
          Edit
        </Button>
        <Button
          disabled={state.btnDisable}
          onClick={() => dispatch({ type: "DELETE_POP_UP_YES" })}
        >
          Delete
        </Button>
      </div>
      {state.deletePopUp ? (
        <DeletePopup
          myPostDispatch={dispatch}
          myPostListDispatch={myPostListDispatch}
          post={post}
          deleteUrl={deleteUrl}
        />
      ) : state.edit ? (
        <VideoPostEdit
          post={post}
          myPostDispatch={dispatch}
          myPostListDispatch={myPostListDispatch}
        />
      ) : null}
    </div>
  );
};
