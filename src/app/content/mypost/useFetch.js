import { useEffect } from "react";
import { fetchData } from "../../services/data-fetching/index copy 2";

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.initLoading) {
      fetchData(state, dispatch);
    }
    return () => {};
  }, [state.initLoading]);
};
