import { validateStr } from "../../shared/hooks/use-validation/index";

export const handleSubmit = (state, action) => {
  //validate

  return {
    ...state,
    message: "validation failed",
  };
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    initData: action.payload,
    loading: false,
    initLoading: false,
    message: "data fetched",
  };
};

export const formHandler = (state, action) => {
  //only change the form elements and message
  return {
    ...state,
    message: "",
    formItems: formChangeHandler(state, action),
  };
};
