import axios from "axios";
import { useEffect } from "react";

const postData = (url, sendData, dispatch) => {
  axios({
    method: "post",
    url: url,
    data: sendData,
    withCredentials: true,
  })
    .then((res) => {
      if (res.data.postCreated) {
        dispatch({ type: "fetchCompleted", payload: res.data });
      } else {
        dispatch({ type: "err" });
      }
    })
    .catch((err) => {
      dispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading) {
      postData(state.url, state.sendData, dispatch);
    }
    return () => {};
  }, [state.loading]);
};
