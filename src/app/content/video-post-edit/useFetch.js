import axios from "axios";
import { useEffect } from "react";

const updatedPost = (state) => {
  return {
    _id: state.post._id,
    title: state.formItems.inputs[0].value,
    content: state.formItems.textarea.value,
    topic: state.formItems.select.value,
  };
};

const putData = (state, dispatch) => {
  axios({
    method: "put",
    url: state.url,
    data: state.sendData,
    withCredentials: true,
  })
    .then((res) => {
      if (res.data.updateStatus) {
        console.log("post updated");
        dispatch.myPostListDispatch({
          type: "UPDATE_POST",
          payload: res.data.post,
        });
        dispatch.myPostDispatch({ type: "EDIT_FALSE" });
      } else {
        dispatch.myPostDispatch({ type: "err" });
      }
    })
    .catch((err) => {
      dispatch.myPostListDispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading) {
      putData(state, dispatch);
    }
    return () => {};
  }, [state.loading]);
};
