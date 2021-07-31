import { fetchCompleted, handleLoadMore } from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "LOAD_MORE":
      return handleLoadMore(state, action);
    default:
      throw new Error();
  }
};
