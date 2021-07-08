import {
  deletePopUpNo,
  deletePopUpYes,
  editTrue,
  editFalse,
  handleErr,
} from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POP_UP_YES":
      return deletePopUpYes(state, action);
    case "DELETE_POP_UP_NO":
      return deletePopUpNo(state, action);
    case "EDIT_TRUE":
      return editTrue(state, action);
    case "EDIT_FALSE":
      return editFalse(state, action);
    case "err":
      return handleErr(state, action);

    default:
      throw new Error();
  }
};
