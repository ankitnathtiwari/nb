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
      console.log(res, "login res");
      res.data.auth
        ? dispatch.loginDispatch({ type: "LOGGED_IN", payload: res.data })
        : dispatch.dispatch({ type: "INVALID_CRED", payload: res.data });
    })
    .catch((err) => {
      dispatch.dispatch({ type: "err" });
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
