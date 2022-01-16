import { validateStr } from "../../shared/other-func/validators/index";
import {
  editFormData,
  editVideoFormData,
} from "../../shared/other-func/form-data/index";

export const handleSubmit = (state, action) => {
  //validate
  if (state.edited) {
    if (validateStr(state.formItems.inputs[0].value)) {
      // if validation passed update only "loading and data to be sent"
      return {
        ...state,
        loading: true,
        sendData: editVideoFormData(state),
      };
    } else {
      // if validation failed update message.
      return {
        ...state,
        message: "Validation Failed",
      };
    }
  } else {
    return {
      ...state,
      message: "Please edit first",
    };
  }
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    initData: action.payload,
    loading: false,
    message: "Post Updated",
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
