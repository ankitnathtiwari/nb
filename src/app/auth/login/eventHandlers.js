import { emailValidate } from "../../shared/other-func/validators";

export const handleSubmit = (state, action) => {
  //validate
  if (emailValidate(state.formItems.inputs[0].value)) {
    // if validation passed update only "loading and data to be sent"
    return {
      ...state,
      loading: true,
      sendData: {
        email: state.formItems.inputs[0].value,
        password: state.formItems.inputs[1].value,
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
    message: "user registered",
  };
};

export const invalidCredentials = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    loading: false,
    message: action.payload.message,
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
export const errHandler = (state, action) => {
  //only change the form elements and message
  return {
    ...state,
    loading: false,
    message: "Some Error Occured Please Try Again",
  };
};
