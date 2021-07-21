import { validateStr } from "../../shared/hooks/use-validation/index";
import { formData } from "../../shared/other-func/form-data/index";
export const handleSubmit = (state, action) => {
  //validate
  // if (
  //   validateStr(state.formItems.inputs[0].value) &&
  //   validateStr(state.formItems.textarea.value)
  // ) {
  //   console.log("Validation completed");
  return {
    ...state,
    loading: true,
    sendData: formData(state),
  };
  // } else {
  //   // if validation failed update message.
  //   return {
  //     ...state,
  //     message: "Validation Failed",
  //   };
  // }
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    initData: action.payload,
    loading: false,
    message: "post created succedd fully",
  };
};
