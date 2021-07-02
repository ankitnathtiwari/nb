import { baseUrl, testUrl } from "../../base-url/index";

export const formItems = {
  inputs: [
    { id: "username", value: "", placeholder: "username" },
    { id: "password", value: "", placeholder: "password" },
  ],
};

export const initFun = {
  url: `${baseUrl}/json_api/auth/login`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  sendData: {},
  formItems: formItems,
};
