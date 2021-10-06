import axios from "axios";
import { useEffect } from "react";

const postData = (state, dispatch) => {
  axios
    .post(state.url, state.payloadData, { withCredentials: true })
    .then((res) => {
      res.data.passwordChangeStatus
        ? dispatch({ type: "FETCH_COMPLETED", payload: res.data })
        : dispatch({ type: "ERR" });
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading) {
      postData(state, dispatch);
    }
    return () => {
      console.log("cleanup post create");
    };
  }, [state.loading]);
};
