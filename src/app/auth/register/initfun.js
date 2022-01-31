import { appConfig } from "../../app-config";

export const formItems = {
  inputs: [
    { id: "name", value: "", placeholder: "name" },
    { id: "age", value: "", placeholder: "age" },
    { id: "username", value: "", placeholder: "username" },
    { id: "password", value: "", placeholder: "password" },
  ],
};

export const initFun = {
  url: `${appConfig.url.api}/auth/register`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  initData: {},
  sendData: {},
  formItems: formItems,
};
