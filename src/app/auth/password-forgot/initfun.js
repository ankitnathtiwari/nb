import { appConfig } from "../../app-config";

export const formItems = {
  inputs: [{ id: "email", value: "", placeholder: "name" }],
};

export const initValue = {
  url: `${appConfig.url.api}/auth/password_forgot`,
  method: "POST",
  sendData: {},
  initRender: false,
  message: "",
  formItems: formItems,
  loading: false,
  err: false,
};
