import { baseUrl, testUrl } from "../../base-url/index";

export const formItems = {
  inputs: [{ id: "email", value: "", placeholder: "name" }],
};

export const initValue = {
  url: `${baseUrl}/json_api/auth/password_forgot`,
  method: "POST",
  sendData: {},
  initRender: false,
  message: "",
  formItems: formItems,
  loading: false,
  err: false,
};
