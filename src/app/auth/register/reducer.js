import {
  handleSubmit,
  fetchCompleted,
  handleNotRegistered,
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
    case "NOT_REGISTERED":
      return handleNotRegistered(state, action);
    default:
      throw new Error();
  }
};
