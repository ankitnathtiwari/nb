import {
  handleSubmit,
  fetchCompleted,
  invalidCredentials,
  errHandler,
} from "./eventHandlers";
import { formChangeHandler } from "../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  switch (action.type) {
    case "handleSubmit":
      return handleSubmit(state, action);
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "FORM_CHANGE":
      return formChangeHandler(state, action);
    case "INVALID_CRED":
      return invalidCredentials(state, action);
    case "err":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
