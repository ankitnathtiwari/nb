import { useEffect } from "react";
import axios from "axios";

const deleteData = (url, sendData, dispatch) => {
  axios({
    method: "post",
    url: url,
    data: sendData,
    withCredentials: true,
  })
    .then((res) => {
      res.data.deleteStatus || res.data.status
        ? dispatch({ type: "DELETE_POST", payload: sendData.id })
        : dispatch({ type: "err" });
    })
    .catch((err) => {
      dispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch) =>
  useEffect(() => {
    if (state.loading) {
      deleteData(state.url, state.sendData, dispatch);
    }
    return () => {};
  }, [state.loading]);
