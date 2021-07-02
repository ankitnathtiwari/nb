export const handleSubmit = (state) => {
  return {
    ...state,
    loading: true,
    sendData: {
      password: state.formItems.inputs[0].value,
      confirm_password: state.formItems.inputs[1].value,
    },
  };
};

export const fetchCompleted = (state, action) => {
  return {
    ...state,
    message: "Password Changed",
    loading: false,
  };
};

export const errHandler = (state, action) => {
  return {
    ...state,
    message: "Some Error Occured, Please Try Again",
    loading: false,
  };
};
