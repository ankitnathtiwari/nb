import { validateStr } from "../../shared/other-func/validators/index";
import { videoFormData } from "../../shared/other-func/form-data/index";

export const handleSubmit = (state, action) => {
  //validate
  if (
    validateStr(state.formItems.inputs[0].value) &&
    validateStr(state.formItems.textarea.value)
  ) {
    return {
      ...state,
      loading: true,
      sendData: videoFormData(state),
    };
  } else {
    // if validation failed update message.
    return {
      ...state,
      message: "Validation Failed",
    };
  }
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    initData: action.payload,
    loading: false,
    message: "Post Saved",
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
