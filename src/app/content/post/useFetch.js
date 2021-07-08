import { useEffect } from "react";
import axios from "axios";

const postData = (url, sendData, dispatch) => {
  axios
    .post(url, sendData)
    .then((res) => {
      dispatch({ type: "fetchCompleted", payload: res.data });
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
