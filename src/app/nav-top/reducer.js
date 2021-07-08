import { handleSubmit, fetchCompleted, handleUnmount } from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_OUT_SUBMIT":
      return handleSubmit(state, action);

    case "UNMOUNT":
      return handleUnmount(state, action);
    case "fetchCompleted":
      return fetchCompleted(state, action);
    default:
      throw new Error();
  }
};
