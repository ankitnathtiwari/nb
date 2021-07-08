import {
  deletePopUpNo,
  deletePost,
  editHandler,
  fetchCompleted,
  updatePost,
} from "./eventHandlers";

export const reducer = (state, action) => {
  console.log(action, "mypost list reducer");
  switch (action.type) {
    case "DELETE_POST":
      return deletePost(state, action);
    case "UPDATE_POST":
      return updatePost(state, action);
    case "DELETE_POP_UP_NO":
      return deletePopUpNo(state, action);
    case "EDIT":
      return editHandler(state, action);
    case "fetchCompleted":
      return fetchCompleted(state, action);

    default:
      throw new Error();
  }
};
