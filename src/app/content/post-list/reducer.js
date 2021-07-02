import { handleSubmit, fetchCompleted } from "./eventHandlers";
import { inputFormHandler } from "../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  switch (action.type) {
    case "handleSubmit":
      return handleSubmit(state, action);
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "inputChange":
      return inputFormHandler(state, action);
    default:
      throw new Error();
  }
};
