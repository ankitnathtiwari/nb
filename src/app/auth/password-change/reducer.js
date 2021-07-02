import { handleSubmit, fetchCompleted, errHandler } from "./eventhandlers";
import { formChangeHandler } from "../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  switch (action.type) {
    case "handleSubmit":
      return handleSubmit(state, action);
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "err":
      return errHandler(state, action);
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
