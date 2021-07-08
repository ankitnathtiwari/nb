import { useEffect } from "react";
import { fetchData } from "../../services/data-fetching/index copy";
export const useFetch = (state, dispatch) => {
  useEffect(() => {
    console.log("postlist use Fetch called");
    if (state.initLoading) {
      fetchData(state, dispatch);
    }
    return () => {
      console.log("cleanup register");
    };
  }, [state.initloading]);
};
