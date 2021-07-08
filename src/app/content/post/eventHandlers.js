import { validateStr } from "../../shared/hooks/use-validation/index";

export const handleSubmit = (state, action) => {
  //validate
  if (
    validateStr(state.formItems.inputs[0].value) &&
    validateStr(state.formItems.inputs[1].value) &&
    validateStr(state.formItems.inputs[2].value) &&
    validateStr(state.formItems.inputs[3].value)
  ) {
    // if validation passed update only "loading and data to be sent"
    return {
      ...state,
      loading: true,
      sendData: {
        name: state.formItems.inputs[0].value,
        age: state.formItems.inputs[1].value,
        username: state.formItems.inputs[2].value,
        password: state.formItems.inputs[3].value,
      },
    };
  } else {
    // if validation failed update message.
    return {
      ...state,
      message: "validation failed",
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

export const formHandler = (state, action) => {
  //only change the form elements and message
  return {
    ...state,
    message: "",
    formItems: formChangeHandler(state, action),
  };
};
