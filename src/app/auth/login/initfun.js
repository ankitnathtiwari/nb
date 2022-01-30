import { appConfig } from "../../app-config";
// TODO: take type inside the object, to control rendering order of different types
// e.g. input1, textarea, input2
export const formItems = {
  inputs: [
    { id: "username", value: "", placeholder: "username" },
    { id: "password", value: "", placeholder: "password" },
  ],
};

export const initFun = {
  url: `${appConfig.url.api}/auth/login`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  sendData: {},
  formItems: formItems,
};
