import { validateStr } from "../../shared/hooks/use-validation/index";
import { emailValidate } from "../../shared/other-func/validators/index";

export const handleSubmit = (state, action) => {
  //validate
  if (
    validateStr(state.formItems.inputs[0].value) &&
    validateStr(state.formItems.inputs[1].value) &&
    emailValidate(state.formItems.inputs[2].value) &&
    validateStr(state.formItems.inputs[3].value)
  ) {
    // if validation passed update only "loading and data to be sent"
    return {
      ...state,
      loading: true,
      sendData: {
        name: state.formItems.inputs[0].value,
        age: state.formItems.inputs[1].value,
        email: state.formItems.inputs[2].value,
        password: state.formItems.inputs[3].value,
      },
    };
  } else {
    // if validation failed update message.
    return {
      ...state,
      message: "Invalid Credentials",
    };
  }
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    initData: action.payload,
    loading: false,
    message: "User Registered",
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
export const handleNotRegistered = (state, action) => {
  return {
    ...state,
    message: action.payload.message,
  };
};
