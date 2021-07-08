import { useEffect } from "react";
import axios from "axios";

const getData = (url, dispatch) => {
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
    if (state.initLoading) {
      getData(`${state.path}?page=${state.page}&top=${state.query}`, dispatch);
    }
    return () => {};
  }, [state.initLoading]);
};
