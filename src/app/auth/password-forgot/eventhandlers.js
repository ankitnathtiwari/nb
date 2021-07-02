import { emailValidate } from "../../shared/other-func/validators/index";

export const handleSubmit = (state) => {
  if (emailValidate(state.formItems.inputs[0].value)) {
    return {
      ...state,
      loading: true,
      message: "",
      sendData: { email: state.formItems.inputs[0].value },
    };
  } else {
    return { ...state, message: "Invalid Credentials" };
  }
};
export const fetchCompleted = (state, action) => {
  return {
    ...state,
    loading: false,
    message: "Check Your Mail ID For Reset Link",
  };
};

export const inputChangeHandler = (state, action) => {
  return {
    ...state,
    message: "",
    inputs: inputChange(state.inputs, action.payload),
  };
};
export const invalidCred = (state, action) => {
  return {
    ...state,
    loading: false,
    message: "Invalid Credentials",
  };
};
