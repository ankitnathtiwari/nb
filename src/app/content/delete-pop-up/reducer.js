import { deleteYes } from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_YES":
      return deleteYes(state, action);
    case "DELETE_NO":
      return deleteNo(state, action);
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "err":
      return errhandler(state, action);
    default:
      throw new Error();
  }
};
