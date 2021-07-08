import { handleSubmit, fetchCompleted, invalidCred } from "./eventhandlers";
import { formChangeHandler } from "../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "handleSubmit":
      return handleSubmit(state, action);
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "INVALID_CRED":
      return invalidCred(state, action);
    case "nullMessage":
      return { ...state, message: "" };
    case "unmount":
      return {
        ...state,
        message: "",
        initData: {},
      };
    case "FORM_CHANGE":
      return formChangeHandler(state, action);

    default:
      throw new Error();
  }
};
