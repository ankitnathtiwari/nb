import axios from "axios";
import { useEffect } from "react";

const getData = (url, dispatch) => {
  axios({
    method: "get",
    url: url,
    withCredentials: true,
  })
    .then((res) => {
      console.log(res.data);
      if (res.data.loggedOut) {
        dispatch.appDispatch({ type: "LOGGED_OUT" });
        dispatch.dispatch({ type: "fetchCompleted" });
      } else {
        dispatch.dispatch({ type: "err" });
      }
    })
    .catch((err) => {
      dispatch.dispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading) {
      getData(state.url, dispatch);
    }
    return () => {};
  }, [state.loading]);
};
