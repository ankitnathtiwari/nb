import { baseUrl, testUrl } from "../base-url/index";

export const handleSubmit = (state, action) => {
  return {
    ...state,
    url: `${baseUrl}/json_api/auth/logout`,
    method: "GET",
    loading: true,
    err: false,
  };
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    loading: false,
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
export const handleUnmount = (state, action) => {
  return {
    url: `${baseUrl}/json_api/auth/logout`,
    method: "GET",
    loading: false,
    err: false,
  };
};
