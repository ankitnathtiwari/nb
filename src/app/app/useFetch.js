import { useEffect } from "react";
import axios from "axios";

const getData = (url, dispatch) => {
  console.log({url});
  axios({
    method: "get",
    url: url,
    withCredentials: true,
  })
    .then((res) => {
      dispatch({ type: "fetchCompleted", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.initLoading || state.loading) {
      getData(state.url, dispatch);
    }
    return () => {};
  }, [state.initLoading, state.loading]);
};
