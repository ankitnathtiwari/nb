import { validateStr } from "../shared/hooks/use-validation/index";

export const handleLogin = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    auth: true,
    loading: false,
    user: action.payload.user,
    message: "",
  };
};

export const handleLogout = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  console.log("app logut handler called");
  return {
    ...state,
    auth: false,
    loading: false,
    sideNav: false,
    user: "",
    message: "",
  };
};

export const handleErr = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    err: true,
  };
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    auth: action.payload.auth || false,
    user: action.payload.user || "",
    loading: false,
    initLoading: false,
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
