export const deletePopUpYes = (state, action) => {
  return {
    ...state,
    deletePopUp: true,
    edit: false,
    postViewStyle: { opacity: 0.1 },
    btnDisable: true,
  };
};

export const deletePopUpNo = (state, action) => {
  return {
    ...state,
    deletePopUp: false,
    edit: false,
    postViewStyle: { opacity: 1 },
    btnDisable: false,
  };
};
export const editTrue = (state, action) => {
  return {
    ...state,
    deletePopUp: false,
    edit: true,
    postViewStyle: { opacity: 0.1 },
    btnDisable: true,
  };
};
export const editFalse = (state, action) => {
  return {
    ...state,
    deletePopUp: false,
    edit: false,
    postViewStyle: { opacity: 1 },
    btnDisable: false,
  };
};
export const fetchCompleted = (state, action) => {
  console.log("handler called");
  return {
    ...state,
    posts: action.payload,
  };
};
export const handleErr = (state, action) => {
  return {
    ...state,
    loading: false,
    err: true,
  };
};
